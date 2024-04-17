import { Page } from "@playwright/test";
import {
  PageAction,
  PageLocator,
  getByLabel,
  getByLocator,
  getByPlaceholder,
  getByRole,
  getByTestId,
  getByText,
} from "@utils/pageUtils";

// Define page locators
export const filterRoleButton: PageLocator = getByText("Filter by roles");
export const communityOwnerTab: PageLocator = getByTestId(
  "FilterByRoleItem-COMMUNITY_OWNER"
);
export const communityManagerTab: PageLocator = getByTestId(
  "FilterByRoleItem-COMMUNITY_MANAGER"
);
export const communityMemberTab: PageLocator = getByTestId(
  "FilterByRoleItem-COMMUNITY_MEMBER"
);
export const communityCustomMemberTab: PageLocator = getByTestId(
  "FilterByRoleItem-COMMUNITY_MEMBER_CUSTOM"
);
export const confirmRoleSelectionButton: PageLocator = getByText("Confirm");
export const filteredRoleCommunityOwner: PageLocator = (page: Page) =>
  page.getByTestId("row-0").getByText("Community owner");
export const filteredRoleCommunityManager: PageLocator = (page: Page) =>
  page.getByTestId("row-0").getByText("Manager");
export const filteredRoleCommunityMember: PageLocator = (page: Page) =>
  page.getByTestId("row-0").getByText("Member");
export const filteredRoleCustomMember: PageLocator = (page: Page) =>
  page.getByTestId("row-0").getByText("Custom access");
export const filterTagsTab: PageLocator = getByText("Filter by tags");
export const filteredTagLocationChoice: PageLocator =
  getByTestId("TagsSelectInput-l1");
export const filteredTagFunctionChoice: PageLocator =
  getByTestId("TagsSelectInput-f1");
export const filteredTagTenureChoice: PageLocator =
  getByTestId("TagsSelectInput-t1");
export const filteredTagSeniorityChoice: PageLocator =
  getByTestId("TagsSelectInput-s1");
export const filteredLocationTagDisplay: PageLocator = getByText("#l1");
export const filteredFunctionTagDisplay: PageLocator = getByText("#f1");
export const filteredTenureTagDisplay: PageLocator = getByText("#t1");
export const filteredSeniorityTagDisplay: PageLocator = getByText("#s1");
export const searchCommunityMemberField: PageLocator =
  getByPlaceholder("Search member");
