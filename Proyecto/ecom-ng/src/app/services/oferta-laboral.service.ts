import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertaLaboralService {
  
  
  endPoint = 'https://protectolaravel.herokuapp.com/api/oferta';

  constructor(private http: HttpClient) {
  }
  public getList(): Observable<any> {
    return this.http.get<any>(`${this.endPoint}`);
  }
  public getById(oferta_id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${oferta_id}`);
  }
  public add(data): Observable<any> {
    return this.http.post<any>(`${this.endPoint}`, data);
  }
  public update(oferta_id, data): Observable<any> {
    return this.http.put<any>(`${this.endPoint}/${oferta_id}`, data);
  }
  public delete(oferta_id): Observable<any> {
    console.log(`${this.endPoint}/${oferta_id}` );
    return this.http.delete<any>(`${this.endPoint}/${oferta_id}`);
  }

}