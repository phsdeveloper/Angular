import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-ng-switch',
  templateUrl: './component-ng-switch.component.html',
  styleUrls: ['./component-ng-switch.component.css']
})
export class ComponentNgSwitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public produto = {
    tipo: 'filme',
    titulo: 'Psicopata Americano',
    ano: '2000'
  };

  public setProduto(produto) {
    this.produto = produto;
  }
}
