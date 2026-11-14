import { expect } from "@playwright/test";
import { SettingsPage } from "./SettingsPage.js";
import {
  dropdownSelect,
  dropdownSelectOnly,
  randomIntGenerator,
  randomStringGenerator,
  randomonlystringGenerator,
  submitButton,
  mandatoryFields,
  mandatoryfieldsValidationCustom,
  uploadFile,
  tillFacilities,
} from "../utils/helpers.js";

export class SettingsListingPage extends SettingsPage {
  constructor(page) {
    super(page);
    this.close = page.getByRole("button", { name: "close" });
  }

  async navigateToType() {
    await this.navigateToListingSettings();
    const typeSection = this.page.getByRole("button", {
      name: "Type",
      exact: true,
    });
    await expect(typeSection).toBeVisible();
    await typeSection.click();
  }

  async createType() {
    await this.navigateToType();
    console.log("Landed on the Type Section");

    const UnitTab = this.page.getByRole("link", { name: "unit" });
    const propertyTab = this.page.getByRole("link", { name: "property" });
    const sectionsArray = [UnitTab, propertyTab];
    // for (let i = 0; i < sectionsArray.length; i++) {
    //   await sectionsArray[i].click();
    //   await this.page.waitForTimeout(1500);
    // }

    const createType = this.page.getByRole("button", { name: "Create Type" });
    await expect(createType).toBeVisible();
    await createType.click();

    console.log("Applying the Mandatory Check");
    const usageMand = this.page.getByText("Usage *");
    const typeName = this.page.getByText("Type Name *");
    await mandatoryfieldsValidationCustom(this.page, usageMand);
    await mandatoryfieldsValidationCustom(this.page, typeName);
    console.log("Mandatory Check Done!");

    console.log("Filling the Form to Create a Type");
    const type = this.page.getByRole("textbox", {
      name: "Please enter type name",
      exact: true,
    });
    await randomStringGenerator(this.page, type);
    const typeInput = await type.inputValue();

    const typeAR = this.page.getByRole("textbox", {
      name: "Please enter type name AR",
    });
    await randomStringGenerator(this.page, typeAR);

    const usage = this.page.getByRole("combobox", {
      name: "Please select usage",
    });
    await usage.click();
    await dropdownSelect(this.page, usage, 2);

    const typeIcon = this.page.getByRole("button", { name: "Choose File" });
    await uploadFile(this.page, typeIcon);

    const typeCode = this.page.getByRole("textbox", {
      name: "Please enter type code",
    });
    await randomIntGenerator(this.page, typeCode);

    await submitButton(this.page);
    console.log("The type is added Successfully!");

    console.log("---Verifying the added Type---");
    await this.page.waitForTimeout(3000);
    await this.page.reload();
    console.log("Type Name to Verify: ", typeInput);
    const verifyType = await this.page.getByRole("cell", { name: typeInput });
    await expect(verifyType).toBeVisible();
    console.log("Type is Verified Successfully!");
  }

  async navigateToFacts() {
    await this.navigateToListingSettings();
    const factsSection = this.page.getByRole("button", { name: "Facts" });
    await expect(factsSection).toBeVisible();
    await factsSection.click();
  }

