import { Component } from '@angular/core';
import {User} from '../models/user.model';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  currentUser!: User;


  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    
    this.authService.getUserDetails().subscribe(user => {
      this.currentUser = user;  
    });
  }
}
