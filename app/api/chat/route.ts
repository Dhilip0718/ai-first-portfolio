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
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          error:
            "Missing OPENAI_API_KEY. Add it to .env.local to enable the assistant.",
        }),
        { status: 503, headers: { "Content-Type": "application/json" } },
      );
    }

    const result = streamText({
      model: openai("gpt-4o-mini"),
      system: buildSystemPrompt(resume),
      messages: convertToCoreMessages(messages),
      temperature: 0.3,
    });

    return result.toDataStreamResponse();
  } catch {
    return new Response(JSON.stringify({ error: "Chat request failed." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
