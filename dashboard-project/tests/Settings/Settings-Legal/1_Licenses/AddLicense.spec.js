import { test } from "@playwright/test";
import { SettingsLegalPage } from "../../../pages/SettingsLegalPage.js";

test("This test creates a new License", async ({ page }) => {
  const settingsLegalPage = new SettingsLegalPage(page);
  await settingsLegalPage.createLicense();
});
