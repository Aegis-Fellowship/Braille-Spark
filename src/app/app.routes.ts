import { Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './landing/dashboard/dashboard.component';
import { ManageAccountComponent } from './components/manage-account/manage-account.component';

export const routes: Routes = [
    { path: '', component: ManageAccountComponent},
    { path: 'dashboard', component: DashboardComponent},
    {path: 'manageAccount', component: ManageAccountComponent}
];
