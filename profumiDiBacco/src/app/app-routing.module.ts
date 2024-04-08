import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';
import { FaqComponent } from './pages/faq/faq.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'seller-profile',
    loadChildren: () => import('./pages/seller-profile/seller-profile.module').then(m => m.SellerProfileModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'contatti',
    component: ContattiComponent
  },
  {
    path: 'chi-siamo',
    component: ChiSiamoComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
