import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userLoginStatus: boolean = false;

  constructor(private hc: HttpClient, private toastr: ToastrService) { }

  send() {
    return this.userLoginStatus
  }

  userlogin(x): Observable<any> {
    return this.hc.post('https://reqres.in/api/login', x)
  }

  logout() {
    localStorage.removeItem('token')
    this.userLoginStatus = false;
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }



  showSuccess(message, title) {
    this.toastr.success(message, title)
  }

  showError(message, title) {
    this.toastr.error(message, title)
  }

  showInfo(message, title) {
    this.toastr.info(message, title)
  }

  showWarning(message, title) {
    this.toastr.warning(message, title)
  }

}
