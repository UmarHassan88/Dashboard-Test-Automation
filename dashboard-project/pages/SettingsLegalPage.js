import { expect } from "@playwright/test";
import { SettingsPage } from "./SettingsPage.js";
import {
  dropdownSelectOnly,
  dropdownSelect,
  randomStringGenerator,
  submitButton,
  mandatoryFields,
  mandatoryfieldsValidationCustom,
  selectCountry,
  uploadFile,
} from "../utils/helpers.js";

export class SettingsLegalPage extends SettingsPage {
  constructor(page) {
    super(page);
  }

  async navigateToLicenses() {
    await this.navigateToLegalSettings();
    const licenseOption = this.page.getByRole("button", { name: "Licenses" });
    await expect(licenseOption).toBeVisible();
    await licenseOption.click();
  }

  async createLicense() {
    await this.navigateToLicenses(); 
    console.log("Landed on Licenses Page");
    const createLicensebutton = this.page.getByRole("button", {
      name: "create License",
    });
    await expect(createLicensebutton).toBeVisible();
    await createLicensebutton.click();
    console.log("Adding a new License");

    // Verifying Mandatory Fields
    console.log("Verifying Mandatory Fields");
    const licenseNameMandCheck = await this.page.getByText("License Name *");
    await mandatoryfieldsValidationCustom(this.page, licenseNameMandCheck);

    // Filling the Form
    const licenseName = this.page.getByRole("textbox", {
      name: "Enter license Name",
      exact: true,
    });
    await randomStringGenerator(this.page, licenseName);
    await selectCountry(this.page);

    const state = this.page.getByRole("combobox", { name: "Select State" });
    await state.click();
    await dropdownSelectOnly(this.page, state);

    const companyIndustry = this.page.getByRole("combobox", {
      name: "Please Select Company Industry",
    });
    await companyIndustry.click();
    await dropdownSelectOnly(this.page, companyIndustry);

    const companyType = this.page.getByRole("combobox", {
      name: "Please Select Company Type",
    });
    await companyType.click();
    await dropdownSelectOnly(this.page, companyType);

    await submitButton(this.page);

    const licenseinputValue = await licenseName.inputValue();
    console.log("License to be Verified: ", licenseinputValue);

    // Now verifying the Added License
    // await this.page.waitForTimeout(3000);
    await this.page.reload();
    const verifyLicense = this.page.getByRole("cell", { name: licenseinputValue });
    const extractLicenseValue = await verifyLicense.innerText();

    await expect(verifyLicense).toBeVisible();
    if (licenseinputValue === extractLicenseValue) {
      console.log("License Added is Verified Successfully!");
    } else {
      console.log("License Verification Failed!");
    }
  }

  async navigateToCertificates() {
    await this.navigateToLegalSettings();
    const certificateOption = this.page.getByRole("button", { name: "Certificate" });
    await expect(certificateOption).toBeVisible();
    await certificateOption.click();
  }

  async createCertificate() {
    await this.navigateToCertificates();
    console.log("Landed on Certificate Page");
    const createCertificatebutton = this.page.getByRole("button", {
      name: "create Certificate",
    });
    await expect(createCertificatebutton).toBeVisible();
    await createCertificatebutton.click();
    console.log("Adding a new Certificate");

    // Verifying Mandatory Fields
    const certificatenameMandCheck = await this.page.getByTestId("name");
    await mandatoryFields(this.page, certificatenameMandCheck);
    console.log("---Mandatory Field Validations Check Passed!---");

    // Filling the Form
    const certificateName = this.page.getByRole("textbox", {
      name: "Enter certitfacte Name",
    });
    await randomStringGenerator(this.page, certificateName);

    const certificateNamear = this.page.getByRole("textbox", {
      name: "Enter certificate Name AR",
    });
    await randomStringGenerator(this.page, certificateNamear);

    const individualType = this.page.getByRole("combobox", {
      name: "Please Selectindividual type",
    });
    await individualType.click();
    await dropdownSelect(this.page, individualType, 2);

    const country = this.page.getByRole("combobox", { name: "Select Country" });
    await country.click();
    await dropdownSelect(this.page, country, 1);

    const generalLicense = this.page.getByRole("checkbox", {
      name: "General License",
    });
    await generalLicense.check();

    const serviceArea = this.page.getByRole("combobox", { name: "service area" });
    await expect(serviceArea).toHaveClass(/Mui-disabled/);
    console.log("Disabled Checked");

    await this.page.waitForTimeout(1000);
    await generalLicense.uncheck();
    await serviceArea.click();
    await dropdownSelect(this.page, serviceArea, 3);

    const serviceExpertise = this.page.getByRole("combobox", {
      name: "Please Select service",
    });
    await serviceExpertise.click();
    await dropdownSelect(this.page, serviceExpertise, 2);

    const infoMessage = this.page.getByRole("textbox", { name: "Enter info message" });
    await infoMessage.fill("This is certificate info message");

    const mandatoryCertificate = this.page.getByRole("checkbox", {
      name: "Mandatory certificate",
    });
    await mandatoryCertificate.check();

    await submitButton(this.page);
    console.log("New Certificate Added Successfully");

    // Verifying if the Certificate is added successfully
    console.log("---Verifying the added Certificate---");
    const certificateInputValue = await certificateName.inputValue();
    console.log("Certificate Name to be Verified: ", certificateInputValue);
    await this.page.waitForTimeout(4000);
    await this.page.reload();
    const addedCertificate = this.page.getByRole("cell", {
      name: certificateInputValue,
      exact: true,
    });
    await expect(addedCertificate).toBeVisible();
    console.log("Added Certificate Verified Successfully!");
  }