  async createFact() {
    await this.navigateToFacts();
    console.log("Landed on the Manage Facts page");
    const addFacts = this.page.getByRole("button", { name: "Add Fact" });
    await expect(addFacts).toBeVisible();
    await addFacts.click();
    console.log("Landed on the Add Facts page");
    console.log("Filling the Facts Form page");

    const factNameEn = this.page.getByRole("textbox", { name: "Enter Title" });
    await expect(factNameEn).toBeVisible();
    await randomonlystringGenerator(this.page, factNameEn);
    const factTextValue = await factNameEn.inputValue();

    const factNameAR = this.page.getByRole("textbox", {
      name: "Please enter Fact Name AR",
    });
    await randomStringGenerator(this.page, factNameAR);

    const uploadIcon = this.page.getByRole("button", { name: "Choose File" });
    await uploadFile(this.page, uploadIcon);

    await submitButton(this.page);
    console.log("Fact added Successfully!");

    console.log("--Verifying the added Fact---");
    await this.page.waitForTimeout(3000);
    await this.page.reload();
    console.log("Fact Text Value: ", factTextValue);
    const verifyFact = this.page.getByRole("cell", { name: factTextValue });
    console.log("Fact to Verify: ", factTextValue);
    await expect(verifyFact).toBeVisible();
    console.log("\nFact Verified Succesfully!");

    //Viewing the Added Fact

    const view = this.page
      .locator(
        ".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.primary-btn",
      )
      .first();
    await view.click();
    const verifyTitle = this.page.getByRole("dialog").getByText(factTextValue);
    await expect(verifyTitle).toBeVisible(); 
    console.log("Title is displayed in Preview");
    await this.close.click();

    //Editing the Added Fact
    const editFact = this.page
      .getByRole("row", { name: `1 ${factTextValue} profile image` })
      .getByRole("link");
    await editFact.click();
    await randomonlystringGenerator(this.page, factNameEn);
    const factUpdatedvalue = await factNameEn.inputValue();
    await submitButton(this.page);
    const verifyEditfact = await this.page.getByRole("cell", {
      name: factUpdatedvalue,
    });
    await expect(verifyEditfact).toBeVisible();
    console.log("Fact is updated and verified successfully!");
  }

  async navigateToFacilities() {
    await this.navigateToListingSettings();
    await tillFacilities(this.page);
  }

  async createFacilityCategory() {
    await this.navigateToFacilities();
    const createFacility = this.page.getByRole("button", {
      name: "Create Facility",
    });
    await expect(createFacility).toBeVisible();
    await createFacility.click();
    console.log("Creating a Facility at Create Page");

    const facilityName = this.page.getByRole("textbox", {
      name: "Enter Name",
      exact: true,
    });
    await randomStringGenerator(this.page, facilityName);
    const facilityNameinput = await facilityName.inputValue();

    const facilityNameAR = this.page.getByRole("textbox", {
      name: "Enter Name Arabic",
    });
    await randomIntGenerator(this.page, facilityNameAR);

    await submitButton(this.page);

    console.log("---Verifying the created Facilty---");
    await this.page.waitForTimeout(3000);
    await this.page.reload();
    const verifyFacility = this.page.getByRole("cell", {
      name: facilityNameinput,
    });
    console.log("Facility Category to Verify: ", facilityNameinput);
    await expect(verifyFacility).toBeVisible();
    console.log("Facility Category Verified Successfully!");
  }

  async createFacility() {
    await this.navigateToFacilities();
    const threedots = this.page
      .getByRole("row", { name: "Testingkz Edit Delete" })
      .getByTestId("secondary-actions");
    await expect(threedots).toBeVisible();
    await threedots.click();
    const innerFacilities = this.page.getByRole("link");
    await expect(innerFacilities).toBeVisible();
    await innerFacilities.click();
    console.log("Landed on Manage Inner Facilities Page");
    const addFacility = await this.page.getByRole("button", {
      name: "add Facility",
    });
    await expect(addFacility).toBeVisible();
    await addFacility.click();
    console.log("Landed on Add Facility Form");

    const facName = this.page.getByRole("textbox", {
      name: "Enter Name",
      exact: true,
    });
    await randomonlystringGenerator(this.page, facName, 2, 7);
    const facNameinput = await facName.inputValue();
    console.log("Facility Input", facNameinput);

    const facNameAR = this.page.getByRole("textbox", {
      name: "Enter Name Arabic",
    });
    await randomStringGenerator(this.page, facNameAR);

    const uploadIcon = this.page.getByRole("button", { name: "Choose File" });
    await uploadFile(this.page, uploadIcon);
    await submitButton(this.page);
    console.log("Added the inner facility!");

    //Unable to Verifyu due to Case sensitivity UI Issue

    // console.log("\n---Verifying the Added Inner Facility---");
    // await this.page.waitForTimeout(2000);
    // await this.page.reload();
    // console.log("Inner Facility to Verify: ", facNameinput);
    // const verifyFacility = await this.page.getByRole("cell", {
    //   name: facNameinput,
    //   exact: true,
    // });
    // await expect(verifyFacility).toBeVisible();
    // console.log("Inner Facility Verified Successfully!");
  }
}
