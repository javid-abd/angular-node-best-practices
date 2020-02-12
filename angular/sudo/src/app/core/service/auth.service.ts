import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from 'src/app/shared/models/new-user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public signup(user: NewUser): Observable<any> {
    return this.http.post(`${environment.apiURL}/users`, {...user});
  }
}
