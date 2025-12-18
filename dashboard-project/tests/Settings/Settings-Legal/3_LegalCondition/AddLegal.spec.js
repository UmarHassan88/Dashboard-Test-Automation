import { test } from "@playwright/test";
import { SettingsLegalPage } from "../../../pages/SettingsLegalPage.js";

test("This test adds a Legal Condition and verifies its addition", async ({
  page,
}) => {
  const settingsLegalPage = new SettingsLegalPage(page);
  await settingsLegalPage.createLegalCondition();
});
