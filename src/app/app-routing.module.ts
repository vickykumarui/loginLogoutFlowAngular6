import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LangingPageComponent } from './components/landingPage/langing-page/langing-page.component';
import { WelcomeComponent } from './components/welcomePage/welcome/welcome.component';


const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'landing',
    component: LangingPageComponent
  },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(
  routes
);
