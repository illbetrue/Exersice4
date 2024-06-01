exports.BasePage = class BasePage {

  constructor(page){
    this.page = page;
    this.searchBtn = page.locator('button.header-search__button');
    this.hamburgerMenu = page.locator('button.hamburger-menu__button');
    this.headerMenu = page.locator('span.top-navigation__item-text');
    this.contactUs = page.locator('span.cta-button__text');
    this.logo = page.locator('a.header__logo-container.desktop-logo');
    this.locationBtn = page.locator('button.location-selector__button');
    this.hamburgerMenuDrop = page.locator('div.hamburger-menu__dropdown-section');
    this.cookiesBar = page.locator('#onetrust-banner-sdk');
    this.acceptCookiesBtn = page.locator('#onetrust-banner-sdk #onetrust-accept-btn-handler');
    this.searchInput = page.locator('#new_form_search');
    this.findButton = page.locator('div.search-results__action-section > button');
    this.searchResults = page.locator('h2.search-results__counter');
  }

  
  async gotoHomePage() {
    await this.page.goto('https://www.epam.com/');
  }

  async closeCookiesBar() {

    await this.page.waitForSelector('#onetrust-banner-sdk');
    await this.acceptCookiesBtn.click();
    await this.page.context().storageState({path: 'state.json'});

  }

  async searchQuery(query) {
    await this.page.waitForSelector('button.header-search__button');
    await this.searchBtn.click();
    await this.searchInput.type(query);
    await this.findButton.click();
    await this.page.waitForSelector('h2.search-results__counter');
    
  }

  async getMenuItem(param) {
    await this.page.waitForSelector('ul.top-navigation__row');
    await this.headerMenu.getByText(param).hover();
  }
  
};
