import { Component, OnInit } from '@angular/core';
import { AuthService } from './../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
   this.authService.login(this.model)
   .subscribe(next => {
     this.alertify.success('Successfully logged in');
   }, error => {
    this.alertify.error('Login Failed ..');
   });


  }

  loggedIn()
  {
   return this.authService.loggedIn();
  }

  logout()
  {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
