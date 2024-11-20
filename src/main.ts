import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

import { routes } from './app/app.routes';
import { FormsModule, NgModel } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';



bootstrapApplication(AppComponent, {
  providers: [
     importProvidersFrom(FormsModule,BrowserAnimationsModule, MatToolbarModule), 
     provideRouter(routes), provideAnimationsAsync()
    ]
}).catch(err => console.error(err));
