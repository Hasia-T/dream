import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'
import { Main } from './main/main'

bootstrapApplication(Main, appConfig).catch((err) =>
  console.error(err)
);
