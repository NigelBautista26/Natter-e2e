import { Page } from "@playwright/test";
import { PageAction } from "@utils/pageUtils";

import {
  addTopicButton,
  clearQuestionTypeField,
  openQuestionTypeSelector,
  topicInputField,
  uncheckMandatoryBox,
} from "./eventCreationEntrySurveyPage";
import {
  createEventPageSetup,
  fillMandatoryFields,
  clickNextButtons,
  endCreateEventButton,
} from "./eventCreationDetailsPage";

export const createEventWithTopic: PageAction = async (page) => {
  await createEventPageSetup(page);
  await fillMandatoryFields(page);
  await clickNextButtons(page, 2);
  await addTopicButton(page).click();
  await topicInputField(page).fill("topic1");
  await clickNextButtons(page, 2);
  await endCreateEventButton(page).click();
};

export const createEventWithQuestionTypeForNatterPage: PageAction = async (
  page,
  questionType: PageAction,
  mandatory: boolean
) => {
  await createEventPageSetup(page);
  await fillMandatoryFields(page);
  await clickNextButtons(page, 2);
  await questionType(page);
  if (!mandatory) {
    await uncheckMandatoryBox(page).uncheck();
  }
  await clickNextButtons(page, 2);
  await endCreateEventButton(page).click();
};

export const verifyQuestionValidationForNatterPage: PageAction = async (
  page,
  questionType: PageAction,
  typeFieldValidation: boolean
) => {
  await createEventPageSetup(page);
  await fillMandatoryFields(page);
  await clickNextButtons(page, 2);
  await questionType(page);
  await openQuestionTypeSelector(page).hover();
  await clearQuestionTypeField(page).click();
  if (!typeFieldValidation) {
    await openQuestionTypeSelector(page).click();
  }
};
