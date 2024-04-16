import {
  PageAction,
  PageLocator,
  getById,
  getByLabel,
  getByPlaceholder,
  getByRole,
  getByTestId,
  getByText,
} from "@utils/pageUtils";
import {
  createEventPageSetup,
  fillMandatoryFields,
  clickNextButtons,
  endCreateEventButton,
} from "./eventCreationDetailsPage";
import { Page } from "@playwright/test";

export const buttonAddQuestion: PageLocator = getByRole({
  role: "button",
  name: "Add Question",
});
export const questionTypeSelector: PageLocator = getByRole({
  role: "combobox",
  name: "Question type",
});
export const questionTypeFreeText: PageLocator = getByRole({
  role: "option",
  name: "Free Text",
});
export const questionTypeMultipleChoice: PageLocator = getByRole({
  role: "option",
  name: "Multiple Choice",
});
export const questionTextInput: PageLocator =
  getByPlaceholder("Type something");
export const multipleChoiceAnswer1Input: PageLocator = getByLabel("Answer 1");
export const multipleChoiceAnswer2Input: PageLocator = getByLabel("Answer 2");

export const addQuestionButton: PageLocator = getByRole({
  role: "button",
  name: "Add Question",
});
export const openQuestionTypeSelector: PageLocator = getByPlaceholder(
  "Select question type"
);
export const questionInputField: PageLocator =
  getByPlaceholder("Type something");
export const uncheckMandatoryBox: PageLocator = getByLabel(
  "Mark this Question as"
);
export const chooseFreeTextQuestionType: PageLocator = getByRole({
  role: "option",
  name: "Free Text",
});
export const chooseSingleChoice: PageLocator = getByRole({
  role: "option",
  name: "Single Choice",
});
export const chooseMultipleChoice: PageLocator = getByRole({
  role: "option",
  name: "Multiple Choice",
});
export const chooseRanking: PageLocator = getByRole({
  role: "option",
  name: "Ranking",
});
export const chooseSlider: PageLocator = getByRole({
  role: "option",
  name: "Slider",
});
export const chooseNPS: PageLocator = getByRole({
  role: "option",
  name: "Net Promoter Score (NPS)",
});
export const answerField1: PageLocator = getByLabel("Answer 1");
export const answerField2: PageLocator = (page) =>
  getByTestId("SortableItem-1")(page).getByLabel("Answer");
export const clearQuestionTypeField: PageLocator = getByLabel("Clear");
export const questionTypeFieldValidationMessage: PageLocator = getByText(
  "In order to proceed, you must"
);

export const labelField0: PageLocator = getByLabel("Minimum Value Label");
export const labelField100: PageLocator = getByLabel("Maximum Value Label");
export const addTopicButton: PageLocator = getByRole({
  role: "button",
  name: "Add Topic",
});
export const topicInputField: PageLocator = (page: Page) =>
  getByTestId("SortableItem-0")(page).getByLabel("Topic");

export const clickAddQuestionButtonAndOpenSelector: PageAction = async (
  page: Page
) => {
  await addQuestionButton(page).click();
  await openQuestionTypeSelector(page).click();
};

export const chooseQuestionType: PageAction = async (
  page: Page,
  questionType: PageLocator
) => {
  const questionTypeElement = questionType(page);
  await questionTypeElement.click();
};

export const chooseFreeTextQuestion: PageAction = async (page: Page) => {
  await clickAddQuestionButtonAndOpenSelector(page);
  await chooseQuestionType(page, chooseFreeTextQuestionType);
  await questionInputField(page).fill("My Free Text Question...!");
};

export const chooseSingleChoiceQuestion: PageAction = async (page: Page) => {
  await clickAddQuestionButtonAndOpenSelector(page);
  await chooseQuestionType(page, chooseSingleChoice);
  await questionInputField(page).fill("Single Choice Question");
  await answerField1(page).fill("Answer1");
  await answerField2(page).fill("Answer2");
};

