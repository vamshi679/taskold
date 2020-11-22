import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  userStatus: boolean;

  opened:boolean=false;

  // opensidenav(){
  //   this.opened=true;
  // }

  constructor(public ds: DataService) {
  }

  ngOnInit() { }

  showToasterSuccess() {
    this.ds.showSuccess("Data shown successfully !!", "ItSolutionStuff.com")
  }

  showToasterError() {
    this.ds.showError("Something is wrong", "ItSolutionStuff.com")
  }

  showToasterInfo() {
    this.ds.showInfo("This is info", "ItSolutionStuff.com")
  }

  showToasterWarning() {
    this.ds.showWarning("This is warning", "ItSolutionStuff.com")
  }


}
