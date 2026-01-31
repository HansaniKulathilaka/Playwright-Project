import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',      // folder containing your test files
  timeout: 60000,          // 60 seconds per test
  reporter: [['list']],    // shows clean PASSED / FAILED output
  use: {
    browserName: 'chromium',
    headless: true,        // run in background; set false to debug visually
    viewport: { width: 1280, height: 800 },
  },
});