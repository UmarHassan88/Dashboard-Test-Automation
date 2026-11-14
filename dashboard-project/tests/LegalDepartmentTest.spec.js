import { test, expect } from "@playwright/test";
import { LegalDepartmentPage } from "./../pages/LegalDepartmentPage";
import { LoginPage } from "./../pages/LoginPage";
test.describe("Legal Department Tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("superadmin", "HereWeGo@2025");
    await loginPage.assertLoginSuccess();
  });

  test("Legal Department Navigation Test", async ({ page }) => {
    const legalDepartmentPage = new LegalDepartmentPage(page);
    await legalDepartmentPage.navigateToLegalDepartment();
    await legalDepartmentPage.navigateToCompanyVerifications();
    await legalDepartmentPage.assertNavigationSuccess(
      "http://192.168.1.203:3000/en/dashboard/legal_department/companies_verifications"
    );
    await legalDepartmentPage.navigateToIndividualVerifications();
    await legalDepartmentPage.assertNavigationSuccess(
      "http://192.168.1.203:3000/en/dashboard/legal_department/individuals_verifications"
    );
    await legalDepartmentPage.navigateToContractManagement();
    await legalDepartmentPage.assertNavigationSuccess(
      "http://192.168.1.203:3000/en/dashboard/legal_department/contracts_management"
    );
  });
});
