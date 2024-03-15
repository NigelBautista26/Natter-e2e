import { Page } from "@playwright/test";
import { Users, users } from "@utils/environmentUsersLogic";
import { PageAction, PageLocator, getByTestId } from "@utils/pageUtils";

export const emailField: PageLocator = getByTestId("login-username-input");
export const passwordField: PageLocator = getByTestId("login-password-input");
export const loginButton: PageLocator = getByTestId("login-submit");

export const gotoBaseUrl: PageAction = async (page) => {
  await page.goto("");
};

export const userLogin = async (page: Page, user: keyof Users) => {
  await gotoBaseUrl(page);
  await emailField(page).fill(users[user].username);
  await passwordField(page).fill(users[user].password);
  await loginButton(page).click();
};
