import { test, expect } from "@playwright/test";
import { ReportPage } from "./../pages/ReportPage";
import { LoginPage } from "./../pages/LoginPage";

test.describe("Report Tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("superadmin", "HereWeGo@2025");
    await loginPage.assertLoginSuccess();
  });
  test("Report Navigation Test", async ({ page }) => {
    const reportPage = new ReportPage(page);
    await reportPage.navigateToReports();
    await reportPage.navigateToLeadReport();
    await reportPage.assertNavigationSuccess(
      "http://192.168.1.203:3000/en/dashboard/reports/lead/phone"
    );
    await reportPage.clickPhoneView();
    await reportPage.assertNavigationSuccess(
      "http://192.168.1.203:3000/en/dashboard/reports/lead/phone_view"
    );
    await reportPage.clickWhatsappView();
    await reportPage.assertNavigationSuccess(
      "http://192.168.1.203:3000/en/dashboard/reports/lead/whatsapp"
    );
    await reportPage.clickEmailView();
    await reportPage.assertNavigationSuccess(
      "http://192.168.1.203:3000/en/dashboard/reports/lead/email"
    );
    await reportPage.clickSMSView();
    await reportPage.assertNavigationSuccess(
      "http://192.168.1.203:3000/en/dashboard/reports/lead/sms"
    );
    await reportPage.clickContactUsView();
    await reportPage.assertNavigationSuccess(
      "http://192.168.1.203:3000/en/dashboard/reports/lead/contact_us"
    );
    await reportPage.clickCallView();
    await reportPage.assertNavigationSuccess(
      "http://192.168.1.203:3000/en/dashboard/reports/lead/call"
    );
    await reportPage.clickSocialView();
    await reportPage.assertNavigationSuccess(
      "http://192.168.1.203:3000/en/dashboard/reports/lead/social_media"
    );
  });
});
