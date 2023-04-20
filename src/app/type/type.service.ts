import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Type } from './type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
 
  constructor (private http: HttpClient) {}
  get() {
    return this.http.get<Type[]>('http://localhost:8080/type');
  }
  create(payload: Type) {
    return this.http.post<Type>('http://localhost:8080/type', payload);
  }
  getById(id: number) {
    return this.http.get<Type>(`http://localhost:8080/type/${id}`);
   }
   update(payload:Type){
    return this.http.put(`http://localhost:8080/type`, payload);
   }
   delete(id: number) {
    return this.http.delete<Type>(`http://localhost:8080/type/${id}`);
  }

}
