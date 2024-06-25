import { test } from "@playwright/test";

test.skip("Basic Navigation", async ({ page }) => {
  await page.goto("https://gitlab.com/");
  await page.waitForTimeout(3000);
  await page.reload();
});

test.skip("Interacting with web elements", async ({ page }) => {
  await page.goto("https://gitlab.com/");
  await page.click("#onetrust-accept-btn-handler");

  await page
    .locator("#be-navigation-mobile")
    .getByRole("link", { name: "Get free trial" })
    .click();
  // await page.locator('[data-testid]="new-user-first-name-field"').fill("John1");
  // await page.locator('[data-testid]="new-user-last-name-field"').fill("Snow1");
  await page.getByTestId("new-user-first-name-field").fill("John1");
  await page.getByTestId("new-user-last-name-field").fill("Snow1");
});

test("Using various locator methods", async ({ page }) => {
  await page.goto("https://gitlab.com/");
  await page.click("#onetrust-accept-btn-handler"); // click cookie btn
  await page.getByRole("button", { name: "Main Menu" }).click();
  await page.getByRole("link", { name: "Sign in" }).click();
});
