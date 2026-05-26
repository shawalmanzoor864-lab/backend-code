const { test, expect } = require('@playwright/test');

test('homepage loads and title is correct', async ({ page }) => {
  await page.goto(process.env.BASE_URL);
  await expect(page).toHaveTitle(/Portfolio|Home/);
});

test('main sections are visible', async ({ page }) => {
  await page.goto(process.env.BASE_URL);
  await expect(page.locator('nav')).toBeVisible();
  await expect(page.locator('main, #about, #projects')).toBeVisible();
});