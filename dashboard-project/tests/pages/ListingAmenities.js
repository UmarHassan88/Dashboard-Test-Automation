import { expect } from "@playwright/test";
import { SettingsPage } from "./SettingsPage";
import {
  mandatoryfieldsValidationCustom,
  randomonlystringGenerator,
  submitButton,
  uploadFile,
} from "../utils/helpers";

export class ListingAmenities extends SettingsPage {
  constructor(page) {
    super(page);
    this.setAmenitiesSection = this.page.getByRole("button", {
      name: "Set Amenities",
    });
    this.createAmenitiesbutton = this.page.getByRole("button", {
      name: "Create Amenities",
    });
    this.amenityCategorymand = this.page.getByText("Amenities Category Name *");
    this.amenCat = this.page.getByRole("textbox", {
      name: "Enter Name",
      exact: true,
    });
    this.amenCatinput = this.amenCat.inputValue();
    this.amenCatAR = this.page.getByRole("textbox", {
      name: "Enter Name Arabic",
    });
    this.verifyAmenity = this.page.getByRole("cell", {
      name: amenCatinput,
    });
    this.addAmenity = this.page.getByRole("button", { name: "add Amenities" });

    this.amenityNameMand = this.page.getByText("Amenities Name *");
    this.uploadIcon = this.page.getByText("Upload Icon *");

    this.amenityName = this.page.getByRole("textbox", {
      name: "Enter Name",
      exact: true,
    });
    this.amenityNameAR = this.page.getByRole("textbox", {
      name: "Enter Name Arabic",
    });
    this.upload = this.page.getByRole("button", { name: "Choose File" });
    this.amenities = this.page.getByRole("link");
  }

  async navigateToAmenities() {
    await this.navigateToListingSettings();

    await expect(this.setAmenitiesSection).toBeVisible();
    await this.setAmenitiesSection.click();
  }

  async createAmenityCategory() {
    await this.navigateToAmenities();
    console.log("Landed on the Manage Amenities Section");

    await this.createAmenitiesbutton.click();
    console.log("Applying the Mandatory Validation");

    await mandatoryfieldsValidationCustom(this.page, this.amenityCategorymand);

    console.log("Filling the Form to Create an Amenity Category");

    await randomonlystringGenerator(this.page, this.amenCat, 3, 12);

    await randomonlystringGenerator(this.page, this.amenCatAR, 3, 12);
    await submitButton(this.page);
    console.log("\nAdded the Amenity Category Successfully!");
    console.log("---Verifying the Added Amenity Category---");
    await this.page.waitForTimeout(3000);
    await this.page.reload();
    console.log("Amenity Category to Verify: ", this.amenCatinput);

    await expect(this.verifyAmenity).toBeVisible();
    console.log("Amenity Category Verified SuccessFully!");
  }

  async createAmenity() {
    await this.navigateToAmenities();
    console.log("Landed on the Manage Amenities Section");

    await expect(this.threedots).toBeVisible();
    await this.threedots.click();
    await expect(this.amenities).toBeVisible();
    await this.amenities.click();
    console.log("Landed on the Manage Amenities Section");
    await expect(this.addAmenity).toBeVisible();
    await this.addAmenity.click();
    console.log("Applying the Mandatory Check");

    await mandatoryfieldsValidationCustom(this.page, this.amenityNameMand);
    await mandatoryfieldsValidationCustom(this.page, this.uploadIcon);
    console.log("Filling the Form to create Amenity");

    await randomonlystringGenerator(this.page, this.amenityName, 2, 7);

    await randomonlystringGenerator(this.page, this.amenityNameAR, 2, 7);
    await uploadFile(this.page, this.upload);
    await submitButton(this.page);
    console.log("Added the Amenity Successfully!");
  }
}
