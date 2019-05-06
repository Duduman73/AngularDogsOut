import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Evenement } from '../../model/evenement';

@Component({
  selector: 'app-admin-evenement-summary',
  templateUrl: './admin-evenement-summary.component.html',
  styleUrls: ['./admin-evenement-summary.component.css']
})
export class AdminEvenementSummaryComponent implements OnInit {

  @Input()
  evenement: Evenement;

  @Output()
    userClick: EventEmitter<number> = new EventEmitter();

    constructor() { }

    userClicked() {
      this.userClick.emit(this.evenement.idEvent);
    }

    ngOnInit() {
    }
}
