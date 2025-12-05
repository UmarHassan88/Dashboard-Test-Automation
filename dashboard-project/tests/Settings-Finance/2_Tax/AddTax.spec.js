import { test, expect } from "@playwright/test";
import {
  Login,
  tillSettings,
  randomIntGenerator,
  randomStringGenerator,
  dropdownSelectOnly,
  submitButton,
  mandatoryfieldsValidationCustom,
  dropdownSelectfromLast,
} from "../../utils/helpers.js";

async function addTax(page) {
  await Login(page);
  await tillSettings(page);
  const financeOption = page.getByRole("button", { name: "Finance" });
  await expect(financeOption).toBeVisible();
  await financeOption.click();
  const taxOption = page.getByRole("button", { name: "Tax" });
  await expect(taxOption).toBeVisible();
  await taxOption.click();
  const createTax = page.getByRole("button", { name: "Create Tax" });
  await expect(createTax).toBeVisible();
  await createTax.click();
  console.log("Landed on Create Tax Page");
  const countryField = page.getByRole("combobox", { name: "Select Country" });
  await expect(countryField).toBeVisible();

  //Asserting the mandatory fields
  await submitButton(page); //To be able to submit the form after filling all fields
  const countrymandCheck = page.getByText("Country *");
  await mandatoryfieldsValidationCustom(page, countrymandCheck);
  const taxNammemandCheck = page.getByText("tax name *");
  await mandatoryfieldsValidationCustom(page, taxNammemandCheck);
  const taxPercentmandCheck = page.getByText("tax name value *");
  await mandatoryfieldsValidationCustom(page, taxPercentmandCheck);
  //Filling the Form
  await countryField.click();
  await dropdownSelectfromLast(page, countryField);
  const taxName = page.getByRole("textbox", {
    name: "Enter tax name",
    exact: true,
  });
  await randomStringGenerator(page, taxName);
  const taxinputValue = await taxName.inputValue();
  console.log("Tax to be Verified: ", taxinputValue);
  const taxPercent = page.getByPlaceholder("Enter tax name value");
  await randomIntGenerator(page, taxPercent);
  //Submitting the Form
  await submitButton(page);
  console.log("New Tax is Added Successfully!");
  await page.waitForTimeout(3000);
  await page.reload();

  //Verifying the Added Tax
  const verifyTax = page.getByRole("cell", { name: taxinputValue });
  await expect(verifyTax).toBeVisible();
  console.log("Added Tax is Verified Successfully!");
}

test("This test adds a new Tax from Finance Settings", async ({ page }) => {
  await addTax(page);
});
