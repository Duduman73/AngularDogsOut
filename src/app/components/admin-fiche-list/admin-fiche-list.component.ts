import { Component, OnInit } from '@angular/core';
import { FicheAnimal } from '../../model/ficheAnimal';
import { FicheAnimalService } from '../../services/fiche-animal.service';
import { Router } from '@angular/router';

import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-fiche-list',
  templateUrl: './admin-fiche-list.component.html',
  styleUrls: ['./admin-fiche-list.component.css']
})
export class AdminFicheListComponent implements OnInit {

  fichesAnimal: FicheAnimal[];

  constructor(private ficheAnimalService: FicheAnimalService, private router: Router, private location: Location) {
    this.getAllFicheAnimal();
  }

  ngOnInit() {
  }

  userClickedOnFicheAdminAnimal(ficheAnimal_idAnim): void {
    this.router.navigateByUrl('/adminFichesAnimal/' + ficheAnimal_idAnim);
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
