import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './nutrition/bar/bar.component';
import { ConnexionComponent } from './nutrition/connexion/connexion.component';
import { DashboardComponent } from './nutrition/dashboard/dashboard.component';
import { NavGuaucheComponent } from './nutrition/dashboard/nav-guauche/nav-guauche.component';
import { HomeComponent } from './nutrition/home/home.component';
import { HoraireComponent } from './nutrition/horaire/horaire.component';
import { InscriptionComponent } from './nutrition/inscription/inscription.component';
import { LieuComponent } from './nutrition/lieu/lieu.component';
import { MdpOublieComponent } from './nutrition/mdp-oublie/mdp-oublie.component';
import { MonProfilPraticienComponent } from './nutrition/mon-profil-praticien/mon-profil-praticien.component';
import { PresentationComponent } from './nutrition/presentation/presentation.component';
import { RecommandationComponent } from './nutrition/recommandation/recommandation.component';
import { ChatsComponent } from './nutrition/chats/chats.component';
import { BlogComponent } from './nutrition/blog/blog.component';
import { RecommendationsComponent } from './nutrition/dashboard/recommendations/recommendations.component';
import { ChangerMotDePasseComponent } from './nutrition/dashboard/changer-mot-de-passe/changer-mot-de-passe.component';

import { FactureComponent } from './nutrition/dashboard/facture/facture.component';




const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'inscription', component: InscriptionComponent },
  {path: 'connexion', component: ConnexionComponent },
  {path: 'motDePasseOublie', component: MdpOublieComponent },
  {path: 'sidebar', component: DashboardComponent, children:[
    {path:'recommendations',component:RecommendationsComponent},
    {path:'changerMotDePasse',component:ChangerMotDePasseComponent},
    {path:'facture',component:FactureComponent},

  ] },
  {path:'monProfilPraticien',component:MonProfilPraticienComponent},
  {path:'presentation',component:PresentationComponent},
  {path:'lieu',component:LieuComponent},
  {path:'Recommandation',component:RecommandationComponent},
  {path:'horaire',component:HoraireComponent},
  {path:'bar',component:BarComponent},
  {path:'chats',component:ChatsComponent},
  {path:'blog',component:BlogComponent},
  {path:'bar',component:BarComponent},
  {path:'horaire',component:HoraireComponent},
  {path:'recommendation',component:RecommandationComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
