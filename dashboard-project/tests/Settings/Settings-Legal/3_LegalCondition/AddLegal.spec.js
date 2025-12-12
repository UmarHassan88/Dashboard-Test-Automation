import { test, expect } from "@playwright/test";
import {
  Login,
  tillSettings,
  tillLegal,
  randomIntGenerator,
  mandatoryfieldsValidationCustom,
  countryGenerator,
  selectCountry,
  uploadFile,
  dropdownSelect,
  submitButton,
} from "../../../utils/helpers.js";

async function addLegalCondition(page) {
  await Login(page);
  await tillSettings(page);
  await tillLegal(page);
  const legalConditionOption = page.getByRole("button", {
    name: "Legal Condition",
  });
  await expect(legalConditionOption).toBeVisible();
  await legalConditionOption.click();
  console.log("Landed on Legal Condition Page");
  const createLegalConditionbutton = page.getByRole("button", {
    name: "create Legal conditions",
  });
  await expect(createLegalConditionbutton).toBeVisible();
  await createLegalConditionbutton.click();
  console.log("Adding a new Legal Condition");

  //Verifying Mandatory Fields
  const legalCondMandCheck = await page.getByText("Legal Condition Title *");
  await mandatoryfieldsValidationCustom(page, legalCondMandCheck);
  const fileUploadMandCheck = await page.getByText("Upload File *");
  await mandatoryfieldsValidationCustom(page, fileUploadMandCheck);

  console.log("---Mandatory Field Validations Check Passed!---");
  const accountType = page.getByRole("combobox", {
    name: "Please Select Account Type",
  });
  await accountType.click();
  await dropdownSelect(page, accountType, 1);
  const accountTypeValue = await accountType.inputValue();
  console.log("Selected Account Type: ", accountTypeValue);
  await selectCountry(page);
  const serviceExpertise = page.getByRole("combobox", {
    name: "Select Service Expertise",
  });
  await serviceExpertise.click();
  await dropdownSelect(page, serviceExpertise, 2);

  const legalConditionTitle = page.getByRole("textbox", {
    name: "Enter Legal Condition Title",
    exact: true,
  });
  const legalConditionTextValue = await legalConditionTitle.inputValue();

  await legalConditionTitle.fill("Test Legal Condition Title");
  const legalConsitionTitleAR = page.getByRole("textbox", {
    name: "Enter Legal Condition Title AR",
  });
  await legalConsitionTitleAR.fill("اختبار عنوان الشرط القانوني");
  const fileUpload = page.getByRole("button", { name: "Choose File" });
  await uploadFile(page, fileUpload);
  const legalParagraph = page.getByRole("textbox", {
    name: "Enter Legal conditions",
  });
  await legalParagraph.fill("These are the legal conditions in English.");
  const infoMessage = page.getByRole("textbox", { name: "Enter info message" });
  await infoMessage.fill("This is an informational message in English.");
  await submitButton(page);
  console.log("New Legal Condition Added Successfully!");

  await page.waitForTimeout(4000); //Waiting for 4 seconds to reflect in the List
  await page.reload();

  console.log("Verifying the Added Legal Condition in the List");
  const addedaccountType = page
    .getByRole("cell", { name: accountTypeValue })
    .first();
  await expect(addedaccountType).toBeVisible();
  console.log(
    "Added Legal Condition for the Account Type Verified in the List Successfully!"
  );
}

test("This test adds a Legal Condition and verifies its addition", async ({
  page,
}) => {
  await addLegalCondition(page);
});
