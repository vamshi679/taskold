import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DataService } from '../data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  faketoken: string = 'xx.yy.zz'

  constructor(private ds: DataService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.ds.logout();
    }, 0);
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.min(8)])

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(8)])
  })

  // "email": "eve.holt@reqres.in",
  //   "password": "cityslicka"

  loginDetails(x) {
    // this.ds.userlogin(x).subscribe(Resp => {
    //   if (x!==null) {
    //     this.showToasterSuccess();
    //     // this.ds.userLoginStatus = true;
    //     localStorage.setItem('token', (Resp['token']))
    //     this.router.navigate(['/resource'])
    //   }
    //   else{
    //     alert('please enter valid credentials')
    //   }
    // })
    localStorage.setItem('token', (this.faketoken))
    this.showToasterSuccess();
    this.router.navigate(['/resource'])
  }

  showToasterSuccess() {
    this.ds.showSuccess("Login successful !!", "ItSolutionStuff.com")
  }


}
