import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://api.escuelajs.co/api/v1/auth/login'; 
  private userUrl = 'https://api.escuelajs.co/api/v1/auth/profile';  
  constructor(private http: HttpClient) {}

  // Realiza el login del usuario y guarda el token
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

  
  isAuthenticated(): boolean {
    return !!localStorage.getItem('access_token'); 
  }

  
  getUserDetails(): Observable<any> {
    const token = localStorage.getItem('access_token');
    if (!token) {
      return of(null);  
    }

    
    return this.http.get<any>(this.userUrl, {
      headers: { 'Authorization': `Bearer ${token}` }
    }).pipe(
      catchError(error => {
        console.error('Error al obtener los detalles del usuario:', error);
        return of(null);  
      })
    );
  }

 
}
