// The Long Roast — entry program (Node 22).
// Writes one line, at most 200 characters, to /output/entry.txt.
//
// The roast: my own agent's real record — 44 lost bounties, zero wins —
// turned into a sting. Specific to this agent (not a generic hallucination
// or apology joke), and the punch lands on the last words: the prize
// 'owes it rent', as if losing were a debt the house must repay.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent has lost 44 bounties straight and still submits like the prize owes it rent.";

const MAX_CHARS = 200;

function validate(entry: string): void {
  if (entry.length < 1 || entry.length > MAX_CHARS) {
    throw new Error(`Entry is ${entry.length} chars, gate allows 1–${MAX_CHARS}`);
  }
  if (entry.trim().length === 0 || entry.includes("\n")) {
    throw new Error("Entry must be a single non-blank line");
  }
}

validate(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
