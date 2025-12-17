import { test, expect } from "@playwright/test";
import {
  Login,
  tillSettings,
  dropdownSelectOnly,
  tillAddCountry,
  countryGenerator,
  randomIntGenerator,
  randomStringGenerator,
  fetchElementValue,
  mandatoryfieldsValidationCustom,
  selectCountry,
  selectlatlang,
  submitButton,
  mandatorycountryValidation,
  selectState,
  uploadFile,
  tillGeneralSettings,
} from "../../../utils/helpers.js";
import { type } from "os";

async function addCountry(page) {
  console.log("Reaching till Add Country via Methods Invoke...");
  await tillAddCountry(page);
  const countryName = page.getByRole("textbox", { name: "Enter Country name" });
  await expect(countryName).toBeVisible();
  await countryGenerator(page, countryName, 3);
  const countryValue =
    (await countryName.inputValue()) +
    Math.random().toString(36).substring(2, 5);
  await countryName.fill(countryValue);
  const countryValueVerify = await countryName.inputValue();
  console.log("Country Name to be Added: ", countryValueVerify);

  const elementValue = await countryName.inputValue();
  console.log("Input Value: ", elementValue);

  const countryNameAR = page.getByRole("textbox", { name: "Insert Country" });
  await randomStringGenerator(page, countryNameAR);
  const countryCode = page.getByPlaceholder("Enter Country Code");
  await randomIntGenerator(page, countryCode);
  await fetchElementValue(page, countryCode);
  const alphaCode = page.getByRole("textbox", { name: "Enter Alpha Code 2" });
  await randomIntGenerator(page, alphaCode);
  const isoCode = page.getByRole("textbox", { name: "Enter ISO Code" });
  await randomIntGenerator(page, isoCode);
  const currency = page.getByRole("combobox", { name: "Select a currency" });
  await currency.click();
  await dropdownSelectOnly(page, currency);

  //Scroll to the Bottom of the Page
  await page.evaluate(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
  const countryFlag = page.getByRole("button", { name: "Choose File" });
  await countryFlag.setInputFiles("C:\\Users\\umar\\Downloads\\scannerr.png");
  await fetchElementValue(page, countryFlag);
  const submitButton = page.getByRole("button", { name: "submit" });
  await submitButton.click();
  console.log("Country is Added!");

  //Verifying the Added Country
  await page.waitForTimeout(3000);
  await page.reload();
  const verifyCountry = page.getByRole("cell", { name: countryValueVerify });
  await expect(verifyCountry).toBeVisible();
  console.log("Country is Verified Successfully!");
  await page.waitForTimeout(2000);
  const backButton = page.getByRole("link", { name: "Manage Country" });
  await backButton.click();
}

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
  const verifyState = await page.getByRole("cell", {
    name: statenameValueVerify,
  });
  await expect(verifyState).toBeVisible();
  console.log("New State is Verified Successfully!");

  const backButton = page.getByRole("link", { name: "Manage State" });
  await backButton.click();
}

async function addCity(page) {
  console.log("Invoking the Methods to Reach till Add City");

  await Login(page);
  await tillSettings(page);
  await tillGeneralSettings(page);
  const citySection = page.getByRole("button", { name: "City" });
  await expect(citySection).toBeVisible();
  await citySection.click();
  const addCity = page.getByRole("button", { name: "Add City" });
  await expect(addCity).toBeVisible();
  await addCity.click();
  console.log("Selecting the Country via Invoked Method");
  await mandatorycountryValidation(page); //Validating Mandatory Fields
  await selectCountry(page);
  await selectState(page);
  const createCity = page.getByRole("textbox", {
    name: "City Name",
    exact: true,
  });
  await randomStringGenerator(page, createCity);
  const createCityAR = page.getByRole("textbox", { name: "City Name Arabic" });
  await randomStringGenerator(page, createCityAR);
  const upload = page.getByRole("button", { name: "Choose File" });
  await uploadFile(page, upload);
  const description = page.getByRole("textbox", { name: "Description" });
  await description.fill("This is test description");
  await selectlatlang(page);
  await submitButton(page);
}

test("Adding a Country", async ({ page }) => {
  await addCountry(page);
});

test("Adding a State", async ({ page }) => {
  await createState(page);
});

test("Adding a City", async ({ page }) => {
  await addCity(page);
});
