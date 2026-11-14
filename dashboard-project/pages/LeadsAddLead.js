import {
  dropdownSelectOnly,
  Login,
  randomEmailGenerator,
  randomIntGenerator,
  randomStringGenerator,
  submitButton,
} from "../utils/helpers.js";
import { expect } from "@playwright/test";

export class AddLead {
  constructor(page) {
    this.page = page;
    //Initializing all the Static Locators on this page
    this.Leadsmodule = page.getByRole("button", { name: "Leads" });
    this.addLeads = page.getByRole("button", { name: "Add Leads" });
    this.fullName = page.getByRole("textbox", { name: "Enter Full Name" });
    this.leadHandler = page.getByRole("combobox", {
      name: "Select Lead Handler",
    });
    this.phoneNo = page.getByPlaceholder("Enter Phone No");
    this.emailAddress = page.getByRole("textbox", {
      name: "Insert lead email",
    });
    this.leadType = page.getByRole("combobox", { name: "Select Lead type" });
    this.leadSource = page.getByRole("combobox", {
      name: "Select Lead Source",
    });
  }

  async tillLeadsModule() {
    // await Login(this.page);
    await expect(this.Leadsmodule).toBeVisible();
    await this.Leadsmodule.click();
  }

  async navigatetoAddLeads() {
    await this.tillLeadsModule();
    await expect(this.addLeads).toBeVisible();
    await this.addLeads.click();
  }

  async filladdleadsFields() {
    await this.navigatetoAddLeads();
    await expect(this.fullName).toBeVisible();
    await this.fullName.fill("Temp");
    await expect(this.leadHandler).toHaveValue("Super Admin");
    console.log("Lead Handler contains the value");
    await this.phoneNo.fill("123456");
    await randomEmailGenerator(this.page, this.emailAddress);
    await this.leadType.click();
    await dropdownSelectOnly(this.page, this.leadType);
    await this.leadSource.click();
    await dropdownSelectOnly(this.page, this.leadSource);
    await submitButton(this.page);
  }
}
