import { Component, OnInit } from '@angular/core';
import {Router, router, RouterModule} from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
    localStorage.setItem('isLoggedIn',false);
    this.router.navigate(['login']);
  }

}