export const searchedCommunityUser: PageLocator = getByText("ababc bca");
export const clearLocationTag: PageLocator = (page: Page) =>
  page
    .locator("div")
    .filter({ hasText: /^#l1Clear all$/ })
    .locator("svg");
export const clearFunctionTag: PageLocator = (page: Page) =>
  page
    .locator("div")
    .filter({ hasText: /^#f1Clear all$/ })
    .locator("svg");
export const clearTenureTag: PageLocator = (page: Page) =>
  page
    .locator("div")
    .filter({ hasText: /^#t1Clear all$/ })
    .locator("svg");
export const clearSeniorityTag: PageLocator = (page: Page) =>
  page
    .locator("div")
    .filter({ hasText: /^#s1Clear all$/ })
    .locator("svg");
export const clearAllTags: PageLocator = (page: Page) =>
  page.getByRole("paragraph");
export const chatIframePopUp: PageLocator = (page: Page) =>
  page
    .frameLocator('iframe[name="intercom-borderless-frame"]')
    .getByLabel("Dismiss");
export const editAccessTab: PageLocator = (page: Page) =>
  page.getByTestId("row-0").getByRole("button");
export const editAccessOption: PageLocator = getByText("Edit access");
export const editRoleTab: PageLocator = getByLabel("Role");
export const communityOwnerRole: PageLocator = getByRole({
  role: "option",
  name: "Community owner",
});
export const communityManagerRole: PageLocator = getByRole({
  role: "option",
  name: "Manager",
});
export const communityMemberRole: PageLocator = getByRole({
  role: "option",
  name: "Member",
});
export const communityCustomMemberRole: PageLocator = getByRole({
  role: "option",
  name: "Custom access",
});
export const editCommunityManagerCheckBox: PageLocator = getByLocator(
  ":text('Edit Community Managers') + span > input"
);
export const manageCommunityMembersCheckBox: PageLocator = getByLocator(
  ":text('Manage Community Members') + span > input"
);
export const viewCommunityMembersCheckBox: PageLocator = getByLocator(
  ":text-is('View Community Members') + span > input"
);
export const viewCommunityMembersTagsCheckBox: PageLocator = getByLocator(
  ":text-is('View Community Members Tags') + span > input"
);
export const viewMyConnectionsCheckBox: PageLocator = getByLocator(
  ":text-is('View My Connections') + span > input"
);
export const viewMyEventsCheckBox: PageLocator = getByLocator(
  ":text-is('View My Events') + span > input"
);
export const createEventCheckBox: PageLocator = getByLocator(
  ":text-is('Create Event') + span > input"
);
export const modifyEventCheckBox: PageLocator = getByLocator(
  ":text-is('Modify Event') + span > input"
);
export const modifyCommunityCheckBox: PageLocator = getByLocator(
  ":text-is('Modify Community') + span > input"
);
export const viewDashboardCheckBox: PageLocator = getByLocator(
  ":text-is('View Dashboard') + span > input"
);
export const viewReportsCheckBox: PageLocator = getByLocator(
  ":text-is('View Reports') + span > input"
);
export const createDashboardCheckBox: PageLocator = getByLocator(
  ":text-is('Create Dashboard') + span > input"
);
export const manageP2PInsightsCheckBox: PageLocator = getByLocator(
  ":text-is('Manage P2P Insights') + span > input"
);
//USER ROLES...
export enum UserRoleEnum {
  CommunityOwner,
  CommunityManager,
  CommunityMember,
  CustomAccess,
}

const rolePageLocatorsMapping: Record<UserRoleEnum, PageLocator> = {
  [UserRoleEnum.CommunityOwner]: communityOwnerTab,
  [UserRoleEnum.CommunityManager]: communityManagerTab,
  [UserRoleEnum.CommunityMember]: communityMemberTab,
  [UserRoleEnum.CustomAccess]: communityCustomMemberTab,
};

export const filterRoles: PageAction = async (
  page: Page,
  role: UserRoleEnum
) => {
  const roleLocator = rolePageLocatorsMapping[role];
  if (!roleLocator) {
    throw new Error(`Invalid role: ${role}`);
  }

  await filterRoleButton(page).click();
  await roleLocator(page).click();
  await confirmRoleSelectionButton(page).click();
};
//TAGS...
export enum TagNameEnum {
  LocationTag,
  FunctionTag,
  TenureTag,
  SeniorityTag,
}

const tagPageLocatorsMapping: Record<TagNameEnum, PageLocator> = {
  [TagNameEnum.LocationTag]: filteredTagLocationChoice,
  [TagNameEnum.FunctionTag]: filteredTagFunctionChoice,
  [TagNameEnum.TenureTag]: filteredTagTenureChoice,
  [TagNameEnum.SeniorityTag]: filteredTagSeniorityChoice,
};

export const filterTags: PageAction = async (
  page: Page,
  tagName: TagNameEnum
) => {
  const tagLocator = tagPageLocatorsMapping[tagName];
  if (!tagLocator) {
    throw new Error(`Invalid tag: ${tagName}`);
  }
  await filterTagsTab(page).click();
  await tagLocator(page).click();
  await confirmRoleSelectionButton(page).click();
};
// CLEAR TAGS...
export enum ClearTagNameEnum {
  ClearLocationTag,
  ClearFunctionTag,
  ClearTenureTag,
  ClearSeniorityTag,
  ClearAllTags,
}
export const clearTagLocatorsMapping: Record<ClearTagNameEnum, PageLocator> = {
  [ClearTagNameEnum.ClearLocationTag]: clearLocationTag,
  [ClearTagNameEnum.ClearFunctionTag]: clearFunctionTag,
  [ClearTagNameEnum.ClearTenureTag]: clearTenureTag,
  [ClearTagNameEnum.ClearSeniorityTag]: clearSeniorityTag,
  [ClearTagNameEnum.ClearAllTags]: clearAllTags,
};

export const clearTags: PageAction = async (
  page: Page,
  tag: ClearTagNameEnum
) => {
  const clearTagLocator = clearTagLocatorsMapping[tag];
  if (!clearTagLocator) {
    throw new Error(`Invalid tag: ${tag}`);
  }
  const tagLocator = clearTagLocator(page);
  await tagLocator.click();
};

// SEARCH...
export const searchUserWithinACommunity: PageAction = async (
  page: Page,
  searchQuery: string
) => {
  await searchCommunityMemberField(page).fill(searchQuery);
};

//EDIT MEMBER ACCESS...
const clickRoleOption = (roleLocator: PageLocator, page: Page) => async () =>
  roleLocator(page).click();

const handleChatPopUp: PageAction = async (page: Page) => {
  const popUp = chatIframePopUp(page);
  if (await popUp.isVisible()) {
    await popUp.click();
  }
};

const selectAccessTab: PageAction = async (page: Page) => {
  await editAccessTab(page).click();
  await editAccessOption(page).click();
  await editRoleTab(page).click();
};

const roleOptionsMapping: Record<UserRoleEnum, PageLocator> = {
  [UserRoleEnum.CommunityOwner]: communityOwnerRole,
  [UserRoleEnum.CommunityManager]: communityManagerRole,
  [UserRoleEnum.CommunityMember]: communityMemberRole,
  [UserRoleEnum.CustomAccess]: communityCustomMemberRole,
};

const selectRole: PageAction = async (page: Page, access: UserRoleEnum) => {
  const roleLocator = roleOptionsMapping[access];
  if (!roleLocator) {
    throw new Error(`Invalid field: ${access}`);
  }
  await clickRoleOption(roleLocator, page)();
};

export const editCommunityMemberRoleAndAccess: PageAction = async (
  page: Page,
  access: UserRoleEnum
) => {
  await handleChatPopUp(page);
  await selectAccessTab(page);
  await selectRole(page, access);
};
