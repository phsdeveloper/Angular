import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpntador', //ID do componente, esse valor serve para identificar o componente
  templateUrl: './cpntador.component.html', // Caminho para o html desse componente para ser reinderizado na tela
  styleUrls: ['./cpntador.component.css'] // Caminho para o css do componente.
})
export class CpntadorComponent implements OnInit {
public numero = 1; //Adicionado uma propriedade publica que será utilizada para popular a tela.
  constructor() { }

  ngOnInit(): void {
  }

  public incrementar()
  {
    this.numero++;
  }
}
