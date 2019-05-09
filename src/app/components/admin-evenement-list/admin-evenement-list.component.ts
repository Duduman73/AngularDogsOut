import { Component, OnInit } from '@angular/core';
import { Evenement } from '../../model/evenement';
import { EvenementService } from '../../services/evenement.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Location } from '@angular/common';


@Component({
  selector: 'app-admin-evenement-list',
  templateUrl: './admin-evenement-list.component.html',
  styleUrls: ['./admin-evenement-list.component.css']
})
export class AdminEvenementListComponent implements OnInit {

  evenements: Evenement[];

  event_in_progress: Evenement;

  constructor(private evenementService: EvenementService, private router: Router, private location: Location) {
    this.getAllEvenement();
    this.event_in_progress = Evenement.createBlank();
  }

  ngOnInit() {
  }

  public addEventClicked() {
    console.log(JSON.stringify(this.event_in_progress, null, 2));
    this.evenements.unshift(this.event_in_progress);
    this.event_in_progress = Evenement.createBlank();
  }

  addNewEventPressed(): void {
    this.router.navigateByUrl('/createEvent');
  }

  userClickedOnEvenement(evenement_idEvent): void {
    this.router.navigateByUrl('/adminEvenements/' + evenement_idEvent);
  }

  public getAllEvenement(): void {
    this.evenementService.getAllEvenement().subscribe((response) => {
      //console.log(response['_body'] );
      this.evenements = response;
      //console.log(this.evenements);
    });
  }

  goBackButtonPressed(): void {
    this.location.back();
  }

}
