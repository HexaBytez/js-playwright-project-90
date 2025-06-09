import { expect, Page } from '@playwright/test';

const baseURL = 'http://localhost:5173';

export default class LoginPage {
  [x: string]: any;
  readonly page: Page;
  readonly inputUsername;

  constructor(page: Page) {
    this.page = page;
    this.inputUsername = page.locator('input[name="username"]');
    this.inputPassword = page.locator('input[name="password"]');
    this.submitButton = page.getByRole('button', { name: 'Sign in'});
    this.pageProfile = page.getByLabel('Profile')
    this.logOut = page.getByTestId('PowerSettingsNewIcon')
  }

  async goto(p0: string) {
    await this.page.goto(baseURL);
  }

  async fillUsername(username: string) {
    await this.inputUsername.fill(username);
  }

  async fillPassword(password: string) {
    await this.inputPassword.fill(password);
  }

  async submitButtonClick() {
    await this.submitButton.click();
  }

  async verifyAfterLogin() {
    await expect(this.page.getByText('Welcome to the administration')).toBeVisible();
    await expect(this.page).not.toHaveURL(/\/login/);
  }

  async profileButton() {
    await expect(this.pageProfile).toBeVisible();
    await this.pageProfile.click();
  }

  async logOutButton() {
    await expect(this.logOut).toBeVisible();
    await this.logOut.click();
    await expect(this.logOut).not.toBeVisible();
    await expect(this.page).toHaveURL(/\/login/);
  }
}