  async navigateToLegalCondition() {
    await this.navigateToLegalSettings();
    const legalConditionSection = this.page.getByRole("button", {
      name: "Legal condition",
    });
    await expect(legalConditionSection).toBeVisible();
    await legalConditionSection.click();
  }

  async createLegalCondition() {
    await this.navigateToLegalCondition();
    console.log("Landed on Legal Condition Page");
    const createLegalConditionbutton = this.page.getByRole("button", {
      name: "create Legal conditions",
    });
    await expect(createLegalConditionbutton).toBeVisible();
    await createLegalConditionbutton.click();
    console.log("Adding a new Legal Condition");

    const { mandatoryfieldsValidationCustom, dropdownSelect, selectCountry, uploadFile, submitButton } = await import("../utils/helpers.js");

    // Verifying Mandatory Fields
    const legalCondMandCheck = await this.page.getByText("Legal Condition Title *");
    await mandatoryfieldsValidationCustom(this.page, legalCondMandCheck);
    const fileUploadMandCheck = await this.page.getByText("Upload File *");
    await mandatoryfieldsValidationCustom(this.page, fileUploadMandCheck);

    console.log("---Mandatory Field Validations Check Passed!---");
    const accountType = this.page.getByRole("combobox", {
      name: "Please Select Account Type",
    });
    await accountType.click();
    await dropdownSelect(this.page, accountType, 1);
    const accountTypeValue = await accountType.inputValue();
    console.log("Selected Account Type: ", accountTypeValue);

    await selectCountry(this.page);

    const serviceExpertise = this.page.getByRole("combobox", {
      name: "Select Service Expertise",
    });
    await serviceExpertise.click();
    await dropdownSelect(this.page, serviceExpertise, 2);

    const legalConditionTitle = this.page.getByRole("textbox", {
      name: "Enter Legal Condition Title",
      exact: true,
    });
    await legalConditionTitle.fill("Test Legal Condition Title");

    const legalConsitionTitleAR = this.page.getByRole("textbox", {
      name: "Enter Legal Condition Title AR",
    });
    await legalConsitionTitleAR.fill("اختبار عنوان الشرط القانوني");

    const fileUpload = this.page.getByRole("button", { name: "Choose File" });
    await uploadFile(this.page, fileUpload);

    const legalParagraph = this.page.getByRole("textbox", {
      name: "Enter Legal conditions",
    });
    await legalParagraph.fill("These are the legal conditions in English.");

    const infoMessage = this.page.getByRole("textbox", { name: "Enter info message" });
    await infoMessage.fill("This is an informational message in English.");

    await submitButton(this.page);
    console.log("New Legal Condition Added Successfully!");

    await this.page.waitForTimeout(4000);
    await this.page.reload();

    console.log("Verifying the Added Legal Condition in the List");
    const addedaccountType = this.page
      .getByRole("cell", { name: accountTypeValue })
      .first();
    await expect(addedaccountType).toBeVisible();
    console.log(
      "Added Legal Condition for the Account Type Verified in the List Successfully!"
    );
  } 
}