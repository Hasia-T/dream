import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './src/app/app.config';
import { Main } from './src/main/main';

bootstrapApplication(Main, appConfig).catch((err) =>
  console.error(err)
);
