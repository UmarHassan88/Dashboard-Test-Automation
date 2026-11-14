import { expect } from "@playwright/test";
import { SettingsPage } from "./SettingsPage";
import {
  mandatoryfieldsValidationCustom,
  randomonlystringGenerator,
  submitButton,
  tillSettings,
  uploadFile,
} from "../utils/helpers.js";

export class ListingAmenities extends SettingsPage {
  constructor(page) {
    super(page);
    this.amenityCategory = this.page.getByRole("button", {
      name: "Set Amenities",
    });
    this.createAmenityCat = this.page.getByRole("button", {
      name: "Create Amenities",
    });
    this.amenitycatName = this.page.getByRole("textbox", {
      name: "Enter Name",
      exact: true,
    });
    this.amenitycatNamear = this.page.getByRole("textbox", {
      name: "Enter Name Arabic",
    });
  }

  async navigateToAmenities() {
    await this.navigateToListingSettings();
    await expect(this.amenityCategory).toBeVisible();
    await this.amenityCategory.click();
  }

  async createamenityCategory() {
    await this.navigateToAmenities();
    await expect(this.createAmenityCat).toBeVisible();
    await this.createAmenityCat.click();
    await randomonlystringGenerator(this.page, this.amenitycatName);
    this.amenitycatNameValue = await this.amenitycatName.inputValue();
    console.log("Amenity Category to Verify:", this.amenitycatNameValue);
    await randomonlystringGenerator(this.page, this.amenitycatNamear);
    await submitButton(this.page);
    await this.page.waitForTimeout(2000);
    await this.page.reload();

    //Verifying the Added Amenity Category
    this.verify = this.page.getByRole("cell", {
      name: this.amenitycatNameValue,
    });
    await expect(this.verify).toBeVisible();
    console.log("Amenity Category Verified Successfully!");

    //Updating Amenity Category
    this.edit = this.page
      .getByRole("row", { name: `${this.amenitycatNameValue} Edit Delete` })
      .getByRole("link");
    await this.edit.click();
    await randomonlystringGenerator(this.page, this.amenitycatName);
    this.inputEdit = await this.amenitycatName.inputValue();
    await submitButton(this.page);
    this.verifyUpdate = this.page.getByRole("cell", {
      name: this.inputEdit,
    });
    await expect(this.verifyUpdate).toBeVisible();
    console.log("Amenities Category Updated and Verified Successfully!");
  }
}
