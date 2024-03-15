import {
  eventSuccessfulMessage,
  shareURLMessage,
} from "@pages/eventCreationDetailsPage";
import {
  QuestionType,
  chooseFreeTextQuestion,
  chooseMultipleChoiceQuestion,
  chooseNPSQuestion,
  chooseRankingQuestion,
  chooseSingleChoiceQuestion,
  chooseSliderQuestionForExitSurveyPage,
  questionTypeFieldValidationMessage,
  verifyQuestionFieldForQuestionType,
} from "@pages/eventCreationEntrySurveyPage";
import {
  createEventWithQuestionTypeForExitSurveyPage,
  verifyQuestionValidationForExitSurveyPage,
} from "@pages/eventCreationExitSurveyPage";
import { userLogin } from "@pages/loginPage";
import { expect, test } from "@playwright/test";

test.describe("Event creation for exit survey page test scenarios ", async () => {
  test.beforeEach(async ({ page }) => {
    await userLogin(page, "user1");
    await page.goto("/my-events/upcoming");
  });

  test("Create a new event with an exit survey question type - Free Text Question - Mandatory", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForExitSurveyPage(
      page,
      chooseFreeTextQuestion,
      true
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Create a new event with an exit survey question type - Free Text Question - Optional", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForExitSurveyPage(
      page,
      chooseFreeTextQuestion,
      false
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Verify the question type field validation works for exit survey question type - Free Text Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForExitSurveyPage(
      page,
      chooseFreeTextQuestion
    );
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Verify the question field validation works for exit survey question type - Free Text Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForExitSurveyPage(
      page,
      chooseFreeTextQuestion
    );
    await verifyQuestionFieldForQuestionType(page, QuestionType.FreeText);
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Create a new event with an exit survey question type - Single Choice Question - Mandatory", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForExitSurveyPage(
      page,
      chooseSingleChoiceQuestion,
      true
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Create a new event with an exit survey question type - Single Choice Question - Optional", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForExitSurveyPage(
      page,
      chooseSingleChoiceQuestion,
      false
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Verify the question type field validation works for exit survey question type - Single Choice Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForExitSurveyPage(
      page,
      chooseSingleChoiceQuestion
    );
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Verify the question field validation works for exit survey question type - Single Choice Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForExitSurveyPage(
      page,
      chooseSingleChoiceQuestion
    );
    await verifyQuestionFieldForQuestionType(page, QuestionType.SingleChoice);
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Create a new event with an exit survey question type - Multiple Choice Question - Mandatory", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForExitSurveyPage(
      page,
      chooseMultipleChoiceQuestion,
      true
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Create a new event with an exit survey question type - Multiple Choice Question - Optional", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForExitSurveyPage(
      page,
      chooseMultipleChoiceQuestion,
      false
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Verify the question type field validation works for exit survey question type - Multiple Choice Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForExitSurveyPage(
      page,
      chooseMultipleChoiceQuestion
    );
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Verify the question field validation works for exit survey question type - Multiple Choice Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForExitSurveyPage(
      page,
      chooseMultipleChoiceQuestion
    );
    await verifyQuestionFieldForQuestionType(page, QuestionType.MultipleChoice);
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Create a new event with an exit survey question type - Ranking Question - Mandatory", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForExitSurveyPage(
      page,
      chooseRankingQuestion,
      true
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Create a new event with an exit survey question type - Ranking Question - Optional", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForExitSurveyPage(
      page,
      chooseRankingQuestion,
      false
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Verify the question type field validation works for exit survey question type - Ranking Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForExitSurveyPage(
      page,
      chooseRankingQuestion
    );
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Verify the question field validation works for exit survey question type - Ranking Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForExitSurveyPage(
      page,
      chooseRankingQuestion
    );
    await verifyQuestionFieldForQuestionType(page, QuestionType.Ranking);
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Create a new event with an exit survey question type - Slider Question - Mandatory", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForExitSurveyPage(
      page,
      chooseSliderQuestionForExitSurveyPage,
      true
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Create a new event with an exit survey question type - Slider Question - Optional", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForExitSurveyPage(
      page,
      chooseSliderQuestionForExitSurveyPage,
      false
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Verify the question type field validation works for exit survey question type - Slider Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForExitSurveyPage(
      page,
      chooseSliderQuestionForExitSurveyPage
    );
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Verify the question field validation works for exit survey question type - Slider Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForExitSurveyPage(
      page,
      chooseSliderQuestionForExitSurveyPage
    );
    await verifyQuestionFieldForQuestionType(page, QuestionType.Slider);
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Create a new event with an exit survey question type - NPS Question - Mandatory", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForExitSurveyPage(
      page,
      chooseNPSQuestion,
      true
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Create a new event with an exit survey question type - NPS Question - Optional", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForExitSurveyPage(
      page,
      chooseNPSQuestion,
      false
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Verify the question type field validation works for exit survey question type - NPS Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForExitSurveyPage(page, chooseNPSQuestion);
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Verify the question field validation works for exit survey question type - NPS Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForExitSurveyPage(page, chooseNPSQuestion);
    await verifyQuestionFieldForQuestionType(page, QuestionType.NPS);
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });
});
