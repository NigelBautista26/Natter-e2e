import { faker } from "@faker-js/faker";
import { Page } from "@playwright/test";
import {
  PageAction,
  PageLocator,
  getByLabel,
  getByRole,
  getByTestId,
  getByText,
} from "@utils/pageUtils";

const csvFile = "e2e/Sample File.csv";

export const inviteMemberButton: PageLocator = getByRole({
  role: "button",
  name: "Invite Members",
});
export const rolesTab: PageLocator = getByLabel("Role");
export const communityOwnerOption: PageLocator = getByRole({
  role: "option",
  name: "Community owner",
});
export const communityManagerOption: PageLocator = getByRole({
  role: "option",
  name: "Manager",
});
export const communityMemberOption: PageLocator = getByRole({
  role: "option",
  name: "Member",
});
export const communityCustomAccessOption: PageLocator = getByRole({
  role: "option",
  name: "Custom access",
});
export const memberEmailField: PageLocator = getByTestId("email");
export const inviteButton: PageLocator = getByTestId("InviteGuests-submit");
export const uploadFileButton: PageLocator = getByTestId("GuestsInput-file");
export const removeAllButton: PageLocator = getByRole({
  role: "button",
  name: "Remove all",
});
export const disabledInviteButton: PageLocator = getByLabel(
  "Add some valid email address"
);
export const successMessage = (page: Page) => page.getByRole("alert");
export const removeMemberButton = (page: Page) =>
  page.getByTestId("inputWrapper-membersToInvite").locator("svg").nth(1);
export const invalidEmailMessage: PageLocator = getByText(
  "email must be a valid email"
);

type RoleOptions =
  | "Community Owner"
  | "Community Manager"
  | "Community Member"
  | "Community Custom Access"
  | "CSV file";

const roleClickActions: Record<RoleOptions, PageAction> = {
  "Community Owner": async (page) => communityOwnerOption(page).click(),
  "Community Manager": async (page) => communityManagerOption(page).click(),
  "Community Member": async (page) => communityMemberOption(page).click(),
  "Community Custom Access": async (page) =>
    communityCustomAccessOption(page).click(),
  "CSV file": async (page) => uploadFileButton(page).setInputFiles(csvFile),
};

export const inviteMembers: PageAction = async (page, role: RoleOptions) => {
  await inviteMemberButton(page).click();
  await memberEmailField(page).fill(`${faker.internet.email()}`);
  await rolesTab(page).click();

  const clickAction = roleClickActions[role];
  if (clickAction) {
    await clickAction(page); // Pass the page parameter to the action function
  } else {
    throw new Error(`Invalid role: ${role}`);
  }

  await inviteButton(page).click();
};

const removeOptions: Record<string, PageLocator> = {
  "Remove All": removeAllButton,
  "Remove One Member": removeMemberButton,
};

export const uploadMembersThroughCSVfile: PageAction = async (
  page,
  removeOption: string
) => {
  const actionButtonLocator = removeOptions[removeOption];
  if (!actionButtonLocator) {
    throw new Error(`Invalid remove option: ${removeOption}`);
  }

  await uploadAndRemoveMembers(page, actionButtonLocator);
};

const uploadAndRemoveMembers: PageAction = async (
  page,
  actionButtonLocator: PageLocator
) => {
  await inviteMemberButton(page).click();
  await uploadFileButton(page).setInputFiles(csvFile);
  const actionButton = actionButtonLocator(page);
  await actionButton.click();
};

export const inviteUserWithInvalidEmail: PageAction = async (page) => {
  await inviteMemberButton(page).click();
  await memberEmailField(page).fill(`NBT ${faker.internet.email()}`);
};
