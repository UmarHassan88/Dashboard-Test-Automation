import { test, expect } from "@playwright/test";
import {
  tillSettings,
  Login,
  tillGeneralSettings,
  countryGenerator,
  dropdownSelect,
  randomStringGenerator,
  randomIntGenerator,
  submitButton,
  selectCountry,
  selectlatlang,
  mandatoryfieldValidation,
  mandatoryfieldsValidationCustom,
} from "../../../utils/helpers";

async function createState(page) {
  console.log("Invoking the Methods to Reach till Add State");
  await Login(page);
  await tillSettings(page);
  await tillGeneralSettings(page);
  const stateOption = page.getByRole("button", { name: "State" });
  await expect(stateOption).toBeVisible();
  await stateOption.click();
  console.log("Asserting Add State Page");
  const addState = page.getByRole("button", { name: "Add State" });
  await expect(addState).toBeVisible();
  await addState.click();
  console.log("Asserting the Add State pop up");
  const addStatePopUp = page.getByRole("heading", { name: "Add State" });
  await expect(addStatePopUp).toBeVisible();
  const mandatoryField = page.getByText("Country *");
  await mandatoryfieldsValidationCustom(page, mandatoryField); //Validating Mandatory Fields
  await selectCountry(page);
  const stateName = page.locator('input[name="state_name"]');
  await randomStringGenerator(page, stateName);
  const stateNameAR = page.locator('input[name="state_name_arabic"]');
  await randomStringGenerator(page, stateNameAR);
  const statenameValueVerify = await stateName.inputValue();
  console.log("State Name to be Verified: ", statenameValueVerify);
  //Generating Random Lat and long Values
  await selectlatlang(page);
  await submitButton(page);

  //Verifying the Added State
  await page.waitForTimeout(3000);
  await page.reload();
  const verifyState = page.getByRole("cell", { name: statenameValueVerify });
  await expect(verifyState).toBeVisible();
  console.log("New State is Verified Successfully!");
}

test("This test creates a new State", async ({ page }) => {
  await createState(page);
});
