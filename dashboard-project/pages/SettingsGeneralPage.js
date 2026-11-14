import { expect } from "@playwright/test";
import { SettingsPage } from "./SettingsPage.js";
import {
  dropdownSelectOnly,
  randomIntGenerator,
  randomStringGenerator,
  submitButton,
  mandatoryfieldsValidationCustom,
  selectCountry,
  selectState,
  selectCity,
  selectCommunity,
  selectSubCommunity,
  selectlatlang,
  mandatoryfieldValidation,
  countryGenerator,
  tillGeneralSettings,
  fetchElementValue,
  uploadFile,
} from "../utils/helpers.js";

export class SettingsGeneralPage extends SettingsPage {
  constructor(page) {
    super(page);
  }

  async navigateToLocations() {
    await this.navigateToGeneralSettings();
  }

  async navigateToCountry() {
    await this.navigateToLocations();
    const countryOption = this.page.getByRole("button", { name: "Country" });
    await countryOption.click();
    const addCountry = this.page.getByRole("button", { name: "Add Country" });
    await expect(addCountry).toBeVisible();
    await addCountry.click();
  }

  async createCountry() {
    await this.navigateToCountry();
    const countryName = this.page.getByRole("textbox", {
      name: "Enter Country name",
    });
    await expect(countryName).toBeVisible();
    await countryGenerator(this.page, countryName, 3);
    const countryValue =
      (await countryName.inputValue()) +
      Math.random().toString(36).substring(2, 5);
    await countryName.fill(countryValue);
    const countryValueVerify = await countryName.inputValue();
    console.log("Country Name to be Added: ", countryValueVerify);

    const countryNameAR = this.page.getByRole("textbox", {
      name: "Insert Country",
    });
    await randomStringGenerator(this.page, countryNameAR);

    const countryCode = this.page.getByPlaceholder("Enter Country Code");
    await randomIntGenerator(this.page, countryCode);
    await fetchElementValue(this.page, countryCode);

    const alphaCode = this.page.getByRole("textbox", {
      name: "Enter Alpha Code 2",
    });
    await randomIntGenerator(this.page, alphaCode);

    const isoCode = this.page.getByRole("textbox", { name: "Enter ISO Code" });
    await randomIntGenerator(this.page, isoCode);

    const currency = this.page.getByRole("combobox", {
      name: "Select a currency",
    });
    await currency.click();
    await dropdownSelectOnly(this.page, currency);

    await this.page.evaluate(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    });

    const countryFlag = this.page.getByRole("button", { name: "Choose File" });
    await countryFlag.setInputFiles("C:\\Users\\umar\\Downloads\\scannerr.png");
    await fetchElementValue(this.page, countryFlag);

    const submitBtn = this.page.getByRole("button", { name: "submit" });
    await submitBtn.click();
    console.log("Country is Added!");

    // Verifying the Added Country
    await this.page.waitForTimeout(1000);
    await this.page.reload();
    const verifyCountry = this.page.getByRole("cell", {
      name: countryValueVerify,
    });
    await expect(verifyCountry).toBeVisible();
    console.log("Country is Verified Successfully!");

