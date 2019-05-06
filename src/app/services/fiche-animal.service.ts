import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FicheAnimal } from '../model/ficheAnimal';
import { Observable } from 'rxjs';
const FICHEANIMAL_SERVER = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class FicheAnimalService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public getAllFicheAnimal(): Observable<any> {
    return this.http.get<FicheAnimal>(FICHEANIMAL_SERVER + '/ficheAnimal/all');
  }

  public deleteFicheAnimal(ficheAnimal: FicheAnimal): Observable<any> {
    return this.http.delete<FicheAnimal>(FICHEANIMAL_SERVER + '/ficheAnimal/' + ficheAnimal.idAnim);
  }

  public getFicheAnimalById(idAnim: number): Observable<any> {
    return this.http.get<FicheAnimal>(FICHEANIMAL_SERVER + '/ficheAnimal/' + idAnim);
  }

  public createFicheAnimal(ficheAnimal: FicheAnimal): Observable<any> {
    return this.http.post<FicheAnimal>(FICHEANIMAL_SERVER + '/ficheAnimal/ajoutAnim',
    JSON.stringify(ficheAnimal), this.httpOptions);
  }

  public updateFicheAnimal(ficheAnimal: FicheAnimal): Observable<any> {
    return this.http.put<FicheAnimal>(FICHEANIMAL_SERVER + '/ficheAnimal/' + ficheAnimal.idAnim,
    JSON.stringify(ficheAnimal), this.httpOptions);
  }

  public findByAdherent(adherent: number): Observable<any> {
    return this.http.get<FicheAnimal>(FICHEANIMAL_SERVER + '/ficheAnimal/all/' + adherent);
  }

}
