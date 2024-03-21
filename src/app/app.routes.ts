import { Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './landing/login/login.component';

export const routes: Routes = [
    { path: '', component: LandingComponent},
    { path: 'dashboard', component: DashboardComponent}
];