    // await this.page.waitForTimeout(2000);
    const backButton = this.page.getByRole("link", { name: "Manage Country" });
    await backButton.click();
  }

  async navigateToState() {
    await this.navigateToLocations();
    const stateOption = this.page.getByRole("button", { name: "State" });
    await expect(stateOption).toBeVisible();
    await stateOption.click();
  }

  async createState() {
    await this.navigateToState();
    console.log("Asserting Add State Page");
    const addState = this.page.getByRole("button", { name: "Add State" });
    await expect(addState).toBeVisible();
    await addState.click();

    console.log("Asserting the Add State pop up");
    const addStatePopUp = this.page.getByRole("heading", { name: "Add State" });
    await expect(addStatePopUp).toBeVisible();

    const mandatoryField = this.page.getByText("Country *");
    await mandatoryfieldsValidationCustom(this.page, mandatoryField);

    await selectCountry(this.page);
    const stateName = this.page.locator('input[name="state_name"]');
    await randomStringGenerator(this.page, stateName);

    const stateNameAR = this.page.locator('input[name="state_name_arabic"]');
    await randomStringGenerator(this.page, stateNameAR);

    const statenameValueVerify = await stateName.inputValue();
    console.log("State Name to be Verified: ", statenameValueVerify);

    await selectlatlang(this.page);
    await submitButton(this.page);

    // Verifying the Added State
    // await this.page.waitForTimeout(3000);
    await this.page.reload();
    const verifyState = await this.page.getByRole("cell", {
      name: statenameValueVerify,
    });
    await expect(verifyState).toBeVisible();
    console.log("New State is Verified Successfully!");

    const backButton = this.page.getByRole("link", { name: "Manage State" });
    await backButton.click();
  }

  async navigateToCity() {
    await this.navigateToLocations();
    const citySection = this.page.getByRole("button", { name: "City" });
    await expect(citySection).toBeVisible();
    await citySection.click();
  }

  async createCity() {
    await this.navigateToCity();
    const addCity = this.page.getByRole("button", { name: "Add City" });
    await expect(addCity).toBeVisible();
    await addCity.click();

    console.log("Selecting the Country via Invoked Method");
    const countryMand = this.page.getByText("Select Country *");
    await expect(countryMand).toHaveClass(/Mui-required/);

    await selectCountry(this.page);
    await selectState(this.page);

    const createCity = this.page.getByRole("textbox", {
      name: "City Name",
      exact: true,
    });
    await randomStringGenerator(this.page, createCity);
    const cityInput = await createCity.inputValue();

    const createCityAR = this.page.getByRole("textbox", {
      name: "City Name Arabic",
    });
    await randomStringGenerator(this.page, createCityAR);

    const upload = this.page.getByRole("button", { name: "Choose File" });
    await uploadFile(this.page, upload);

    const description = this.page.getByRole("textbox", { name: "Description" });
    await description.fill("This is test description");

    await selectlatlang(this.page);
    await submitButton(this.page);

    console.log("---Verifying the City---");
    console.log("City to Verify:", cityInput);
    // await this.page.waitForTimeout(2000);
    const verifyCity = this.page.getByRole("cell", { name: cityInput });
    await expect(verifyCity).toBeVisible();
    console.log("The city is Verified sucessfully!");
  }

  async navigateToCommunity() {
    await this.navigateToLocations();
    const community = this.page.getByRole("button", {
      name: "Community",
      exact: true,
    });
    await expect(community).toBeVisible();
    await community.click();
  }

  async createCommunity() {
    await this.navigateToCommunity();
    const addCommunity = this.page.getByRole("button", {
      name: "Add Community",
    });
    await expect(addCommunity).toBeVisible();
    await addCommunity.click();

    console.log("Asserting the Add Community Pop up");
    const addCommunityHeadAssert = this.page.getByRole("heading", {
      name: "Add Community",
    });
    await expect(addCommunityHeadAssert).toBeVisible();

    console.log("Invoking the Methods to Add Country, State and City ...");
    const mandatoryField = this.page.getByText("Country *");
    await mandatoryfieldsValidationCustom(this.page, mandatoryField);

    await selectCountry(this.page);
    await selectState(this.page);
    await selectCity(this.page);

    const comm = this.page.getByRole("textbox", {
      name: "Community Name",
      exact: true,
    });
    const commAR = this.page.getByRole("textbox", {
      name: "Community Name Arabic",
    });
    await randomStringGenerator(this.page, comm);
    await randomStringGenerator(this.page, commAR);

    await selectlatlang(this.page);
    await submitButton(this.page);

    const inputValue = await comm.inputValue();
    console.log("Community Name to be Verified: ", inputValue);

    // Verifying the Added Community
    // await this.page.waitForTimeout(3000);
    await this.page.reload();
    const verifyCommunity = this.page.getByRole("cell", { name: inputValue });
    await expect(verifyCommunity).toBeVisible();
    console.log("New Community is Verified Successfully!");
  }

  async navigateToSubCommunity() {
    await this.navigateToLocations();
    const subCommunityOption = this.page.getByRole("button", {
      name: "Sub Community",
    });
    await subCommunityOption.click();
  }

  async createSubCommunity() {
    await this.navigateToSubCommunity();
    await expect(this.page).toHaveURL(
      "http://192.168.1.203:3000/en/dashboard/settings/general"
    );
    console.log("Navigating to the Sub community Settings");

    const addSubcommunity = this.page.getByRole("button", {
      name: "Add Sub Community",
    });

    await addSubcommunity.click();
    const countryMandatory = this.page.getByText("Country *");
    await mandatoryfieldsValidationCustom(this.page, countryMandatory);

    const countrySelect = this.page.getByRole("combobox", {
      name: "Select Country",
    });
    await countrySelect.click();
    await countryGenerator(this.page, countrySelect, 1);
    await dropdownSelectOnly(this.page, countrySelect);

    await selectState(this.page);
    await selectCity(this.page);
    await selectCommunity(this.page);

    const subCommunityfield = this.page.getByRole("textbox", {
      name: "Sub Community",
      exact: true,
    });
    const subCommunityfieldAR = this.page.getByRole("textbox", {
      name: "Sub Community Arabic",
    });
    await randomStringGenerator(this.page, subCommunityfield);
    await randomStringGenerator(this.page, subCommunityfieldAR);

    await selectlatlang(this.page);
    await submitButton(this.page);

    console.log("Sub community is Added Successfully!");
    const subCommunityinput = await subCommunityfield.inputValue();
    console.log("Sub community to be Verified: ", subCommunityinput);

    // await this.page.waitForTimeout(3000);
    await this.page.reload();
    const verifySubCommunity = this.page.getByRole("cell", {
      name: subCommunityinput,
    });
    await expect(verifySubCommunity).toBeVisible();
    console.log("Added Sub community is Verified Successfully!");
  }

  async navigateToPropertyLocation() {
    await this.navigateToLocations();
    const propertyLocationTab = this.page.getByRole("button", {
      name: "Property Location",
    });
    await expect(propertyLocationTab).toBeVisible();
    await propertyLocationTab.click();
  }

  async createPropertyLocation() {
    await this.navigateToPropertyLocation();
    const addPropertyLocationButton = this.page.getByRole("button", {
      name: "Add Property Location",
    });
    await expect(addPropertyLocationButton).toBeVisible();
    await addPropertyLocationButton.click();

    await mandatoryfieldValidation(this.page);

    const countryField = this.page.getByRole("combobox", {
      name: "Select Country",
    });
    await countryField.click();
    await countryGenerator(this.page, countryField, 1);
    await dropdownSelectOnly(this.page, countryField);

    await selectState(this.page);
    await selectCity(this.page);
    await selectCommunity(this.page);
    await selectSubCommunity(this.page);

    const propertyName = this.page.getByRole("textbox", {
      name: "Property Name",
      exact: true,
    });
    await randomStringGenerator(this.page, propertyName);

    const propertyNameAR = this.page.getByRole("textbox", {
      name: "Property Name Arabic",
      exact: true,
    });
    await randomStringGenerator(this.page, propertyNameAR);

    const propertyLocation = this.page.getByRole("textbox", {
      name: "https://www.google.com/maps/",
    });
    await propertyLocation.fill(
      "https://www.google.com/maps/place/Eiffel+Tower/@48.8583701,2.2922926,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66efda8eb6f8f:0x423d9521f3e4e4!8m2!3d48.8583701!4d2.2944813"
    );

    await selectlatlang(this.page);
    await submitButton(this.page);
  }

  async navigateToCurrency() {
    await this.navigateToLocations();
    const manageCurrrencyOption = this.page.getByRole("button", {
      name: "Manage currency",
    });
    await expect(manageCurrrencyOption).toBeVisible();
    await manageCurrrencyOption.click();
  }

  async createCurrency() {
    await this.navigateToCurrency();
    const addCurrencyButton = this.page.getByRole("button", {
      name: "Add Currency",
    });
    await expect(addCurrencyButton).toContainText("Add");
    await addCurrencyButton.click();

    const currencyMandatoryField = this.page.getByText("Currency name *");
    await mandatoryfieldsValidationCustom(this.page, currencyMandatoryField);

    const currencyCodeField = this.page.getByText("Currency Code *");
    await mandatoryfieldsValidationCustom(this.page, currencyCodeField);

    const currencyName = this.page.getByRole("textbox", {
      name: "Enter Currency name",
    });
    const randomString = Math.random().toString(36).substring(2, 7);
    await currencyName.fill(`Currency${randomString}`);

    const currencyCode = this.page.getByRole("textbox", {
      name: "Enter Currency Code",
    });
    await randomIntGenerator(this.page, currencyCode);
    await submitButton(this.page);
  }

  async navigateToDocumentCategories() {
    await this.navigateToLocations();
    const documentCategoriesOption = this.page.getByRole("button", {
      name: "Document Categories",
    });
    await expect(documentCategoriesOption).toBeVisible();
    await documentCategoriesOption.click();
  }

  async createDocumentCategory() {
    await this.navigateToDocumentCategories();
    const addDocumentCategoryButton = this.page.getByRole("button", {
      name: "Add Document Category",
    });
    await expect(addDocumentCategoryButton).toContainText("Document");
    await addDocumentCategoryButton.click();

    const documentCategorymandatoryField = this.page.getByText(
      "Document Category *"
    );
    await mandatoryfieldsValidationCustom(
      this.page,
      documentCategorymandatoryField
    );

    const documentCategoryField = this.page.getByRole("textbox", {
      name: "Enter Document Category",
      exact: true,
    });
    await randomStringGenerator(this.page, documentCategoryField);

    const documentCategoryFieldAR = this.page.getByRole("textbox", {
      name: "Enter Document Category Arabic",
    });
    await randomStringGenerator(this.page, documentCategoryFieldAR);

    const sizeLimit = this.page.getByPlaceholder("Enter Document Size Limit");
    await sizeLimit.fill("40");
    await submitButton(this.page);
  }

  async navigateToLanguage() {
    await this.navigateToLocations();
    const languageOption = this.page.getByRole("button", { name: "Language" });
    await expect(languageOption).toBeVisible();
    await languageOption.click();
  }

  async createLanguage() {
    await this.navigateToLanguage();
    const addLanguage = this.page.getByRole("button", { name: "Add Language" });
    await expect(addLanguage).toBeVisible();
    await addLanguage.click();

    const mandatoryfieldTitle = this.page.getByText("Language Title *");
    await mandatoryfieldsValidationCustom(this.page, mandatoryfieldTitle);

    const languagetitleField = this.page.getByRole("textbox", {
      name: "Please enter title",
    });
    await randomStringGenerator(this.page, languagetitleField);

    const languageTitleAR = this.page.getByRole("textbox", {
      name: "أدخل العنوان بالعربية",
    });
    await randomStringGenerator(this.page, languageTitleAR);

    const alphaCodeField = this.page.getByRole("textbox", {
      name: "Enter Language Code",
    });
    await randomIntGenerator(this.page, alphaCodeField);

    const flagIcon = this.page.getByRole("button", { name: "Choose File" });
    await flagIcon.setInputFiles("C:\\Users\\umar\\Downloads\\scannerr.png");
    await submitButton(this.page);
  }

  async navigateToMediaCategory() {
    await this.navigateToLocations();
    const mediaCategory = this.page.getByRole("button", {
      name: "Media Category",
    });
    await expect(mediaCategory).toContainText("Media");
    await mediaCategory.click();
  }

  async createMediaCategory() {
    await this.navigateToMediaCategory();
    console.log("Clicked Media Category");
    const addCat = this.page.getByRole("button", { name: "Add Category" });
    await expect(addCat).toBeVisible();
    await addCat.click();

    console.log("Applying the Mandatory Check");
    const categoryMand = this.page.getByText("Category EN *");
    await mandatoryfieldsValidationCustom(this.page, categoryMand);

    console.log("Filling the Category Fields Now");
    const categoryEN = this.page.getByRole("textbox", {
      name: "Enter Category EN",
    });
    await expect(categoryEN).toBeVisible();
    await randomStringGenerator(this.page, categoryEN);
    const categoryENInput = await categoryEN.inputValue();

    const categoryAR = this.page.getByRole("textbox", {
      name: "Enter category (AR)",
    });
    await randomStringGenerator(this.page, categoryAR);

    const mediaLimit = this.page.getByPlaceholder("Enter Media Size Limit");
    const validLimit = "49";
    const invalidLimit = "51";
    await mediaLimit.fill(invalidLimit);

    try {
      console.log("Filling the Invalid Size Limit...");
      await submitButton(this.page);
    } catch {
      const error = this.page.getByText("media_size_limit should be");
      await expect(error).toBeVisible();
    }

    const successMess = this.page.getByText("Created successfully");
    console.log("Filling the Valid Size Limit...");
    await mediaLimit.fill("");
    await mediaLimit.fill(validLimit);
    const mediaLimitinput = await mediaLimit.inputValue();
    await submitButton(this.page);
    await expect(successMess).toBeVisible();

    console.log("Verifying the Added Category...");
    console.log("Category to Verify: ", categoryENInput);
    // await this.page.waitForTimeout(2000);
    await this.page.reload();
    const verifyCat = await this.page.getByRole("cell", {
      name: categoryENInput,
    });
    await expect(verifyCat).toBeVisible();
    console.log("Category is Verified Successfully!");

    // await this.page.waitForTimeout(1000);
    console.log("Editing the Fields and Viewing");
    const edit = this.page
      .locator(".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorInfo")
      .first();
    await expect(edit).toBeVisible();
    await edit.click();
    await expect(categoryEN).toHaveValue(categoryENInput);
    await expect(mediaLimit).toHaveValue(validLimit);
    console.log("The values on edit are showing as expected!");
  }
}
