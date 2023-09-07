import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public ComponentName: string = "data-binding";
  public title: string = "Bem vindo ao componente: " + this.ComponentName;
  // #region Aula 22
  public nome: string = "Paulo Santos";
  public imgSRC: string = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
  public imgTitle: string = "Title via property Binding";
  public idade: number = 30;
  // #endregion Aula 22


  public checkedDisabled: boolean = true;

  constructor() {

  }
  ngOnInit(): void {

  }

  // #region Aula 23
  public mensagemAlertTexto: string = "";
  public mensagemAlertVisvel: boolean = false;

  public position: { x: number, y: number, message: string } = { x: 0, y: 0, message: '' };

  public FUN_alertaInfo(valor: MouseEvent): void {
    
    this.mensagemAlertTexto = `Botão acionado em: ` + this.FUN_ObterDataAtual() + ' para mais informações veja o console';
    console.log(valor);
    this.mensagemAlertVisvel = true;
  }

  public FUN_MouseMovePosition(valor: MouseEvent): void {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
    this.position.message = 'Valor alterado em: ' + this.FUN_ObterDataAtual();
  }
  // #endregion Aula 23


   // #region Aula 24

   public nomeAula24:string = "";


   // #endregion Aula 24

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
