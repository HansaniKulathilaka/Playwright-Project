const { test, expect } = require('@playwright/test');

test('Singlish to Sinhala - Good morning oyaatath', async ({ page }, testInfo) => {
  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

  const expected = 'Good morning ඔයාටත්';
  
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.').or(page.locator('textarea#fromText'));
  
  const outputBox = page.locator('div.output-text').or(page.getByText(expected, { exact: true }));

  await inputBox.first().waitFor({ state: 'visible', timeout: 15000 });
  await inputBox.first().fill('Good morning oyaatath');

  
  await outputBox.waitFor({ state: 'visible', timeout: 15000 });
  await page.waitForTimeout(500);

  const actual = (await outputBox.innerText()).trim();

  const passed = actual === expected;
  console.log(`\n>>> [${testInfo.title}] ${passed ? 'PASSED' : 'FAILED'} (expected: "${expected}", actual: "${actual}")\n`);
  expect(actual).toBe(expected);
});