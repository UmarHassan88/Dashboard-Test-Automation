import { test } from "@playwright/test";
import { SettingsGeneralPage } from "../../../pages/SettingsGeneralPage.js";

test("Adding a Country", async ({ page }) => {
  const settingsGeneralPage = new SettingsGeneralPage(page);
  await settingsGeneralPage.createCountry();
});

test("Adding a State", async ({ page }) => {
  const settingsGeneralPage = new SettingsGeneralPage(page);
  await settingsGeneralPage.createState();
});

test("Adding a City", async ({ page }) => {
  const settingsGeneralPage = new SettingsGeneralPage(page);
  await settingsGeneralPage.createCity();
});

test("Adding a Community", async ({ page }) => {
  const settingsGeneralPage = new SettingsGeneralPage(page);
  await settingsGeneralPage.createCommunity();
});

test("Adding a SubCommunity", async ({ page }) => {
  const settingsGeneralPage = new SettingsGeneralPage(page);
  await settingsGeneralPage.createSubCommunity();
});
