import { expect } from "@playwright/test";

export async function Login(page) {
  await page.goto("https://console.oneaqary.com/en/auth/login");
  const emailInput = page.getByRole("textbox", { name: "admin@aqaryint.com" });
  const emailAssert = page.getByText("Email/User has to be filled.");
  const passwordInput = page.getByRole("textbox", {
    name: "Enter your password",
  });
  const passwordAssert = page.getByText("Password has to be filled.");
  //await emailInput.fill('superadmin');
  const submitButton = page.getByRole("button", { name: "Log in" });
  await submitButton.click();
  //Asserting if the Validation Messages are Visible
  await expect(emailAssert).toBeVisible();
  await expect(passwordAssert).toBeVisible();
  //Validating Incorrect Credentials
  let incorrectEmailUser = "admin";
  let correctEmailUser = "superadmin";
  let incorrectPassword = "12345";
  let correctPassword = "HereWeGo@2026";
  //Incorrect Email Scenario

  // await emailInput.fill(incorrectEmailUser);
  // await passwordInput.fill(correctPassword);
  // await submitButton.click();
  // await expect(
  //   page.getByText('Something went wrong!')).toBeVisible();

  // //Incorrect Password Scenario
  // await emailInput.fill(correctEmailUser);
  // await passwordInput.fill(incorrectPassword);
  // await submitButton.click();
  // await expect(
  //   page.getByRole("alert").filter({ hasText: "invalid login credentials" }),
  // ).toBeVisible();

  //Correct Credentials Scenario
  await emailInput.fill(correctEmailUser);
  await passwordInput.fill(correctPassword);
  await submitButton.click();
}

export async function tillSettings(page) {
  // const profileIcon = await page.locator("button").nth(2);
  // await profileIcon.click();
  // const v2Toggle = page.getByRole("checkbox", { name: "Switch to v2" });
  // await v2Toggle.click();
  // const V2UIAssert = await page.getByText("Property Management Platform");
  // await expect(V2UIAssert).toBeVisible();
  //Redirect to Settings
  const settingsOption = page.getByRole('button', { name: 'Settings', exact: true });

  await settingsOption.click();
}

export async function dropdownSelect(page, locator, j) {
  await locator.click();
  for (var i = 0; i < j; i++) {
    await page.keyboard.press("ArrowDown");
  }
  await locator.press("Enter");
}

export async function dropdownSelectOnly(page, locator) {
  await locator.click();
  await page.keyboard.press("ArrowDown");

  await locator.press("Enter");
}

export async function fillLocationDetails(page) {
  const country = page.getByRole("combobox", { name: "Select Country" });
  const state = page.getByRole("combobox", { name: "Select State" });
  const city = page.getByRole("combobox", { name: "Select City" });
  const community = page.getByRole("combobox", { name: "Select Community" });
  const subCommunity = page.getByRole("combobox", {
    name: "Select Sub Community",
  });
  const pinLocation = page.getByRole("img", { name: "aqary map" });

  await country.click();
  await dropdownSelect(page, country, 1);
  await state.click();
  await page.getByRole("option", { name: "Abu Dhabi" }).click();

  //await dropdownSelect(page, state, 2);
  await city.click();
  await dropdownSelect(page, city, 1);
  await community.click();
  await dropdownSelectOnly(page, community);
  await subCommunity.click();
  await dropdownSelectOnly(page, subCommunity);
  await pinLocation.click();
  const mapTab = await page.getByRole("menuitemradio", {
    name: "Show street map",
  });
  await expect(mapTab).toBeVisible();
  // await page.mouse.move(200, 200);
  await page.waitForTimeout(3000);
  await expect(mapTab).toBeVisible();

  // Wait for the map canvas
  const map = page.locator(".gm-style"); // Replace with your map element
  await map.waitFor({ state: "visible" });

  const box = await map.boundingBox();
  if (!box) throw new Error("Map bounding box not found");

  await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);

  //page.waitForTimeout(2000);
  const closeMap = page.getByRole("button", { name: "close" });
  await closeMap.click();
}

export async function tillAccounts(page) {
  await Login(page);
  // const profileIcon = await page
  //   .getByRole("button")
  //   .filter({ hasText: /^$/ })
  //   .nth(5);
  // await profileIcon.click();
  // const v2Toggle = page.getByRole("checkbox", { name: "Switch to v2" });
  // await v2Toggle.click();
  const V2UIAssert = await page.getByText("Property Management Platform");
  await expect(V2UIAssert).toBeVisible();
  const AccountsMenu = page.getByRole("button", { name: "Accounts" });
  await expect(AccountsMenu).toBeVisible();
  await AccountsMenu.click();
  const createAccountOption = page.getByRole("button", {
    name: "Create Account",
  });
  await expect(createAccountOption).toBeVisible();
  await createAccountOption.click();

  const accountTypeSelect = page.getByRole("combobox", {
    name: "Please Select Account Type",
  });
  await accountTypeSelect.click();
}

export async function randomonlystringGenerator(page, locator, length = 5) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    // const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  await locator.fill(`Testing${result}`);
}

export async function randomStringGenerator(page, locator) {
  const randomValues = Math.random().toString(36).substring(2, 4);
  await locator.fill(`Testing${randomValues}`);
}

export async function tillGeneralSettings(page) {
  const generalSettings = page.getByRole("button", { name: "General" });
  await expect(generalSettings).toBeVisible();
  await generalSettings.click();
}

