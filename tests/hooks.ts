import { test } from '@playwright/test';
import { W3SchoolsHomePage } from '../pages/w3schools-home.page';

export function registerW3SchoolsHooks(): void {
  test.beforeEach(async ({ page }) => {
    const homePage = new W3SchoolsHomePage(page);
    await homePage.open();
  });
}
