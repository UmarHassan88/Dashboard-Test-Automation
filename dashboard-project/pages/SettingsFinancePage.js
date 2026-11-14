import { expect } from "@playwright/test";
import { SettingsPage } from "./SettingsPage.js";
import {
  dropdownSelectOnly,
  dropdownSelect,
  randomIntGenerator,
  randomStringGenerator,
  submitButton,
  mandatoryFields,
  mandatoryfieldsValidationCustom,
  dropdownSelectfromLast,
} from "../utils/helpers.js";

export class SettingsFinancePage extends SettingsPage {
  constructor(page) {
    super(page);
  }

  async navigateToCoinsPricing() {
    await this.navigateToFinanceSettings();
    const coinsPricingOption = this.page.getByRole("button", {
      name: "Coins Pricing",
    });
    await expect(coinsPricingOption).toBeVisible();
    await coinsPricingOption.click();
  }

  async createCoinPricing() {
    await this.navigateToCoinsPricing();
    console.log("Landed on Coins Pricing Page");
    const createCoinprice = this.page.getByRole("button", {
      name: "Create Coin Price",
    });
    await expect(createCoinprice).toBeVisible();
    await createCoinprice.click();
    console.log("Adding a new Coin Pricing");

    const createFormAssert = this.page.getByText("Account Type", {
      exact: true,
    });
    await expect(createFormAssert).toBeVisible();

    // Asserting the mandatory fields
    const subTypemandCheck = this.page.getByTestId("subscription_type");
    await mandatoryFields(this.page, subTypemandCheck);

    const countrymandCheck = this.page.getByText("Country *");
    await mandatoryfieldsValidationCustom(this.page, countrymandCheck);

    const companyIndustrymandCheck = this.page.getByTestId("company_industry");
    await mandatoryFields(this.page, companyIndustrymandCheck);

    const currencymandCheck = this.page.getByTestId("currency");
    await mandatoryFields(this.page, currencymandCheck);

    const coinPricemandCheck = this.page.getByText("Price For Coin *");
    await mandatoryfieldsValidationCustom(this.page, coinPricemandCheck);

    console.log("---Mandatory Field Validations Check Passed!---");

    // Filling the Form
    const accountTypeSelect = this.page.getByRole("combobox", {
      name: "Please Select Account Type",
    });
    const subscriptionTypeSelect = this.page.getByRole("combobox", {
      name: "Please Select Subscription",
    });
    const countrySelect = this.page.getByRole("combobox", {
      name: "Select Country",
    });
    const companyIndustrySelect = this.page.getByRole("combobox", {
      name: "Select Company Industry",
    });
    const currencySelect = this.page.getByRole("combobox", {
      name: "Select Currency",
    });
    const coinPriceLocator = this.page.getByPlaceholder("Enter Price For Coin");

    await accountTypeSelect.click();
    await dropdownSelectOnly(this.page, accountTypeSelect);

    await subscriptionTypeSelect.click();
    await dropdownSelectOnly(this.page, subscriptionTypeSelect);

    await countrySelect.click();
    await dropdownSelect(this.page, countrySelect, 7);

    await companyIndustrySelect.click();
    await dropdownSelect(this.page, companyIndustrySelect, 6);

    await currencySelect.click();
    await dropdownSelectOnly(this.page, currencySelect);

    await randomIntGenerator(this.page, coinPriceLocator);
    const coinpriceInputValue = await coinPriceLocator.inputValue();
    console.log("Coin Price to be Verified: ", coinpriceInputValue);

    await submitButton(this.page);
    console.log("New Coin Pricing Added Successfully");

    // Verifying the Added Coin Pricing
    // await this.page.waitForTimeout(3000);
    await this.page.reload();
    const verifyaddedCoin = this.page
      .getByRole("cell", { name: coinpriceInputValue })
      .nth(1);
    await expect(verifyaddedCoin).toBeVisible();
    console.log("Added Coin Pricing is Verified Successfully!");
  }

  async navigateToTax() {
    await this.navigateToFinanceSettings();
    const taxOption = this.page.getByRole("button", { name: "Tax" });
    await expect(taxOption).toBeVisible();
    await taxOption.click();
  }

  async createTax() {
    await this.navigateToTax();
    const createTax = this.page.getByRole("button", { name: "Create Tax" });
    await expect(createTax).toBeVisible();
    await createTax.click();
    console.log("Landed on Create Tax Page");

    const countryField = this.page.getByRole("combobox", {
      name: "Select Country",
    });
    await expect(countryField).toBeVisible();

    // Asserting the mandatory fields
    await submitButton(this.page);
    const countrymandCheck = this.page.getByText("Country *");
    await mandatoryfieldsValidationCustom(this.page, countrymandCheck);

    const taxNammemandCheck = this.page.getByText("tax name *");
    await mandatoryfieldsValidationCustom(this.page, taxNammemandCheck);

    const taxPercentmandCheck = this.page.getByText("tax name value *");
    await mandatoryfieldsValidationCustom(this.page, taxPercentmandCheck);

    // Filling the Form
    await countryField.click();
    await dropdownSelectfromLast(this.page, countryField);

    const taxName = this.page.getByRole("textbox", {
      name: "Enter tax name",
      exact: true,
    });
    await randomStringGenerator(this.page, taxName);
    const taxinputValue = await taxName.inputValue();
    console.log("Tax to be Verified: ", taxinputValue);

    const taxPercent = this.page.getByPlaceholder("Enter tax name value");
    await randomIntGenerator(this.page, taxPercent);

    // Submitting the Form
    await submitButton(this.page);
    console.log("New Tax is Added Successfully!");

    await this.page.waitForTimeout(3000);
    // await this.page.waitForTimeout(3000);
    await this.page.reload();

    // Verifying the Added Tax
    const verifyTax = await this.page.getByRole("cell", {
      name: taxinputValue,
    });
    await expect(verifyTax).toBeVisible();
    console.log("Added Tax is Verified Successfully!");
  }
}
