import type { Page } from '@playwright/test';

export class W3SchoolsHomePage {
  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async openTutorial(linkName: string): Promise<void> {
    await this.page.getByRole('link', { name: linkName, exact: true }).click();
  }
}
