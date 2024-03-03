import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(public api:ApiService,private router: Router){}
logout(){
  sessionStorage.clear()
  this.api.updateLoginStatus()
  this.router.navigateByUrl('/')
}
}
