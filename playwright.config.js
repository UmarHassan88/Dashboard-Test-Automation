// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * Root config so `npx playwright test` works from the repo root.
 * Specs and page objects live under dashboard-project/.
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./dashboard-project/tests",
  timeout: 15000,

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",

  use: {
    expect: { timeout: 7000 },
    trace: "on-first-retry",
    video: "on-first-retry",
    screenshot: "only-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        trace: "on",
        headless: true,
        viewport: { width: 1780, height: 1080 },
      },
    },
    {
      name: "Edge",
      use: { ...devices["Desktop Edge"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 12"] },
    },
  ],
});
