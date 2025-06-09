import { expect, Page } from "@playwright/test";

export default class usersStory {
    [x: string]: any;
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.usersMenuItem = page.getByText('Users')
        this.buttonCreateUser = page.getByRole('link', { name: 'Create' });
        this.fieldUserEmail = page.locator('input[name="email"]')
        this.fieldUserFirstName = page.locator('input[name="firstName"]')
        this.fieldUserLastName = page.locator('input[name="lastName"]')
        this.buttonSaveUser = page.getByRole('button', { name: 'Save' })
    }

    async selectUsersItem () {
        await expect(this.usersMenuItem).toBeVisible();
        await this.usersMenuItem.click();
        await expect(this.page.locator('header')).toContainText('Users');
    }

    async createUserButton () {
        await expect(this.buttonCreateUser).toBeVisible();
        await this.buttonCreateUser.click();
        await expect(this.page.locator('header')).toContainText('Create User')
    }

    async emailFieldOnUserCreate (user_email: string) {
        await expect(this.fieldUserEmail).toBeVisible();
        await this.fieldUserEmail.fill(user_email)
    }

    async firstNameFieldOnUserCreate (user_first_name: string) {
        await expect(this.fieldUserFirstName).toBeVisible();
        await this.fieldUserFirstName.fill(user_first_name)
    }

    async lastNameFieldOnUserCreate (user_last_name: string) {
        await expect(this.fieldUserLastName).toBeVisible();
        await this.fieldUserLastName.fill(user_last_name)
    }

    async saveButtonUser () {
        await expect(this.buttonSaveUser).toBeVisible();
        await this.buttonSaveUser.click();
    }
    
}