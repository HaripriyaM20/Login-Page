import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  authenticate(username: string | undefined, email: string | undefined ) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { }

  login(username: string, email: string) {
    return this.http.post<any>('https://localhost:44332/api/Users', { username, email });
  }
}
