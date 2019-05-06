import { Component, OnInit } from '@angular/core';
import { FicheAnimal } from '../../model/ficheAnimal';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { FicheAnimalService } from '../../services/fiche-animal.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-fiche-details',
  templateUrl: './admin-fiche-details.component.html',
  styleUrls: ['./admin-fiche-details.component.css']
})
export class AdminFicheDetailsComponent implements OnInit {

  ficheAnimal: FicheAnimal;

  fichesAnimal: FicheAnimal[];

  constructor(private route: ActivatedRoute, private ficheAnimalService: FicheAnimalService, private location: Location,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) =>  {
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

  public getFicheAnimalById(idAnim: number): void {
    this.ficheAnimalService.getFicheAnimalById(idAnim).subscribe((response) => {
      this.ficheAnimal = response;
      console.log(this.ficheAnimal);
    });
  }

  goBackButtonPressed(): void {
    this.location.back();
  }

  public deleteButtonPressed(): void {
    this.ficheAnimalService.deleteFicheAnimal(this.ficheAnimal).subscribe((response) => {
      this.router.navigateByUrl('/adminFichesAnimal');
    });
  }

}
