import { test } from "@playwright/test";
import { ListingAmenities } from "../../../pages/ListingAmenities.js";

test("This test adds a new Amenity and verifies it", async ({ page }) => {
  const ListingAmenitiesinstance = new ListingAmenities(page);
  await ListingAmenitiesinstance.createamenityCategory();
});
