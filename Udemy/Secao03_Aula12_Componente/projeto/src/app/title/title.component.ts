import { publishFacade } from '@angular/compiler';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})


export class TitleComponent implements OnInit,OnChanges,OnDestroy {
  public title:string = "Bem vindo ao componente Title"
  public ComponentName:string = "Title ";
  @Input() ValorOnChanges: string = "Valor Incial OnChanges";
  constructor(){


  }
  ngOnDestroy(): void {
    alert('componente ' + this.ComponentName + ' destruido com sucesso.');
  }
  
    ngOnInit():void{

     }

      ngOnChanges(changes: SimpleChanges): void {
        console.log("Valor alterado  no componente " + this.ComponentName + this.FUN_ObterDataAtual());
      }
    
      FUN_ObterDataAtual(){
        let DataAtual:Date = new Date;
        let DataTela:String = DataAtual.getDate() + "/" + (DataAtual.getMonth() +1) + "/" + DataAtual.getFullYear() + " " + DataAtual.getHours() +":"+DataAtual.getMinutes()+ ":"+DataAtual.getSeconds();
        
        return DataTela;
      }
}
