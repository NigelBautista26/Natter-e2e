import { Locator, Page } from "playwright";

export type PageLocator = (page: Page) => Readonly<Locator>;
export type PageAction = (...args: any[]) => Promise<void>;

type Role =
  | "textbox"
  | "heading"
  | "button"
  | "combobox"
  | "option"
  | "alert"
  | "link"
  | "gridcell";

export const getByTestId =
  (testId: string): PageLocator =>
  (page: Page) =>
    page.getByTestId(testId);

export const getByRole =
  ({ role, name }: { role: Role; name?: string }): PageLocator =>
  (page: Page) =>
    page.getByRole(role, { name });

export const getByText =
  (text: string): PageLocator =>
  (page: Page) =>
    page.getByText(text);

export const getByLocator =
  (selector: string): PageLocator =>
  (page: Page) =>
    page.locator(selector);

export const getByPlaceholder =
  (selector: string): PageLocator =>
  (page: Page) =>
    page.getByPlaceholder(selector);

export const getByLabel =
  (selector: string): PageLocator =>
  (page: Page) =>
    page.getByLabel(selector);

export const getById =
  (id: string): PageLocator =>
  (page: Page) =>
    page.locator(`#${id}`);

interface ClickAndWaitOptions {
  locator: PageLocator;
  page: Page;
  timeout: number;
}

export const clickAndWait = async ({
  locator,
  page,
  timeout,
}: ClickAndWaitOptions) => {
  await locator(page).click();
  await page.waitForTimeout(timeout);
};
