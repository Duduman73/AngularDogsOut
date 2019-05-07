import { Component, OnInit } from '@angular/core';
import { Evenement } from '../../model/evenement';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EvenementService } from '../../services/evenement.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-evenement-details',
  templateUrl: './evenement-details.component.html',
  styleUrls: ['./evenement-details.component.css']
})
export class EvenementDetailsComponent implements OnInit {

  evenement: Evenement;

  evenements: Evenement[];

  constructor(private route: ActivatedRoute,
              private location: Location, private evenementService: EvenementService) { }

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

  //public editButtonPressed(): void {
   // this.router.navigateByUrl('/editNewevenement/' + this.evenement.idEvent);
 // }

    public getEvenementById(idEvent: number): void {
      this.evenementService.getEvenementById(idEvent).subscribe((response) => {
        this.evenement = response;
        console.log(this.evenement);
      });
    }
}
