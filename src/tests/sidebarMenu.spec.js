import { test, expect } from "@playwright/test";
import { BasePage } from "../po/pages/BasePage";

test.describe('Test suit', async () => {

let page;
let homePage;

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

test('')


});//describe