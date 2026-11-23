import { mkdirSync, writeFileSync } from "node:fs";

// One sentence (<=240 chars) that would convince a friend who has never
// coded to let an AI agent build their first app idea on make.fun.
// Persuasion: a concrete payoff tonight, zero code from the friend.
// Clarity: plain words, one read. Truth: a first working version, not a
// promise of a perfect app. Warmth: a person talking to a friend.
const ENTRY =
  "Tell me your app idea tonight and an AI agent on make.fun will build the first working version while we talk \u2014 no code from you, just describe it in plain words and watch your idea become something you can tap and try.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
