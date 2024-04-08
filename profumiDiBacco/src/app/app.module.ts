import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { WineCardComponent } from './main-components/wine-card/wine-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ContattiComponent,
    ChiSiamoComponent,
    FaqComponent,
    HeaderComponent,
    FooterComponent,
    WineCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
