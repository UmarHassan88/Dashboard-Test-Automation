import { test } from "@playwright/test";
import { SettingsLegalPage } from "../../../../pages/SettingsLegalPage.js";

test("This test adds a a new certificate and verifies if it is added successfully", async ({
  page,
}) => {
  const settingsLegalPage = new SettingsLegalPage(page);
  await settingsLegalPage.createCertificate();
});
