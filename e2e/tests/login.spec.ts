import { userLogin } from "@pages/loginPage";
import { test } from "@playwright/test";

test.describe("Login page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(``);
  });

  test("Provide wrong email", async ({ page }) => {
    await userLogin(page, "userWithoutAccount");
    // await expect(validationError).toHaveText('Invalid username or password.');
  });
});
