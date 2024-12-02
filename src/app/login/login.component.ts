import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  


  username: string = '';
  password: string = '';
  showErrorMessage: boolean = false;
  showPassword: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['/inicio']); 
      } else {
        this.showErrorMessage = true; 
      }
    });
  }

  closeErrorMessage(): void {
    this.showErrorMessage = false; 
  }

 
}