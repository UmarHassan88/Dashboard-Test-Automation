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
    this.DepartmentDropdown = page.getByRole("combobox", {
      name: "Search Department",
    });
    this.Rolename = page.getByRole("textbox", { name: "Enter Role Name" });
    this.SubmitRole = page.getByRole("button", { name: "submit" });
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
    await this.DepartmentDropdown.click();
    await this.page
      .locator('ul[role="listbox"] >> li')
      .nth(Math.floor(Math.random() * 3))
      .click();
    await this.Rolename.fill("Automation Role");
    const permissionRows = this.page.locator(
      ".MuiGrid-item.MuiGrid-grid-xs-12:has(.actions)"
    );

    const rowCount = await permissionRows.count();

    for (let i = 0; i < rowCount; i++) {
      const currentRow = permissionRows.nth(i);

      // checkbox inputs inside this row
      const checkboxes = currentRow.locator('input[type="checkbox"]');
      const cbCount = await checkboxes.count();

      if (cbCount === 0) continue;

      const randomIndex = Math.floor(Math.random() * cbCount);

      await checkboxes.nth(randomIndex).click();
    }
    await this.SubmitRole.click();
  }
}
