import { defineConfig } from 'cypress';
import { readPdf } from './plugins/pdf';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        readPdf,
      });
    },
    supportFile: false,
    env: {
      pathToPdf: process.env.PDF_PATH,
    },
  },
});
