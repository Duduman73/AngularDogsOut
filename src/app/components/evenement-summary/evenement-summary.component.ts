import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Evenement } from '../../model/evenement';

@Component({
  selector: 'app-evenement-summary',
  templateUrl: './evenement-summary.component.html',
  styleUrls: ['./evenement-summary.component.css']
})
export class EvenementSummaryComponent implements OnInit {

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
