import { expect } from "@playwright/test";
import { SettingsPage } from "./SettingsPage.js";
import { dropdownSelectOnly, submitButton, dropdownSelect, uploadFile } from "../utils/helpers.js";

export class SettingsAccountPage extends SettingsPage {
  constructor(page) {
    super(page);
  }

  async navigateToIndustry() {
    await this.navigateToAccountSettings();
    const industryButton = this.page.getByRole("button", { name: "Industry" });
    await expect(industryButton).toBeVisible();
    await industryButton.click();
  }

  async createIndustry(industryName = "Test Industry 9014") {
    await this.navigateToIndustry();
    const createIndustry = this.page.getByRole("button", { name: "create industry" });
    await expect(createIndustry).toBeVisible();
    await createIndustry.click();

    const industryNameField = this.page.getByRole("textbox", {
      name: "Enter industry Name",
      exact: true,
    });
    await industryNameField.fill(industryName);
    await submitButton(this.page);
    // await this.page.waitForTimeout(2000);
  }

  async navigateToCompanyType() {
    await this.navigateToAccountSettings();
    const companyTypeButton = this.page.getByRole("button", { name: "Company Type" });
    await expect(companyTypeButton).toBeVisible();
    await companyTypeButton.click();
  }

  async createCompanyType(industryValue = "Test Industry 9014", typeName = "Test Company Type 9014") {
    await this.navigateToCompanyType();
    const createTypeButton = this.page.getByRole("button", { name: "create type" });
    await createTypeButton.click();

    // Check assertions
    const submitBtn = this.page.getByRole("button", { name: "submit" });
    const typeNameAssert = this.page.getByText("Type Name is required");
    await submitBtn.click();
    await expect(typeNameAssert).toBeVisible();

    // Fill the Company Type Form
    const industryType = this.page.getByRole("combobox", {
      name: "Please Select Select industry",
    });
    await industryType.click();
    await industryType.fill(industryValue);
    await dropdownSelectOnly(this.page, industryType);

    const typeNameField = this.page.getByRole("textbox", {
      name: "Enter Type Name",
      exact: true,
    });
    await typeNameField.fill(typeName);
    // await this.page.waitForTimeout(1500);
    await submitBtn.click();
    // await this.page.waitForTimeout(1500);
  }

  async navigateToCompanyActivity() {
    await this.navigateToAccountSettings();
    const companyActivityButton = this.page.getByRole("button", {
      name: "Company Activity",
    });
    await expect(companyActivityButton).toBeVisible();
    await companyActivityButton.click();
  }

  async createCompanyActivity(
    industryValue = "Test Industry 9014",
    typeValue = "Test Company Type 9014",
    activityName = "Test Account Activity 9014"
  ) {
    await this.navigateToCompanyActivity();
    const createActivityButton = this.page.getByRole("button", {
      name: "create activity",
    });
    await expect(createActivityButton).toBeVisible();
    await createActivityButton.click();

    const industrySelect = this.page.getByRole("combobox", {
      name: "Please Select Select industry",
    });
    await industrySelect.click();
    await industrySelect.fill(industryValue);
    await dropdownSelectOnly(this.page, industrySelect);

    const typeSelect = this.page.getByRole("combobox", {
      name: "Please Select Select type",
    });
    await typeSelect.click();
    // await this.page.waitForTimeout(1500);
    await typeSelect.fill(typeValue);
    await dropdownSelectOnly(this.page, typeSelect);

    const activityNameField = this.page.getByRole("textbox", {
      name: "Enter Activity Name",
      exact: true,
    });
    await activityNameField.fill(activityName);
    const submitBtn = this.page.getByRole("button", { name: "submit" });
    await submitBtn.click();
    await this.page.waitFor     (2000);
  }

  async navigateToManageModules() {
    await this.navigateToAccountSettings();
    const manageModulesOption = this.page.getByRole("button", {
      name: "Manage Modules",
    });
    await expect(manageModulesOption).toBeVisible();
    await manageModulesOption.click();
  }

  async createModule() {
    await this.navigateToManageModules();
    console.log("Landed on Manage Modules Page");
    const createModuleButton = this.page.getByRole("button", {
      name: "create Module",
    });
    await expect(createModuleButton).toBeVisible();
    await createModuleButton.click();
    console.log("Adding a new Module");

    const moduleName = this.page.getByRole("combobox", {
      name: "Please Modules Name",
    });
    await moduleName.click();
    await dropdownSelect(this.page, moduleName, 1);
    const moduleNameValue = await moduleName.inputValue();
    console.log("Selected Module Name: ", moduleNameValue);

    const moduleIcon = this.page.getByRole("button", { name: "Choose File" });
    await uploadFile(this.page, moduleIcon);

    const moduleType = this.page.getByRole("combobox", {
      name: "Please Select Modules Types",
    });
    await moduleType.click();
    await dropdownSelect(this.page, moduleType, 1);
    const moduleTypeValue = await moduleType.inputValue();
    console.log("Selected Module Type: ", moduleTypeValue);

    await submitButton(this.page);
    console.log("Module Created Successfully!");

    console.log("---Verifying the Added Module in the List---");
    // await this.page.waitForTimeout(2000);
    await this.page.reload();
    const verifyModuleName = this.page.getByRole("cell", { name: moduleNameValue });
    await expect(verifyModuleName).toBeVisible();
    console.log(
      "Added Module Name Verified in the List Successfully which is:",
      await verifyModuleName.innerText()
    );
  }
}

