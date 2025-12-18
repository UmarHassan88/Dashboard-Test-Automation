import { test } from "@playwright/test";
import { ExternalAccountPage } from "../pages/ExternalAccountPage.js";

test("Testing the Add Company Account Type Section", async ({ page }) => {
  const externalAccountPage = new ExternalAccountPage(page);
  await externalAccountPage.createCompanyAccount();
  await externalAccountPage.submitAccount();
  console.log("Added a Company!");
});
