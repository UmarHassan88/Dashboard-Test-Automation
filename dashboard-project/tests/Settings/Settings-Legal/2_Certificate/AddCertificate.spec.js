import { test, expect } from "@playwright/test";
import {
  Login,
  tillSettings,
  tillLegal,
  randomIntGenerator,
  randomStringGenerator,
  dropdownSelect,
  mandatoryfieldValidation,
  mandatoryfieldsValidationCustom,
  submitButton,
  mandatoryFields,
} from "../../../utils/helpers.js";

async function addCertification(page) {
  await Login(page);
  await tillSettings(page);
  await tillLegal(page);
  const certificateOption = page.getByRole("button", { name: "Certificate" });
  await expect(certificateOption).toBeVisible();
  await certificateOption.click();
  console.log("Landed on Certificate Page");
  const createCertificatebutton = page.getByRole("button", {
    name: "create Certificate",
  });
  await expect(createCertificatebutton).toBeVisible();
  await createCertificatebutton.click();
  console.log("Adding a new Certificate");
  //Verifying Mandatory Fields
  const certificatenameMandCheck = await page.getByTestId("name");
  await mandatoryFields(page, certificatenameMandCheck);
  console.log("---Mandatory Field Validations Check Passed!---");

  //Filling the Form
  const certificateName = page.getByRole("textbox", {
    name: "Enter certitfacte Name",
  });
  await randomStringGenerator(page, certificateName);
  const certificateNamear = page.getByRole("textbox", {
    name: "Enter certificate Name AR",
  });
  await randomStringGenerator(page, certificateNamear);
  const individualType = page.getByRole("combobox", {
    name: "Please Selectindividual type",
  });
  await individualType.click();
  await dropdownSelect(page, individualType, 2);
  const country = page.getByRole("combobox", { name: "Select Country" });
  await country.click();
  await dropdownSelect(page, country, 1);
  const generalLicense = page.getByRole("checkbox", {
    name: "General License",
  });
  await generalLicense.check();
  const serviceArea = page.getByRole("combobox", { name: "service area" });
  await expect(serviceArea).toHaveClass(/Mui-disabled/);
  console.log("Disabled Checked");
  await page.waitForTimeout(1000);
  await generalLicense.uncheck();
  await serviceArea.click();
  await dropdownSelect(page, serviceArea, 3);
  const serviceExpertise = page.getByRole("combobox", {
    name: "Please Select service",
  });
  await serviceExpertise.click();
  await dropdownSelect(page, serviceExpertise, 2);
  const infoMessage = page.getByRole("textbox", { name: "Enter info message" });
  await infoMessage.fill("This is certificate info message");
  const mandatoryCertificate = page.getByRole("checkbox", {
    name: "Mandatory certificate",
  });
  await mandatoryCertificate.check();
  await submitButton(page);
  console.log("New Certificate Added Successfully");

  //Verifying if the Certificate is added successfully
  console.log("---Verifying the added Certificate---");
  const certificateInputValue = await certificateName.inputValue();
  console.log("Certificate Name to be Verified: ", certificateInputValue);
  await page.waitForTimeout(4000);
  await page.reload();
  const addedCertificate = page.getByRole("cell", {
    name: certificateInputValue,
    exact: true,
  });
  await expect(addedCertificate).toBeVisible();
  console.log("Added Certificate Verified Successfully!");
}

test("This test adds a a new certificate and verifies if it is added successfully", async ({
  page,
}) => {
  await addCertification(page);
});
