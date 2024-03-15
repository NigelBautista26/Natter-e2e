import { faker } from "@faker-js/faker";
import {
  PageAction,
  PageLocator,
  getByLabel,
  getByRole,
  getByTestId,
  getByText,
} from "@utils/pageUtils";

export const createCommunityButton: PageLocator = getByRole({
  role: "link",
  name: "Add New Community",
});
export const createCommunityNameField: PageLocator = getByTestId("name");
export const uploadImageButton: PageLocator = getByTestId("image-input");
export const calendarAccessButton: PageLocator = getByLabel("switch-input-");
export const createCommunitySubmitButton: PageLocator = getByTestId(
  "CommunityWizard-submit"
);
export const locationTagField: PageLocator = getByTestId(
  "tagsCategories.0.newTagName"
);
export const functionTagField: PageLocator = getByTestId(
  "tagsCategories.1.newTagName"
);
export const tenureTagField: PageLocator = getByTestId(
  "tagsCategories.2.newTagName"
);
export const seniorityTagField: PageLocator = getByTestId(
  "tagsCategories.3.newTagName"
);
export const additionalTagField: PageLocator = getByTestId(
  "tagsCategories.4.newTagName"
);
export const createCommunityCompletionButton: PageLocator = getByTestId(
  "CommunityWizard-submit"
);
export const communityCreationSuccessfulMessage: PageLocator = getByRole({
  role: "heading",
  name: "Community Creation Successful",
});
export const nameFieldErrorMessage: PageLocator = getByText(
  "Name too short (min 3"
);
export const locationTagErrorMessage: PageLocator = (page) =>
  page
    .getByTestId("inputWrapper-tagsCategories.0.tags")
    .getByText("At least one tag required");
export const tagShortValueErrorMessage: PageLocator = getByText(
  "Tag must be between 2 and 255"
);
export const nameEmptyErrorMessage: PageLocator = getByText(
  "Name can not be empty"
);
export const editLocationTagField: PageLocator = getByTestId(
  "tagsCategories.0.name"
);
export const editTagCategoryButton: PageLocator = (page) =>
  page.getByTestId("SortableItem-0").getByTestId("TagsCategory-button-edit");
export const editFunctionTagField: PageLocator = getByTestId(
  "tagsCategories.1.name"
);
export const editFunctionTagCategoryButton: PageLocator = (page) =>
  page.getByTestId("SortableItem-1").getByTestId("TagsCategory-button-edit");
export const editTenureTagField: PageLocator = getByTestId(
  "tagsCategories.2.name"
);
export const editTenureTagCategoryButton: PageLocator = (page) =>
  page.getByTestId("SortableItem-2").getByTestId("TagsCategory-button-edit");
export const editSeniorityTagField: PageLocator = getByTestId(
  "tagsCategories.3.name"
);
export const editSeniorityTagCategoryButton: PageLocator = (page) =>
  page.getByTestId("SortableItem-3").getByTestId("TagsCategory-button-edit");

export const goToCreateCommunityPage: PageAction = async (page) => {
  await createCommunityButton(page).click();
};

export const goToCreateCommunityTagsPage: PageAction = async (page) => {
  await createCommunitySubmitButton(page).click({ timeout: 20000 });
};

export const createCommunityBasicsSteps: PageAction = async (page) => {
  await goToCreateCommunityPage(page);
  await calendarAccessButton(page).check();
  await createCommunityNameField(page).fill(
    `test community ${faker.string.alpha(3)}`
  );
  await uploadImageButton(page).setInputFiles("e2e/assets/london.jpeg");
};

export const createCommunitySteps: PageAction = async (page) => {
  await createCommunityBasicsSteps(page);
  await goToCreateCommunityTagsPage(page);
  await locationTagField(page).fill("London");
  await locationTagField(page).press("Enter");
  await functionTagField(page).fill("Test");
  await functionTagField(page).press("Enter");
  await tenureTagField(page).fill("Test");
  await tenureTagField(page).press("Enter");
  await seniorityTagField(page).fill("Test");
  await seniorityTagField(page).press("Enter");
  await additionalTagField(page).fill("Test");
  await additionalTagField(page).press("Enter");
  await createCommunityCompletionButton(page).click();
  await createCommunityCompletionButton(page).click();
};

const fillEmptyCommunityName: PageAction = async (page) => {
  await createCommunityNameField(page).fill("");
};

const fillEmptyLocationTag: PageAction = async (page) => {
  await goToCreateCommunityTagsPage(page);
  await locationTagField(page).fill("");
};

