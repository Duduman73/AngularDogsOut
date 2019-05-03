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


@NgModule({
  declarations: [
    AppComponent,
    FicheAnimalSummaryComponent,
    FicheAnimalListComponent,
    FicheAnimalDetailsComponent
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
        path: '',
        redirectTo: '/fichesAnimal',
        pathMatch: 'full'
      },
      {path: 'fichesAnimal/:ficheAnimal_idAnim',
      component: FicheAnimalDetailsComponent
      }
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
