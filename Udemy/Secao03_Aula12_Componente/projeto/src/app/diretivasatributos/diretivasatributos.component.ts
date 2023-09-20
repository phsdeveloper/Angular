import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivasatributos',
  templateUrl: './diretivasatributos.component.html',
  styleUrls: ['./diretivasatributos.component.scss']
})
export class DiretivasatributosComponent implements OnInit {

  public ComponentName: string = "Diretivas Atributos";
  public title: string = "Bem-vindo ao componente: " + this.ComponentName;

  constructor() {

  }

  ngOnInit(): void {
    setInterval(() => this.FUN_Aula29_AlterarValor(), 2000);
  }
  public aula29_ValorNgClass: boolean = true;
  private FUN_Aula29_AlterarValor(): void {
    this.aula29_ValorNgClass = !this.aula29_ValorNgClass;
  }

  //---------------------------------------------------------------------------------------------------------
  public aula30_heigth: string = '25px';
  public aula30_backgroudColor: string = '#d4edda';
  public aula30_TextoBoao: string = "Alterar para 50px"
  public FUN_aula30_AlterarAltura(): void {
    this.aula30_TextoBoao = 'Alterar para ' + (this.aula30_heigth == '25px' ? '25px' : '50px');
    this.aula30_heigth = this.aula30_heigth == '25px' ? '50px' : '25px';
    this.aula30_backgroudColor = this.aula30_heigth == '25px' ? '#d4edda' : '#f8d7da';
  }

  //---------------------------------------------------------------------------------------------------------

  public aula31_Nome: string = "";
  public aula31_ListaNomes: Array<{ nome: string,AdicionadoEm:string }> = [];
  public FUN_aula31_Adicionar(): void {
    this.aula31_ListaNomes.push({nome:this.aula31_Nome, AdicionadoEm:this.FUN_ObterDataAtual()});
    this.aula31_Nome="";
  }

  public FUN_aula31_Excluir(index:number):void{
    this.aula31_ListaNomes.splice(index,1);
  }

//---------------------------------------------------------------------------------------------------------

public aula32_Nome: string = "";
public aula32_ListaNomes: Array<{ nome: string,AdicionadoEm:string }> = [];
public FUN_aula32_Adicionar(): void {
  this.aula32_ListaNomes.push({nome:this.aula32_Nome, AdicionadoEm:this.FUN_ObterDataAtual()});
  this.aula32_Nome="";
}

public FUN_aula32_Excluir(index:number):void{
  this.aula32_ListaNomes.splice(index,1);
}
public FUN_aula32_ComponenteVisivel():boolean {
  return this.aula32_ListaNomes.length > 0;
}
//---------------------------------------------------------------------------------------------------------

public aula34_Data:Date = new Date;


//---------------------------------------------------------------------------------------------------------
  private FUN_ObterDataAtual() {
    let DataAtual: Date = new Date;
    let DataTela: string = DataAtual.getDate().toString().padStart(2, '0')
      + "/" + (DataAtual.getMonth() + 1).toString().padStart(2, '0')
      + "/" + DataAtual.getFullYear()
      + " " + DataAtual.getHours().toString().padStart(2, '0')
      + ":" + DataAtual.getMinutes().toString().padStart(2, '0')
      + ":" + DataAtual.getSeconds().toString().padStart(2, '0')
      + "." + DataAtual.getMilliseconds().toString().substring(0, 3);

    return DataTela;
  }
}
