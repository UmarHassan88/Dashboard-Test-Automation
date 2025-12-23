import { expect } from "@playwright/test";
import { SettingsListingPage } from "./SettingsListingPage";
import {
  mandatoryfieldsValidationCustom,
  randomonlystringGenerator,
  uploadFile,
  submitButton,
} from "../utils/helpers";

export class ListingViews extends SettingsListingPage {
  constructor(page) {
    super(page);
    this.viewsSection = this.page.getByRole("button", { name: "Views" });
    this.addView = this.page.getByRole("button", { name: "Add View" });
    this.viewnameMand = this.page.getByText("View Name *");
    this.viewiconMand = this.page.getByText("View Icon *");
    this.viewName = this.page.getByRole("textbox", {
      name: "Enter View Name",
      exact: true,
    });
    this.viewinput = this.viewName.inputValue();
    this.viewnameAR = this.page.getByRole("textbox", {
      name: "Enter View Name Arabic",
    });
    this.icon = this.page.getByRole("button", { name: "Choose File" });
    this.verifyView = this.page
      .getByRole("cell", { name: this.viewinput })
      .first();
  }

  async navigateToViews() {
    await this.navigateToListingSettings();
    await expect(this.viewsSection).toBeVisible();
    await this.viewsSection.click();
  }

  async createView() {
    await this.navigateToViews();
    console.log("Landed on the Manage Views Page");
    await expect(this.addView).toContainClass("MuiButton-colorPrimary");
    console.log("Class Exists!");
    await this.addView.click();
    console.log("Landed on the Add View Page");
    console.log("Applying the Mandatory Check!");

    await mandatoryfieldsValidationCustom(this.page, this.viewnameMand);
    await mandatoryfieldsValidationCustom(this.page, this.viewiconMand);
    console.log("\nFilling the Form to Create a View");

    await expect(this.viewName).toBeVisible();
    await randomonlystringGenerator(this.page, this.viewName, 3, 7);

    await randomonlystringGenerator(this.page, this.viewnameAR, 3, 7);
    await uploadFile(this.page, this.icon);
    await submitButton(this.page);
    console.log("View is added successfully!");
    console.log("---Verifying the added View---");
    console.log("View to Verify: ", this.viewinput);
    await this.page.waitForTimeout(3000);
    await this.page.reload();
    await expect(this.verifyView).toBeVisible();
    console.log("The View is Verified Successfully!");
  }
}
