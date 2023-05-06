import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class Service extends BehaviorSubject<any> {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getData(dataUrl:string): Observable<any> {
    return this.http.get(dataUrl, this.httpOptions);
  }

  constructor(private http: HttpClient  ) {
    super({ data: [], total: 0 });
  }
}
