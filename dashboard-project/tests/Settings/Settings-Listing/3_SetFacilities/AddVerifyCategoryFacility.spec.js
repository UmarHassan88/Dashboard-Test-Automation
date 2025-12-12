import { test, expect } from "@playwright/test";
import {
  Login,
  randomonlystringGenerator,
  randomStringGenerator,
  submitButton,
  tillFacilities,
  tillListing,
  tillSettings,
  uploadFile,
} from "../../../utils/helpers.js";

async function addVerifyFacilityCategory(page) {
  await tillListing(page);
  await tillFacilities(page);
  const createFacility = page.getByRole("button", { name: "Create Facility" });
  await expect(createFacility).toBeVisible();
  await createFacility.click();
  console.log("Creating a Facility at Create Page");
  const facilityName = page.getByRole("textbox", {
    name: "Enter Name",
    exact: true,
  });
  await randomonlystringGenerator(page, facilityName, 5);
  const facilityNameinput = await facilityName.inputValue();
  const facilityNameAR = page.getByRole("textbox", {
    name: "Enter Name Arabic",
  });
  await randomonlystringGenerator(page, facilityNameAR, 5);
  await submitButton(page);

  console.log("---Verifying the created Facilty---");
  await page.waitForTimeout(3000);
  await page.reload();
  const verifyFacility = page.getByRole("cell", { name: facilityNameinput });
  console.log("Facility to Verify: ", facilityNameinput);
  await expect(verifyFacility).toBeVisible();
  console.log("Facility Verified Successfully!");
}

test("This test adds a facility and verifies it", async ({ page }) => {
  await addVerifyFacilityCategory(page);
});
