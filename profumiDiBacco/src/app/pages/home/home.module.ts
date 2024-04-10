import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WineCardComponent } from '../../main-components/wine-card/wine-card.component';
import { BannerComponent } from '../../main-components/banner/banner.component';

@NgModule({
  declarations: [HomeComponent, WineCardComponent, BannerComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
