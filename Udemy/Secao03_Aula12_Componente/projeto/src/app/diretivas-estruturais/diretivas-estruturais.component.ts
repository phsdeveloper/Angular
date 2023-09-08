import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public ComponentName: string = "Diretivas estruturais";
  public title: string = "Bem-vindo ao componente: " + this.ComponentName;




  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.FUN_Aula26_Ezemplo01(), 2000);
  }
  //-----------------------------------------------------------------------------
  public Condition_Aula26: boolean = false;
  private totalAparicoes_Aula26: number = 1;
  public mensagem_Aula26: string = "";
  public _aula26_btnText: string = "Atualizar para False";
  public _aula26_ConditionClick: boolean = true;
  private FUN_Aula26_Ezemplo01(): void {
    this.Condition_Aula26 = (!this.Condition_Aula26);
    if (this.Condition_Aula26) {
      this.mensagem_Aula26 = this.totalAparicoes_Aula26++ + "ª aparição em: " + this.FUN_ObterDataAtual();
    }
  }

  public FUN_Aula26_Onclick(): void {
    this._aula26_ConditionClick = !this._aula26_ConditionClick;
    this._aula26_btnText = this._aula26_ConditionClick ? "Atualizar para False" : "Atualizar para True";
  }
  //-----------------------------------------------------------------------------

  public aula27_ListaObjetos: Array<{ nome: string, idade: number, AdicionadoEm: String }> = [{ nome: "Paulo Santos", idade: 30, AdicionadoEm: this.FUN_ObterDataAtual() }, { nome: "Samuel Santos", idade: 7, AdicionadoEm: this.FUN_ObterDataAtual() }];

  public FUN_aula27_onClickAddList(): void {
    this.aula27_ListaObjetos.push({ nome: "Monique", idade: 39, AdicionadoEm: this.FUN_ObterDataAtual() });
  }

  public Fun_aula27_onClickEventList(event: number) {

    this.aula27_ListaObjetos.splice(event, 1);

  }




  private FUN_ObterDataAtual() {
    let DataAtual: Date = new Date;
    let DataTela: String = DataAtual.getDate().toString().padStart(2, '0')
      + "/" + (DataAtual.getMonth() + 1).toString().padStart(2, '0')
      + "/" + DataAtual.getFullYear()
      + " " + DataAtual.getHours().toString().padStart(2, '0')
      + ":" + DataAtual.getMinutes().toString().padStart(2, '0')
      + ":" + DataAtual.getSeconds().toString().padStart(2, '0')
      + "." + DataAtual.getMilliseconds().toString().substring(0, 3);

    return DataTela;
  }

}
