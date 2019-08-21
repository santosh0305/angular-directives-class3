import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  age = 30;
  mobile = ['samsung','iphone','oneplus'];
  fullName = {'firstname':'santosh','lastname':'NANDURI'};
  constructor() { }

  ngOnInit() {
   
  }

}