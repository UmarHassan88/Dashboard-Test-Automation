import { test, expect } from "@playwright/test";
import {
  tillSettings,
  Login,
  tillGeneralSettings,
  countryGenerator,
  dropdownSelect,
  randomStringGenerator,
  randomIntGenerator,
  submitButton,
  selectCountry,
  dropdownSelectOnly,
  uploadFile,
  selectState,
  selectCity,
  selectCommunity,
  selectlatlang,
  mandatoryfieldValidation,
  mandatoryfieldsValidationCustom,
} from "../../../utils/helpers";

async function addSubcommunity(page) {
  await Login(page);
  await tillSettings(page);
  await tillGeneralSettings(page);
  await expect(page).toHaveURL(
    "http://192.168.1.203:3000/en/dashboard/settings/general"
  );
  console.log("Navigating to the Sub community Settings");
  const subCommunityOption = page.getByRole("button", {
    name: "Sub Community",
  });
  await subCommunityOption.click();
  const addSubcommunity = page.getByRole("button", {
    name: "Add Sub Community",
  });

  //Validating Mandatory Fields
  await addSubcommunity.click();
  const countryMandatory = page.getByText("Country *");
  await mandatoryfieldsValidationCustom(page, countryMandatory);
  const countrySelect = page.getByRole("combobox", { name: "Select Country" });
  await countrySelect.click();
  await countryGenerator(page, countrySelect, 1);
  await dropdownSelectOnly(page, countrySelect);
  await selectState(page);
  await selectCity(page);
  await selectCommunity(page);
  const subCommunityfield = page.getByRole("textbox", {
    name: "Sub Community",
    exact: true,
  });
  const subCommunityfieldAR = page.getByRole("textbox", {
    name: "Sub Community Arabic",
  });
  await randomStringGenerator(page, subCommunityfield);
  await randomStringGenerator(page, subCommunityfieldAR);
  await selectlatlang(page);
  await submitButton(page);
  console.log("Sub community is Added Successfully!");
  const subCommunityinput = await subCommunityfield.inputValue();
  console.log("Sub community to be Verified: ", subCommunityinput);
  await page.waitForTimeout(3000);
  await page.reload();
  const verifySubCommunity = page.getByRole("cell", {
    name: subCommunityinput,
  });
  await expect(verifySubCommunity).toBeVisible();
  console.log("Added Sub community is Verified Successfully!");
}

test("This test adds a subcommunity", async ({ page }) => {
  await addSubcommunity(page);
});
