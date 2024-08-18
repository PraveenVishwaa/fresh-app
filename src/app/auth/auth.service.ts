import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment';

const LOGIN = 'auth/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(obj:Object): Observable<any> {
    return this.http.post(environment.apiUrl+LOGIN, obj )
  }
}
