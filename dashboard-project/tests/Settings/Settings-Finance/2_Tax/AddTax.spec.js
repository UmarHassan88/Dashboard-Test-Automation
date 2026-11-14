import { test } from "@playwright/test";
import { SettingsFinancePage } from "../../../../pages/SettingsFinancePage.js";

test("This test adds a new Tax from Finance Settings", async ({ page }) => {
  const settingsFinancePage = new SettingsFinancePage(page);
  await settingsFinancePage.createTax();
});
