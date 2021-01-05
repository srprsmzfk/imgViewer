import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private http: HttpClient,
  ) { }

  fetchToken(): Observable<any> {
    return this.http.post('http://interview.agileengine.com/auth', {apiKey: '23567b218376f79d9415'})
      .pipe(
        map((v: any) => v.token)
      );
  }
}
