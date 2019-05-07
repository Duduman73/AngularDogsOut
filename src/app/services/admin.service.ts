import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from '../model/admin';
import { Observable } from 'rxjs';
import { Evenement } from '../model/evenement';

const ADMIN_SERVER = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public getAllAdmin(): Observable<any> {
    return this.http.get<Admin>(ADMIN_SERVER + '/admin/all');
  }

  public deleteAdmin(admin: Admin): Observable<any> {
    return this.http.delete<Admin>(ADMIN_SERVER + '/admin/' + admin.numAdmin);
  }

  public getAdminById(numAdmin: number): Observable<any> {
    return this.http.get<Admin>(ADMIN_SERVER + '/admin/' + numAdmin);
  }

  public createAdmin(admin: Admin): Observable<any> {
    return this.http.post<Admin>(ADMIN_SERVER + '/admin/ajoutAnim',
    JSON.stringify(admin), this.httpOptions);
  }

  public updateAdmin(admin: Admin): Observable<any> {
    return this.http.put<Admin>(ADMIN_SERVER + '/admin/' + admin.numAdmin,
    JSON.stringify(admin), this.httpOptions);
  }

}