export async function tillAddCountry(page) {
  await Login(page);
  await tillSettings(page);
  await tillGeneralSettings(page);
  const countryOption = page.getByRole("button", { name: "Country" });
  await countryOption.click();
  const addCountry = page.getByRole("button", { name: "Add Country" });
  await expect(addCountry).toBeVisible();
  await addCountry.click();
}

export async function countryGenerator(page, locator, number) {
  let array = [
    "United Arab Emirates",
    "Pakistan",
    "Egypt",
    "Lebanon",
    "SA",
    "Brazil",
    "United Kingdom",
    "Sudan",
    "Algeria",
  ];
  const ran = Math.floor(Math.random() * number);
  let rand = array[ran];
  console.log("The country " + rand + " is selected indexed at " + ran);

  await locator.fill(rand);
}

export async function randomIntGenerator(page, locator) {
  const randomInt = Math.floor(Math.random() * 10).toString();

  await locator.fill(randomInt);
}

export async function submitButton(page) {
  const submitButton = page.getByRole("button", { name: "submit" });
  await expect(submitButton).toBeVisible();
  await submitButton.click({ timeout: 3000 });
}

export async function selectCountry(page) {
  const select = page.getByRole("combobox", { name: "Select Country" });
  await select.click();
  await countryGenerator(page, select, 1);
  await dropdownSelectOnly(page, select);
}

export async function selectState(page) {
  const state = page.getByRole("combobox", { name: "Select State" });
  await state.click();
  await dropdownSelectOnly(page, state);
}

export async function selectCity(page) {
  const city = page.getByRole("combobox", { name: "Select City" });
  await city.click();
  await dropdownSelectOnly(page, city);
}

export async function selectCommunity(page) {
  const community = page.getByRole("combobox", { name: "Select Community" });
  await community.click();
  await dropdownSelectOnly(page, community);
}

export async function selectSubCommunity(page) {
  const subCommunity = page.getByRole("combobox", {
    name: "Select Sub Community",
  });
  await subCommunity.click();
  await dropdownSelectOnly(page, subCommunity);
}

export async function uploadFile(page, locator) {
  // await locator.click();
  await locator.setInputFiles("C:\\Users\\umar\\Downloads\\scanner.png");
}

export async function selectlatlang(page) {
  const lat = page.getByPlaceholder("Enter latitude");
  await randomIntGenerator(page, lat);
  const long = page.getByPlaceholder("Enter longitude");
  await randomIntGenerator(page, long);
}

export async function fetchElementValue(page, locator) {
  const elementValue = await locator.inputValue();
  console.log("Input Value: ", elementValue);
}

export async function mandatorycountryValidation(page) {
  await submitButton(page); //Submitting Empty Form to check Validations
  const country = page.getByText("Select Country *");
  //Validating the Required Fields b
  await expect(country).toHaveClass(/Mui error Mui-required/);
}

export async function mandatoryfieldsValidationCustom(page, locator) {
  await submitButton(page); //Submitting Empty Form to check Validations
  //Validating the Required Fields by classes
  await expect(locator).toHaveClass(/Mui-required/);
}

export async function dropdownSelectfromLast(page, locator) {
  await page.waitForTimeout(1000);
  await page.keyboard.press("ArrowUp");

  await locator.press("Enter");
}

export async function tillLegal(page) {
  const legalOption = page.getByRole("button", { name: "Legal", exact: true });
  await expect(legalOption).toBeVisible();
  await legalOption.click();
  const licensesSection = page.getByRole("button", { name: "Licenses" });
  await expect(licensesSection).toBeVisible();
  const certificatesSection = page.getByRole("button", { name: "Certificate" });
  await expect(certificatesSection).toBeVisible();
  const legalConditionSection = page.getByRole("button", {
    name: "Legal condition",
  });
  await expect(legalConditionSection).toBeVisible();
}

export async function mandatoryFields(page, locator) {
  await submitButton(page); //Submitting Empty Form to check Validations
  const childErrorClass = await locator.locator(".Mui-required");
  await expect(childErrorClass).toBeVisible();
}

export async function tillSettingsAccounts(page) {
  const accountOption = page.getByRole("button", {
    name: "Account",
    exact: true,
  });
  await expect(accountOption).toHaveText("Account");
  await accountOption.click();
  const companyIndustryOption = page.getByRole("button", {
    name: "Company Industry",
  });
  await expect(companyIndustryOption).toBeVisible();

  const companyTypeOption = page.getByRole("button", { name: "Company Type" });
  await expect(companyTypeOption).toBeVisible();

  const companyActivityOption = page.getByRole("button", {
    name: "Company Activity",
  });
  await expect(companyActivityOption).toBeVisible();

  const manageModulesOption = page.getByRole("button", {
    name: "Manage Modules",
  });
  await expect(manageModulesOption).toBeVisible();
}

export async function tillListing(page) {
  await Login(page);
  await tillSettings(page);
  const tillListing = page.getByRole("button", { name: "Listing" });
  await expect(tillListing).toBeVisible();
  await tillListing.click();
}

export async function tillFacilities(page) {
  const setFacilitiesSection = page.getByRole("button", {
    name: "Set Facilities",
  });
  await expect(setFacilitiesSection).toBeVisible();
  await setFacilitiesSection.click();
  console.log("Landed on the Manage Facilities Page");
}

export async function randomEmailGenerator(page, locator) {
  const random = Math.random().toString(36).substring(2, 7);
  await locator.fill(`randomemail${random}@gmail.com`);
}
