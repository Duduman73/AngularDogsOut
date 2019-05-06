import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adherent } from '../model/adherent';

const ADHERENT_SERVER = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AdherentService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public getAllAdherent(): Observable<any> {
    return this.http.get<Adherent>(ADHERENT_SERVER + '/adherent/all');
  }

  public deleteAdherent(adherent: Adherent): Observable<any> {
    return this.http.delete<Adherent>(ADHERENT_SERVER + '/adherent/' + adherent.idAd);
  }

  public getAdherentById(idAd: number): Observable<any> {
    return this.http.get<Adherent>(ADHERENT_SERVER + '/adherent/' + idAd);
  }

  public createAdherent(adherent: Adherent): Observable<any> {
    return this.http.post<Adherent>(ADHERENT_SERVER + '/adherent/ajoutAdherent',
    JSON.stringify(adherent), this.httpOptions);
  }

  public updateAdherent(adherent: Adherent): Observable<any> {
    return this.http.put<Adherent>(ADHERENT_SERVER + '/adherent/' + adherent.idAd,
    JSON.stringify(adherent), this.httpOptions);
  }
}
