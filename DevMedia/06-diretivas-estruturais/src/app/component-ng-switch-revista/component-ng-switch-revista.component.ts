import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-ng-switch-revista',
  templateUrl: './component-ng-switch-revista.component.html',
  styleUrls: ['./component-ng-switch-revista.component.css']
})
export class ComponentNgSwitchRevistaComponent implements OnInit 
{
  @Input() Titulo:string;
  @Input() ano:string;
  @Input() Obj_Completo;
  constructor() { }

  ngOnInit(): void {
  }

}
