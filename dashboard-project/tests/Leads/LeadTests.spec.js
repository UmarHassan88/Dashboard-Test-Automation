import { test, expect } from "@playwright/test";
import { AddLead } from "../../pages/LeadsAddLead";
import { LoginPage } from "../../pages/LoginPage";
import { LeadsManageLeads } from "../../pages/LeadsManageLeads";
import { LeadsDeletedLeads } from "../../pages/LeadsDeletedLeads";

test.describe("Add Lead Tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("superadmin", "HereWeGo@2025");
    await loginPage.assertLoginSuccess();
  });

  test("Add lead successfully", async ({ page }) => {
    const leads = new AddLead(page);
    await leads.filladdleadsFields();
  });

  test("This test manages the added lead(s)", async ({ page }) => {
    const instance = new LeadsManageLeads(page);
    await instance.navigateToManageleads();
  });

  test("This test deletes the added lead(s)", async ({ page }) => {
    const instance = new LeadsDeletedLeads(page);
    await instance.navigateToDeletedLeads();
  });
});
