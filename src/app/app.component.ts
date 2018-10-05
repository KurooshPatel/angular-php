import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  isLoggedIn='';

  ngOnInit(){
    this.isLoggedIn=localStorage.getItem('isLoggedIn');
    console.log(this.isLoggedIn,"app");
  }
}
