import { test, expect } from "@playwright/test";
import { ImportProjectPage } from "./../pages/ImportProjectPage";
import { LoginPage } from "./../pages/LoginPage";
test.describe("Import Project Tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("superadmin", "HereWeGo@2025");
    await loginPage.assertLoginSuccess();
  });
  test("Import Project Navigation Test", async ({ page }) => {
    const importProjectPage = new ImportProjectPage(page);
    await importProjectPage.navigateToImportProject();
    await importProjectPage.navigateToImportProjects();
    await importProjectPage.assertNavigationSuccess(
      "http://192.168.1.203:3000/en/dashboard/projects/import/projects"
    );
  });
  test("Import Project Test", async ({ page }) => {
    const importProjectPage = new ImportProjectPage(page);
    await importProjectPage.navigateToImportProject();
    await importProjectPage.navigateToImportProjects();
    await importProjectPage.importProject();
  });
});
