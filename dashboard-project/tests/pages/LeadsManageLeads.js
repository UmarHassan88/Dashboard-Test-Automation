import { expect } from "@playwright/test";
import { AddLead } from "./LeadsAddLead";

export class LeadsManageLeads extends AddLead {
  constructor(page) {
    super(page);
    this.manageLeadsOption = page.getByRole("button", { name: "Manage Leads" });
    this.importOption = page.getByRole("link").filter({ hasText: /^$/ }).nth(2);
    this.importAssertion = page.getByText("You not allowed to import");
  }

  async navigateToManageleads() {
    await this.tillLeadsModule();
    await this.manageLeadsOption.click();
    await expect(this.importOption).toBeVisible();
    await this.importOption.click();
    await expect(this.importAssertion).toBeVisible();
    console.log("Assertions is there!");
  }
}
