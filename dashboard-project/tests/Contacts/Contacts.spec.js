import { AddContact } from "../pages/AddContact";
import { LoginPage } from "../pages/LoginPage";
import { test } from "@playwright/test";
import { ManageContact } from "../pages/ManageContact";
import { DeletedContact } from "../pages/DeletedContact";

test.describe("This test couples the tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("superadmin", "HereWeGo@2025");
    await loginPage.assertLoginSuccess();
  });

  test("This test adds a contact", async ({ page }) => {
    const contactInstance = new AddContact(page);
    await contactInstance.tillAddContact();
  });

  test("This test manages and deletes the contacts", async ({ page }) => {
    const manageContactInstance = new ManageContact(page);
    await manageContactInstance.navigateTillManageContact();
  });

  test("This test restores a contact and ensure the presence in Manage Contacts ", async ({
    page,
  }) => {
    const deletecontactInbstance = new DeletedContact(page);
    await deletecontactInbstance.navigatetoDeleteContact();
  });
});
