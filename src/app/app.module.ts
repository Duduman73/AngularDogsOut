import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ButtonModule} from 'primeng/button';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FicheAnimalSummaryComponent } from './components/fiche-animal-summary/fiche-animal-summary.component';
import { FicheAnimalListComponent } from './components/fiche-animal-list/fiche-animal-list.component';
import { FicheAnimalDetailsComponent } from './components/fiche-animal-details/fiche-animal-details.component';
import { AdherentSummaryComponent } from './components/adherent-summary/adherent-summary.component';
import { AdherentCompteComponent } from './components/adherent-compte/adherent-compte.component';
import { AdherentFicheAnimalComponent } from './components/adherent-fiche-animal/adherent-fiche-animal.component';
import { AdherentFicheDetailsComponent } from './components/adherent-fiche-details/adherent-fiche-details.component';
import { EditNewFicheAnimalComponent } from './components/edit-new-fiche-animal/edit-new-fiche-animal.component';
import { AdherentCompteDetailsComponent } from './components/adherent-compte-details/adherent-compte-details.component';
import { AdherentCompteEditComponent } from './components/adherent-compte-edit/adherent-compte-edit.component';
import { AdherentFormMessageComponent } from './components/adherent-form-message/adherent-form-message.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AdminCompteComponent } from './components/admin-compte/admin-compte.component';
import { AdminCreateEventComponent } from './components/admin-create-event/admin-create-event.component';
import { AdminFicheListComponent } from './components/admin-fiche-list/admin-fiche-list.component';
import { AdminFicheDetailsComponent } from './components/admin-fiche-details/admin-fiche-details.component';
import { AdminEvenementListComponent } from './components/admin-evenement-list/admin-evenement-list.component';
import { AdminEvenementDetailsComponent } from './components/admin-evenement-details/admin-evenement-details.component';
import { EvenementListComponent } from './components/evenement-list/evenement-list.component';
import { EvenementDetailsComponent } from './components/evenement-details/evenement-details.component';
import { AdminAdherentListComponent } from './components/admin-adherent-list/admin-adherent-list.component';
import { AdminAdherentDetailsComponent } from './components/admin-adherent-details/admin-adherent-details.component';
import { AdminFichSummaryComponent } from './components/admin-fich-summary/admin-fich-summary.component';
import { AdminEvenementSummaryComponent } from './components/admin-evenement-summary/admin-evenement-summary.component';
import { EvenementSummaryComponent } from './components/evenement-summary/evenement-summary.component';
import { AdminAdherentSummaryComponent } from './components/admin-adherent-summary/admin-adherent-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    FicheAnimalSummaryComponent,
    FicheAnimalListComponent,
    FicheAnimalDetailsComponent,
    AdherentSummaryComponent,
    AdherentCompteComponent,
    AdherentFicheAnimalComponent,
    AdherentFicheDetailsComponent,
    EditNewFicheAnimalComponent,
    AdherentCompteDetailsComponent,
    AdherentCompteEditComponent,
    AdherentFormMessageComponent,
    AccueilComponent,
    AdminCompteComponent,
    AdminCreateEventComponent,
    AdminFicheListComponent,
    AdminFicheDetailsComponent,
    AdminEvenementListComponent,
    AdminEvenementDetailsComponent,
    EvenementListComponent,
    EvenementDetailsComponent,
    AdminAdherentListComponent,
    AdminAdherentDetailsComponent,
    AdminFichSummaryComponent,
    AdminEvenementSummaryComponent,
    EvenementSummaryComponent,
    AdminAdherentSummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    RouterModule.forRoot([
      {
        path: 'accueil',
        component: AccueilComponent
      },
      {
        path: '',
        redirectTo: '/accueil',
        pathMatch: 'full'
      },
      {
        path: 'fichesAnimal',
        component: FicheAnimalListComponent
      },
      {
      path: 'fichesAnimal/:ficheAnimal_idAnim',
      component: FicheAnimalDetailsComponent
      },
      {
      path: 'compteAdherent',
      component: AdherentCompteComponent
      },
      {
        path: 'compteAdherent/:idAnim',
        component: AdherentFicheDetailsComponent
      },
      {
      path: 'editnewFicheAnimal',
      component: EditNewFicheAnimalComponent
      },
      {
        path: 'editnewFicheAnimal/:idAnim',
        component: EditNewFicheAnimalComponent
      },
      {
        path: 'compteAdherent/Adherent/:idAd',
        component: AdherentCompteDetailsComponent
      },
      {
        path: 'compteAdherentEdit/:idAd',
        component: AdherentCompteEditComponent
      },
      {
        path: 'compteAdherentEdit',
        component: AdherentCompteEditComponent
      },
      {
        path: 'Message',
        component: AdherentFormMessageComponent
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
      {
        path: 'adminFichesAnimal/:ficheAnimal_idAnim',
        component: AdminFicheDetailsComponent
      },
      {
        path: 'adminEvenements',
        component: AdminEvenementListComponent
      },
      {
        path: 'adminEvenements/:evenement_idEvent',
        component: AdminEvenementDetailsComponent
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
