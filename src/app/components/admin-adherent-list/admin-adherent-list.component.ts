import { Component, OnInit } from '@angular/core';
import { Adherent } from '../../model/adherent';
import { Router } from '@angular/router';
import { AdherentService } from '../../services/adherent.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-adherent-list',
  templateUrl: './admin-adherent-list.component.html',
  styleUrls: ['./admin-adherent-list.component.css']
})
export class AdminAdherentListComponent implements OnInit {

  adherents: Adherent[];

  constructor(private adherentService: AdherentService, private router: Router, private location: Location) {
    this.getAllAdherent();
  }

  ngOnInit() {
  }

  userClickedOnAdherent(adherent_idAd): void {
    this.router.navigateByUrl('/adminAdherents/' + adherent_idAd);
  }

  public getAllAdherent(): void {
    this.adherentService.getAllAdherent().subscribe((response) => {
      //console.log(response['_body'] );
      this.adherents = response;
      //console.log(this.adherents);
    });
  }

  goBackButtonPressed(): void {
    this.location.back();
  }
}
