import { Routes,} from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './landing/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ManageAccountComponent } from './components/manage-account/manage-account.component';

export const routes: Routes = [
    { path: '', component: LandingComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'navbar', component: NavbarComponent},
    {path: 'manageAccount', component: ManageAccountComponent},
];
