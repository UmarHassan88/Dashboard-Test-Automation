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

async function addVerifyAmenitiesCategory(page) {
  await tillListing(page);
  const amenitiesSection = page.getByRole("button", { name: "Set Amenities" });
  await expect(amenitiesSection).toBeVisible();
  await amenitiesSection.click();
  console.log("Landed on the Manage Amenities Section");
  const createAmenitiesbutton = page.getByRole("button", {
    name: "Create Amenities",
  });
  await createAmenitiesbutton.click();
  console.log("Applying the Mandatory Validation");
  const amenityCategorymand = page.getByText("Amenities Category Name *");
  await mandatoryfieldsValidationCustom(page, amenityCategorymand);

  console.log("Filling the Form to Create an Amenity Category");
  const amenCat = page.getByRole("textbox", {
    name: "Enter Name",
    exact: true,
  });
  await randomonlystringGenerator(page, amenCat, 3, 12);
  const amenCatinput = await amenCat.inputValue();
  const amenCatAR = page.getByRole("textbox", { name: "Enter Name Arabic" });
  await randomonlystringGenerator(page, amenCatAR, 3, 12);
  await submitButton(page);
  console.log("\nAdded the Amenity Category Successfully!");
  console.log("---Verifying the Added Amenity Category---");
  await page.waitForTimeout(3000);
  await page.reload();
  console.log("Amenity Category to Verify: ", amenCatinput);
  const verifyAmenity = await page.getByRole("cell", { name: amenCatinput });
  await expect(verifyAmenity).toBeVisible();
  console.log("Amenity Category Verified SuccessFully!");
}

test("This test adds a new Amenity and verifies it", async ({ page }) => {
  await addVerifyAmenitiesCategory(page);
});
