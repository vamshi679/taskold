import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { MatSnackBar ,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  horizontal:MatSnackBarHorizontalPosition="left";//strat,center,left,end,right,(MatSnackBarHorizontalPosition is a type)
  vertical:MatSnackBarVerticalPosition="bottom"//top,bottom,(MatSnackBarVerticalPosition is a type)

  constructor(private ds: DataService,
    private router: Router,
    private _snackBar: MatSnackBar) { }



  ngOnInit() {
  }

  openSnackBar() {
    this._snackBar.open("snackbar without time-out and action")
  }
  openSnackBar1() {
    this._snackBar.open("snack-bar with time-out and action", 'Dissmiss', {
      duration: 3000
    })
  }
  openSnackBar2() {
    this._snackBar.open("you just like this post", 'Dissmiss', {
      duration: 3000,
      horizontalPosition:this.horizontal,
      verticalPosition:this.vertical

    })
  }
  openSnackBar3() {
    this._snackBar.open("you just like this post", 'Dissmiss', {
      duration: 3000,
    })
  }


  checkUserStatus() {

    if (this.ds.userLoginStatus == false) {
      alert('Oops...! you are not loggedin please login to see private information')
      this.router.navigate(['/login'])
    }
    else {
      this.router.navigate(['/resource'])
    }
  }

}

