import { faker } from "@faker-js/faker";
import {
  PageAction,
  PageLocator,
  clickAndWait,
  getByRole,
  getByTestId,
  getByText,
} from "@utils/pageUtils";
import { profileURLs, longProfileURLs } from "constants/socialMediaURLs";
import { Page } from "playwright";

const avatarImage = "e2e/assets/avatarImage.png";

export const uploadAvatarButton: PageLocator = getByTestId(
  "upload-avatar-button"
);
export const uploadImageButton: PageLocator = getByTestId("image-input");
export const saveChangesButton: PageLocator = getByRole({
  role: "button",
  name: "Save Changes",
});
export const deleteAvatarButton: PageLocator = getByTestId(
  "delete-avatar-button"
);
export const confirmButton: PageLocator = getByTestId("confirm");
export const updateButton: PageLocator = getByRole({
  role: "button",
  name: "update",
});
export const socialMediaTab: PageLocator = getByTestId(
  "step-tab My Social Media"
);
export const facebookURLField: PageLocator = getByTestId("socials.facebook");
export const invalidFacebookURLMessage: PageLocator = getByText(
  "Should be proper facebook link"
);
export const twitterURLField: PageLocator = getByTestId("socials.twitter");
export const invalidTwitterURLMessage: PageLocator = getByText(
  "Should be proper twitter link"
);
export const invalidURLToLongMessage: PageLocator = getByText("Too long URL");
export const instagramURLField: PageLocator = getByTestId("socials.instagram");
export const invalidInstagramURLMessage: PageLocator = getByText(
  "Should be proper instagram link"
);
export const linkedInURLField: PageLocator = getByTestId("socials.linkedin");
export const invalidLinkedInURLMessage: PageLocator = getByText(
  "Should be proper linkedin link"
);
export const emptyAvatar: PageLocator = (page: Page) =>
  page.getByTestId("0-step-body").getByTestId("UserAvatar-empty");
export const userAvatarImage: PageLocator = (page: Page) =>
  page.getByTestId("0-step-body").getByRole("img", { name: "User avatar" });

export const goToSocialMediaSection: PageAction = async (page: Page) => {
  await clickAndWait(socialMediaTab, page, 1000);
};

export const uploadAvatarImage: PageAction = async (page: Page) => {
  await uploadAvatarButton(page).click();
  await uploadImageButton(page).setInputFiles(avatarImage);
  await saveChangesButton(page).click();
};

export const deleteAvatarImage: PageAction = async (page: Page) => {
  await deleteAvatarButton(page).click();
  await clickAndWait(confirmButton, page, 500); // I need to add a wait here because when deleting an avatar. the effects seem to be so delayed that it takes about 4 seconds on average to see the changes in the UI...
};

export const addFacebookURL: PageAction = async (page: Page) => {
  await goToSocialMediaSection(page);
  await facebookURLField(page).fill(profileURLs.facebook);
  await updateButton(page).click();
};

export const addTwitterURL: PageAction = async (page: Page) => {
  await goToSocialMediaSection(page);
  await twitterURLField(page).fill(profileURLs.twitter);
  await updateButton(page).click();
};

export const addInstagramURL: PageAction = async (page: Page) => {
  await goToSocialMediaSection(page);
  await instagramURLField(page).fill(profileURLs.instagram);
  await updateButton(page).click();
};

export const addLinkedInURL: PageAction = async (page: Page) => {
  await goToSocialMediaSection(page);
  await linkedInURLField(page).fill(profileURLs.linkedIn);
  await updateButton(page).click();
};

export const addInvalidFacebookURL: PageAction = async (page: Page) => {
  await goToSocialMediaSection(page);
  await facebookURLField(page).fill(faker.internet.url());
};

export const addLongFacebookURL: PageAction = async (page: Page) => {
  await goToSocialMediaSection(page);
  await facebookURLField(page).fill(longProfileURLs.facebook);
  await updateButton(page).click();
};

export const addInvalidTwitterURL: PageAction = async (page: Page) => {
  await goToSocialMediaSection(page);
  await twitterURLField(page).fill(faker.internet.url());
};

export const addLongTwitterURL: PageAction = async (page: Page) => {
  await goToSocialMediaSection(page);
  await twitterURLField(page).fill(longProfileURLs.twitter);
  await updateButton(page).click();
};

export const addInvalidInstagramURL: PageAction = async (page: Page) => {
  await goToSocialMediaSection(page);
  await instagramURLField(page).fill(faker.internet.url());
};

export const addLongInstagramURL: PageAction = async (page: Page) => {
  await goToSocialMediaSection(page);
  await instagramURLField(page).fill(longProfileURLs.instagram);
  await updateButton(page).click();
};

export const addInvalidLinkedInURL: PageAction = async (page: Page) => {
  await goToSocialMediaSection(page);
  await linkedInURLField(page).fill(faker.internet.url());
};

export const addLongLinkedInURL: PageAction = async (page: Page) => {
  await goToSocialMediaSection(page);
  await linkedInURLField(page).fill(longProfileURLs.linkedIn);
  await updateButton(page).click();
};
