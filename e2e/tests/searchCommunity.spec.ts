import {
  searchCommunity,
  searchCommunityNotFound,
  searchedCommunityName,
  searchedCommunityNotFound,
} from "@pages/searchCommunityPage";
import { expect, test } from "@playwright/test";

test.describe("Search Community Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/org/natter/communities");
  });

  test("Search a community", async ({ page }) => {
    await searchCommunity(page);
    await expect(searchedCommunityName(page)).toHaveText(
      "Nigels Search Community Test"
    );
  });

  test("Searched community not found", async ({ page }) => {
    await searchCommunityNotFound(page);
    await expect(searchedCommunityNotFound(page)).toHaveText(
      "No matching Communities found."
    );
  });
});
