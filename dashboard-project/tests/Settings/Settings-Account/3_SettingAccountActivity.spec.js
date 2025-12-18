import { test } from "@playwright/test";
import { SettingsAccountPage } from "../../pages/SettingsAccountPage.js";

test("Testing the Account Activity Creation", async ({ page }) => {
  const settingsAccountPage = new SettingsAccountPage(page);
  await settingsAccountPage.createCompanyActivity();
});
