import { test, expect } from "@playwright/test";
import { AqaryIntPage } from "./../pages/AqaryIntPage";
import { LoginPage } from "./../pages/LoginPage";

test.describe("Aqary INT Users Management", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("superadmin", "HereWeGo@2025");
    await loginPage.assertLoginSuccess();
  });

  test("Navigate to Aqary INT Users", async ({ page }) => {
    const aqaryIntPage = new AqaryIntPage(page);
    await expect(aqaryIntPage.Sidemenu).toBeVisible();
    await aqaryIntPage.navigateToAqaryIntUsers();
    await expect(aqaryIntPage.subMenuDepartments).toBeVisible();
    await expect(aqaryIntPage.subMenuUsers).toBeVisible();
  });
  test("Create Role ", async ({ page }) => {
    const aqaryIntPage = new AqaryIntPage(page);
    await aqaryIntPage.navigateToAqaryIntUsers();
    await aqaryIntPage.navigateToDepartmentsAndRoles();
    await aqaryIntPage.clickCreateRole();
    await aqaryIntPage.assertRoleCreationSuccess();
  });
  test("Create User ", async ({ page }) => {
    const aqaryIntPage = new AqaryIntPage(page);
    await aqaryIntPage.navigateToAqaryIntUsers();
    await aqaryIntPage.navigateToManageUsers();
    await aqaryIntPage.createUser();
  });
});
