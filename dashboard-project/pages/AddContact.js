import { expect } from "@playwright/test";
import { randomStringGenerator, submitButton } from "../utils/helpers.js";

export class AddContact {
  constructor(page) {
    this.page = page;
    this.contactModule = page.getByRole("button", { name: "Contact" });
    this.addContact = page.getByRole("button", { name: "Add Contact" });
    this.firstName = page.getByRole("textbox", { name: "Enter First Name" });
    this.lastName = page.getByRole("textbox", { name: "Last Name" });
  }

  async tillAddContact() {
    await expect(this.contactModule).toBeVisible();
    await this.contactModule.click();
    await expect(this.addContact).toBeVisible();
    await this.addContact.click();
    await randomStringGenerator(this.page, this.firstName);
    await randomStringGenerator(this.page, this.lastName);
    await submitButton(this.page);
  }
}
