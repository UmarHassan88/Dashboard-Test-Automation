import { test, expect } from "@playwright/test";
import {
  Login,
  tillSettings,
  randomIntGenerator,
  randomStringGenerator,
  dropdownSelectOnly,
  submitButton,
  mandatoryFields,
  mandatoryfieldsValidationCustom,
  dropdownSelect,
} from "../../utils/helpers.js";

async function addCoinPricing(page) {
  await Login(page);
  await tillSettings(page);
  const financeOption = page.getByRole("button", { name: "Finance" });
  await expect(financeOption).toBeVisible();
  await financeOption.click();
  const coinsPricingOption = page.getByRole("button", {
    name: "Coins Pricing",
  });
  await expect(coinsPricingOption).toBeVisible();
  await coinsPricingOption.click();
  console.log("Landed on Coins Pricing Page");
  const createCoinprice = page.getByRole("button", {
    name: "Create Coin Price",
  });
  await expect(createCoinprice).toBeVisible();
  await createCoinprice.click();
  console.log("Adding a new Coin Pricing");
  const createFormAssert = page.getByText("Account Type", { exact: true });
  await expect(createFormAssert).toBeVisible();

  //Asserting the mandatory fields
  const subTypemandCheck = page.getByTestId("subscription_type"); //Based on Test IDs where available
  await mandatoryFields(page, subTypemandCheck);

  const countrymandCheck = page.getByText("Country *");
  await mandatoryfieldsValidationCustom(page, countrymandCheck);

  const companyIndustrymandCheck = page.getByTestId("company_industry");
  await mandatoryFields(page, companyIndustrymandCheck);

  const currencymandCheck = page.getByTestId("currency");
  await mandatoryFields(page, currencymandCheck);

  const coinPricemandCheck = page.getByText("Price For Coin *");
  await mandatoryfieldsValidationCustom(page, coinPricemandCheck);

  console.log("---Mandatory Field Validations Check Passed!---");

  //Filling the Form
  const accountTypeSelect = page.getByRole("combobox", {
    name: "Please Select Account Type",
  });
  const subscriptionTypeSelect = page.getByRole("combobox", {
    name: "Please Select Subscription",
  });

  const countrySelect = page.getByRole("combobox", { name: "Select Country" });
  const companyIndustrySelect = page.getByRole("combobox", {
    name: "Select Company Industry",
  });
  const currencySelect = page.getByRole("combobox", {
    name: "Select Currency",
  });
  const coinPriceLocator = page.getByPlaceholder("Enter Price For Coin");

  await accountTypeSelect.click();

  await dropdownSelectOnly(page, accountTypeSelect);
  await subscriptionTypeSelect.click();

  await dropdownSelectOnly(page, subscriptionTypeSelect);
  await countrySelect.click();

  await dropdownSelect(page, countrySelect, 3);
  await companyIndustrySelect.click();

  await dropdownSelect(page, companyIndustrySelect, 5);
  await currencySelect.click();
  await dropdownSelectOnly(page, currencySelect);
  await randomIntGenerator(page, coinPriceLocator);

  const coinpriceInputValue = await coinPriceLocator.inputValue();
  console.log("Coin Price to be Verified: ", coinpriceInputValue);
  await submitButton(page);
  console.log("New Coin Pricing Added Successfully");

  //Verifying the Added Coin Pricing
  await page.waitForTimeout(3000);
  await page.reload();
  const verifyaddedCoin = page
    .getByRole("cell", { name: coinpriceInputValue })
    .nth(1);
  await expect(verifyaddedCoin).toBeVisible();
  console.log("Added Coin Pricing is Verified Successfully!");
}

test("This test adds a new Coin Pricing", async ({ page }) => {
  await addCoinPricing(page);
});
