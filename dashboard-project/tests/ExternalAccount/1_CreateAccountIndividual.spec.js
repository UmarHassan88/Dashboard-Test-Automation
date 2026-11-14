import { test } from "@playwright/test";
import { ExternalAccountPage } from "../../pages/ExternalAccountPage.js";

test("Testing the Individual Account Creation", async ({ page }) => {
  const externalAccountPage = new ExternalAccountPage(page);
  await externalAccountPage.createIndividualAccount();
  await externalAccountPage.submitAccount();
  console.log("Added an Individual Account Successfully!");
});
