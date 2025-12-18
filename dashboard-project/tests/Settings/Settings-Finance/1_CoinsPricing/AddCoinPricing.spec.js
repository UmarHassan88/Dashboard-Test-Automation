import { test } from "@playwright/test";
import { SettingsFinancePage } from "../../../pages/SettingsFinancePage.js";

test("This test adds a new Coin Pricing", async ({ page }) => {
  const settingsFinancePage = new SettingsFinancePage(page);
  await settingsFinancePage.createCoinPricing();
});
