import { Component, OnInit } from '@angular/core';
import { Adherent } from '../../model/adherent';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AdherentService } from '../../services/adherent.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-adherent-details',
  templateUrl: './admin-adherent-details.component.html',
  styleUrls: ['./admin-adherent-details.component.css']
})
export class AdminAdherentDetailsComponent implements OnInit {

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
      this.router.navigateByUrl('/adminAdherents');
    });
  }

}

