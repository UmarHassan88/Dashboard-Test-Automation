import { expect } from "@playwright/test";
export class ProfilesAgencyPage {
  constructor(page) {
    this.page = page;
    this.SideMenu = page.getByRole("button", { name: "Profiles", exact: true });
    this.ManageprofileSubMenu = page.getByRole("button", {
      name: "Manage profiles",
    });
    this.ManageAgenciesSubMenu = page.getByRole("button", {
      name: "Manage Agency",
    });
    this.createCollabAgency = page.getByRole("button", {
      name: "Create Collaboration Agency",
    });
    this.agencyname = page
      .getByTestId("name")
      .getByRole("textbox", { name: "Enter collaboration Agency" });
    this.agencynamear = page
      .getByTestId("name_ar")
      .getByRole("textbox", { name: "Enter collaboration agency" });
    this.countryDropdown = page.getByRole("combobox", {
      name: "Select Country",
    });
    this.stateDropdown = page.getByRole("combobox", { name: "Select State" });
    this.logo = page
      .getByTestId("logo")
      .getByRole("button", { name: "Choose File" });
    this.cover = page
      .getByTestId("cover-image")
      .getByRole("button", { name: "Choose File" });
    this.websiteUrl = page.getByRole("textbox", { name: "Enter website URL" });
    this.submitButton = page.getByRole("button", { name: "Submit" });
  }
  async navigateToProfilesAgency() {
    await expect(this.SideMenu).toBeVisible();
    await this.SideMenu.click();
    await expect(this.ManageprofileSubMenu).toBeVisible();
    await expect(this.ManageAgenciesSubMenu).toBeVisible();
  }
  async navigateToManageProfiles() {
    await this.ManageprofileSubMenu.click();
  }
  async navigateToManageAgencies() {
    await this.ManageAgenciesSubMenu.click();
  }
  async assertNavigationSuccess(expectedUrl) {
    await expect(this.page).toHaveURL(expectedUrl);
  }
  async clickCreateCollabAgency() {
    await this.createCollabAgency.click();
    await this.agencyname.fill("Automation Agency");
    await this.agencynamear.fill("وكالة الأتمتة");
    await this.countryDropdown.click();
    await this.page.locator('ul[role="listbox"] >> li').nth(1).click();
    await this.stateDropdown.click();
    await this.page.locator('ul[role="listbox"] >> li').nth(1).click();
    const filePathLogo = require("path").resolve(
      __dirname,
      "../assets/logo.png"
    );
    await this.logo.setInputFiles("./testdata/images/auto(2).jpg");
    await this.cover.setInputFiles("./testdata/images/auto3.jpg");
    await this.websiteUrl.fill("https://www.automationagency.com");
    await this.submitButton.click();
    await this.page
      .getByRole("combobox", { name: "Select platform name" })
      .click();
    await this.page.locator('ul[role="listbox"] >> li').nth(1).click();
    await this.submitButton.click();
  }
}
