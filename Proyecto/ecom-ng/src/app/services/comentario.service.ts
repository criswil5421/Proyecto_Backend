import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  endPoint = 'https://protectolaravel.herokuapp.com/api/comentario';

  constructor(private http: HttpClient) {
  }
  public getList(): Observable<any> {
    return this.http.get<any>(`${this.endPoint}`);
  }
  public getById(comentarios_id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${comentarios_id}`);
  }
  public add(data): Observable<any> {
    return this.http.post<any>(`${this.endPoint}`, data);
  }
  public update(comentarios_id, data): Observable<any> {
    return this.http.put<any>(`${this.endPoint}/${comentarios_id}`, data);
  }
  public delete(comentarios_id): Observable<any> {
    console.log(`${this.endPoint}/${comentarios_id}` );
    return this.http.delete<any>(`${this.endPoint}/${comentarios_id}`);
  }
}
