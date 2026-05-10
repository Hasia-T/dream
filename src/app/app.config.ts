import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { AvatarModule } from 'primeng/avatar';
import { MessageModule } from 'primeng/message';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { NgComponentOutlet } from '@angular/common';
import { NgTemplateOutlet } from '@angular/common';
import { PrimeNG } from 'primeng/config';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // provideAnimationsAsync(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: Aura, 
        options: { darkModeSelector: '.p-dark' },
      },
    }),
    Component,
    NgComponentOutlet,
    NgTemplateOutlet,
    TimelineModule,
    AvatarModule,
    AnimateOnScrollModule,
    MessageModule
    
  ]
};
