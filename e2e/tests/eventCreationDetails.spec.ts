import {
  createEventAndCopyEventLink,
  createEventWithOptionalEventLogoFieldOnly,
  createEventWithOptionalSponsorLogoFieldOnly,
  createEventWithRequiredFields,
  createEventWithoutEventDate,
  createEventWithoutEventEndTime,
  createEventWithoutEventName,
  createEventWithoutEventStartTime,
  endTimeFieldErrorMessage,
  eventDateFieldErrorMessage,
  eventSuccessfulMessage,
  nameFieldErrorMessage,
  shareURLMessage,
  startTimeFieldErrorMessage,
  successfullyCopiedLinkMessage,
} from "@pages/eventCreationDetailsPage";
import { userLogin } from "@pages/loginPage";
import { expect, test } from "@playwright/test";

test.describe("Event creation for details page test scenarios ", () => {
  test.beforeEach(async ({ page }) => {
    await userLogin(page, "user1");
    await page.goto("/my-events/upcoming");
  });

  test("Create an event with only the required fields filled out", async ({
    page,
  }) => {
    await createEventWithRequiredFields(page);
    await expect(eventSuccessfulMessage(page)).toHaveText(
      "Event successfully created"
    );
    await expect(shareURLMessage(page)).toBeVisible();
  });
  // Ive skipped this test for now as while it is passing without any issue when i run the test in headed mode, it is currently failing when i run the test in headless mode...
  test.skip("Copy the URL link after creating an event", async ({ page }) => {
    await createEventAndCopyEventLink(page);
    await expect(eventSuccessfulMessage(page)).toHaveText(
      "Event successfully created"
    );
    await expect(shareURLMessage(page)).toBeVisible();
    await expect(successfullyCopiedLinkMessage(page)).toHaveText(
      "Copied to clipboard"
    );
  });

  test("Create an event without an event name", async ({ page }) => {
    await createEventWithoutEventName(page);
    await expect(nameFieldErrorMessage(page)).toBeVisible();
  });

  test("Create an event without an event date", async ({ page }) => {
    await createEventWithoutEventDate(page);
    await expect(eventDateFieldErrorMessage(page)).toBeVisible();
  });

  test("Create an event without a start time", async ({ page }) => {
    await createEventWithoutEventStartTime(page);
    await expect(startTimeFieldErrorMessage(page)).toBeVisible();
  });

  test("Create an event without an end time", async ({ page }) => {
    await createEventWithoutEventEndTime(page);
    await expect(endTimeFieldErrorMessage(page)).toBeVisible();
  });

  test("Create an event with only an event logo field filled out", async ({
    page,
  }) => {
    await createEventWithOptionalEventLogoFieldOnly(page);
    await expect(nameFieldErrorMessage(page)).toBeVisible();
    await expect(eventDateFieldErrorMessage(page)).toBeVisible();
    await expect(startTimeFieldErrorMessage(page)).toBeVisible();
    await expect(endTimeFieldErrorMessage(page)).toBeVisible();
  });

  test("Create an event with only a sponsor logo field filled out", async ({
    page,
  }) => {
    await createEventWithOptionalSponsorLogoFieldOnly(page);
    await expect(nameFieldErrorMessage(page)).toBeVisible();
    await expect(eventDateFieldErrorMessage(page)).toBeVisible();
    await expect(startTimeFieldErrorMessage(page)).toBeVisible();
    await expect(endTimeFieldErrorMessage(page)).toBeVisible();
  });
});
