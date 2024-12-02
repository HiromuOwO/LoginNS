import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://api.escuelajs.co/api/v1/auth/login'; 

  constructor(private http: HttpClient) {}

  
  login(email: string, password: string): Observable<boolean> {
    return this.http.post<{ access_token: string }>(this.loginUrl, { email, password })
      .pipe(
        map(response => {
          if (response && response.access_token) {
            
            localStorage.setItem('access_token', response.access_token);
            return true; 
          }
          return false; 
        }),
        catchError(error => {
          console.error('Error durante el inicio de sesión:', error);
          return of(false); 
        })
      );
  }

  

  // Verifica si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!localStorage.getItem('access_token'); 
  }
}
