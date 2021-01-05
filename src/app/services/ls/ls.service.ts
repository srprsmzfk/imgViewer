import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TokenService } from '../token/token.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LsService {

  constructor(
    private auth: TokenService,
  ) { }

  getToken(): Observable<string> {
    return localStorage.getItem('token') ?
      of(localStorage.getItem('token')) :
      this.auth.fetchToken().pipe(
        tap(token => localStorage.setItem('token', token))
      );
  }

}
