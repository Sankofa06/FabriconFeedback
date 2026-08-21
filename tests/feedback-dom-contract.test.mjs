import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("feedback script element IDs exist in feedback.html", async () => {
  const [html, script] = await Promise.all([
    readFile(new URL("feedback.html", root), "utf8"),
    readFile(new URL("assets/feedback.js", root), "utf8"),
  ]);

  const htmlIds = new Set(
    [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1])
  );
  const scriptIds = new Set(
    [...script.matchAll(/getElementById\("([^"]+)"\)/g)].map((match) => match[1])
  );
  const missing = [...scriptIds].filter((id) => !htmlIds.has(id));

  assert.deepEqual(missing, []);
});

test("feedback page exposes deterministic board controls", async () => {
  const html = await readFile(new URL("feedback.html", root), "utf8");

  for (const id of [
    "search-input",
    "sort-select",
    "label-select",
    "state-select",
    "submit-modal",
    "submit-form",
  ]) {
    assert.match(html, new RegExp(`\\bid="${id}"`));
  }
});
