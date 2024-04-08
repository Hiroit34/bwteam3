import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerProfileRoutingModule } from './seller-profile-routing.module';
import { SellerProfileComponent } from './seller-profile.component';


@NgModule({
  declarations: [
    SellerProfileComponent
  ],
  imports: [
    CommonModule,
    SellerProfileRoutingModule
  ]
})
export class SellerProfileModule { }
