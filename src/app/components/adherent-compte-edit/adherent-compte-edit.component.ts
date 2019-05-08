import { Component, OnInit } from '@angular/core';
import { Adherent } from '../../model/adherent';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { AdherentService } from '../../services/adherent.service';

@Component({
  selector: 'app-adherent-compte-edit',
  templateUrl: './adherent-compte-edit.component.html',
  styleUrls: ['./adherent-compte-edit.component.css']
})
export class AdherentCompteEditComponent implements OnInit {

  adherent_in_progress: Adherent;
  mode_access: string;

  constructor(private router: Router, private adherentService: AdherentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('idAd') != null) {
        console.log(params.get('idAd'));
        this.mode_access = 'MODIFICATION';
        this.adherentService.getAdherentById(parseInt(params.get('idAd'), 10)).subscribe(
          (response) => {
            this.adherent_in_progress = response;
          }
        );
      } else {
        this.mode_access = 'AJOUT';
        console.log('Good');
      }
    });
  }

  public updateAdherent(adherent: Adherent): void {
    this.adherentService.updateAdherent(this.adherent_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/compteAdherent');
      }
    );
  }

  public addAdherent(adherent: Adherent): void {

        this.adherentService.createAdherent(adherent).subscribe(
          (data) => {
            this.router.navigateByUrl('/accueil');
          }
        );
      }

  public addUpdateAdherentClicked(): void {
      if (this.mode_access === 'MODIFICATION') {
          this.updateAdherent(this.adherent_in_progress);
        } else {
          this.addAdherent(this.adherent_in_progress);
        }
      }


}
