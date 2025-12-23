import { expect } from "@playwright/test";

export class ManageContact {
  constructor(page) {
    this.page = page;
    this.contactModule = page.getByRole("button", { name: "Contact" });
    this.manageContactModule = page.getByRole("button", {
      name: "Manage Contact",
    });
    this.contactName = page.getByRole("cell", { name: "Inzimam" });
    this.deleteContact = page.locator(
      ".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorError"
    );
    this.deleteConfirm = page.getByRole("button", { name: "yes" });
    this.deleteconfirmAlert = page.getByText("deleted successfully");
  }

  async navigateTillManageContact() {
    await expect(this.contactModule).toBeVisible();
    await this.contactModule.click();
    await expect(this.manageContactModule).toBeVisible();
    await this.manageContactModule.click();
    await expect(this.contactName).toBeVisible();
    await expect(this.deleteContact).toBeVisible();
    await this.deleteContact.click();
    await expect(this.deleteConfirm).toBeVisible();
    await this.deleteConfirm.click();
    await expect(this.deleteconfirmAlert).toBeVisible();
  }
}
