import { expect } from "@playwright/test";
import { SettingsPage } from "./SettingsPage";
import { dropdownSelect, dropdownSelectOnly } from "../utils/helpers.js";

export class ListingTypeConfig extends SettingsPage {
  constructor(page) {
    super(page);

    this.typeConfigsSection = this.page.getByRole("button", {
      name: "Type Configs",
    });
    this.createTypeconfig = this.page.getByRole("button", {
      name: "Create Type Configs",
    });
    this.country = this.page.getByRole("combobox", { name: "Select Country" });
    this.moduleName = this.page.getByRole("combobox", {
      name: "Select Module Name",
    });
    this.typeName = this.page.getByRole("combobox", {
      name: "Select Type Name",
    });
    this.category = this.page.getByRole("combobox", {
      name: "Select Category",
    });
  }

  async navigateToTypeConfigs() {
    await this.navigateToListingSettings();
    await expect(this.typeConfigsSection).toBeVisible();
    await this.typeConfigsSection.click();
  }

  async createTypeConfig() {
    await this.navigateToTypeConfigs();
    console.log("Landed on the Manage Type Config Page");
    await expect(this.createTypeconfig).toBeVisible();
    await this.createTypeconfig.click();
    console.log("Filling the form to create a type config");
    await dropdownSelect(this.page, this.country, 1);

    await dropdownSelect(this.page, this.moduleName, 1);

    await dropdownSelectOnly(this.page, this.typeName);

    await this.category.click();
    await dropdownSelect(this.page, this.category, 1);
  }
}
