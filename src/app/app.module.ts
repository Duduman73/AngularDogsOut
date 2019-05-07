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
import { AdherentSummaryComponent } from './components/adherent-summary/adherent-summary.component';
import { AdherentCompteComponent } from './components/adherent-compte/adherent-compte.component';
import { AdherentFicheAnimalComponent } from './components/adherent-fiche-animal/adherent-fiche-animal.component';
import { AdherentFicheDetailsComponent } from './components/adherent-fiche-details/adherent-fiche-details.component';
import { EditNewFicheAnimalComponent } from './components/edit-new-fiche-animal/edit-new-fiche-animal.component';
import { AdherentCompteDetailsComponent } from './components/adherent-compte-details/adherent-compte-details.component';
import { AdherentCompteEditComponent } from './components/adherent-compte-edit/adherent-compte-edit.component';
import { AdherentFormMessageComponent } from './components/adherent-form-message/adherent-form-message.component';
import { AccueilComponent } from './components/accueil/accueil.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'fichesAnimal',
        component: FicheAnimalListComponent
      },
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
        path: 'Message',
        component: AdherentFormMessageComponent
      }
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
