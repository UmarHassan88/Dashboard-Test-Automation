import { test, expect } from "@playwright/test";
import {
  Login,
  tillSettings,
  dropdownSelect,
  submitButton,
  uploadFile,
  tillGeneralSettings,
  randomStringGenerator,
  randomIntGenerator,
} from "../../../utils/helpers";

async function addMediaCategory(page) {
  await Login(page);
  await tillSettings(page);
  await tillGeneralSettings(page);
  const mediaCategoryTab = page.getByRole("button", { name: "Media Category" });
  await expect(mediaCategoryTab).toBeVisible();
  await mediaCategoryTab.click();
  console.log("Landed on Media Category Page");
  const addMediaCategoryButton = page.getByRole("button", {
    name: "Add Category",
  });
  await expect(addMediaCategoryButton).toBeVisible();
  await addMediaCategoryButton.click();
  console.log("Adding a new Media Category");
  const categoryEN = page.getByRole("textbox", { name: "Enter Category EN" });
  await randomStringGenerator(page, categoryEN);
  const categoryENInput = await categoryEN.inputValue();
  const categoryAR = page.getByRole("textbox", { name: "Enter category (AR)" });
  await categoryAR.fill("طبيعة");
  const mediasizeLimit = page.getByPlaceholder("Enter Media Size Limit");
  await randomIntGenerator(page, mediasizeLimit);
  const mediasizelimitValue = await mediasizeLimit.inputValue();
  if (mediasizelimitValue < 50) {
    console.log("Size limit is in range which is: ", mediasizelimitValue);

    await submitButton(page);
  } else {
    console.log("Size limit exceeded. Please enter a value less than 50.");
  }
  await page.waitForTimeout(3000);
  await page.reload();
  console.log("Category to verify", categoryENInput);
  const verifyaddedCategory = page.getByRole("cell", {
    name: categoryENInput,
  });
  await expect(verifyaddedCategory).toBeVisible();
  console.log("The added Media Category is verified successfully!");
}

test("This test adds a media category and verifies it", async ({ page }) => {
  await addMediaCategory(page);
});
