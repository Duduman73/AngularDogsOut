import { Component, OnInit } from '@angular/core';
import { AdherentService } from '../../services/adherent.service';
import { Adherent } from '../../model/adherent';
import { FicheAnimal } from '../../model/ficheAnimal';
import { FicheAnimalService } from '../../services/fiche-animal.service';
import { Router } from '@angular/router';

import { Location } from '@angular/common';

@Component({
  selector: 'app-adherent-compte',
  templateUrl: './adherent-compte.component.html',
  styleUrls: ['./adherent-compte.component.css']
})
export class AdherentCompteComponent implements OnInit {

  adherent: Adherent;
  fichesAnimal: FicheAnimal[];

  ficheAnimal_in_progress: FicheAnimal;


  constructor(private adherentService: AdherentService, private ficheAnimalService: FicheAnimalService, private router: Router,
              private location: Location) {

    this.ficheAnimal_in_progress = FicheAnimal.createBlank();

    this.getAdherentById(2);
  }

  ngOnInit() {
  }

  public getAdherentById(idAd: 2): void {
    this.adherentService.getAdherentById(idAd).subscribe((response) => {
      this.adherent = response;
      console.log(this.adherent);
    });
  }

  userClickedOnFicheAnimal(idAnim): void {
    this.router.navigateByUrl('/compteAdherent/' + idAnim);
  }

  public addFicheAnimalClicked() {
    console.log(JSON.stringify(this.ficheAnimal_in_progress, null, 2));
    this.fichesAnimal.unshift(this.ficheAnimal_in_progress);
    this.ficheAnimal_in_progress = FicheAnimal.createBlank();
  }

  addNewFicheAnimalPressed(): void {
    this.router.navigateByUrl('/editnewFicheAnimal');
  }

  public ficheAnimalListButtonPressed(): void {
    this.router.navigateByUrl('/fichesAnimal');
  }

  userClickedOnAdherent(idAd): void {
    this.router.navigateByUrl('/compteAdherent/Adherent/' + idAd);
  }

  userClickedOnEvenement(): void {
    this.router.navigateByUrl('/evenements');
  }

  userClickedOnMesAnimaux(): void {
    this.router.navigateByUrl('/adherentFicheAnimal');
  }

  goBackButtonPressed(): void {
    this.location.back();
  }

}
