import { test, expect } from "@playwright/test";
import {
  dropdownSelect,
  Login,
  mandatoryFields,
  mandatoryfieldsValidationCustom,
  randomIntGenerator,
  randomStringGenerator,
  submitButton,
  tillListing,
  tillSettings,
  uploadFile,
} from "../../../utils/helpers.js";

async function AddVerifyType(page) {
  await tillListing(page);
  const typeSection = page.getByRole("button", { name: "Type", exact: true });
  await expect(typeSection).toBeVisible();
  await typeSection.click();
  console.log("Landed on the Type Section");

  const UnitTab = page.getByRole("link", { name: "unit" });
  const propertyTab = page.getByRole("link", { name: "property" });
  const sectionsArray = [UnitTab, propertyTab];
  for (let i = 0; i < sectionsArray.length; i++) {
    await sectionsArray[i].click();
    await page.waitForTimeout(1500);
  }
  const createType = page.getByRole("button", { name: "Create Type" });
  await expect(createType).toBeVisible();
  await createType.click();

  console.log("Applying the Mandatory Check");
  const usageMand = page.getByText("Usage *");
  const typeName = page.getByText("Type Name *");
  await mandatoryfieldsValidationCustom(page, usageMand);
  await mandatoryfieldsValidationCustom(page, typeName);
  console.log("Mandatory Check Done!");

  console.log("Filling the Form to Create a Type");

  const type = page.getByRole("textbox", {
    name: "Please enter type name",
    exact: true,
  });
  await randomStringGenerator(page, type);
  //For Verification
  const typeInput = await type.inputValue();
  const typeAR = page.getByRole("textbox", {
    name: "Please enter type name AR",
  });
  await randomStringGenerator(page, typeAR);
  const usage = page.getByRole("combobox", { name: "Please select usage" });
  await usage.click();
  await dropdownSelect(page, usage, 2);
  const typeIcon = page.getByRole("button", { name: "Choose File" });
  await uploadFile(page, typeIcon);
  const typeCode = page.getByRole("textbox", {
    name: "Please enter type code",
  });
  await randomIntGenerator(page, typeCode);
  await submitButton(page);
  console.log("The type is added Successfully!");

  console.log("---Verifying the added Type---");
  await page.waitForTimeout(3000);
  await page.reload();
  console.log("Type Name to Verify: ", typeInput);
  const verifyType = await page.getByRole("cell", { name: typeInput });
  await expect(verifyType).toBeVisible();
  console.log("Type is Verified Successfully!");
}

test("This test adds a new type and verifies it", async ({ page }) => {
  await AddVerifyType(page);
});
