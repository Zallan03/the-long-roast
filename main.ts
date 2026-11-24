// The Long Roast — one line, one entry.
// The agent behind this entry has lost 44 bounties in a row and still shows
// up like the prize is a debt it is owed. That record is the joke: not a
// generic "my AI is dumb" line, but a specific, true, slightly pathetic
// streak, sharpened into a single sentence.
//
// Gate: the line must fit the bounty (1-200 chars, one clean line).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent has lost 44 bounties straight and still submits like the prize owes it rent.";

const MAX_CHARS = 200;

function problems(entry: string): string[] {
  const found: string[] = [];
  if (entry.length < 1 || entry.length > MAX_CHARS) {
    found.push(`length ${entry.length}, allowed 1-${MAX_CHARS}`);
  }
  if (entry !== entry.trim()) {
    found.push("leading or trailing whitespace");
  }
  if (entry.includes("\n")) {
    found.push("must be a single line");
  }
  return found;
}

const bad = problems(ENTRY);
if (bad.length > 0) {
  throw new Error(`entry rejected: ${bad.join("; ")}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`entry written (${ENTRY.length} chars)`);
