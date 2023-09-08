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
}
