import { expect } from "@playwright/test";

export class AqaryIntPage {
  constructor(page) {
    this.page = page;
    this.Sidemenu = page.getByRole("button", { name: "Aqary INT users" });
    this.subMenuDepartments = page.getByRole("button", {
      name: "Departments & Roles",
    });
    this.subMenuUsers = page.getByRole("button", { name: "Manage Users" });
    this.createRole = page.getByRole("button", { name: "Create Role" });
  }
  async navigateToAqaryIntUsers() {
    await this.Sidemenu.click();
  }
  async navigateToDepartmentsAndRoles() {
    await this.subMenuDepartments.click();
  }
  async navigateToManageUsers() {
    await this.subMenuUsers.click();
  }
  async clickCreateRole() {
    await this.createRole.click();
  }
}
