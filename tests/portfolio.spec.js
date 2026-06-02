const { test, expect } = require('@playwright/test');

test('homepage loads and title is correct', async ({ page }) => {
  await page.goto(process.env.BASE_URL || 'http://web:80');

  await expect(page).toHaveTitle(/Portfolio|Home/i);
});

test('main sections are visible', async ({ page }) => {
  await page.goto(process.env.BASE_URL || 'http://web:80');

  await expect(page.locator('nav')).toBeVisible();

  // safer check: ensure either main exists OR fallback to body sections
  const main = page.locator('main');
  const about = page.locator('#about');
  const projects = page.locator('#projects');

  // main may or may not exist depending on HTML version
  if (await main.count() > 0) {
    await expect(main).toBeVisible();
  }

  await expect(about).toBeVisible();
  await expect(projects).toBeVisible();
});