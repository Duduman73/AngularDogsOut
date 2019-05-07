import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FicheAnimal } from '../../model/ficheAnimal';

@Component({
  selector: 'app-admin-fich-summary',
  templateUrl: './admin-fich-summary.component.html',
  styleUrls: ['./admin-fich-summary.component.css']
})
export class AdminFichSummaryComponent implements OnInit {

  @Input()
  ficheAnimal: FicheAnimal;

  @Output()

    userClick: EventEmitter<number> = new EventEmitter();

    constructor() { }
    userClicked() {
      this.userClick.emit(this.ficheAnimal.idAnim);
    }
    ngOnInit() {
    }

}
