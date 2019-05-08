import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public connexionAdherentButtonPressed(): void {
    this.router.navigateByUrl('/compteAdherent');
  }

  public connexionAdminButtonPressed(): void {
    this.router.navigateByUrl('/adminCompte');
  }

  addNewCompteAdherentPressed(): void {
    this.router.navigateByUrl('/compteAdherentEdit');
  }
}
