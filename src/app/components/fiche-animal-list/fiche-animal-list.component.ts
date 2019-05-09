import { Component, OnInit } from '@angular/core';
import { FicheAnimal } from '../../model/ficheAnimal';
import { Router } from '@angular/router';
import { FicheAnimalService } from '../../services/fiche-animal.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-fiche-animal-list',
  templateUrl: './fiche-animal-list.component.html',
  styleUrls: ['./fiche-animal-list.component.css']
})
export class FicheAnimalListComponent implements OnInit {

  fichesAnimal: FicheAnimal[];

  constructor(private ficheAnimalService: FicheAnimalService, private router: Router, private location: Location) {
    this.getAllFicheAnimal();
  }

  ngOnInit() {
  }

  userClickedOnFicheAnimal(ficheAnimal_idAnim): void {
    this.router.navigateByUrl('/fichesAnimal/' + ficheAnimal_idAnim);
  }

  public getAllFicheAnimal(): void {
    this.ficheAnimalService.getAllFicheAnimal().subscribe((response) => {
      console.log(response['_body'] );
      this.fichesAnimal = response;
      console.log(this.fichesAnimal);
    });
  }

  goBackButtonPressed(): void {
    this.location.back();
  }

}
