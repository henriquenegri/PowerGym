import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PagInicialComponent } from './app/pag-inicial/pag-inicial.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
