import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AccueilComponent } from './accueil/accueil.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';




export const routes: Routes = [
    { path : '/', component: AccueilComponent},
    { path : '/questionnaire/:idTheme', component: QuestionnaireComponent},
    { path: '**', component: PageNotFoundComponent}
];

