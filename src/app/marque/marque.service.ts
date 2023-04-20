import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marque } from './marque';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {
    
  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get<Marque[]>('http://localhost:8080/marque');
  }
  create(payload: Marque) {
    return this.http.post<Marque>('http://localhost:8080/marque', payload);
  }
  getById(id: number) {
    return this.http.get<Marque>(`http://localhost:8080/marque/${id}`);
  }  
  update(payload: Marque){
    return this.http.put(`http://localhost:8080/marque`, payload);
}
delete(id:number){
  return this.http.delete<Marque>(`http://localhost:8080/marque/${id}`);
}

}