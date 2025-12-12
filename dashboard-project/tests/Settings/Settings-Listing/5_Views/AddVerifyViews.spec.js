import { test, expect } from "@playwright/test";
import {
  Login,
  mandatoryfieldsValidationCustom,
  randomonlystringGenerator,
  randomStringGenerator,
  submitButton,
  tillFacilities,
  tillListing,
  tillSettings,
  uploadFile,
} from "../../../utils/helpers.js";

async function addVerifyViews(page) {
  await tillListing(page);
  const views = page.getByRole("button", { name: "views" });
  await expect(views).toHaveAttribute("type");
  console.log("Attribute Exists!");
  await expect(views).toBeVisible();
  await views.click();
  console.log("Landed on the Manage Views Page");
  const addView = page.getByRole("button", { name: "Add View" });
  await expect(addView).toContainClass("MuiButton-colorPrimary");
  console.log("Class Exists!");
  await addView.click();
  console.log("Landed on the Add View Page");
  console.log("Applying the Mandatory Check!");
  const viewnameMand = page.getByText("View Name *");
  const viewiconMand = page.getByText("View Icon *");
  await mandatoryfieldsValidationCustom(page, viewnameMand);
  await mandatoryfieldsValidationCustom(page, viewiconMand);
  console.log("\nFilling the Form to Create a View");
  const viewName = page.getByRole("textbox", {
    name: "Enter View Name",
    exact: true,
  });
  await expect(viewName).toBeVisible();
  await randomonlystringGenerator(page, viewName, 2, 6);
  const viewinput = await viewName.inputValue();
  const viewnameAR = page.getByRole("textbox", {
    name: "Enter View Name Arabic",
  });
  await randomonlystringGenerator(page, viewnameAR, 2, 6);
  const icon = page.getByRole("button", { name: "Choose File" });
  await uploadFile(page, icon);
  await submitButton(page);
  console.log("View is added successfully!");
  console.log("---Verifying the added View---");
  console.log("View to Verify: ", viewinput);

  await page.waitForTimeout(3000);
  await page.reload();
  const verifyView = await page.getByRole("cell", { name: viewinput }).first();
  await expect(verifyView).toBeVisible();
  console.log("The View is Verified Successfully!");
}

test("This test adds a View and verifies it", async ({ page }) => {
  await addVerifyViews(page);
});
