import { faker } from "@faker-js/faker";
import { Locator, Page } from "@playwright/test";
import {
  PageAction,
  PageLocator,
  getByPlaceholder,
  getByText,
} from "@utils/pageUtils";

export const searchCommunityField: PageLocator =
  getByPlaceholder("Search community");
export const searchedCommunityNotFound: PageLocator = getByText(
  "No matching communities found"
);
export const searchedCommunityName: PageLocator = getByText(
  "Nigels Search Community Test"
);

export const searchCommunity: PageAction = async (
  page: Page
): Promise<void> => {
  await searchCommunityField(page).fill("Nigels Search Community Test");
};

export const searchCommunityNotFound: PageAction = async (
  page: Page
): Promise<void> => {
  const searchField = await page.getByPlaceholder("Search community");
  await searchField.fill(faker.string.alpha(10));
};
