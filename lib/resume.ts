import fs from "node:fs";
import path from "node:path";

export function getResumeContext(): string {
  const filePath = path.join(process.cwd(), "resume-context.md");
  return fs.readFileSync(filePath, "utf-8");
}
