import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',      
  timeout: 60000,          
  reporter: [['list']],    
  use: {
    browserName: 'chromium',
    headless: true,        
    viewport: { width: 1280, height: 800 },
  },
});