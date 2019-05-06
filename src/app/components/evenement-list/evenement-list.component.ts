import { Component, OnInit } from '@angular/core';
import { Evenement } from '../../model/evenement';
import { Router } from '@angular/router';
import { EvenementService } from '../../services/evenement.service';

@Component({
  selector: 'app-evenement-list',
  templateUrl: './evenement-list.component.html',
  styleUrls: ['./evenement-list.component.css']
})
export class EvenementListComponent implements OnInit {

  evenements: Evenement[];

  constructor(private evenementService: EvenementService, private router: Router) {
    this.getAllEvenement();

  }

  ngOnInit() {
  }

  userClickedOnEvenement(evenement_idEvent): void {
    this.router.navigateByUrl('/evenements/' + evenement_idEvent);
  }

  public getAllEvenement(): void {
    this.evenementService.getAllEvenement().subscribe((response) => {
      //console.log(response['_body'] );
      this.evenements = response;
      //console.log(this.evenements);
    });
  }

}
