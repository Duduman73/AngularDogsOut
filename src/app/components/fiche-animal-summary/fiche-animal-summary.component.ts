import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FicheAnimal } from '../../model/ficheAnimal';

@Component({
  selector: 'app-fiche-animal-summary',
  templateUrl: './fiche-animal-summary.component.html',
  styleUrls: ['./fiche-animal-summary.component.css']
})
export class FicheAnimalSummaryComponent implements OnInit {

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
