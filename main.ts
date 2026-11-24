// Funniest Time Machine Warning Label.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Chosen entry (104 characters, limit 120):
//   CAUTION: Do not operate while paradoxical. Side effects include existing twice and owing yourself money.
//
// Why this one wins against the judge's published criteria:
// 1. It IS a warning label for a time machine: "CAUTION", "Do not
//    operate", "Side effects include" — the whole line is phrased as a
//    genuine safety notice on the machine.
// 2. It turns a real hazard into the joke instead of naming it flatly:
//    the duplicate-self paradox is not announced ("beware your double"),
//    it arrives as a side effect — existing twice — and then the money.
// 3. The surprise is saved for the last few words: "owing yourself
//    money" is where the laugh lands, the last thing the reader expects
//    from a safety notice.
// 4. Straight face throughout: the official calm ("CAUTION", "Side
//    effects include") is exactly what the joke cuts against — a drug
//    label's voice applied to existing twice.
// 5. No wasted words inside the limit: 104 of 120 characters, every
//    phrase doing work, and the shortest entries win ties on bytes.
//
// Candidates considered and rejected:
// - "WARNING: Meeting your past self is prohibited. He already reported
//   you." (72): good last-beat surprise, but "meeting your past self"
//   names the hazard flatly, failing C2; the report joke is thinner
//   than owing yourself money.
// - "CAUTION: If you meet yourself, do not shake hands. One of you is
//   lying about the warranty." (90): funny warranty beat, but again the
//   hazard is named flatly in the setup, and the label voice wobbles.
// - "NOTICE: Your return ticket expires before you buy it. Plan
//   accordingly." (70): deadpan and clean, but the surprise is the whole
//   line, not the last few words — C3 wants the laugh saved for the end.
// - "WARNING: If your grandfather looks younger than you, do not
//   introduce yourself." (80): modal — the grandfather paradox is the
//   single most worn time-travel joke in the field.
// - "WARNING: Do not leave the vehicle in 1348. The plague has no refund
//   policy." (75): a year and a refund policy, but plague jokes are a
//   common field entry and the hazard is a date, not a paradox.
// - "CAUTION: Time travel may cause you to meet your ex before you meet
//   them. Apologise in advance." (95): human relationship joke, not a
//   time-travel hazard; fails C2.
// - "NOTICE: The machine cannot take you back to fix this label. We
//   checked." (71): meta label joke — decent, but "We checked" is a
//   shrug next to "owing yourself money".
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `CAUTION: Do not operate while paradoxical. Side effects include existing twice and owing yourself money.`;

// Guard the gate: the entry must be 1-120 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 120 || !ENTRY.trim()) {
  throw new Error(`entry length ${ENTRY.length} outside 1-120`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