export const chooseMultipleChoiceQuestion: PageAction = async (page: Page) => {
  await clickAddQuestionButtonAndOpenSelector(page);
  await chooseQuestionType(page, chooseMultipleChoice);
  await questionInputField(page).fill("Multiple Choice Question");
  await answerField1(page).fill("Answer1");
  await answerField2(page).fill("Answer2");
};

export const chooseRankingQuestion: PageAction = async (page: Page) => {
  await clickAddQuestionButtonAndOpenSelector(page);
  await chooseQuestionType(page, chooseRanking);
  await questionInputField(page).fill("Ranking Question");
  await answerField1(page).fill("Answer1");
  await answerField2(page).fill("Answer2");
};

export const chooseSliderQuestion: PageAction = async (page: Page) => {
  await clickAddQuestionButtonAndOpenSelector(page);
  await chooseQuestionType(page, chooseSlider);
  await questionInputField(page).fill("Slider Question");
  await labelField0(page).fill("No");
  await labelField100(page).fill("Yes");
};

export const chooseNPSQuestion: PageAction = async (page: Page) => {
  await clickAddQuestionButtonAndOpenSelector(page);
  await chooseQuestionType(page, chooseNPS);
  await questionInputField(page).fill("NPS Question");
};

export const chooseSliderQuestionForNatterPage: PageAction = async (
  page: Page
) => {
  await clickAddQuestionButtonAndOpenSelector(page);
  await chooseQuestionType(page, chooseSlider);
  await questionInputField(page).fill("Slider Question");
  await labelField0(page).fill("no");
  await labelField100(page).fill("yes");
};

export const chooseSliderQuestionForExitSurveyPage: PageAction = async (
  page: Page
) => {
  await clickAddQuestionButtonAndOpenSelector(page);
  await chooseQuestionType(page, chooseSlider);
  await questionInputField(page).fill("Slider Question");
  await labelField0(page).fill("no");
  await labelField100(page).fill("yes");
};

export const createEventWithQuestionType: PageAction = async (
  page: Page,
  questionType: PageAction,
  mandatory: boolean
) => {
  await createEventPageSetup(page);
  await fillMandatoryFields(page);
  await clickNextButtons(page, 1);
  await questionType(page);
  if (!mandatory) {
    await uncheckMandatoryBox(page).uncheck();
  }
  await clickNextButtons(page, 3);
  await endCreateEventButton(page).click();
};

export const verifyQuestionValidation: PageAction = async (
  page: Page,
  questionType: PageAction,
  typeFieldValidation: boolean
) => {
  await createEventPageSetup(page);
  await fillMandatoryFields(page);
  await clickNextButtons(page, 1);
  await questionType(page);
  await openQuestionTypeSelector(page).hover();
  await clearQuestionTypeField(page).click();
  if (!typeFieldValidation) {
    await openQuestionTypeSelector(page).click();
  }
};

export const enum QuestionTypeEnum {
  FreeText,
  SingleChoice,
  MultipleChoice,
  Ranking,
  Slider,
  NPS,
}

const questionTypeSelectorsMapping = {
  [QuestionTypeEnum.FreeText]: chooseFreeTextQuestionType,
  [QuestionTypeEnum.SingleChoice]: chooseSingleChoice,
  [QuestionTypeEnum.MultipleChoice]: chooseMultipleChoice,
  [QuestionTypeEnum.Ranking]: chooseRanking,
  [QuestionTypeEnum.Slider]: chooseSlider,
  [QuestionTypeEnum.NPS]: chooseNPS,
};

export const verifyQuestionFieldForQuestionType: PageAction = async (
  page: Page,
  questionType: QuestionTypeEnum
) => {
  const selectQuestionType = questionTypeSelectorsMapping[questionType];
  if (selectQuestionType) {
    await selectQuestionType(page).click();
  } else {
    throw new Error(`Invalid question type: ${questionType}`);
  }

  await questionInputField(page).fill("");
};
