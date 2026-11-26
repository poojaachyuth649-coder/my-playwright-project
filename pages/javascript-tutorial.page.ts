import type { Page } from '@playwright/test';

export class JavaScriptTutorialPage {
  constructor(private readonly page: Page) {}

  get dateTimeButton() {
    return this.page.getByRole('button', { name: /Click me to display Date and/ });
  }

  get dateTimeOutput() {
    return this.page.locator('#demo');
  }

  async displayDateAndTime(): Promise<void> {
    await this.dateTimeButton.click();
  }
}
