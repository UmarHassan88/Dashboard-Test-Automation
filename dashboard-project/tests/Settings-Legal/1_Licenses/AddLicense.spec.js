import { test, expect } from "@playwright/test";
import {
  Login,
  tillSettings,
  randomIntGenerator,
  randomStringGenerator,
  dropdownSelectOnly,
  tillLegal,
  mandatoryfieldValidation,
  mandatoryfieldsValidationCustom,
  selectCountry,
  submitButton,
} from "../../utils/helpers.js";

async function addLicense(page) {
  await Login(page);
  await tillSettings(page);
  await tillLegal(page);
  const licenseOption = page.getByRole("button", { name: "Licenses" });
  await expect(licenseOption).toBeVisible();
  await licenseOption.click();
  console.log("Landed on Licenses Page");
  const createLicensebutton = page.getByRole("button", {
    name: "create License",
  });
  await expect(createLicensebutton).toBeVisible();
  await createLicensebutton.click();
  console.log("Adding a new License");

  //Verifying Mandatory Fields
  console.log("Verifying Mandatory Fields");
  const licenseNameMandCheck = await page.getByText("License Name *");
  await mandatoryfieldsValidationCustom(page, licenseNameMandCheck);

  //Filling the Form
  const licenseName = page.getByRole("textbox", {
    name: "Enter license Name",
    exact: true,
  });
  await randomStringGenerator(page, licenseName);
  await selectCountry(page);
  const state = page.getByRole("combobox", { name: "Select State" });
  await state.click();
  await dropdownSelectOnly(page, state);
  const companyIndustry = page.getByRole("combobox", {
    name: "Please Select Company Industry",
  });
  await companyIndustry.click();
  await dropdownSelectOnly(page, companyIndustry);
  const companyType = page.getByRole("combobox", {
    name: "Please Select Company Type",
  });
  await companyType.click();
  await dropdownSelectOnly(page, companyType);
  await submitButton(page);

  const licenseinputValue = await licenseName.inputValue();
  console.log("License to be Verified: ", licenseinputValue);
  //Now verifying the Added License
  await page.waitForTimeout(3000);
  await page.reload();
  const verifyLicense = page.getByRole("cell", { name: licenseinputValue });
  const extractLicenseValue = await verifyLicense.innerText();

  await expect(verifyLicense).toBeVisible();
  if (licenseinputValue === extractLicenseValue) {
    console.log("License Added is Verified Successfully!");
  } else {
    console.log("License Verification Failed!");
  }
}

test("This test creates a new License", async ({ page }) => {
  await addLicense(page);
});
