import { Component, OnInit } from '@angular/core';
import { FicheAnimal } from '../../model/ficheAnimal';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Location } from '@angular/common';
import { FicheAnimalService } from '../../services/fiche-animal.service';

@Component({
  selector: 'app-fiche-animal-details',
  templateUrl: './fiche-animal-details.component.html',
  styleUrls: ['./fiche-animal-details.component.css']
})
export class FicheAnimalDetailsComponent implements OnInit {

  ficheAnimal: FicheAnimal;

  fichesAnimal: FicheAnimal[];

  constructor(private router: Router, private route: ActivatedRoute,
              private location: Location, private ficheAnimalService: FicheAnimalService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      //this.ficheAnimal = this.findFicheAnimalById(parseInt(params.get('recipe_id'), 10));
      this.getFicheAnimalById(parseInt(params.get('ficheAnimal_idAnim'), 10));
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

  goBackButtonPressed(): void { // retourne a la page précedente
    this.location.back();
  }

  //public editButtonPressed(): void {
   // this.router.navigateByUrl('/editNewficheAnimal/' + this.ficheAnimal.idAnim);
 // }

    public getFicheAnimalById(idAnim: number): void {
      this.ficheAnimalService.getFicheAnimalById(idAnim).subscribe((response) => {
        this.ficheAnimal = response;
        console.log(this.ficheAnimal);
      });
    }

}
