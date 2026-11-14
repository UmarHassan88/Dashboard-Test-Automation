import { test } from "@playwright/test";
import { SettingsListingPage } from "../../../../pages/SettingsListingPage.js";

test("This test adds a new type and verifies it", async ({ page }) => {
  const settingsListingPage = new SettingsListingPage(page);
  await settingsListingPage.createType();
});
