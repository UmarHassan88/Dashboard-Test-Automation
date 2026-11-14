# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Settings\Settings-General\1_Locations\AddCountry.spec.js >> Adding a SubCommunity
- Location: dashboard-project\tests\Settings\Settings-General\1_Locations\AddCountry.spec.js:24:5

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://console.oneaqary.com/en/auth/login", waiting until "load"
  - operation was aborted: Test ended.

```

# Test source

```ts
  1   | import { expect } from "@playwright/test";
  2   | 
  3   | export async function Login(page) {
> 4   |   await page.goto("https://console.oneaqary.com/en/auth/login");
      |              ^ Error: page.goto: Test ended.
  5   |   const emailInput = page.getByRole("textbox", { name: "admin@aqaryint.com" });
  6   |   const emailAssert = page.getByText("Email/User has to be filled.");
  7   |   const passwordInput = page.getByRole("textbox", {
  8   |     name: "Enter your password",
  9   |   });
  10  |   const passwordAssert = page.getByText("Password has to be filled.");
  11  |   //await emailInput.fill('superadmin');
  12  |   const submitButton = page.getByRole("button", { name: "Log in" });
  13  |   await submitButton.click();
  14  |   //Asserting if the Validation Messages are Visible
  15  |   await expect(emailAssert).toBeVisible();
  16  |   await expect(passwordAssert).toBeVisible();
  17  |   //Validating Incorrect Credentials
  18  |   let incorrectEmailUser = "admin";
  19  |   let correctEmailUser = "superadmin";
  20  |   let incorrectPassword = "12345";
  21  |   let correctPassword = "HereWeGo@2026";
  22  |   //Incorrect Email Scenario
  23  | 
  24  |   // await emailInput.fill(incorrectEmailUser);
  25  |   // await passwordInput.fill(correctPassword);
  26  |   // await submitButton.click();
  27  |   // await expect(
  28  |   //   page.getByText('Something went wrong!')).toBeVisible();
  29  | 
  30  |   // //Incorrect Password Scenario
  31  |   // await emailInput.fill(correctEmailUser);
  32  |   // await passwordInput.fill(incorrectPassword);
  33  |   // await submitButton.click();
  34  |   // await expect(
  35  |   //   page.getByRole("alert").filter({ hasText: "invalid login credentials" }),
  36  |   // ).toBeVisible();
  37  | 
  38  |   //Correct Credentials Scenario
  39  |   await emailInput.fill(correctEmailUser);
  40  |   await passwordInput.fill(correctPassword);
  41  |   await submitButton.click();
  42  | }
  43  | 
  44  | export async function tillSettings(page) {
  45  |   // const profileIcon = await page.locator("button").nth(2);
  46  |   // await profileIcon.click();
  47  |   // const v2Toggle = page.getByRole("checkbox", { name: "Switch to v2" });
  48  |   // await v2Toggle.click();
  49  |   // const V2UIAssert = await page.getByText("Property Management Platform");
  50  |   // await expect(V2UIAssert).toBeVisible();
  51  |   //Redirect to Settings
  52  |   const settingsOption = page.getByRole('button', { name: 'Settings', exact: true });
  53  | 
  54  |   await settingsOption.click();
  55  | }
  56  | 
  57  | export async function dropdownSelect(page, locator, j) {
  58  |   await locator.click();
  59  |   for (var i = 0; i < j; i++) {
  60  |     await page.keyboard.press("ArrowDown");
  61  |   }
  62  |   await locator.press("Enter");
  63  | }
  64  | 
  65  | export async function dropdownSelectOnly(page, locator) {
  66  |   await locator.click();
  67  |   await page.keyboard.press("ArrowDown");
  68  | 
  69  |   await locator.press("Enter");
  70  | }
  71  | 
  72  | export async function fillLocationDetails(page) {
  73  |   const country = page.getByRole("combobox", { name: "Select Country" });
  74  |   const state = page.getByRole("combobox", { name: "Select State" });
  75  |   const city = page.getByRole("combobox", { name: "Select City" });
  76  |   const community = page.getByRole("combobox", { name: "Select Community" });
  77  |   const subCommunity = page.getByRole("combobox", {
  78  |     name: "Select Sub Community",
  79  |   });
  80  |   const pinLocation = page.getByRole("img", { name: "aqary map" });
  81  | 
  82  |   await country.click();
  83  |   await dropdownSelect(page, country, 1);
  84  |   await state.click();
  85  |   await page.getByRole("option", { name: "Abu Dhabi" }).click();
  86  | 
  87  |   //await dropdownSelect(page, state, 2);
  88  |   await city.click();
  89  |   await dropdownSelect(page, city, 1);
  90  |   await community.click();
  91  |   await dropdownSelectOnly(page, community);
  92  |   await subCommunity.click();
  93  |   await dropdownSelectOnly(page, subCommunity);
  94  |   await pinLocation.click();
  95  |   const mapTab = await page.getByRole("menuitemradio", {
  96  |     name: "Show street map",
  97  |   });
  98  |   await expect(mapTab).toBeVisible();
  99  |   // await page.mouse.move(200, 200);
  100 |   await page.waitForTimeout(3000);
  101 |   await expect(mapTab).toBeVisible();
  102 | 
  103 |   // Wait for the map canvas
  104 |   const map = page.locator(".gm-style"); // Replace with your map element
```