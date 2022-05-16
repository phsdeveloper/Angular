import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpntador', //ID do componente, esse valor serve para identificar o componente
  templateUrl: './cpntador.component.html', // Caminho para o html desse componente para ser reinderizado na tela
  styleUrls: ['./cpntador.component.css'] // Caminho para o css do componente.
})
export class CpntadorComponent implements OnInit {
  public numero = 1; //Adicionado uma propriedade publica que será utilizada para popular a tela.
  public mensagem = "";
  constructor() { }

  ngOnInit(): void {
  }

  public incrementar() {
    this.numero++;
    this.mensagem = "";
  }

  public decrementar() {
    if (this.numero > 0) {
      this.numero--;
      this.mensagem = "";
    }
    else {
      this.mensagem = "Não é possível ficar com o número menor que zero";
    }
  }
}
