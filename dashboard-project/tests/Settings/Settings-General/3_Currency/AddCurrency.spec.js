import { test } from "@playwright/test";
import { SettingsGeneralPage } from "../../../pages/SettingsGeneralPage.js";

test("This test adds a new Currency", async ({ page }) => {
  const settingsGeneralPage = new SettingsGeneralPage(page);
  await settingsGeneralPage.createCurrency();
});
