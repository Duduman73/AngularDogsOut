import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FicheAnimal } from '../../model/ficheAnimal';
import { FicheAnimalService } from '../../services/fiche-animal.service';

@Component({
  selector: 'app-adherent-fiche-animal',
  templateUrl: './adherent-fiche-animal.component.html',
  styleUrls: ['./adherent-fiche-animal.component.css']
})
export class AdherentFicheAnimalComponent implements OnInit {

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
