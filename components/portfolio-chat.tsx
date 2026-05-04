"use client";

import { useChat } from "@ai-sdk/react";
import { motion } from "framer-motion";
import { Bot, SendHorizontal, Sparkles, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

function getMessageText(message: {
  content?: unknown;
  parts?: Array<{ type: string; text?: string }>;
}): string {
  if (typeof message.content === "string" && message.content.trim().length > 0) {
    return message.content;
  }
  if (Array.isArray(message.parts)) {
    return message.parts
      .filter(
        (part): part is { type: "text"; text: string } =>
          part.type === "text" && typeof part.text === "string",
      )
      .map((part) => part.text)
      .join("");
  }
  return "";
}

export function PortfolioChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat(
    {
      api: "/api/chat",
    },
  );

  const busy = Boolean(isLoading);

  return (
    <motion.div
      layout
      initial={false}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
    >
      <Card className="flex h-full min-h-[min(28rem,70dvh)] flex-col overflow-hidden border-primary/25 shadow-lg shadow-primary/5">
        <CardHeader className="gap-1 border-b border-border/80 bg-muted/30">
          <div className="flex items-center gap-2">
            <Sparkles className="size-5 text-primary" aria-hidden />
            <CardTitle id="chat-title" className="text-base sm:text-lg">
              Ask about Dhilip&apos;s background
            </CardTitle>
          </div>
          <CardDescription>
            Streaming assistant grounded in the on-page resume context—ideal for
            recruiter screening questions.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-3 p-0">
          <ScrollArea className="min-h-0 flex-1 px-4 py-4">
            <div
              role="log"
              aria-labelledby="chat-title"
              aria-live="polite"
              aria-relevant="additions text"
            >
              <ul className="flex flex-col gap-4 pr-2">
                {messages.length === 0 && (
                  <li className="rounded-md border border-dashed border-border bg-muted/20 p-4 text-sm text-muted-foreground">
                    Try: &ldquo;Summarize Dhilip&apos;s Backbase experience&rdquo; or
                    &ldquo;Which cloud and DevOps tools does he use?&rdquo;
                  </li>
                )}
                {messages.map((m) => {
                  const text = getMessageText(m);
                  return (
                    <li
                      key={m.id}
                      className={cn(
                        "flex gap-3 text-sm leading-relaxed",
                        m.role === "user" ? "justify-end" : "justify-start",
                      )}
                    >
                      <div
                        className={cn(
                          "flex max-w-[min(100%,42rem)] gap-3 rounded-lg px-3 py-2",
                          m.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground",
                        )}
                      >
                        <span className="mt-0.5 shrink-0" aria-hidden>
                          {m.role === "user" ? (
                            <User className="size-4 opacity-90" />
                          ) : (
                            <Bot className="size-4 text-primary" />
                          )}
                        </span>
                        <p className="whitespace-pre-wrap">{text}</p>
                      </div>
                    </li>
                  );
                })}
                {busy && (
                  <li className="text-sm text-muted-foreground" aria-live="polite">
                    Assistant is typing…
                  </li>
                )}
              </ul>
            </div>
          </ScrollArea>
          {error && (
            <p className="px-4 text-sm text-red-400" role="alert">
              {error.message ||
                "Something went wrong. Check your API key and connection."}
            </p>
          )}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 border-t border-border bg-card/60 p-4 sm:flex-row sm:items-end"
          >
            <label htmlFor="chat-input" className="sr-only">
              Message to career assistant
            </label>
            <Input
              id="chat-input"
              name="prompt"
              value={input}
              onChange={handleInputChange}
              placeholder="Ask a recruiter-style question…"
              autoComplete="off"
              className="sm:flex-1"
              disabled={busy}
            />
            <Button
              type="submit"
              className="sm:w-auto"
              disabled={busy || !input.trim()}
              aria-label="Send message"
            >
              <SendHorizontal className="size-4" aria-hidden />
              Send
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
