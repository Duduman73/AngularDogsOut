import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Adherent } from '../../model/adherent';

@Component({
  selector: 'app-adherent-summary',
  templateUrl: './adherent-summary.component.html',
  styleUrls: ['./adherent-summary.component.css']
})
export class AdherentSummaryComponent implements OnInit {

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
