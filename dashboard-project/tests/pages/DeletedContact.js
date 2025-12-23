import { expect } from "@playwright/test";
import { ManageContact } from "./ManageContact";

export class DeletedContact extends ManageContact {
  constructor(page) {
    super(page);
    this.contactModule = page.getByRole("button", { name: "Contact" });
    this.deleteModule = page.getByRole("button", { name: "Deleted Contact" });
    this.contactAssert = page.getByRole("cell", { name: "Samir Arian" });
    this.actions = page.getByTestId("secondary-actions");
    this.restore = page.getByText("Restore");
    this.restoreConfirm = page.getByRole("button", { name: "yes" });
    this.restoreAlert = page.getByText("Restored successfully");
  }

  async navigatetoDeleteContact() {
    await expect(this.contactModule).toBeVisible();
    await this.contactModule.click();
    await expect(this.deleteModule).toBeVisible();
    await this.deleteModule.click();
    console.log("Clicked Deleted Contact");
    await expect(this.contactAssert).toBeVisible();
    await this.actions.click();
    await this.restore.click();
    console.log("Restoration Applied");
    await expect(this.restoreConfirm).toBeVisible();
    await this.restoreConfirm.click();
    await expect(this.restoreAlert).toBeVisible();

    await this.manageContactModule.click();
    await expect(this.contactName).toBeVisible();
    console.log("The deleted contact is restored in Manage Contact!");
  }
}
