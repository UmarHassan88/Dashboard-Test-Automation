import { test } from "@playwright/test";
import { SettingsAccountPage } from "../../../pages/SettingsAccountPage.js";

test("This test manages a module and verifies it", async ({ page }) => {
  const settingsAccountPage = new SettingsAccountPage(page);
  await settingsAccountPage.createModule();
});
