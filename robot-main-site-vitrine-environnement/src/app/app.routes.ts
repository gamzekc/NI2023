import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PublicComponent } from './public/public.component';

export const routes: Routes = [
    { path : '', redirectTo : 'public', pathMatch : 'full'},
     { path : 'public', component: PublicComponent, loadChildren: ()=>import('./public/public.routes').then((r)=>r.routes)},
     { path: '**', component: PageNotFoundComponent}
    ];
