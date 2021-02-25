import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { MDBBootstrapModule, CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { MatGridListModule } from '@angular/material/grid-list';
import { AboutComponent } from './about/about.component';
import { BlastedGlassComponent } from './services/blasted-glass/blasted-glass.component';
import { BulgedGlassComponent } from './services/bulged-glass/bulged-glass.component';
import { ProcessedGlassComponent } from './services/processed-glass/processed-glass.component';
import { AntiburglaryGlassComponent } from './services/antiburglary-glass/antiburglary-glass.component';
import { SecuredGlassComponent } from './services/secured-glass/secured-glass.component';
import { OrnamentalGlassComponent } from './services/ornamental-glass/ornamental-glass.component';
import { DoorGlassComponent } from './services/door-glass/door-glass.component';
import { PartitionsGlassComponent } from './services/partitions-glass/partitions-glass.component';
import { ShowerGlassComponent } from './services/shower-glass/shower-glass.component';
import { FurnitureGlassComponent } from './services/furniture-glass/furniture-glass.component';
import { PlatingGlassComponent } from './services/plating-glass/plating-glass.component';
import { MirrorsComponent } from './services/mirrors/mirrors.component';
import { LaccatoGlassComponent } from './services/laccato-glass/laccato-glass.component';
import { DoubleTripleTermoGlassComponent } from './services/double-triple-termo-glass/double-triple-termo-glass.component';
import { PersonalizedTermoGlassComponent } from './services/personalized-termo-glass/personalized-termo-glass.component';
import { OrnamentalTermoGlassComponent } from './services/ornamental-termo-glass/ornamental-termo-glass.component';
import { AntiburglaryTermoGlassComponent } from './services/antiburglary-termo-glass/antiburglary-termo-glass.component';
import { SecuredTermoGlassComponent } from './services/secured-termo-glass/secured-termo-glass.component';
import { OfferComponent } from './offer/offer.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';
import {TranslateModule} from '@ngx-translate/core';

const AppRoutes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'sticla_sablata', component: BlastedGlassComponent },
  { path: 'sticla_bombata', component: BulgedGlassComponent },
  { path: 'sticla_prelucrata', component: ProcessedGlassComponent },
  { path: 'sticla_antiefractie', component: AntiburglaryGlassComponent },
  { path: 'sticla_securizata', component: SecuredGlassComponent },
  { path: 'sticla_ornamentala', component: OrnamentalGlassComponent },
  { path: 'usi_din_sticla', component: DoorGlassComponent },
  { path: 'compartimentari_din_sticla', component: PartitionsGlassComponent },
  { path: 'cabine_de_dus', component: ShowerGlassComponent },
  { path: 'mobilier_din_sticla', component: FurnitureGlassComponent },
  { path: 'placari_cu_sticla', component: PlatingGlassComponent },
  { path: 'oglinzi', component: MirrorsComponent },
  { path: 'sticla_laccato', component: LaccatoGlassComponent },
  { path: 'geam_termo_dublu_triplu', component: DoubleTripleTermoGlassComponent },
  { path: 'geam_termo_personalizat', component: PersonalizedTermoGlassComponent },
  { path: 'geam_termo_bagheta', component: OrnamentalTermoGlassComponent },
  { path: 'geam_termo_antiefractie', component: AntiburglaryTermoGlassComponent },
  { path: 'geam_termo_securizat', component: SecuredTermoGlassComponent },
  { path: 'servicii', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent }
];

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'vetroglass.ro'
  },
  palette: {
    popup: {
      background: '#091540'
    },
    button: {
      background: '#091540'
    }
  },
  theme: 'block',
  type: 'opt-out'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CatalogComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    AboutComponent,
    BlastedGlassComponent,
    BulgedGlassComponent,
    ProcessedGlassComponent,
    AntiburglaryGlassComponent,
    SecuredGlassComponent,
    OrnamentalGlassComponent,
    DoorGlassComponent,
    PartitionsGlassComponent,
    ShowerGlassComponent,
    FurnitureGlassComponent,
    PlatingGlassComponent,
    MirrorsComponent,
    LaccatoGlassComponent,
    DoubleTripleTermoGlassComponent,
    PersonalizedTermoGlassComponent,
    OrnamentalTermoGlassComponent,
    AntiburglaryTermoGlassComponent,
    SecuredTermoGlassComponent,
    OfferComponent
  ],
  imports: [
    LightboxModule,
    BrowserModule,
    FormsModule,
    MatPaginatorModule,
    MatGridListModule,
    NgxUsefulSwiperModule,
    AgmDirectionModule,
    MatTableModule,
    DragScrollModule,
    GalleryModule,
    LightboxModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDkvGE1S5R8T5FqWeSCkPhOtk7esZ43ZOU'
    }),
    NgcCookieConsentModule.forRoot(cookieConfig),
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    CarouselModule,
    WavesModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(AppRoutes, {
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
