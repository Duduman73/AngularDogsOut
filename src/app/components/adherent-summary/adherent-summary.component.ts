import { Component, OnInit, Input } from '@angular/core';
import { Adherent } from '../../model/adherent';
import { FicheAnimal } from '../../model/ficheAnimal';

@Component({
  selector: 'app-adherent-summary',
  templateUrl: './adherent-summary.component.html',
  styleUrls: ['./adherent-summary.component.css']
})
export class AdherentSummaryComponent implements OnInit {

  @Input()
  adherent: Adherent;


  constructor() { }

  ngOnInit() {
  }

}
