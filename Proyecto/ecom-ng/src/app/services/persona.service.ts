import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  endPoint = 'http://localhost:8000/api/persona';

  constructor(private http: HttpClient) {
  }
  public getList(): Observable<any> {
    return this.http.get<any>(`${this.endPoint}`);
  }
  public getById(persona_id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${persona_id}`);
  }
  public add(data): Observable<any> {
    return this.http.post<any>(`${this.endPoint}`, data);
  }
  public update(persona_id, data): Observable<any> {
    return this.http.put<any>(`${this.endPoint}/${persona_id}`, data);
  }
  public delete(persona_id): Observable<any> {
    console.log(`${this.endPoint}/${persona_id}` );
    return this.http.delete<any>(`${this.endPoint}/${persona_id}`);
  }
}