const fillShortLocationTagValue: PageAction = async (page) => {
  await goToCreateCommunityTagsPage(page);
  await locationTagField(page).fill("a");
};

const editEmptyLocationTagCategory: PageAction = async (page) => {
  await goToCreateCommunityTagsPage(page);
  await editTagCategoryButton(page).click();
  await editLocationTagField(page).fill("");
};

const editNewLocationTagCategory: PageAction = async (page) => {
  await goToCreateCommunityTagsPage(page);
  await editTagCategoryButton(page).click();
  await editLocationTagField(page).fill("Location-Rename-Test");
};

const fillEmptyFunctionTag: PageAction = async (page) => {
  await goToCreateCommunityTagsPage(page);
  await functionTagField(page).fill("");
};

const fillShortFunctionTagValue: PageAction = async (page) => {
  await goToCreateCommunityTagsPage(page);
  await functionTagField(page).fill("a");
};

const editEmptyFunctionTagCategory: PageAction = async (page) => {
  await goToCreateCommunityTagsPage(page);
  await editFunctionTagCategoryButton(page).click();
  await editFunctionTagField(page).fill("");
};

const editNewFunctionTagCategory: PageAction = async (page) => {
  await goToCreateCommunityTagsPage(page);
  await editFunctionTagCategoryButton(page).click();
  await editFunctionTagField(page).fill("Function-Rename-Test");
};

const fillEmptyTenureTag: PageAction = async (page) => {
  await goToCreateCommunityTagsPage(page);
  await tenureTagField(page).fill("");
};

const fillShortTenureTagValue: PageAction = async (page) => {
  await goToCreateCommunityTagsPage(page);
  await tenureTagField(page).fill("a");
};

const editEmptyTenureTagCategory: PageAction = async (page) => {
  await goToCreateCommunityTagsPage(page);
  await editTenureTagCategoryButton(page).click();
  await editTenureTagField(page).fill("");
};

const editNewTenureTagCategory: PageAction = async (page) => {
  await goToCreateCommunityTagsPage(page);
  await editTenureTagCategoryButton(page).click();
  await editTenureTagField(page).fill("Tenure-Rename-Test");
};

const fillEmptySeniorityTag: PageAction = async (page) => {
  await goToCreateCommunityTagsPage(page);
  await seniorityTagField(page).fill("");
};

const fillShortSeniorityTagValue: PageAction = async (page) => {
  await goToCreateCommunityTagsPage(page);
  await seniorityTagField(page).fill("a");
};

const editEmptySeniorityTagCategory: PageAction = async (page) => {
  await goToCreateCommunityTagsPage(page);
  await editSeniorityTagCategoryButton(page).click();
  await editSeniorityTagField(page).fill("");
};

const editNewSeniorityTagCategory: PageAction = async (page) => {
  await goToCreateCommunityTagsPage(page);
  await editSeniorityTagCategoryButton(page).click();
  await editSeniorityTagField(page).fill("Seniority-Rename-Test");
};

const createCommunityScenarioMapping: Record<string, PageAction> = {
  "Empty community name": fillEmptyCommunityName,
  "Location tag empty": fillEmptyLocationTag,
  "Location tag short value": fillShortLocationTagValue,
  "Edit the location tag category name with an empty value":
    editEmptyLocationTagCategory,
  "Edit the location tag category name with a new value":
    editNewLocationTagCategory,
  "Tenure tag empty": fillEmptyTenureTag,
  "Tenure tag short value": fillShortTenureTagValue,
  "Edit the tenure tag category name with an empty value":
    editEmptyTenureTagCategory,
  "Edit the tenure tag category name with a new value":
    editNewTenureTagCategory,
  "Seniority tag empty": fillEmptySeniorityTag,
  "Seniority tag short value": fillShortSeniorityTagValue,
  "Edit the seniority tag category name with an empty value":
    editEmptySeniorityTagCategory,
  "Edit the seniority tag category name with a new value":
    editNewSeniorityTagCategory,
  "Function tag empty": fillEmptyFunctionTag,
  "Function tag short value": fillShortFunctionTagValue,
  "Edit the function tag category name with an empty value":
    editEmptyFunctionTagCategory,
  "Edit the function tag category name with a new value":
    editNewFunctionTagCategory,
};

export const createCommuniyScenarios: PageAction = async (
  page,
  field: string
) => {
  const scenarioFunction = createCommunityScenarioMapping[field];
  if (scenarioFunction) {
    await createCommunityBasicsSteps(page);
    await scenarioFunction(page);
    await createCommunitySubmitButton(page).click();
  } else {
    throw new Error(`Invalid field: ${field}`);
  }
};
