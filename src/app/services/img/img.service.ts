import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LsService } from '../ls/ls.service';
import { catchError, switchMap } from 'rxjs/operators';
import { FullSizePicture, PictureResponse } from '../../app.model';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor(
    private http: HttpClient,
    private ls: LsService,
  ) { }

  getImgs(page: number = 1): Observable<PictureResponse> {
    return this.ls.getToken().pipe(
      switchMap(token =>
        this.http.get<PictureResponse>(`http://interview.agileengine.com/images?page=${page}`, {
          headers: new HttpHeaders({Authorization: `Bearer ${token}`})
        })
      ),
      catchError(err => {
        alert('Something went wrong, pls try again or reload page');
        localStorage.clear();
        return of(null);
      })
    );
  }

  getFullSizeImg(id: string): Observable<FullSizePicture>{
    return this.ls.getToken().pipe(
      switchMap(token =>
        this.http.get<FullSizePicture>(`http://interview.agileengine.com/images/${id}`, {
          headers: new HttpHeaders({Authorization: `Bearer ${token}`})
        }),
      ),
      catchError(err => {
        alert('Something went wrong, pls try again or reload page');
        localStorage.clear();
        return of(null);
      })
    );
  }
}
