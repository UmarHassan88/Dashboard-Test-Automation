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

async function addVerifyAmenities(page) {
  await tillListing(page);
  const amenitiesSection = page.getByRole("button", { name: "Set Amenities" });
  await expect(amenitiesSection).toBeVisible();
  await amenitiesSection.click();
  console.log("Landed on the Manage Amenities Section");
  const threedots = page
    .getByRole("row", { name: "Defghijkl Edit Delete" })
    .getByTestId("secondary-actions");
  await expect(threedots).toBeVisible();
  await threedots.click();
  const amenities = page.getByRole("link");
  await expect(amenities).toBeVisible();
  await amenities.click();
  console.log("Landed on the Manage Amenities Section");
  const addAmenity = page.getByRole("button", { name: "add Amenities" });
  await expect(addAmenity).toBeVisible();
  //   console.log("Current URL:", page.getURL());
  await addAmenity.click();
  console.log("Applying the Mandatory Check");
  const amenityNameMand = page.getByText("Amenities Name *");
  const uploadIcon = page.getByText("Upload Icon *");
  await mandatoryfieldsValidationCustom(page, amenityNameMand);
  await mandatoryfieldsValidationCustom(page, uploadIcon);
  console.log("Filling the Form to create Amenity");
  const amenityName = page.getByRole("textbox", {
    name: "Enter Name",
    exact: true,
  });
  await randomonlystringGenerator(page, amenityName, 2, 7);
  const amenityNameAR = page.getByRole("textbox", {
    name: "Enter Name Arabic",
  });
  await randomonlystringGenerator(page, amenityNameAR, 2, 7);
  const upload = page.getByRole("button", { name: "Choose File" });
  await uploadFile(page, upload);
  await submitButton(page);
  console.log("Added the Amenity Successfully!");
}

test("This test adds a new Amenity and verifies it", async ({ page }) => {
  await addVerifyAmenities(page);
});
