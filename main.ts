import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  'At Monday standup my boss said, "Share one win from the weekend." I said, "I ignored all forty-seven of your emails." He nodded and wrote it down as a productivity tip.';

mkdirSync("/output", { recursive: true });
if (joke.length < 1 || joke.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${joke.length}`);
}
writeFileSync("/output/entry.txt", joke, "utf8");
