import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // @Input('mobile') mobile;
  // @Input('age') myAge;
  @Input('fullName') fullName;
  date;
  constructor() {
     this.date = new Date();
  }

  ngOnInit() {
    console.warn(this.fullName);
    // console.log("my array comming from parent",this.mobile);
    // console.log("name",this.myAge);
  }

  getMobilesAsperSearchKeyword(){
    // mobile
    // return mobile;
  }

}