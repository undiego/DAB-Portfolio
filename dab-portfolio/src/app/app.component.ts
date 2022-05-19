import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*
export class AppComponent {
  title = 'dab-portfolio';
}*/

export class AppComponent implements OnInit {
  title = 'portfolio-dab';
  isUserLogged: boolean = false;

  constructor(private authService: AuthService) {}
  
  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();  
  }
} 