// @ts-check
import { test, expect } from "@playwright/test";
import { BasePage } from "../po/pages/BasePage";


/*test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});*/

test.describe.configure({mode: 'serial' });

let page;
let homePage; // Define homePage variable outside beforeEach()

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  homePage = new BasePage(page);
  await homePage.gotoHomePage();
  await homePage.closeCookiesBar();
});

test.afterEach(async () => {
  if (page) {
    await page.close();
  }
});

/*test('Get title', async () => {
  await expect(page).toHaveTitle('EPAM | Software Engineering & Product Development Services');
});*/

/*test('The button should contain its name', async () => {
  await expect(homePage.locationBtn).toHaveText('Global (EN)');
});*/

/*test('Should open hamburger menu', async () => {
  await homePage.hamburgerMenu.click();
  await expect(homePage.hamburgerMenuDrop).toBeVisible();
});*/

test('Search by', async () => {
  await homePage.searchQuery('Automation');
  const searchResultsText = await page.$eval('h2.search-results__counter', element => element.textContent);
  const receivedText = searchResultsText.split(' ').pop().replace(/"/g, ''); // Remove all backslashes
  expect(receivedText.toUpperCase()).toBe('AUTOMATION');
});

/*test('The logo should be present', async () => {
  await page.waitForTimeout(100);
  await expect(homePage.logo).toBeVisible();
});*/

/*test('Should hover header menu', async () => {
  await page.waitForTimeout(100);
  await homePage.getMenuItem('Industries');
  
});*/









