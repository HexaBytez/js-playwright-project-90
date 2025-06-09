import { test, expect } from '@playwright/test';

test('checking renders', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#root')).toBeVisible();
    await expect(page.getByTestId('LockIcon')).toBeVisible();
})