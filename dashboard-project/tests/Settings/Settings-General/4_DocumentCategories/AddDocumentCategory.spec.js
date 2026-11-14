import { test } from "@playwright/test";
import { SettingsGeneralPage } from "../../../../pages/SettingsGeneralPage.js";

test("This test adds a new Document Category", async ({ page }) => {
  const settingsGeneralPage = new SettingsGeneralPage(page);
  await settingsGeneralPage.createDocumentCategory();
});
