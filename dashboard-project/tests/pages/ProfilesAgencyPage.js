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
  }
}
