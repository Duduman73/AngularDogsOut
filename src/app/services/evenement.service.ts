import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evenement } from '../model/evenement';

const EVENEMENT_SERVER = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public getAllEvenement(): Observable<any> {
    return this.http.get<Evenement>(EVENEMENT_SERVER + '/evenement/all');
  }

  public deleteEvenement(evenement: Evenement): Observable<any> {
    return this.http.delete<Evenement>(EVENEMENT_SERVER + '/evenement/' + evenement.idEvent);
  }

  public getEvenementById(idEvent: number): Observable<any> {
    return this.http.get<Evenement>(EVENEMENT_SERVER + '/evenement/' + idEvent);
  }

  public createEvenement(evenement: Evenement): Observable<any> {
    return this.http.post<Evenement>(EVENEMENT_SERVER + '/evenement/ajoutEven',
    JSON.stringify(evenement), this.httpOptions);
  }

  public updateEvenement(evenement: Evenement): Observable<any> {
    return this.http.put<Evenement>(EVENEMENT_SERVER + '/evenement/' + evenement.idEvent,
    JSON.stringify(evenement), this.httpOptions);
  }

  //public findByAdmin(admin: Admin): Observable<any> {
  //  return this.http.post<Admin>(EVENEMENT_SERVER + '/evenement/ajoutEvent',
  //  JSON.stringify(admin), this.httpOptions);
  //}

}
