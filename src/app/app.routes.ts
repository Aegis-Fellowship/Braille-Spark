import { Routes,} from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './landing/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [
    { path: '', component: LandingComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'navbar', component: NavbarComponent},
];
