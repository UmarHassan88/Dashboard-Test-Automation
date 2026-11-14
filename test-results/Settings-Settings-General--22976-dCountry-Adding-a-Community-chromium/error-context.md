# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Settings\Settings-General\1_Locations\AddCountry.spec.js >> Adding a Community
- Location: dashboard-project\tests\Settings\Settings-General\1_Locations\AddCountry.spec.js:19:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'submit' })
    - locator resolved to <button disabled tabindex="-1" type="submit" class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation mui-1cnbxog">submit</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 500ms

```

# Test source

```ts
  103 |   // Wait for the map canvas
  104 |   const map = page.locator(".gm-style"); // Replace with your map element
  105 |   await map.waitFor({ state: "visible" });
  106 | 
  107 |   const box = await map.boundingBox();
  108 |   if (!box) throw new Error("Map bounding box not found");
  109 | 
  110 |   await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
  111 | 
  112 |   //page.waitForTimeout(2000);
  113 |   const closeMap = page.getByRole("button", { name: "close" });
  114 |   await closeMap.click();
  115 | }
  116 | 
  117 | export async function tillAccounts(page) {
  118 |   await Login(page);
  119 |   // const profileIcon = await page
  120 |   //   .getByRole("button")
  121 |   //   .filter({ hasText: /^$/ })
  122 |   //   .nth(5);
  123 |   // await profileIcon.click();
  124 |   // const v2Toggle = page.getByRole("checkbox", { name: "Switch to v2" });
  125 |   // await v2Toggle.click();
  126 |   const V2UIAssert = await page.getByText("Property Management Platform");
  127 |   await expect(V2UIAssert).toBeVisible();
  128 |   const AccountsMenu = page.getByRole("button", { name: "Accounts" });
  129 |   await expect(AccountsMenu).toBeVisible();
  130 |   await AccountsMenu.click();
  131 |   const createAccountOption = page.getByRole("button", {
  132 |     name: "Create Account",
  133 |   });
  134 |   await expect(createAccountOption).toBeVisible();
  135 |   await createAccountOption.click();
  136 | 
  137 |   const accountTypeSelect = page.getByRole("combobox", {
  138 |     name: "Please Select Account Type",
  139 |   });
  140 |   await accountTypeSelect.click();
  141 | }
  142 | 
  143 | export async function randomonlystringGenerator(page, locator, length = 5) {
  144 |   const chars = "abcdefghijklmnopqrstuvwxyz";
  145 |   let result = "";
  146 |   for (let i = 0; i < length; i++) {
  147 |     // const randomIndex = Math.floor(Math.random() * chars.length);
  148 |     result += chars.charAt(Math.floor(Math.random() * chars.length));
  149 |   }
  150 |   await locator.fill(`Testing${result}`);
  151 | }
  152 | 
  153 | export async function randomStringGenerator(page, locator) {
  154 |   const randomValues = Math.random().toString(36).substring(2, 4);
  155 |   await locator.fill(`Testing${randomValues}`);
  156 | }
  157 | 
  158 | export async function tillGeneralSettings(page) {
  159 |   const generalSettings = page.getByRole("button", { name: "General" });
  160 |   await expect(generalSettings).toBeVisible();
  161 |   await generalSettings.click();
  162 | }
  163 | 
  164 | export async function tillAddCountry(page) {
  165 |   await Login(page);
  166 |   await tillSettings(page);
  167 |   await tillGeneralSettings(page);
  168 |   const countryOption = page.getByRole("button", { name: "Country" });
  169 |   await countryOption.click();
  170 |   const addCountry = page.getByRole("button", { name: "Add Country" });
  171 |   await expect(addCountry).toBeVisible();
  172 |   await addCountry.click();
  173 | }
  174 | 
  175 | export async function countryGenerator(page, locator, number) {
  176 |   let array = [
  177 |     "United Arab Emirates",
  178 |     "Pakistan",
  179 |     "Egypt",
  180 |     "Lebanon",
  181 |     "SA",
  182 |     "Brazil",
  183 |     "United Kingdom",
  184 |     "Sudan",
  185 |     "Algeria",
  186 |   ];
  187 |   const ran = Math.floor(Math.random() * number);
  188 |   let rand = array[ran];
  189 |   console.log("The country " + rand + " is selected indexed at " + ran);
  190 | 
  191 |   await locator.fill(rand);
  192 | }
  193 | 
  194 | export async function randomIntGenerator(page, locator) {
  195 |   const randomInt = Math.floor(Math.random() * 10).toString();
  196 | 
  197 |   await locator.fill(randomInt);
  198 | }
  199 | 
  200 | export async function submitButton(page) {
  201 |   const submitButton = page.getByRole("button", { name: "submit" });
  202 |   await expect(submitButton).toBeVisible();
> 203 |   await submitButton.click({ timeout: 3000 });
      |                      ^ Error: locator.click: Target page, context or browser has been closed
  204 | }
  205 | 
  206 | export async function selectCountry(page) {
  207 |   const select = page.getByRole("combobox", { name: "Select Country" });
  208 |   await select.click();
  209 |   await countryGenerator(page, select, 1);
  210 |   await dropdownSelectOnly(page, select);
  211 | }
  212 | 
  213 | export async function selectState(page) {
  214 |   const state = page.getByRole("combobox", { name: "Select State" });
  215 |   await state.click();
  216 |   await dropdownSelectOnly(page, state);
  217 | }
  218 | 
  219 | export async function selectCity(page) {
  220 |   const city = page.getByRole("combobox", { name: "Select City" });
  221 |   await city.click();
  222 |   await dropdownSelectOnly(page, city);
  223 | }
  224 | 
  225 | export async function selectCommunity(page) {
  226 |   const community = page.getByRole("combobox", { name: "Select Community" });
  227 |   await community.click();
  228 |   await dropdownSelectOnly(page, community);
  229 | }
  230 | 
  231 | export async function selectSubCommunity(page) {
  232 |   const subCommunity = page.getByRole("combobox", {
  233 |     name: "Select Sub Community",
  234 |   });
  235 |   await subCommunity.click();
  236 |   await dropdownSelectOnly(page, subCommunity);
  237 | }
  238 | 
  239 | export async function uploadFile(page, locator) {
  240 |   // await locator.click();
  241 |   await locator.setInputFiles("C:\\Users\\umar\\Downloads\\scanner.png");
  242 | }
  243 | 
  244 | export async function selectlatlang(page) {
  245 |   const lat = page.getByPlaceholder("Enter latitude");
  246 |   await randomIntGenerator(page, lat);
  247 |   const long = page.getByPlaceholder("Enter longitude");
  248 |   await randomIntGenerator(page, long);
  249 | }
  250 | 
  251 | export async function fetchElementValue(page, locator) {
  252 |   const elementValue = await locator.inputValue();
  253 |   console.log("Input Value: ", elementValue);
  254 | }
  255 | 
  256 | export async function mandatorycountryValidation(page) {
  257 |   await submitButton(page); //Submitting Empty Form to check Validations
  258 |   const country = page.getByText("Select Country *");
  259 |   //Validating the Required Fields b
  260 |   await expect(country).toHaveClass(/Mui error Mui-required/);
  261 | }
  262 | 
  263 | export async function mandatoryfieldsValidationCustom(page, locator) {
  264 |   await submitButton(page); //Submitting Empty Form to check Validations
  265 |   //Validating the Required Fields by classes
  266 |   await expect(locator).toHaveClass(/Mui-required/);
  267 | }
  268 | 
  269 | export async function dropdownSelectfromLast(page, locator) {
  270 |   await page.waitForTimeout(1000);
  271 |   await page.keyboard.press("ArrowUp");
  272 | 
  273 |   await locator.press("Enter");
  274 | }
  275 | 
  276 | export async function tillLegal(page) {
  277 |   const legalOption = page.getByRole("button", { name: "Legal", exact: true });
  278 |   await expect(legalOption).toBeVisible();
  279 |   await legalOption.click();
  280 |   const licensesSection = page.getByRole("button", { name: "Licenses" });
  281 |   await expect(licensesSection).toBeVisible();
  282 |   const certificatesSection = page.getByRole("button", { name: "Certificate" });
  283 |   await expect(certificatesSection).toBeVisible();
  284 |   const legalConditionSection = page.getByRole("button", {
  285 |     name: "Legal condition",
  286 |   });
  287 |   await expect(legalConditionSection).toBeVisible();
  288 | }
  289 | 
  290 | export async function mandatoryFields(page, locator) {
  291 |   await submitButton(page); //Submitting Empty Form to check Validations
  292 |   const childErrorClass = await locator.locator(".Mui-required");
  293 |   await expect(childErrorClass).toBeVisible();
  294 | }
  295 | 
  296 | export async function tillSettingsAccounts(page) {
  297 |   const accountOption = page.getByRole("button", {
  298 |     name: "Account",
  299 |     exact: true,
  300 |   });
  301 |   await expect(accountOption).toHaveText("Account");
  302 |   await accountOption.click();
  303 |   const companyIndustryOption = page.getByRole("button", {
```