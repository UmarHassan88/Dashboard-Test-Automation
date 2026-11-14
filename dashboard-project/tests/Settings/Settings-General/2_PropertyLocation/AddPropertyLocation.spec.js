import { test } from "@playwright/test";
import { SettingsGeneralPage } from "../../../../pages/SettingsGeneralPage.js";

test("This test adds a Property Location", async ({ page }) => {
  const settingsGeneralPage = new SettingsGeneralPage(page);
  await settingsGeneralPage.createPropertyLocation();
});
