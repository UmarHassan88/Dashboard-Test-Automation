import { test, expect } from "@playwright/test";
import {
  Login,
  tillSettings,
  dropdownSelect,
  submitButton,
  uploadFile,
  tillSettingsAccounts,
} from "../../utils/helpers";

async function manageModules(page) {
  await Login(page);
  await tillSettings(page);
  await tillSettingsAccounts(page);
  const manageModulesButton = page.getByRole("button", {
    name: "Manage Modules",
  });
  await expect(manageModulesButton).toBeVisible();
  await manageModulesButton.click();
  console.log("Landed on Manage Modules Page");
  const createModuleButton = page.getByRole("button", {
    name: "create Module",
  });
  await expect(createModuleButton).toBeVisible();
  await createModuleButton.click();
  console.log("Adding a new Module");
  const moduleName = page.getByRole("combobox", {
    name: "Please Modules Name",
  });
  await moduleName.click();
  await dropdownSelect(page, moduleName, 1);
  const moduleNameValue = await moduleName.inputValue();
  console.log("Selected Module Name: ", moduleNameValue);
  const moduleIcon = page.getByRole("button", { name: "Choose File" });
  await uploadFile(page, moduleIcon);
  const moduleType = page.getByRole("combobox", {
    name: "Please Select Modules Types",
  });
  await moduleType.click();
  await dropdownSelect(page, moduleType, 1);
  const moduleTypeValue = await moduleType.inputValue();
  console.log("Selected Module Type: ", moduleTypeValue);
  await submitButton(page);

  console.log("Module Created Successfully!");

  console.log("---Verifying the Added Module in the List---");
  await page.waitForTimeout(2000);
  await page.reload();
  const verifyModuleName = page.getByRole("cell", { name: moduleNameValue });
  await expect(verifyModuleName).toBeVisible();
  console.log(
    "Added Module Name Verified in the List Successfully which is:",
    await verifyModuleName.innerText()
  );
}

test("This test manages a module and verifies it", async ({ page }) => {
  await manageModules(page);
});
