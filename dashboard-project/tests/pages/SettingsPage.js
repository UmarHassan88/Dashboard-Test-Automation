import { expect } from "@playwright/test";
import { LoginPage } from "./LoginPage.js";
import { Login, tillSettings } from "../utils/helpers.js";

export class SettingsPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSettings() {
    await Login(this.page);
    await tillSettings(this.page);
  }

  async navigateToAccountSettings() {
    await this.navigateToSettings();
    const accountOption = this.page.getByRole("button", {
      name: "Account",
      exact: true,
    });
    await expect(accountOption).toHaveText("Account");
    await accountOption.click();
  }

  async navigateToFinanceSettings() {
    await this.navigateToSettings();
    const financeOption = this.page.getByRole("button", { name: "Finance" });
    await expect(financeOption).toBeVisible();
    await financeOption.click();
  }

  async navigateToGeneralSettings() {
    await this.navigateToSettings();
    const generalSettings = this.page.getByRole("button", { name: "General" });
    await expect(generalSettings).toBeVisible();
    await generalSettings.click();
  }

  async navigateToLegalSettings() {
    await this.navigateToSettings();
    const legalOption = this.page.getByRole("button", { name: "Legal", exact: true });
    await expect(legalOption).toBeVisible();
    await legalOption.click();
  }

  async navigateToListingSettings() {
    await this.navigateToSettings();
    const listingOption = this.page.getByRole("button", { name: "Listing" });
    await expect(listingOption).toBeVisible();
    await listingOption.click();
  }
}

