import { expect, test } from '@playwright/test';
import { JavaScriptTutorialPage } from '../pages/javascript-tutorial.page';
import { W3SchoolsHomePage } from '../pages/w3schools-home.page';
import { registerW3SchoolsHooks } from './hooks';

registerW3SchoolsHooks();

type TutorialTestCase = {
  tutorialLink: string;
  expectedUrl: string;
  displayDateTime: boolean;
};

const tutorialTestCases: TutorialTestCase[] = require('../test-data/w3schools.json');

for (const testCase of tutorialTestCases) {
  test(`opens the ${testCase.tutorialLink} tutorial`, async ({ page }) => {
    const homePage = new W3SchoolsHomePage(page);
    await homePage.openTutorial(testCase.tutorialLink);

    await expect(page).toHaveURL(testCase.expectedUrl);

    if (testCase.displayDateTime) {
      const javascriptTutorialPage = new JavaScriptTutorialPage(page);
      await javascriptTutorialPage.displayDateAndTime();
      await expect(javascriptTutorialPage.dateTimeOutput).not.toBeEmpty();
    }
  });
}
