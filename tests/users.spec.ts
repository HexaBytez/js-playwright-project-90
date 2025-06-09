import { test, expect } from '@playwright/test';
import LoginPage from './pages/loginPage';
import usersStory from './pages/users';

test('Create new user', async ({ page }) => {
    const LoginUserPage = new LoginPage(page);
    const UserStoryCase = new usersStory(page);
    await LoginUserPage.goto('/#/login');
    await LoginUserPage.fillUsername('username');
    await LoginUserPage.fillPassword('password');
    await LoginUserPage.submitButtonClick();
    await LoginUserPage.verifyAfterLogin();
    await UserStoryCase.selectUsersItem();
    await UserStoryCase.createUserButton();
    await UserStoryCase.emailFieldOnUserCreate('example@expect.ccc');
    await UserStoryCase.firstNameFieldOnUserCreate('exampleName')
    await UserStoryCase.lastNameFieldOnUserCreate('exampleLastname')
    await UserStoryCase.saveButtonUser();
})