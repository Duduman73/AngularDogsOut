import { Component, OnInit } from '@angular/core';
import { Evenement } from '../../model/evenement';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { EvenementService } from '../../services/evenement.service';
import { AdminService } from '../../services/admin.service';


@Component({
  selector: 'app-admin-create-event',
  templateUrl: './admin-create-event.component.html',
  styleUrls: ['./admin-create-event.component.css']
})
export class AdminCreateEventComponent implements OnInit {

  evenement_in_progress: Evenement;
  mode_access: string;

  constructor(private route: ActivatedRoute, private evenementService: EvenementService, private router: Router,
              private adminService: AdminService) {
    this.evenement_in_progress = Evenement.createBlank();
    console.log(this.evenement_in_progress);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('evenement_idEvent') != null) {
        console.log(params.get('evenement_idEvent'));
        this.mode_access = 'MODIFICATION';
        this.evenementService.getEvenementById(parseInt(params.get('evenement_idEvent'), 10))
        .subscribe(
          (response) => {
            this.evenement_in_progress = response;
          }
        );
      } else {
        this.mode_access = 'AJOUT';
        console.log('Good');
      }
    });
  }

  public addUpdateEvenementClicked(): void {
    if (this.mode_access === 'MODIFICATION') {
      this.updateEvenement(this.evenement_in_progress);
    } else {
      this.addEvenement(this.evenement_in_progress);
    }
  }

  public updateEvenement(evenement: Evenement): void {
    this.evenementService.updateEvenement(this.evenement_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/adminEvenements');

      }
    );
  }

  public addEvenement(evenement: Evenement): void {
    console.log('Ajout');
    this.adminService.getAdminById(evenement.admin.numAdmin).subscribe(
      (response) => {
        evenement.admin = response;
        console.log('Evenement');
        this.evenementService.createEvenement(evenement).subscribe(
          (data) => {
            this.router.navigateByUrl('adminEvenements');
          }
        );
      }
    );

  }

}
