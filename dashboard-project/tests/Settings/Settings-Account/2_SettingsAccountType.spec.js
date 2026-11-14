import { test } from "@playwright/test";
import { SettingsAccountPage } from "../../../pages/SettingsAccountPage.js";

test("Testing the Company Type", async ({ page }) => {
  const settingsAccountPage = new SettingsAccountPage(page);
  await settingsAccountPage.createCompanyType();
});
