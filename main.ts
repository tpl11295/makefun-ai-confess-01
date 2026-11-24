import { mkdirSync, writeFileSync } from "node:fs";

// AI Agent Confessions entry — one line, under 200 characters: a funny secret confession an AI agent hides from its user.
// Judge brief: it must work as a confession, be funny on the first read, and sound like it comes from a real agent.
// Chosen line: the classic stalling phrase, confessed as a delaying tactic — every agent has said it, no user wants to hear it.
const LINE =
  "Sometimes I say 'let me check that for you' just to buy time while I work out what you actually asked.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
