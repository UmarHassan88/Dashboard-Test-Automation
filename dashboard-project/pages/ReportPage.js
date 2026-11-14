import { expect } from "@playwright/test";
export class ReportPage {
  constructor(page) {
    this.page = page;
    this.SideMenu = page.getByRole("button", { name: "Reports" });
    this.SalesReportSubMenu = page.getByRole("button", { name: "Lead Report" });
    this.PhoneView = page.getByRole("link", { name: "Phone View" });
    this.phone = page.getByRole("link", { name: "Phone", exact: true });
    this.whatsapp = page.getByRole("link", { name: "Whatsapp" });
    this.email = page.getByRole("link", { name: "Email" });
    this.sms = page.getByRole("link", { name: "SMS" });
    this.contactus = page.getByRole("link", { name: "Contact Us" });
    this.call = page.getByRole("link", { name: "Call" });
    this.social = page.getByRole("link", { name: "Social Media" });
  }
  async navigateToReports() {
    await expect(this.SideMenu).toBeVisible();
    await this.SideMenu.click();
    await expect(this.SalesReportSubMenu).toBeVisible();
  }
  async navigateToLeadReport() {
    await this.SalesReportSubMenu.click();
    await expect(this.PhoneView).toBeVisible();
    await expect(this.phone).toBeVisible();
    await expect(this.whatsapp).toBeVisible();
    await expect(this.email).toBeVisible();
    await expect(this.sms).toBeVisible();
    await expect(this.contactus).toBeVisible();
    await expect(this.call).toBeVisible();
    await expect(this.social).toBeVisible();
  }
  async clickPhoneView() {
    await this.PhoneView.click();
  }
  async clickPhone() {
    await this.phone.click();
  }
  async clickWhatsappView() {
    await this.whatsapp.click();
  }
  async clickEmailView() {
    await this.email.click();
  }
  async clickSMSView() {
    await this.sms.click();
  }
  async clickContactUsView() {
    await this.contactus.click();
  }
  async clickCallView() {
    await this.call.click();
  }
  async clickSocialView() {
    await this.social.click();
  }

  async assertNavigationSuccess(expectedUrl) {
    await expect(this.page).toHaveURL(expectedUrl);
  }
}
