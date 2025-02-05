import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// => CRUD | GET/POST/PUT/DELETE *--*

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categorias`);
  }

  getTransacoes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/transacoes`);
  }

  getTransacao(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/transacoes/${id}`);
  }

  createTransacao(transacao: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/transacoes`, transacao);
  }

  updateTransacao(id: number, transacao: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/transacoes/${id}`, transacao);
  }

  deleteTransacao(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/transacoes/${id}`);
  }
}
