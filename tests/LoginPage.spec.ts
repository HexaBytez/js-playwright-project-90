import { test, expect } from '@playwright/test'
import LoginPage from './pages/loginPage';

test('testing login form', async ({page}) => {
  const LoginUserPage = new LoginPage(page);
  await LoginUserPage.goto('/#/login');
  await LoginUserPage.fillUsername('username');
  await LoginUserPage.fillPassword('password');
  await LoginUserPage.submitButtonClick();
  await LoginUserPage.verifyAfterLogin();
  await LoginUserPage.profileButton();
  await LoginUserPage.logOutButton();

})