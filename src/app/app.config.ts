import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';  // Assurez-vous d'importer HttpClientModule
import { routes } from './app.routes';  // Routes de l'application

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),    // Configuration du routage
    provideHttpClient(),      // Fournisseur HttpClient
  ]
};
