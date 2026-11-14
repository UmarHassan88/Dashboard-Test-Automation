import { test } from "@playwright/test";
import { ListingViews } from "../../../../pages/ListingViews.js";

test("This test adds a View and verifies it", async ({ page }) => {
  const ListingViewsinstance = new ListingViews(page);
  await ListingViewsinstance.createView();
});
