import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Adherent } from '../../model/adherent';

@Component({
  selector: 'app-admin-adherent-summary',
  templateUrl: './admin-adherent-summary.component.html',
  styleUrls: ['./admin-adherent-summary.component.css']
})
export class AdminAdherentSummaryComponent implements OnInit {

  @Input()
  adherent: Adherent;

  @Output()
  userClick: EventEmitter<number> = new EventEmitter();


  userClicked() {
    this.userClick.emit(this.adherent.idAd);
  }

  constructor() { }

  ngOnInit() {
  }

}

