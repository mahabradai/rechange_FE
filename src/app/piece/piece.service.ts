import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Piece } from './piece';

@Injectable({
  providedIn: 'root'
})
export class PieceService {
  constructor (private http: HttpClient) {}
  get() {
    return this.http.get<Piece[]>('http://localhost:8080/piece');
  }
  create(payload: Piece) {
    return this.http.post<Piece>('http://localhost:8080/piece', payload);
  }
  getById(id: number) {
    return this.http.get<Piece>(`http://localhost:8080/piece/${id}`);
   }
   update(payload:Piece){
    return this.http.put(`http://localhost:8080/piece`,payload);
   }
   delete(id:number){
    return this.http.delete<Piece>(`http://localhost:8080/piece/${id}`);
 }

}
