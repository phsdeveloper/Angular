import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caixa-de-texto',
  templateUrl: './caixa-de-texto.component.html',
  styleUrls: ['./caixa-de-texto.component.css']
})
export class CaixaDeTextoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public MetodoTeste(event) {
    console.log(event.target.value.length);
  }
}
