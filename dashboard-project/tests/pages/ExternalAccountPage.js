import { expect } from "@playwright/test";
import {
  dropdownSelectOnly,
  dropdownSelect,
  tillAccounts,
  submitButton,
  randomStringGenerator,
  randomonlystringGenerator,
  fillLocationDetails,
  uploadFile,
} from "../utils/helpers.js";

export class ExternalAccountPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToCreateAccount() {
    await tillAccounts(this.page);
  }

  async selectAccountType(type) {
    const accountTypeOption = this.page.getByRole("option", { name: type });
    await expect(accountTypeOption).toBeVisible();
    await accountTypeOption.click();
    await this.page.getByRole("button", { name: "submit" }).click();
  }

  async createIndividualAccount() {
    await this.navigateToCreateAccount();
    await this.selectAccountType("Individual");

    // Assert for the Individual Type Form and the Mandatory fields
    const requiredFields = await this.page.locator("label.Mui-error.Mui-required");
    const count = await requiredFields.count();
    console.log(`Found ${count} required fields:`);
    for (let i = 0; i < count; i++) {
      const labelText = await requiredFields.nth(i).innerText();
      console.log(`- ${labelText}`);
    }

    await this.fillIndividualDetails();
    await this.fillServiceInformation();
    await this.fillSocialMediaDetails();
    await this.fillBankDetails();
  }

  async fillIndividualDetails() {
    const individualName = this.page.getByRole("combobox", {
      name: "Please Select Individual Type",
    });
    await individualName.click();
    const freelancerOption = this.page.getByRole("option", { name: "freelancer" });
    await expect(freelancerOption).toBeVisible();
    await freelancerOption.click();

    const randomString = Math.random().toString(36).substring(2, 5);
    const userName = this.page.getByRole("textbox", { name: "Enter Username" });
    await userName.fill(`testUser${randomString}`.toLowerCase());

    const firstName = this.page
      .getByTestId("first-name")
      .getByRole("textbox", { name: "Enter First Name" });
    await firstName.fill(`Test${randomString}`);

    const lastName = this.page
      .getByTestId("last-name")
      .getByRole("textbox", { name: "Enter Last Name" });
    await lastName.fill(`User${randomString}`);

    const email = this.page.getByRole("textbox", { name: "Admin email address" });
    await email.fill(`TestUser${randomString}@example.com`);

    const contactNum = this.page.getByPlaceholder("Enter Contact Phone no");
    await contactNum.fill(`1234567890`);

    // Uploading the Profile Picture
    const profilePictureUpload = this.page
      .getByTestId("profile-picture")
      .getByRole("button", { name: "Choose File" });
    await profilePictureUpload.setInputFiles(
      "C:\\Users\\umar\\Downloads\\scannerr.png"
    );
    // await this.page.waitForTimeout(1000);

    const about = this.page.getByRole("textbox", { name: "Description.." });
    await about.fill(
      "This is a test individual account created via automated Playwright script."
    );
  }

  async fillServiceInformation() {
    const serviceExpertise = this.page.getByRole("combobox", {
      name: "Select Service Expertise",
    });
    await serviceExpertise.click();
    const serviceExpertiseOptions = this.page.getByRole("option", {
      name: "Sale's Consultant",
    });
    await expect(serviceExpertiseOptions).toBeVisible();
    await serviceExpertiseOptions.click();

    const countrySelect = this.page.getByRole("combobox", { name: "Select Country" });
    await countrySelect.click();
    await this.page.locator('ul[role="listbox"] >> li').nth(0).click();

    const serviceArea = this.page.getByRole("combobox", {
      name: "Select Service Area",
    });
    await serviceArea.click();    
    await this.page.locator('ul[role="listbox"] >> li').nth(2).click();


    const languages = this.page.getByRole("combobox", { name: "Select Languages" });
    await languages.click();
    await this.page.locator('ul[role="listbox"] >> li').nth(2).click();

    const experienceSince = this.page.getByRole("textbox", { name: "MM/DD/YYYY" });
    await experienceSince.fill("01/01/2015");
  }

  async fillSocialMediaDetails() {
    const platformName = this.page.getByRole("combobox", {
      name: "Select platform name",
    });
    await platformName.click();
    const platformFacebook = this.page.getByRole("option", { name: "Facebook" });
    await expect(platformFacebook).toBeVisible();
    await platformFacebook.click();

    const platformURL = this.page.getByRole("textbox", { name: "Enter paltform url" });
    await platformURL.fill("https://www.facebook.com/testuser");
    await expect(this.page.getByTestId("add-platform")).toBeVisible();
  }

  async fillBankDetails() {
    const bankName = this.page.getByRole("textbox", { name: "Bank Name" });
    await bankName.fill("Test Bank");

    const countrySelect = this.page.getByRole("combobox", {
      name: "Please a Country",
    });
    await countrySelect.click();
    await dropdownSelectOnly(this.page, countrySelect);

    const currencies = this.page.getByRole("combobox", { name: "Please a Currency" });
    await currencies.click();
    await dropdownSelect(this.page, currencies, 3);
  }

  async createCompanyAccount() {
    await this.navigateToCreateAccount();
    await this.selectAccountType("Company");

    // Validate fields
    await this.validateCompanyFields();

    // Fill company details
    await this.fillCompanyDetails();
    await this.fillCompanyPresentation();
    await this.fillCompanyAdminContact();
  }

  async validateCompanyFields() {
    console.log("Applying the Fields Validation...");
    const usernameField = this.page.locator('[data-testid="username"] input');
    await usernameField.fill("");
    await this.page.getByRole("button", { name: "Submit" }).click();

    const usernameContainer = this.page.locator('[data-testid="username"]');
    await expect(usernameContainer.locator("label")).toHaveClass(/Mui-error/);

    const errorMessage = usernameContainer.locator("p.MuiFormHelperText-root");
    await expect(errorMessage).toHaveText(
      "Username should contain at least 3 characters"
    );

    await usernameField.fill("ab");
    await this.page.getByRole("button", { name: "Submit" }).click();
    await expect(errorMessage).toHaveText(
      "Username should contain at least 3 characters"
    );

    await usernameField.fill("abc");
    await this.page.getByRole("button", { name: "Submit" }).click();

    const currentURL = this.page.url();
    const expectedURL = "http://192.168.1.203:3000/en/dashboard/accounts/create";
    await expect(currentURL).toEqual(expectedURL);
    await expect(currentURL).toContain("/dashboard/accounts/create");
  }

  async fillCompanyDetails() {
    console.log("Filling the Account Company Details...");
    const companyName = this.page.getByRole("textbox", {
      name: "Enter a company name",
    });
    await randomStringGenerator(this.page, companyName);
    const companynameInput = await companyName.inputValue();

    const companyIndustry = this.page.getByRole("combobox", {
      name: "Choose Industry",
    });
    await companyIndustry.click();
    const industryOption = this.page.getByRole("option", { name: "Marko" });
    await expect(industryOption).toBeVisible();
    await dropdownSelect(this.page, companyIndustry, 1);
    await expect(companyIndustry).toHaveValue("Real Estate");

    const companyType = this.page.getByRole("combobox", {
      name: "Please Select Company Type",
    });
    await companyType.click();
    await dropdownSelect(this.page, companyType, 2);
    await expect(companyType).toHaveValue("Broker Company");

    const companyActivity = this.page.getByRole("combobox", {
      name: "Choose a company activity",
    });
    await companyActivity.click();
    await dropdownSelect(this.page, companyActivity, 1);
    await fillLocationDetails(this.page);
  }

  async fillCompanyPresentation() {
    console.log("Filling the Company Presentation Details...");
    // await this.page.waitForTimeout(2000);
    const emailAddress = await this.page.getByRole("textbox", {
      name: "Email address",
      exact: true,
    });
    const randomInt = Math.random(1, 10) * 10;
    const emailValue = "umarhassanzia88+test" + randomInt + "@gmail.com";
    await emailAddress.fill(emailValue);

    const contactNo = await this.page.getByPlaceholder("Enter Phone No");
    await contactNo.fill("05067878654");

    const logoAttach = this.page
      .getByTestId("logo")
      .getByRole("button", { name: "Choose File" });
    await uploadFile(this.page, logoAttach);
  }

  async fillCompanyAdminContact() {
    console.log("Filling the Company Admin Contact Details...");
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const userName = this.page.getByRole("textbox", { name: "Enter Username" });
    await randomonlystringGenerator(this.page, userName, 2, 7);
    const userNameAssert = this.page.getByText("Username must start with a");
    await expect.soft(userNameAssert).toBeHidden();

    const lastName = await this.page.getByRole("textbox", { name: "Enter Last Name" });
    await lastName.fill("Temp");

    const adminEmail = this.page.getByRole("textbox", { name: "Admin email address" });
    const emailVal = this.page.getByText("Invalid email address");
    await expect.soft(emailVal).toBeVisible();
    await randomonlystringGenerator(this.page, adminEmail, 3, 9);
    const invalidEmailAssert = this.page.getByText("Invalid email address");
    await expect(invalidEmailAssert).toBeVisible();

    const emailInput = await adminEmail.inputValue();
    await adminEmail.fill(`${emailInput}@gmail.com`);

    const contactNumValue = "50345654545";
    const contactNum = this.page.getByPlaceholder("Enter Contact Phone no");
    await contactNum.fill(contactNumValue);

    const whatsappNo = this.page.getByPlaceholder("Enter Whats App  Number");
    await whatsappNo.fill("12345");
  }

  async submitAccount() {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await submitButton(this.page);
  }
}

