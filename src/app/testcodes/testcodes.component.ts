import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcodes',
  templateUrl: './testcodes.component.html',
  styleUrls: ['./testcodes.component.css']
})
export class TestcodesComponent implements OnInit {

  textValue: string = 'this is the text to be available to copy to clipboard';
  test: string = "Hello World!";

  hide: boolean;
  snackbar:boolean;
  text:string='';

  constructor() { }

  ngOnInit(): void {
  }

  testcode(){
    this.hide=!this.hide;
  }

  open(){
    this.snackbar=!this.snackbar;
    this.text="this is text from snackbar...!"
    setTimeout(() => {
      this.text='';
      this.snackbar=false;
    }, 3000);
  }



}
