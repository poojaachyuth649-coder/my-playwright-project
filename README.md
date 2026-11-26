# my-playwright-project

Playwright tests using the Page Object Model (POM) for W3Schools.

## Run the tests

Install dependencies and the browser binaries once:

```powershell
npm.cmd ci
npx.cmd playwright install
```

Run the test suite:

```powershell
npm.cmd test
```

Generate and open the Allure report:

```powershell
npm.cmd run allure:report
npm.cmd run allure:open
```

The test command creates fresh Allure results in `allure-results/`. The HTML
report is generated in `allure-report/`; both directories are ignored by Git.
Playwright captures a screenshot for every test and includes it in the reports.

Run only the W3Schools POM test in Chromium:

```powershell
npx.cmd playwright test tests/w3schools.spec.ts --project=chromium
```

## CI

GitHub Actions runs the Playwright suite on pushes and pull requests targeting
`main` or `master`, and every day at 09:00 India Standard Time (03:30 UTC).
To start a run manually, open the repository's **Actions** tab, select
**Playwright Tests**, and choose **Run workflow**.

## Project structure

- `pages/` contains page objects and their locators/actions.
- `tests/` contains test scenarios and assertions.
- `tests/hooks.ts` contains the W3Schools test setup and teardown hooks.
- `test-data/` contains JSON test data used by the tests.

Add or edit entries in `test-data/w3schools.json` to change the tutorial links,
expected URLs, and whether the date/time example is checked. Each entry creates
a separate test; no test code changes are needed for another tutorial with the
same flow.
