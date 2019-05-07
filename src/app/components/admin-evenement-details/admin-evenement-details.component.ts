import { Component, OnInit } from '@angular/core';
import { Evenement } from '../../model/evenement';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EvenementService } from '../../services/evenement.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-evenement-details',
  templateUrl: './admin-evenement-details.component.html',
  styleUrls: ['./admin-evenement-details.component.css']
})
export class AdminEvenementDetailsComponent implements OnInit {

  evenement: Evenement;

  evenements: Evenement[];

  constructor(private route: ActivatedRoute,
              private location: Location, private evenementService: EvenementService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      //this.evenement = this.findEvenementById(parseInt(params.get('evenement_idEvent'), 10));
      this.getEvenementById(parseInt(params.get('evenement_idEvent'), 10));
    });
  }

  findEvenementById(idEvent: number): Evenement {
    for (const evenement of this.evenements) {
      if (evenement.idEvent === idEvent) {
        return evenement;
      }
    }

    return null;
  }

  goBackButtonPressed(): void { // retourne a la page précedente
    this.location.back();
  }

  public editButtonPressed(): void {
  this.router.navigateByUrl('/createEvent/' + this.evenement.idEvent);
 }

 public deleteButtonPressed(): void {
  this.evenementService.deleteEvenement(this.evenement).subscribe(
    (response) => {
      this.router.navigateByUrl('/adminEvenements');
    }
  );
  }

    public getEvenementById(idEvent: number): void {
      this.evenementService.getEvenementById(idEvent).subscribe((response) => {
        this.evenement = response;
        console.log(this.evenement);
      });
    }

}
