import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adherent } from '../../model/adherent';
import { FicheAnimal } from '../../model/ficheAnimal';
import { FicheAnimalService } from '../../services/fiche-animal.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adherent-fiche-animal-summary',
  templateUrl: './adherent-fiche-animal-summary.component.html',
  styleUrls: ['./adherent-fiche-animal-summary.component.css']
})
export class AdherentFicheAnimalSummaryComponent implements OnInit {

  adherent: Adherent;
  fichesAnimal: FicheAnimal[];

  constructor(private router: Router, private ficheAnimalService: FicheAnimalService, private location: Location) {
    this.findByAdherent(2);
   }

  ngOnInit() {
  }

  public findByAdherent(adherent: 2): void {
    this.ficheAnimalService.findByAdherent(adherent).subscribe((response) => {
      this.fichesAnimal = response;
      console.log(this.fichesAnimal);
    });
  }
  userClickedOnFicheAnimal(idAnim): void {
    this.router.navigateByUrl('/compteAdherent/' + idAnim);
  }

  goBackButtonPressed(): void {
    this.location.back();
  }
}
