import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  snackbar: boolean;
  text: string = '';

  constructor() { }

  openSnack(x) {
    this.snackbar = !this.snackbar;
    this.text = x;
    setTimeout(() => {
      this.text = '';
      this.snackbar = false;
    }, 3000);
  }
}
