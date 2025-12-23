import { expect } from "@playwright/test";
import { AddLead } from "./LeadsAddLead";
export class LeadsDeletedLeads extends AddLead {
  constructor(page) {
    super(page);
    this.deletedLeadsModule = page.getByRole("button", {
      name: "Deleted Leads",
    });
    this.search = page.getByRole("button", { name: "Show/Hide search" });
  }

  async navigateToDeletedLeads() {
    await this.tillLeadsModule();
    await expect(this.deletedLeadsModule).toBeVisible();
    await this.deletedLeadsModule.click();
    await expect(this.search).toBeVisible();
    await this.search.click();
    console.log("Search is working!");
  }
}
