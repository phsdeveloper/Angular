import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-ng-if',
  templateUrl: './component-ng-if.component.html',
  styleUrls: ['./component-ng-if.component.css']
})
export class ComponentNgIfComponent implements OnInit {
public exibirConteudo = false;
  constructor() { }

  ngOnInit(): void {
  }

  public toogleConteudo()
  {
    this.exibirConteudo = !this.exibirConteudo;
  }

}
