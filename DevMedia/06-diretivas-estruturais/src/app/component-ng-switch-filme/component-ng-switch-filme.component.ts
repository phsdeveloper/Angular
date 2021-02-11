import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-ng-switch-filme',
  templateUrl: './component-ng-switch-filme.component.html',
  styleUrls: ['./component-ng-switch-filme.component.css']
})
export class ComponentNgSwitchFilmeComponent implements OnInit 
{
  @Input() Titulo:string;
  @Input() ano:string;
  @Input() Obj_Completo;
  constructor() { }

  ngOnInit(): void {
  }

}
