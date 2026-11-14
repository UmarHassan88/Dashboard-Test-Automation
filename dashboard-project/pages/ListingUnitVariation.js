import { expect } from "@playwright/test";
import {
  dropdownSelect,
  dropdownSelectOnly,
  Login,
  mandatoryFields,
  randomIntGenerator,
  randomStringGenerator,
  submitButton,
  uploadFile,
} from "../utils/helpers.js";
import { SettingsPage } from "./SettingsPage";

export class ListingUnitVariation extends SettingsPage {
  constructor(page) {
    super(page);
    this.page = page;
    this.unitvariationOption = this.page.getByRole("button", {
      name: "Unit Variation",
    });
    this.addunitvariation = this.page.getByRole("button", {
      name: "Add Unit Variation",
    });
    this.propLocationValid = this.page.getByText("Property Location *Please");
    this.unittypeValid = this.page.getByText("Unit Type *Please Select unit");
    this.typeNameValid = this.page.getByText("Type name *Please enter type");
    this.bedrooms = this.page.getByText("Bedrooms *Please Select");

    this.uploadFileValid = this.page.getByText("Upload File *Please upload");

    this.propLoc = this.page.getByRole("combobox", { name: "Search Location" });
    this.unitType = this.page
      .getByRole("combobox", { name: "Select unit type" })
      .first();
    this.typeName = this.page.getByRole("textbox", { name: "Enter type name" });
    this.bedrooms = this.page.getByRole("combobox", {
      name: "Select bedrooms",
    });

    this.upload = this.page.getByRole("button", { name: "Choose File" });

    this.isUrl = this.page.getByRole("switch");
    this.planURL = this.page.getByRole("textbox", {
      name: "ex: http://example.com",
    });
  }

  async navigatetoUnitVariation() {
    await this.navigateToListingSettings();
    await expect(this.unitvariationOption).toBeVisible();
    await this.unitvariationOption.click();
  }
  async addUnitVariation() {
    await expect(this.addunitvariation).toBeVisible();
    await this.addunitvariation.click();
    console.log("Applying a check for the Mandatory Fields...");
    // await submitButton(this.page);
    await mandatoryFields(this.page, this.propLocationValid);
    await mandatoryFields(this.page, this.unittypeValid);
    await mandatoryFields(this.page, this.typeNameValid);
    await mandatoryFields(this.page, this.uploadFileValid);

    console.log("Completed the check for the Mandatory Fields Successfully...");
    console.log("Now filling the fields...");
    await dropdownSelectOnly(this.page, this.propLoc);
    await dropdownSelectOnly(this.page, this.unitType);
    await randomStringGenerator(this.page, this.typeName);
    const typeInput = await this.typeName.inputValue();
    await dropdownSelect(this.page, this.bedrooms, 2);
    await uploadFile(this.page, this.upload);
    console.log("Now testing the URL Scenario...");
    await this.isUrl.click();
    await expect(this.planURL).toBeVisible();
    await this.planURL.fill("http://ex.com");

    await submitButton(this.page);
  }
}
