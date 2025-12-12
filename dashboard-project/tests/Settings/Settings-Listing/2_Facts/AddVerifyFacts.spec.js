import { test, expect } from "@playwright/test";
import {
  Login,
  randomonlystringGenerator,
  randomStringGenerator,
  submitButton,
  tillListing,
  tillSettings,
  uploadFile,
} from "../../../utils/helpers.js";

async function addVerifyFacts(page) {
  await tillListing(page);
  const factsSection = page.getByRole("button", { name: "Facts" });
  await expect(factsSection).toBeVisible();
  await factsSection.click();
  console.log("Landed on the Manage Facts page");
  const addFacts = page.getByRole("button", { name: "Add Fact" });
  await expect(addFacts).toBeVisible();
  await addFacts.click();
  console.log("Landed on the Add Facts page");
  console.log("Filling the Facts Form page");

  const factNameEn = page.getByRole("textbox", { name: "Enter Title" });
  await expect(factNameEn).toBeVisible();
  await randomonlystringGenerator(page, factNameEn, 5);
  const factTextValue = await factNameEn.inputValue();

  const factNameAR = page.getByRole("textbox", {
    name: "Please enter Fact Name AR",
  });
  await randomonlystringGenerator(page, factNameAR, 5);
  const uploadIcon = page.getByRole("button", { name: "Choose File" });
  await uploadFile(page, uploadIcon);
  await submitButton(page);
  console.log("Fact added Successfully!");

  console.log("--Verifying the added Fact---");
  await page.waitForTimeout(3000);
  await page.reload();
  console.log("Fact Text Value: ", factTextValue);
  const verifyFact = page.getByRole("cell", { name: factTextValue });
  console.log("Fact to Verify: ", factTextValue);

  await expect(verifyFact).toBeVisible();
  console.log("\nFact Verified Succesfully!");
}

test("This test adds a fact and verifies it ", async ({ page }) => {
  await addVerifyFacts(page);
});
