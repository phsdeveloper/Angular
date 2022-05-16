import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-ng-for',
  templateUrl: './component-ng-for.component.html',
  styleUrls: ['./component-ng-for.component.css']
})
export class ComponentNgForComponent implements OnInit 
{
  public livros = 
  [
    'Como morrem os pobres e outros ensaios',
    'A revolução dos bichos',
    '1988',
    'Paulo testes',
    "Mais um item da lista",
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
