import {
  invalidEmailMessage,
  inviteButton,
  inviteMembers,
  inviteUserWithInvalidEmail,
  successMessage,
  uploadMembersThroughCSVfile,
} from "@pages/inviteMemberToCommunityPage";
import { userLogin } from "@pages/loginPage";
import { expect, test } from "@playwright/test";

test.describe("Community member manager dashboard tests", () => {
  test.beforeEach(async ({ page }) => {
    await userLogin(page, "user1");
    await page.goto("/org/natter/communities/660409/members");
  });

  test("Invite a community member as a community owner", async ({ page }) => {
    await inviteMembers(page, "Community Owner");
    await expect(successMessage(page)).toHaveText("Invitation has been sent");
  });

  test("Invite a community member as a community manager", async ({ page }) => {
    await inviteMembers(page, "Community Manager");
    await expect(successMessage(page)).toHaveText("Invitation has been sent");
  });

  test("Invite a community member as a community member", async ({ page }) => {
    await inviteMembers(page, "Community Member");
    await expect(successMessage(page)).toHaveText("Invitation has been sent");
  });

  test.skip("Invite a community member as a community access", async ({
    page,
  }) => {
    await inviteMembers(page, "Community Custom Access");
    await expect(successMessage(page)).toHaveText("Invitation has been sent");
  });

  test("Invite members through a CSV file", async ({ page }) => {
    await inviteMembers(page, "CSV file");
    await expect(successMessage(page)).toHaveText("Invitation has been sent");
  });

  test("Invite members through a CSV file and then remove all", async ({
    page,
  }) => {
    await uploadMembersThroughCSVfile(page, "Remove All");
    await expect(inviteButton(page)).toHaveText("Invite");
    await expect(inviteButton(page)).toBeDisabled();
  });

  test("Invite members through a CSV file and then remove one member", async ({
    page,
  }) => {
    await uploadMembersThroughCSVfile(page, "Remove One Member");
    await expect(inviteButton(page)).toHaveText("Invite");
    await expect(inviteButton(page)).toBeEnabled();
  });

  test("Invite a community member with invalid email", async ({ page }) => {
    await inviteUserWithInvalidEmail(page);
    await expect(invalidEmailMessage(page)).toHaveText(
      "email must be a valid email"
    );
  });
});
