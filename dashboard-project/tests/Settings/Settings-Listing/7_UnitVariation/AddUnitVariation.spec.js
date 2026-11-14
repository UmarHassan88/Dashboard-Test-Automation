import { test, expect } from "@playwright/test";
import { ListingUnitVariation } from "../../../../pages/ListingUnitVariation";

test("This test creates a new Unit Variation", async ({ page }) => {
  const instance = new ListingUnitVariation(page);
  await instance.navigatetoUnitVariation();
  await instance.addUnitVariation();
});
