import { userLogin } from "@pages/loginPage";
import {
  addFacebookURL,
  addInstagramURL,
  addInvalidFacebookURL,
  addInvalidInstagramURL,
  addInvalidLinkedInURL,
  addInvalidTwitterURL,
  addLinkedInURL,
  addLongFacebookURL,
  addLongInstagramURL,
  addLongLinkedInURL,
  addLongTwitterURL,
  addTwitterURL,
  deleteAvatarButton,
  deleteAvatarImage,
  emptyAvatar,
  facebookURLField,
  instagramURLField,
  invalidFacebookURLMessage,
  invalidInstagramURLMessage,
  invalidLinkedInURLMessage,
  invalidTwitterURLMessage,
  invalidURLToLongMessage,
  linkedInURLField,
  profileURLs,
  twitterURLField,
  uploadAvatarImage,
  userAvatarImage,
} from "@pages/profileSettings";
import { expect, test } from "@playwright/test";
import { profileSettingsExpectedMessages } from "constants/invalidURLMessagesForProfileSettings";

test.describe("Profile settings page test scenarios ", () => {
  test.beforeEach(async ({ page }) => {
    await userLogin(page, "user1");
    await page.goto("/user-profile");
  });

  test("Upload profile avatar image", async ({ page }) => {
    await uploadAvatarImage(page);
    await expect(userAvatarImage(page)).toBeVisible();
    await expect(deleteAvatarButton(page)).toBeVisible();
  });

  test("Delete profile avatar image", async ({ page }) => {
    await deleteAvatarImage(page);
    await expect(emptyAvatar(page)).toBeVisible();
    await expect(deleteAvatarButton(page)).toBeHidden();
  });

  test("Add Facebook URL", async ({ page }) => {
    await addFacebookURL(page);
    await expect(facebookURLField(page)).toHaveValue(profileURLs.facebook);
  });

  test("Add invalid Facebook URL", async ({ page }) => {
    await addInvalidFacebookURL(page);
    await expect(invalidFacebookURLMessage(page)).toHaveText(
      profileSettingsExpectedMessages.invalidFacebookURL
    );
  });

  test("Add invalid long Facebook URL", async ({ page }) => {
    await addLongFacebookURL(page);
    await expect(invalidURLToLongMessage(page)).toHaveText(
      profileSettingsExpectedMessages.invalidLongURL
    );
  });

  test("Add Twitter URL", async ({ page }) => {
    await addTwitterURL(page);
    await expect(twitterURLField(page)).toHaveValue(profileURLs.twitter);
  });

  test("Add invalid Twitter URL", async ({ page }) => {
    await addInvalidTwitterURL(page);
    await expect(invalidTwitterURLMessage(page)).toHaveText(
      profileSettingsExpectedMessages.invalidTwitterURL
    );
  });

  test("Add invalid long Twitter URL", async ({ page }) => {
    await addLongTwitterURL(page);
    await expect(invalidURLToLongMessage(page)).toHaveText(
      profileSettingsExpectedMessages.invalidLongURL
    );
  });

  test("Add Instagram URL", async ({ page }) => {
    await addInstagramURL(page);
    await expect(instagramURLField(page)).toHaveValue(profileURLs.instagram);
  });

  test("Add invalid Instagram URL", async ({ page }) => {
    await addInvalidInstagramURL(page);
    await expect(invalidInstagramURLMessage(page)).toHaveText(
      profileSettingsExpectedMessages.invalidInstagramURL
    );
  });

  test("Add invalid long Instagram URL", async ({ page }) => {
    await addLongInstagramURL(page);
    await expect(invalidURLToLongMessage(page)).toHaveText(
      profileSettingsExpectedMessages.invalidLongURL
    );
  });

  test("Add Linkedin URL", async ({ page }) => {
    await addLinkedInURL(page);
    await expect(linkedInURLField(page)).toHaveValue(profileURLs.linkedIn);
  });

  test("Add invalid Linkedin URL", async ({ page }) => {
    await addInvalidLinkedInURL(page);
    await expect(invalidLinkedInURLMessage(page)).toHaveText(
      profileSettingsExpectedMessages.invalidLinkedInURL
    );
  });

  test("Add invalid long Linkedin URL", async ({ page }) => {
    await addLongLinkedInURL(page);
    await expect(invalidURLToLongMessage(page)).toHaveText(
      profileSettingsExpectedMessages.invalidLongURL
    );
  });
});
