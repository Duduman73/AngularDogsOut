import { Component, OnInit } from '@angular/core';
import { AdherentService } from '../../services/adherent.service';
import { Adherent } from '../../model/adherent';
import { FicheAnimal } from '../../model/ficheAnimal';
import { FicheAnimalService } from '../../services/fiche-animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adherent-compte',
  templateUrl: './adherent-compte.component.html',
  styleUrls: ['./adherent-compte.component.css']
})
export class AdherentCompteComponent implements OnInit {

  adherent: Adherent;
  fichesAnimal: FicheAnimal[];

  ficheAnimal_in_progress: FicheAnimal;


  constructor(private adherentService: AdherentService, private ficheAnimalService: FicheAnimalService, private router: Router) {

    this.ficheAnimal_in_progress = FicheAnimal.createBlank();

    this.getAdherentById(1);
    this.findByAdherent(1);
  }

  ngOnInit() {
  }

  public getAdherentById(idAd: 1): void {
    this.adherentService.getAdherentById(idAd).subscribe((response) => {
      this.adherent = response;
      console.log(this.adherent);
    });
  }

  public findByAdherent(adherent: 1): void {
    this.ficheAnimalService.findByAdherent(adherent).subscribe((response) => {
      this.fichesAnimal = response;
      console.log(this.fichesAnimal);
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

}
