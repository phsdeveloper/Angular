import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivasatributos',
  templateUrl: './diretivasatributos.component.html',
  styleUrls: ['./diretivasatributos.component.scss']
})
export class DiretivasatributosComponent implements OnInit {

  public ComponentName: string = "Diretivas Atributos";
  public title: string = "Bem-vindo ao componente: " + this.ComponentName;

  ngOnInit(): void {
      setInterval(()=>this.FUN_Aula29_AlterarValor(),2000);
  }
  public aula29_ValorNgClass: boolean = true;
  private FUN_Aula29_AlterarValor(): void {
    this.aula29_ValorNgClass = !this.aula29_ValorNgClass; 
  }

  //---------------------------------------------------------------------------------------------------------
  public aula30_heigth:string = '25px';
  public aula30_backgroudColor:string = '#d4edda';
  public aula30_TextoBoao:string = "Alterar para 50px"
  public FUN_aula30_AlterarAltura():void
  {
    this.aula30_TextoBoao = 'Alterar para ' + (this.aula30_heigth == '25px'?'25px':'50px');
    this.aula30_heigth = this.aula30_heigth == '25px'?'50px':'25px';
    this.aula30_backgroudColor = this.aula30_heigth == '25px'?'#d4edda':'#f8d7da';
  }

  //---------------------------------------------------------------------------------------------------------



}
