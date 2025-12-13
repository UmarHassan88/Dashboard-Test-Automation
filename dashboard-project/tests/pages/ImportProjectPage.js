import { expect } from "@playwright/test";
export class ImportProjectPage {
  constructor(page) {
    this.page = page;
    this.SideMenu = page.getByRole("button", { name: "Projects" });
    this.ImportProjectSubMenu = page.getByRole("button", {
      name: "Import Project",
    });
    this.importnewfileButton = page.getByRole("button", {
      name: "Import New File",
    });
    this.uploadInput = page.locator('input[type="file"]');
    this.submitButton = page.getByRole("button", { name: "Submit" });
    this.uploadcsv = page.getByText(
      "Drag and Drop your file hereorBrowseImport File In CSV Or XLSX"
    );
  }
  async navigateToImportProject() {
    await expect(this.SideMenu).toBeVisible();
    await this.SideMenu.click();
    await expect(this.ImportProjectSubMenu).toBeVisible();
  }
  async navigateToImportProjects() {
    await this.ImportProjectSubMenu.click();
  }
  async assertNavigationSuccess(expectedUrl) {
    await expect(this.page).toHaveURL(expectedUrl);
  }
  async importProject() {
    await this.importnewfileButton.click();
    await this.uploadInput.setInputFiles(
      "./testdata/prjctimport/testdata1.csv"
    );
    await this.submitButton.click();
  }
}
