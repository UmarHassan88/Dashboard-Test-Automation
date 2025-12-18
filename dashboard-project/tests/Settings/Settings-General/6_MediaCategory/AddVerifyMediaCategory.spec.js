import { test } from "@playwright/test";
import { SettingsGeneralPage } from "../../../pages/SettingsGeneralPage.js";

test("This test adds and verify a media category", async ({ page }) => {
  const settingsGeneralPage = new SettingsGeneralPage(page);
  await settingsGeneralPage.createMediaCategory();
});
