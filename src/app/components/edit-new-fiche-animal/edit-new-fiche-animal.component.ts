import { Component, OnInit } from '@angular/core';
import { FicheAnimal } from '../../model/ficheAnimal';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { FicheAnimalService } from '../../services/fiche-animal.service';
import { AdherentService } from '../../services/adherent.service';

@Component({
  selector: 'app-edit-new-fiche-animal',
  templateUrl: './edit-new-fiche-animal.component.html',
  styleUrls: ['./edit-new-fiche-animal.component.css']
})
export class EditNewFicheAnimalComponent implements OnInit {

  ficheAnimal_in_progress: FicheAnimal;
  mode_access: string;

  constructor(private ficheAnimalService: FicheAnimalService, private route: ActivatedRoute,
              private router: Router, private adherentService: AdherentService) {
    this.ficheAnimal_in_progress = FicheAnimal.createBlank();
    console.log(this.ficheAnimal_in_progress);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('idAnim') != null) {
        console.log(params.get('idAnim'));
        this.mode_access = 'MODIFICATION';
        this.ficheAnimalService.getFicheAnimalById(parseInt(params.get('idAnim'), 10)).subscribe(
          (response) => {
            this.ficheAnimal_in_progress = response;
          }
        );
      } else {
        this.mode_access = 'AJOUT';
        console.log('Good');
      }
    });
  }

  public updateFicheAnimal(ficheAnimal: FicheAnimal): void {
    this.ficheAnimalService.updateFicheAnimal(this.ficheAnimal_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/compteAdherent');
      }
    );
  }

  public addFicheAnimal(ficheAnimal: FicheAnimal): void {

    this.adherentService.getAdherentById(ficheAnimal.adherent.idAd).subscribe(
      (response) => {
        ficheAnimal.adherent = response;
        this.ficheAnimalService.createFicheAnimal(ficheAnimal).subscribe(
          (data) => {
            this.router.navigateByUrl('/compteAdherent');
          }
        );
      }
    )

  }

  public addUpdateFicheAnimalClicked(): void {
    if (this.mode_access === 'MODIFICATION') {
      this.updateFicheAnimal(this.ficheAnimal_in_progress);
    } else {
      this.addFicheAnimal(this.ficheAnimal_in_progress);
    }
  }

}
