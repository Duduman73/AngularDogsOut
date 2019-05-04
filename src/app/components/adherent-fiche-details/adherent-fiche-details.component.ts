import { Component, OnInit } from '@angular/core';
import { FicheAnimal } from '../../model/ficheAnimal';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { FicheAnimalService } from '../../services/fiche-animal.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adherent-fiche-details',
  templateUrl: './adherent-fiche-details.component.html',
  styleUrls: ['./adherent-fiche-details.component.css']
})
export class AdherentFicheDetailsComponent implements OnInit {

  ficheAnimal: FicheAnimal;

  fichesAnimal: FicheAnimal[];

  constructor(private route: ActivatedRoute, private ficheAnimalService: FicheAnimalService, private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) =>  {
      this.getFicheAnimalById(parseInt(params.get('idAnim'), 10));
    });
  }

  findFicheAnimalById(idAnim: number): FicheAnimal {
    for (const ficheAnimal of this.fichesAnimal) {
      if (ficheAnimal.idAnim === idAnim) {
        return ficheAnimal;
      }
    }
    return null;
  }

  public getFicheAnimalById(idAnim: number): void {
    this.ficheAnimalService.getFicheAnimalById(idAnim).subscribe((response) => {
      this.ficheAnimal = response;
      console.log(this.ficheAnimal);
    });
  }

  goBackButtonPressed(): void {
    this.location.back();
  }
}
