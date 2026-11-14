import { expect } from "@playwright/test";

export class LegalDepartmentPage {
  constructor(page) {
    this.page = page;
    this.SideMenu = page.getByRole("button", { name: "Legal Department" });
    this.companyVerificationSubMenu = page.getByRole("button", {
      name: "companies Verifications",
    });
    this.individualVerificationSubMenu = page.getByRole("button", {
      name: "Individuals Verifications",
    });
    this.ContractManagement = page.getByRole("button", {
      name: "Contracts Management",
    });
  }
  async navigateToLegalDepartment() {
    await expect(this.SideMenu).toBeVisible();
    await this.SideMenu.click();
    await expect(this.companyVerificationSubMenu).toBeVisible();
    await expect(this.individualVerificationSubMenu).toBeVisible();
    await expect(this.ContractManagement).toBeVisible();
  }
  async navigateToCompanyVerifications() {
    await this.companyVerificationSubMenu.click();
  }
  async navigateToIndividualVerifications() {
    await this.individualVerificationSubMenu.click();
  }
  async navigateToContractManagement() {
    await this.ContractManagement.click();
  }
  async assertNavigationSuccess(expectedUrl) {
    await expect(this.page).toHaveURL(expectedUrl);
  }
}
