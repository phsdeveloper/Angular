import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit
{


  constructor() { }

  ngOnInit(): void {
  }
  public onClick(){
    console.log("Recebi um click");
  }


}
