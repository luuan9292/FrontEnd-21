import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  bgColor:string = 'tomato';

  name:string = 'Cybersoft'; //ngNonBinable

  constructor() { }

  ngOnInit() {
  }

}
