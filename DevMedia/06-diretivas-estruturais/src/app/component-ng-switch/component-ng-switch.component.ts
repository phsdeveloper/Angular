import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-ng-switch',
  templateUrl: './component-ng-switch.component.html',
  styleUrls: ['./component-ng-switch.component.css']
})
export class ComponentNgSwitchComponent implements OnInit 
{

  constructor() { }

  ngOnInit(): void {
  }

  produtoTipo: string = "filme";
  
 public produto = 
 {
   tipo: 'filme',
   titulo: 'Psicopata Americano',
   ano: '2000'
 };


  //public produto = 
  //{
  //  tipo: 'revista',
  //  titulo: 'revista - titulo',
  //  ano: '2000 (ano Revista)'
  //};

  //public produto = 
  //{
  //  tipo: 'livro',
  //  titulo: 'livro - titulo',
  //  ano: '2000 (ano livro)'
  //};
  
  public setProduto(produto) {
    this.produto = produto;
  }
}
