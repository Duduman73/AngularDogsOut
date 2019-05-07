import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FicheAnimalSummaryComponent } from './components/fiche-animal-summary/fiche-animal-summary.component';
import { FicheAnimalListComponent } from './components/fiche-animal-list/fiche-animal-list.component';
import { FicheAnimalDetailsComponent } from './components/fiche-animal-details/fiche-animal-details.component';
import { AdminFicheDetailsComponent } from './components/admin-fiche-details/admin-fiche-details.component';
import { EvenementSummaryComponent } from './components/evenement-summary/evenement-summary.component';
import { EvenementListComponent } from './components/evenement-list/evenement-list.component';
import { EvenementDetailsComponent } from './components/evenement-details/evenement-details.component';
import { AdminFicheListComponent } from './components/admin-fiche-list/admin-fiche-list.component';
import { AdminFichSummaryComponent } from './components/admin-fich-summary/admin-fich-summary.component';
import { AdminCreateEventComponent } from './components/admin-create-event/admin-create-event.component';
import { AdminEvenementSummaryComponent } from './components/admin-evenement-summary/admin-evenement-summary.component';
import { AdminEvenementListComponent } from './components/admin-evenement-list/admin-evenement-list.component';
import { AdminEvenementDetailsComponent } from './components/admin-evenement-details/admin-evenement-details.component';
import { AdminAdherentSummaryComponent } from './components/admin-adherent-summary/admin-adherent-summary.component';
import { AdminAdherentListComponent } from './components/admin-adherent-list/admin-adherent-list.component';
import { AdminAdherentDetailsComponent } from './components/admin-adherent-details/admin-adherent-details.component';
import { AdminCompteComponent } from './components/admin-compte/admin-compte.component';



@NgModule({
  declarations: [
    AppComponent,
    FicheAnimalSummaryComponent,
    FicheAnimalListComponent,
    FicheAnimalDetailsComponent,
    AdminFicheDetailsComponent,
    EvenementSummaryComponent,
    EvenementListComponent,
    EvenementDetailsComponent,
    AdminFicheListComponent,
    AdminFichSummaryComponent,
    AdminCreateEventComponent,
    AdminEvenementSummaryComponent,
    AdminEvenementListComponent,
    AdminEvenementDetailsComponent,
    AdminAdherentSummaryComponent,
    AdminAdherentListComponent,
    AdminAdherentDetailsComponent,
    AdminCompteComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/adminCompte',
        pathMatch: 'full'
      },
      {
        path: 'adminCompte',
        component: AdminCompteComponent
      },
      {
        path: 'createEvent',
        component: AdminCreateEventComponent
      },
      {
        path: 'createEvent/:evenement_idEvent',
        component: AdminCreateEventComponent
      },
      {
        path: 'adminFichesAnimal',
        component: AdminFicheListComponent
      },
      {path: 'adminFichesAnimal/:ficheAnimal_idAnim',
      component: AdminFicheDetailsComponent
      },
      {
        path: 'adminEvenements',
        component: AdminEvenementListComponent
      },
      {path: 'adminEvenements/:evenement_idEvent',
      component: AdminEvenementDetailsComponent
      },
      {
        path: 'fichesAnimal',
        component: FicheAnimalListComponent
      },
      {path: 'fichesAnimal/:ficheAnimal_idAnim',
      component: FicheAnimalDetailsComponent
      },
      {
        path: 'evenements',
        component: EvenementListComponent
      },
      {
        path: 'evenements/:evenement_idEvent',
        component: EvenementDetailsComponent
      },
      {
        path: 'adminAdherents',
        component: AdminAdherentListComponent
      },
      {
        path: 'adminAdherents/:adherent_idAd',
        component: AdminAdherentDetailsComponent
      }
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
