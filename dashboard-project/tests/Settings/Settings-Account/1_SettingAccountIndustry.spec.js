import { test } from "@playwright/test";
import { SettingsAccountPage } from "../../pages/SettingsAccountPage.js";

test("Navigate to Setting Account and Create Company Industry", async ({ page }) => {
  const settingsAccountPage = new SettingsAccountPage(page);
  await settingsAccountPage.createIndustry();
});
