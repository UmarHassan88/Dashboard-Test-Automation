import { test } from "@playwright/test";
import { ListingTypeConfig } from "../../../../pages/ListingTypeConfig.js";

test("This test adds a new type config and verifies it", async ({ page }) => {
  const ListingTypeConfiginstance = new ListingTypeConfig(page);
  await ListingTypeConfiginstance.createTypeConfig();
});
