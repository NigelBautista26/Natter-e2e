import { faker } from "@faker-js/faker";
import {
  PageAction,
  PageLocator,
  clickAndWait,
  getById,
  getByLabel,
  getByPlaceholder,
  getByRole,
  getByTestId,
  getByText,
} from "@utils/pageUtils";
import { Page } from "playwright";

const logo = "e2e/assets/london.jpeg";

export const enum QuestionType {
  FreeText,
  SingleChoice,
  MultipleChoice,
  Ranking,
  Slider,
  NPS,
}

export const eventNameInput: PageLocator = getByRole({
  role: "textbox",
  name: "name",
});
export const eventDescriptionInput: PageLocator = getByRole({
  role: "textbox",
  name: "description",
});
export const dateInput: PageLocator = getByPlaceholder("Select a date");
export const timeFromInput: PageLocator = getByLabel("From");
export const timeToInput: PageLocator = getByLabel("To");
export const pageTitle: PageLocator = getByRole({
  role: "heading",
  name: "Event Details",
});
export const buttonNext: PageLocator = getByRole({
  role: "button",
  name: "Next",
});
export const buttonCreateEvent: PageLocator = getByRole({
  role: "button",
  name: "Create Event",
});

export const nextMonthButton: PageLocator = getByLabel("Next month");
export const selectedDay: PageLocator = getByRole({
  role: "gridcell",
  name: "26",
});
export const fromDate: PageLocator = getByLabel("From *");
export const toDate: PageLocator = getByLabel("To *");
export const pmTime: PageLocator = getByLabel("PM");
export const clockSquareMask: PageLocator = getById("mui-33");
export const startTimeHour: PageLocator = getByLabel("4 hours");
export const startTimeMinutes: PageLocator = getByLabel("20 minutes");
export const timeSetOkButton: PageLocator = getByRole({
  role: "button",
  name: "OK",
});
export const endTimeHour: PageLocator = getByLabel("8 hours");
export const nextButton: PageLocator = getByRole({
  role: "button",
  name: "Next",
});
export const endCreateEventButton: PageLocator = getByRole({
  role: "button",
  name: "Create Event",
});
export const eventSuccessfulMessage: PageLocator = getByRole({
  role: "heading",
  name: "Event successfully created",
});
export const uploadEventFileButton: PageLocator = (page) =>
  getByTestId("image-input")(page).first();
// The sponsor upload image file button has the same testId as the upload event image button, and i couldnt make it work using the functional programing way so im using the old page setup for now....
export const uploadSponsorFileButton = (page: Page) =>
  page
    .locator("section")
    .filter({ hasText: "Sponsor Logo (optional)Upload" })
    .getByTestId("image-input");
export const nameFieldErrorMessage: PageLocator = getByText("Name is required");
export const eventDateFieldErrorMessage: PageLocator = getByText(
  "Event date is required"
);
export const startTimeFieldErrorMessage: PageLocator = getByText(
  "Start time is required"
);
export const endTimeFieldErrorMessage: PageLocator = getByText(
  "End time is required"
);
export const startCreateEventButton: PageLocator = getByRole({
  role: "link",
  name: "Create Event",
});
export const shareURLMessage: PageLocator = getByText(
  "Share this unique URL link to"
);
export const copyLinkButton: PageLocator = (page) =>
  getByTestId("dialog-content")(page).getByRole("button");
export const successfullyCopiedLinkMessage: PageLocator = getByRole({
  role: "alert",
  name: "Copied to clipboard",
});

export const fillEventDate: PageAction = async (page) => {
  await clickAndWait({ locator: dateInput, page, timeout: 1000 });
  await clickAndWait({ locator: nextMonthButton, page, timeout: 1000 });
  await selectedDay(page).click();
};

export const fillEventStartTime: PageAction = async (page) => {
  await clickAndWait({ locator: fromDate, page, timeout: 1000 });
  await startTimeHour(page).click();
  await startTimeMinutes(page).click();
  await clickAndWait({ locator: timeSetOkButton, page, timeout: 1000 });
};

export const fillEventEndTime: PageAction = async (page) => {
  await clickAndWait({ locator: toDate, page, timeout: 1000 });
  await endTimeHour(page).click();
  await pmTime(page).click();
  await clickAndWait({ locator: timeSetOkButton, page, timeout: 1500 });
};

export const fillMandatoryFields: PageAction = async (page) => {
  await eventNameInput(page).fill(`${faker.lorem.sentence()}`);
  await fillEventDate(page);
  await fillEventStartTime(page);
  await fillEventEndTime(page);
};

export const clickNextButtons: PageAction = async (page, numClicks: number) => {
  for (let i = 0; i < numClicks; i++) {
    await nextButton(page).click();
  }
};

export const createEventPageSetup: PageAction = async (page) => {
  await page.waitForTimeout(3000);
  await startCreateEventButton(page).click();
};

export const createEventWithRequiredFields: PageAction = async (page) => {
  await createEventPageSetup(page);
  await fillMandatoryFields(page);
  await clickNextButtons(page, 4);
  await endCreateEventButton(page).click();
};

export const createEventAndCopyEventLink: PageAction = async (page) => {
  await createEventPageSetup(page);
  await createEventWithRequiredFields(page);
  await copyLinkButton(page).click();
};

export const createEventWithoutEventName: PageAction = async (page) => {
  await createEventPageSetup(page);
  await fillMandatoryFields(page);
  await eventNameInput(page).fill("");
  await clickNextButtons(page, 1);
};

export const createEventWithoutEventDate: PageAction = async (page) => {
  await createEventPageSetup(page);
  await eventNameInput(page).fill(`${faker.lorem.sentence()}`);
  await fillEventStartTime(page);
  await fillEventEndTime(page);
  await clickNextButtons(page, 1);
};

export const createEventWithoutEventStartTime: PageAction = async (page) => {
  await createEventPageSetup(page);
  await eventNameInput(page).fill(`${faker.lorem.sentence()}`);
  await fillEventDate(page);
  await fillEventEndTime(page);
  await clickNextButtons(page, 1);
};

export const createEventWithoutEventEndTime: PageAction = async (page) => {
  await createEventPageSetup(page);
  await eventNameInput(page).fill(`${faker.lorem.sentence()}`);
  await fillEventDate(page);
  await fillEventStartTime(page);
  await clickNextButtons(page, 1);
};

export const createEventWithOptionalEventLogoFieldOnly: PageAction = async (
  page
) => {
  await createEventPageSetup(page);
  await uploadEventFileButton(page).setInputFiles(logo);
  await clickNextButtons(page, 1);
};

export const createEventWithOptionalSponsorLogoFieldOnly: PageAction = async (
  page
) => {
  await createEventPageSetup(page);
  await uploadSponsorFileButton(page).setInputFiles(logo);
  await clickNextButtons(page, 1);
};
