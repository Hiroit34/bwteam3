import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
    canActivate:[AuthGuard],
    canActivateChild:[AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'contatti',
    component: ContattiComponent,
  },
  {
    path: 'chi-siamo',
    component: ChiSiamoComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./pages/details/details.module').then((m) => m.DetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
