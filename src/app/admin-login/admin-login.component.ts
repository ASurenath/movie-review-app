import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email: string = ""
  password: string = ""
  constructor( private api: ApiService, private router: Router) { }
  login() {
    if (this.email && this.password) {
      this.api.getAdminDetails().subscribe({
        next: (res: any) => {
          console.log(res);
          const { email, password } = res
          if (email == this.email && password == this.password) {
            alert("Login Successful")
            sessionStorage.setItem("adminDetails", JSON.stringify(res.email))
            this.router.navigateByUrl('/admin')
            this.api.updateLoginStatus()
          }
          else {
            alert("Invalid email/password")
          }
        },
        error: (reason: any) => {
          alert(reason.message)
        }
      })
    }
    else {
      alert('Please fill the form completely')
    }
  }
}
 