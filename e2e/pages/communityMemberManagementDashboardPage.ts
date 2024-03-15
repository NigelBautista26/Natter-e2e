import { Page } from "@playwright/test";
import {
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
export const esitAccessOption: PageLocator = getByText("Edit access");
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

// ROLES...
const rolePageLocators: Record<string, PageLocator> = {
  "Community Owner": communityOwnerTab,
  "Community Manager": communityManagerTab,
  "Community Member": communityMemberTab,
  "Community Custom Member": communityCustomMemberTab,
};

export const filterRoles = async (page: Page, role: string) => {
  const roleLocator = rolePageLocators[role];
  if (!roleLocator) {
    throw new Error(`Invalid role: ${role}`);
  }

  await filterRoleButton(page).click();
  await roleLocator(page).click();
  await confirmRoleSelectionButton(page).click();
};
//TAGS...
const tagPageLocators: Record<string, PageLocator> = {
  "Location Tag": filteredTagLocationChoice,
  "Function Tag": filteredTagFunctionChoice,
  "Tenure Tag": filteredTagTenureChoice,
  "Seniority Tag": filteredTagSeniorityChoice,
};

export const filterTags = async (page: Page, tagName: string) => {
  const tagLocator = tagPageLocators[tagName];
  if (!tagLocator) {
    throw new Error(`Invalid tag: ${tagName}`);
  }

  await filterTagsTab(page).click();
  await tagLocator(page).click();
  await confirmRoleSelectionButton(page).click();
};

export const clearTagLocators: Record<string, PageLocator> = {
  "Clear Location Tag": clearLocationTag,
  "Clear Function Tag": clearFunctionTag,
  "Clear Tenure Tag": clearTenureTag,
  "Clear Seniority Tag": clearSeniorityTag,
  "Clear All Tags": clearAllTags,
};

export const clearTags = async (page: Page, tag: string) => {
  const clearTagLocator = clearTagLocators[tag];
  if (!clearTagLocator) {
    throw new Error(`Invalid tag: ${tag}`);
  }

  const tagLocator = clearTagLocator(page);
  await tagLocator.click();
};

// SEARCH...
export const searchUserWithinACommunity = async (
  page: Page,
  searchQuery: string
) => {
  await searchCommunityMemberField(page).fill(searchQuery);
};

//EDIT MEMBER ACCESS...
export const editcommunityMemberRoleAndAccess = async (
  page: Page,
  access: string
) => {
  const clickRoleOption = (role: PageLocator) => async () => role(page).click();

  const handleChatPopUp = async () => {
    const popUp = chatIframePopUp(page);
    if (await popUp.isVisible()) {
      await popUp.click();
    }
  };

  await handleChatPopUp();
  await editAccessTab(page).click();
  await esitAccessOption(page).click();
  await editRoleTab(page).click();

  const roleOptions: Record<string, () => Promise<void>> = {
    "Community Owner": clickRoleOption(communityOwnerRole),
    "Community Manager": clickRoleOption(communityManagerRole),
    "Community Member": clickRoleOption(communityMemberRole),
    "Custom Access": clickRoleOption(communityCustomMemberRole),
  };

  const selectedRoleClick = roleOptions[access];
  if (!selectedRoleClick) {
    throw new Error(`Invalid field: ${access}`);
  }

  await selectedRoleClick();
};
