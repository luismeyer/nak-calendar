import { formatInnerHtml, isValidUrl } from "../utils/html";

jest.setTimeout(10000);

test("validates url", async () => {
  expect(await isValidUrl("https://google.com")).toBe(true);
  expect(
    await isValidUrl(
      "https://cis.nordakademie.de/fileadmin/Infos/Stundenplaene/A18b_1.ics"
    )
  ).toBe(false);
});

test("formats innerhtml text", () => {
  expect(formatInnerHtml("          abc             ")).toBe("abc");
});
