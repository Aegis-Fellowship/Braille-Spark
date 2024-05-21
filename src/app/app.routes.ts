import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { noAuthGuard } from './auth/no-auth.guard';

import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './landing/dashboard/dashboard.component';
import { ManageAccountComponent } from './components/manage-account/manage-account.component';
import { TranslatorComponent } from './components/translator/translator.component';
import { LearnComponent } from './components/learn/learn.component';
import { AdditionalResourcesComponent } from './components/additional-resources/additional-resources.component';

export const routes: Routes = [
    { path: 'login', component: LandingComponent, canActivate: [noAuthGuard]},
    { path: '', component: DashboardComponent, canActivate: [authGuard]},
    { path: 'manage-account', component: ManageAccountComponent, canActivate: [authGuard]},
    { path: 'translator', component: TranslatorComponent},
    { path: 'learn', component: LearnComponent, canActivate: [authGuard]},
    { path: 'resources', component: AdditionalResourcesComponent}
];
