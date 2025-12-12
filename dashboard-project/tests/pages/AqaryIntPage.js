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
    this.createuserButton = page.getByRole("button", { name: "Create User" });
    this.userName = page.getByRole("textbox", { name: "Enter Username" });
    this.fname = page.getByRole("textbox", { name: "Enter First Name" });
    this.lname = page.getByRole("textbox", { name: "Enter Last Name" });
    this.email = page.getByRole("textbox", { name: "Enter Email" });
    this.phoneNumber = page.getByPlaceholder("Enter contact phone number");
    this.profileImageInput = page.getByRole("button", { name: "Choose File" });
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
  async assertRoleCreationSuccess() {
    await expect(
      this.page.getByText("Role created successfully")
    ).toBeVisible();
  }
  async createUser() {
    await this.createuserButton.click();
    // await expect(page).toHaveURL(
    //   "http://192.168.1.203:3000/en/dashboard/users/manage_users/create"
    // );
    await this.page.getByRole("combobox", { name: "Search Role" });
    await this.page
      .locator('ul[role="listbox"] >> li')
      .nth(Math.floor(Math.random() * 3))
      .click();
    await this.page.getByRole("button", { name: "submit" }).click();
  }
}
