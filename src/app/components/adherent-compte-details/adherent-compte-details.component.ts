import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AdherentService } from '../../services/adherent.service';
import { Adherent } from '../../model/adherent';
import { Location } from '@angular/common';


@Component({
  selector: 'app-adherent-compte-details',
  templateUrl: './adherent-compte-details.component.html',
  styleUrls: ['./adherent-compte-details.component.css']
})
export class AdherentCompteDetailsComponent implements OnInit {

  adherent: Adherent;

  constructor(private route: ActivatedRoute, private adherentService: AdherentService, private location: Location,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) =>  {
      this.getAdherentById(parseInt(params.get('idAd'), 10));
    });
  }

  public getAdherentById(idAd: number): void {
    this.adherentService.getAdherentById(idAd).subscribe((response) => {
      this.adherent = response;
      console.log(this.adherent);
    });
  }

  goBackButtonPressed(): void {
    this.location.back();
  }

  public deleteButtonPressed(): void {
    this.adherentService.deleteAdherent(this.adherent).subscribe((response) => {
      this.router.navigateByUrl('/accueil');
    });
  }

  public editButtonPressed(): void {
    this.router.navigateByUrl('/compteAdherentEdit/' + this.adherent.idAd);
  }

}
