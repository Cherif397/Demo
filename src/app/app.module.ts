import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './nutrition/header/header.component';
import { FooterComponent } from './nutrition/footer/footer.component';
import { ConnexionComponent } from './nutrition/connexion/connexion.component';
import { InscriptionComponent } from './nutrition/inscription/inscription.component';
import { HomeComponent } from './nutrition/home/home.component';
import { MdpOublieComponent } from './nutrition/mdp-oublie/mdp-oublie.component';
import { DashboardComponent } from './nutrition/dashboard/dashboard.component';
import { NavGuaucheComponent } from './nutrition/dashboard/nav-guauche/nav-guauche.component';
import { PresentationComponent } from './nutrition/presentation/presentation.component';
import { LieuComponent } from './nutrition/lieu/lieu.component';
import { RecommandationComponent } from './nutrition/recommandation/recommandation.component';
import { BarComponent } from './nutrition/bar/bar.component';
import { ChatsComponent } from './nutrition/chats/chats.component';
import { BlogComponent } from './nutrition/blog/blog.component';
import { MonProfilPraticienComponent } from './nutrition/mon-profil-praticien/mon-profil-praticien.component';
import { HoraireComponent } from './nutrition/horaire/horaire.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConnexionComponent,
    InscriptionComponent,
    HomeComponent,
    MdpOublieComponent,
    DashboardComponent,
    NavGuaucheComponent,
    PresentationComponent,
    LieuComponent,
    RecommandationComponent,
    BarComponent,
    ChatsComponent,
    BlogComponent,
    MonProfilPraticienComponent,
    HoraireComponent
  ],
  imports:[
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
