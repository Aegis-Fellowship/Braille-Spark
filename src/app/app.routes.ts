import { Routes,} from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './landing/dashboard/dashboard.component';
import { ManageAccountComponent } from './components/manage-account/manage-account.component';
import { TranslatorComponent } from './components/translator/translator.component';
import { LearnComponent } from './components/learn/learn.component';

export const routes: Routes = [
    { path: '', component: LandingComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'manage-account', component: ManageAccountComponent},
    { path: 'translator', component: TranslatorComponent},
    { path: 'learn', component: LearnComponent},
];
