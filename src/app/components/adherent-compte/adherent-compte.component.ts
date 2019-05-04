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

  constructor(private adherentService: AdherentService, private ficheAnimalService: FicheAnimalService, private router: Router) {
    this.getAdherentById(1);
    this.getAllFicheAnimalWhereIdAd();
  }

  ngOnInit() {
  }

  public getAdherentById(idAd: 1): void {
    this.adherentService.getAdherentById(idAd).subscribe((response) => {
      this.adherent = response;
      console.log(this.adherent);
    });
  }
  public getAllFicheAnimalWhereIdAd(): void {
    this.ficheAnimalService.getAllFicheAnimalWhereIdAd().subscribe((response) => {
      console.log(response['_body'] );
      this.fichesAnimal = response;
      console.log(this.fichesAnimal);
    });
  }

  userClickedOnFicheAnimal(idAnim): void {
    this.router.navigateByUrl('/compteadherent/' + idAnim);
  }


}
