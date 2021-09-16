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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'motDePasseOublie', component: MdpOublieComponent },
  { path: 'deshboard', component: DashboardComponent },
  {path:'monProfilPraticien',component:MonProfilPraticienComponent},
  {path:'nav-gauche',component:NavGuaucheComponent},
  {path:'presentation',component:PresentationComponent},
  {path:'lieu',component:LieuComponent},
  {path:'Recommandation',component:RecommandationComponent},
  {path:'bar',component:BarComponent},
  {path:'horaire',component:HoraireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
