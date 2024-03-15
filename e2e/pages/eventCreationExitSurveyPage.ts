import { PageAction } from "@utils/pageUtils";

import {
  clearQuestionTypeField,
  openQuestionTypeSelector,
  uncheckMandatoryBox,
} from "./eventCreationEntrySurveyPage";
import {
  createEventPageSetup,
  fillMandatoryFields,
  clickNextButtons,
  endCreateEventButton,
} from "./eventCreationDetailsPage";

export const createEventWithQuestionTypeForExitSurveyPage: PageAction = async (
  page,
  questionType: PageAction,
  mandatory: boolean
) => {
  await createEventPageSetup(page);
  await fillMandatoryFields(page);
  await clickNextButtons(page, 3);
  await questionType(page);
  if (!mandatory) {
    await uncheckMandatoryBox(page).uncheck();
  }
  await clickNextButtons(page, 1);
  await endCreateEventButton(page).click();
};

export const verifyQuestionValidationForExitSurveyPage: PageAction = async (
  page,
  questionType: PageAction,
  typeFieldValidation: boolean
) => {
  await createEventPageSetup(page);
  await fillMandatoryFields(page);
  await clickNextButtons(page, 3);
  await questionType(page);
  await openQuestionTypeSelector(page).hover();
  await clearQuestionTypeField(page).click();
  if (!typeFieldValidation) {
    await openQuestionTypeSelector(page).click();
  }
};
