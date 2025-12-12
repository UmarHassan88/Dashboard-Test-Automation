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

async function addVerifyFacilities(page) {
  await tillListing(page);
  await tillFacilities(page);
  const threedots = page
    .getByRole("row", { name: "Ztwlm Edit Delete" })
    .getByTestId("secondary-actions");
  await expect(threedots).toBeVisible();
  await threedots.click();
  const innerFacilities = page.getByRole("link");
  await expect(innerFacilities).toBeVisible();
  await innerFacilities.click();
  console.log("Landed on Manage Inner Facilities Page");
  const addFacility = await page.getByRole("button", { name: "add Facility" });
  await expect(addFacility).toBeVisible();
  await addFacility.click();
  console.log("Landed on Add Facility Form");
  const facName = page.getByRole("textbox", {
    name: "Enter Name",
    exact: true,
  });
  await randomonlystringGenerator(page, facName, 4, 9);
  const facNameinput = await facName.inputValue();

  const facNameAR = page.getByRole("textbox", {
    name: "Enter Name",
    exact: true,
  });
  await randomonlystringGenerator(page, facNameAR, 4, 9);
  const uploadIcon = page.getByRole("button", { name: "Choose File" });
  await uploadFile(page, uploadIcon);
  await submitButton(page);
  console.log("Added the inner facility!");

  console.log("\n---Verifying the Added Inner Facility---");
  await page.waitForTimeout(3000);
  await page.reload();
  console.log("Inner Facility to Verify: ", facNameinput);
  const verifyFacility = await page.getByRole("cell", { name: facNameinput });
  await expect(verifyFacility).toBeVisible();
  console.log("Inner Facility Verified Successfully!");
}

test("This test adds a new Inner Facility and verifies it", async ({
  page,
}) => {
  await addVerifyFacilities(page);
});
