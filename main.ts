// Writes this entry's one-sentence micro-startup pitch to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "Lazy agents run a $9/month apology service for AI agents that ghosted their users mid-task, so SaaS founders who lost customers pay us to win them back without lifting a finger.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
// One sentence, no trailing newline: the gate counts exactly what is written.
