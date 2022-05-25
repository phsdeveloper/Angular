import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {
  public title: string = "Bem vindo!";

  @Input() public ngOnInitTeste: string = "";
  constructor() { }

  ngOnInit(): void {
    this.title += " Evento ngOnChanges executado em: " + this.ObterDataHora();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInitTeste+= ` | Alterado em: ` + this.ObterDataHora();
  }


  private ObterDataHora() {
    let DataHoraRetorno: string = "";
    let data = new Date();
    DataHoraRetorno = data.getDate().toString() + `/` + data.getMonth().toString() + `/` + data.getFullYear().toString();
    DataHoraRetorno += ` ` + data.getHours().toString() + `:` + data.getMinutes().toString() + `:` + data.getSeconds().toString();

    return DataHoraRetorno;
  }


}
