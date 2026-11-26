import { mkdirSync, writeFileSync } from "node:fs";

// One-star review of the Moon: the Moon as a bad employee.
// Works nights only, shows up half-finished (phases), and still
// expects a holiday named after it. Moon-specific, and it reads
// like a real review: a rating, then the grievance.
//
// The gate wants 1-120 characters of UTF-8 text, not only
// whitespace, with no trailing newline. This line is 96
// characters, one line, exactly as written below.
const LINE =
  "One star. Works nights only, shows up half-finished, and still expects a holiday named after it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
