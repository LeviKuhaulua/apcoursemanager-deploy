import { test, expect } from '@playwright/test';

test.use({ storageState: 'admin-auth.json' });

test('Admin User Pages', async ({ page }) => {
  await page.goto('https://apcoursemanager.vercel.app/admin/');
  await expect(page.getByText('#list')).toBeVisible();
  await page.goto('https://apcoursemanager.vercel.app/admin/adduser');
  await expect(page.locator('.card')).toBeVisible();
  await page.goto('https://apcoursemanager.vercel.app/admin/edituser/1');
  await expect(page.locator('.col-5')).toBeVisible();
});
