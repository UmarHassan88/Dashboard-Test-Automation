import { test, expect } from "@playwright/test";
import { ProfilesAgencyPage } from "./../pages/ProfilesAgencyPage";
import { LoginPage } from "./../pages/LoginPage";

test.describe("Profiles Agency Tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("superadmin", "HereWeGo@2025");
    await loginPage.assertLoginSuccess();
  });
  test("Profiles Agency Navigation Test", async ({ page }) => {
    const profilesAgencyPage = new ProfilesAgencyPage(page);
    await profilesAgencyPage.navigateToProfilesAgency();
    await profilesAgencyPage.navigateToManageProfiles();
    await profilesAgencyPage.assertNavigationSuccess(
      "http://192.168.1.203:3000/en/dashboard/profile/manage/company"
    );
    await profilesAgencyPage.navigateToManageAgencies();
    await profilesAgencyPage.assertNavigationSuccess(
      "http://192.168.1.203:3000/en/dashboard/profile/coll_agency/manage"
    );
  });
  test("Create Collaboration Agency Test", async ({ page }) => {
    const profilesAgencyPage = new ProfilesAgencyPage(page);
    await profilesAgencyPage.navigateToProfilesAgency();
    await profilesAgencyPage.navigateToManageAgencies();
    await profilesAgencyPage.clickCreateCollabAgency();
    await profilesAgencyPage.assertNavigationSuccess(
      "http://192.168.1.203:3000/en/dashboard/profile/coll_agency/create"
    );
  });
});
