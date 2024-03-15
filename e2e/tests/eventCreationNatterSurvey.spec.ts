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
  chooseSliderQuestionForNatterPage,
  questionTypeFieldValidationMessage,
  verifyQuestionFieldForQuestionType,
} from "@pages/eventCreationEntrySurveyPage";
import {
  createEventWithQuestionTypeForNatterPage,
  verifyQuestionValidationForNatterPage,
  createEventWithTopic,
} from "@pages/eventCreationNatterPage";
import { userLogin } from "@pages/loginPage";
import { expect, test } from "@playwright/test";

test.describe("Event creation for natter page test scenarios ", () => {
  test.beforeEach(async ({ page }) => {
    await userLogin(page, "user1");
    await page.goto("/my-events/upcoming");
  });

  test("Create a new event with a natter survey question type - Free Text Question - Mandatory", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForNatterPage(
      page,
      chooseFreeTextQuestion,
      true
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Create a new event with a natter survey question type - Free Text Question - Optional", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForNatterPage(
      page,
      chooseFreeTextQuestion,
      false
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Verify the question type field validation works for a natter survey question type - Free Text Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForNatterPage(
      page,
      chooseFreeTextQuestion,
      true
    );
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Verify the question field validation works for a natter survey question type - Free Text Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForNatterPage(
      page,
      chooseFreeTextQuestion,
      false
    );
    await verifyQuestionFieldForQuestionType(page, QuestionType.FreeText);
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Create a new event with a natter survey question type - Single Choice Question - Mandatory", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForNatterPage(
      page,
      chooseSingleChoiceQuestion,
      true
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Create a new event with a natter survey question type - Single Choice Question - Optional", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForNatterPage(
      page,
      chooseSingleChoiceQuestion,
      false
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Verify the question type field validation works for a natter survey question type - Single Choice Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForNatterPage(
      page,
      chooseSingleChoiceQuestion,
      true
    );
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Verify the question field validation works for a natter survey question type - Single Choice Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForNatterPage(
      page,
      chooseSingleChoiceQuestion,
      false
    );
    await verifyQuestionFieldForQuestionType(page, QuestionType.SingleChoice);
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Create a new event with a natter survey question type - Multiple Choice Question - Mandatory", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForNatterPage(
      page,
      chooseMultipleChoiceQuestion,
      true
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Create a new event with a natter survey question type - Multiple Choice Question - Optional", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForNatterPage(
      page,
      chooseMultipleChoiceQuestion,
      false
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Verify the question type field validation works for a natter survey question type - Multiple Choice Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForNatterPage(
      page,
      chooseMultipleChoiceQuestion,
      true
    );
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Verify the question field validation works for a natter survey question type - Multiple Choice Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForNatterPage(
      page,
      chooseMultipleChoiceQuestion,
      false
    );
    await verifyQuestionFieldForQuestionType(page, QuestionType.MultipleChoice);
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Create a new event with a natter survey question type - Ranking Question - Mandatory", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForNatterPage(
      page,
      chooseRankingQuestion,
      true
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Create a new event with a natter survey question type - Ranking Question - Optional", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForNatterPage(
      page,
      chooseRankingQuestion,
      false
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Verify the question type field validation works for a natter survey question type - Ranking Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForNatterPage(
      page,
      chooseRankingQuestion,
      true
    );
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Verify the question field validation works for a natter survey question type - Ranking Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForNatterPage(
      page,
      chooseRankingQuestion,
      false
    );
    await verifyQuestionFieldForQuestionType(page, QuestionType.Ranking);
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Create a new event with a natter survey question type - Slider Question - Mandatory", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForNatterPage(
      page,
      chooseSliderQuestionForNatterPage,
      true
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Create a new event with a natter survey question type - Slider Question - Optional", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForNatterPage(
      page,
      chooseSliderQuestionForNatterPage,
      false
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Verify the question type field validation works for a natter survey question type - Slider Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForNatterPage(
      page,
      chooseSliderQuestionForNatterPage,
      true
    );
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Verify the question field validation works for a natter survey question type - Slider Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForNatterPage(
      page,
      chooseSliderQuestionForNatterPage,
      false
    );
    await verifyQuestionFieldForQuestionType(page, QuestionType.Slider);
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Create a new event with a natter survey question type - NPS Question - Mandatory", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForNatterPage(
      page,
      chooseNPSQuestion,
      true
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Create a new event with a natter survey question type - NPS Question - Optional", async ({
    page,
  }) => {
    await createEventWithQuestionTypeForNatterPage(
      page,
      chooseNPSQuestion,
      false
    );
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });

  test("Verify the question type field validation works for a natter survey question type - NPS Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForNatterPage(page, chooseNPSQuestion, true);
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Verify the question field validation works for a natter survey question type - NPS Question", async ({
    page,
  }) => {
    await verifyQuestionValidationForNatterPage(page, chooseNPSQuestion, false);
    await verifyQuestionFieldForQuestionType(page, QuestionType.NPS);
    await expect(questionTypeFieldValidationMessage(page)).toBeVisible();
  });

  test("Create a new event with a topic", async ({ page }) => {
    await createEventWithTopic(page);
    await expect(eventSuccessfulMessage(page)).toBeVisible();
    await expect(shareURLMessage(page)).toBeVisible();
  });
});
