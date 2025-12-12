import { test, expect } from "@playwright/test";
import {
  dropdownSelect,
  dropdownSelectOnly,
  Login,
  mandatoryfieldsValidationCustom,
  randomonlystringGenerator,
  randomStringGenerator,
  submitButton,
  tillFacilities,
  tillListing,
  tillSettings,
  uploadFile,
} from "../../../utils/helpers.js";

async function addTypeConfig(page) {
  await tillListing(page);
  const settypeConfig = page.getByRole("button", { name: "Set Type Configs" });
  await expect(settypeConfig).toBeVisible();
  await settypeConfig.click();
  console.log("Landed on the Manage Type Config Page");
  const createTypeconfig = page.getByRole("button", {
    name: "Create Type Configs",
  });
  await expect(createTypeconfig).toBeVisible();
  await createTypeconfig.click();
  console.log("Filling the form to create a type config");
  const country = page.getByRole("combobox", { name: "Select Country" });
  await dropdownSelect(page, country, 1);
  const moduleName = page.getByRole("combobox", { name: "Select Module Name" });
  await dropdownSelect(page, moduleName, 1);
  const typeName = page.getByRole("combobox", { name: "Select Type Name" });
  await dropdownSelectOnly(page, typeName);
  const category = page.getByRole("combobox", { name: "Select Category" });
  await dropdownSelect(page, category, 1);
}

test("This test adds a new type config and verifies it", async ({ page }) => {
  await addTypeConfig(page);
});
