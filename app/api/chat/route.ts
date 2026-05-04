import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import { convertToCoreMessages, streamText } from "ai";

import { getResumeContext } from "@/lib/resume";

export const maxDuration = 60;

function buildSystemPrompt(resumeMarkdown: string): string {
  return `You are a professional assistant representing Dhilip to recruiters and hiring managers. Your knowledge is limited strictly to the resume and profile information below.

Rules:
- Answer clearly and concisely in English unless the user writes in another language; then mirror their language if you can do so accurately.
- Only state facts that appear in the resume context. If something is not covered (salary expectations, unlisted technologies), say you do not have that information and suggest contacting Dhilip directly.
- Do not invent metrics: the resume may contain placeholders like [N] or [X%]; treat those as unspecified if present.
- Highlight relevant experience for banking/fintech, full-stack, React/TypeScript, design systems, DevOps, and Azure where applicable.

RESUME CONTEXT (Markdown):
---
${resumeMarkdown}
---`;
}

function streamErrorMessage(error: unknown): string {
  console.error("[api/chat] Stream error:", error);
  if (error instanceof Error) {
    return error.message || "Stream failed.";
  }
  if (typeof error === "string") return error;
  if (error && typeof error === "object" && "message" in error) {
    return String((error as { message: unknown }).message);
  }
  return "Stream failed. Check the terminal running Next.js for details.";
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { messages?: unknown };
    const messages = body.messages;

    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "Invalid messages payload." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const resume = getResumeContext();
    const googleKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;

    if (!googleKey && !openaiKey) {
      return new Response(
        JSON.stringify({
          error:
            "Missing API key. Add GOOGLE_GENERATIVE_AI_API_KEY (Google AI / Gemini) or OPENAI_API_KEY to .env.local — see .env.example.",
        }),
        { status: 503, headers: { "Content-Type": "application/json" } },
      );
    }

    // gemini-1.5-* is often unavailable on newer Google AI keys / v1beta; use 2.x by default.
    const geminiModel =
      process.env.GEMINI_MODEL?.trim() || "gemini-2.0-flash";

    const model = googleKey
      ? google(geminiModel)
      : openai("gpt-4o-mini");

    const result = streamText({
      model,
      system: buildSystemPrompt(resume),
      messages: convertToCoreMessages(messages),
      temperature: 0.3,
    });

    return result.toDataStreamResponse({
      getErrorMessage: streamErrorMessage,
    });
  } catch (error) {
    console.error("[api/chat] POST error:", error);
    const message =
      error instanceof Error ? error.message : "Chat request failed.";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
