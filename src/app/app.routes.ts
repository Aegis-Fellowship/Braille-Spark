import { Routes,} from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { ManageAccountComponent } from './components/manage-account/manage-account.component';
import { TranslatorComponent } from './components/translator/translator.component';

export const routes: Routes = [
    { path: '', component: LandingComponent},
    { path: 'manageAccount', component: ManageAccountComponent},
    { path: 'translator', component: TranslatorComponent},
];
