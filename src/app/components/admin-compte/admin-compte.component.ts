import { Component, OnInit } from '@angular/core';
import { Admin } from '../../model/admin';
import { AdminService } from '../../services/admin.service';
import { FicheAnimalService } from '../../services/fiche-animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-compte',
  templateUrl: './admin-compte.component.html',
  styleUrls: ['./admin-compte.component.css']
})
export class AdminCompteComponent implements OnInit {

  admin: Admin;
  admins: Admin[];


  constructor(private adherentService: AdminService, private ficheAnimalService: FicheAnimalService, private router: Router) {

    this.getAdminById(1);
  }

  ngOnInit() {
  }

  public getAdminById(numAdmin: 1): void {
    this.adherentService.getAdminById(numAdmin).subscribe((response) => {
      this.admin = response;
      console.log(this.admin);
    });
  }

  evenementManagementPressed(): void {
    this.router.navigateByUrl('/adminEvenements');
  }

  ficheAnimalMangamentPressed(): void {
    this.router.navigateByUrl('/adminFichesAnimal');
  }

  adherentManagementPressed(): void {
    this.router.navigateByUrl('adminAdherents');
  }
}
