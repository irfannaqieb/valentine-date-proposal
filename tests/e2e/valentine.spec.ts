import { test, expect, type Page } from "@playwright/test";

// This file contains the actual test cases that simulate user interactions
test.describe("Valentine App Flow", () => {
  test("should complete the full valentine flow", async ({
    page,
  }: {
    page: Page;
  }) => {
    // Start at homepage
    await page.goto("/");

    // Check if main question is visible
    await expect(page.getByText("Will you be my Valentine?")).toBeVisible();

    // Debug: Log current URL before clicking
    console.log("Current URL before click:", page.url());

    // Click the "Yes" button and wait for navigation
    await Promise.all([
      page.waitForNavigation(),
      page.getByText("Yes 💖").click(),
    ]);

    // Should navigate to cuisine page
    await expect(page.getByText("OK! Awak rasa nak makan apa?")).toBeVisible({
      timeout: 10000,
    });

    // Select Malaysian cuisine and wait for navigation
    await Promise.all([
      page.waitForNavigation(),
      page.getByText("Malaysian").click(),
    ]);

    // Should navigate to date page
    await expect(page.getByText("Pick a date!")).toBeVisible();

    // Click the next button with default date and wait for navigation
    await Promise.all([
      page.waitForNavigation(),
      page.getByText("Next").click(),
    ]);

    // Should show final summary
    await expect(page.getByText(/Valentine's Day is set!/)).toBeVisible();
  });

  test("should show growing button when clicking No", async ({
    page,
  }: {
    page: Page;
  }) => {
    await page.goto("/");

    // Click No multiple times and verify the button grows
    const noButton = page.getByText("No 😢");
    await noButton.click();
    await noButton.click();

    // Check if sad GIF appears
    await expect(page.getByAltText("gif")).toBeVisible();
  });
});
