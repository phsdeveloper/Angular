import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-ng-switch-livro',
  templateUrl: './component-ng-switch-livro.component.html',
  styleUrls: ['./component-ng-switch-livro.component.css']
})
export class ComponentNgSwitchLivroComponent implements OnInit 
{
  @Input() Titulo:string;
  @Input() ano:string;
  @Input() Obj_Completo;
  constructor() { }

  ngOnInit(): void {
  }

}
