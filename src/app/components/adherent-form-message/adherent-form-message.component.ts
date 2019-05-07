import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adherent-form-message',
  templateUrl: './adherent-form-message.component.html',
  styleUrls: ['./adherent-form-message.component.css']
})
export class AdherentFormMessageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  validationMessagePressed(): void {
    this.router.navigateByUrl('/fichesAnimal');
  }

}
