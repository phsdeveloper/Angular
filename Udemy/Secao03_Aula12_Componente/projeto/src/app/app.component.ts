import { Component, OnInit } from '@angular/core';  
                                                        
@Component({                                                                                            
  selector: 'app-root',                                                                                                   
  template:'<router-outlet></router-outlet>'                                                       
})                                                        
export class AppComponent implements OnInit{                                                        
  title = 'Projeto Seção 03';  
  public CiclosDeVida:string = "";
  
  
  constructor(){
    console.log("Construtor Chamado " + this.FUN_ObterDataAtual());

    setTimeout(() => {
      console.log("Construtor Chamado Timeout " + this.FUN_ObterDataAtual());
    }, 3000);
  }

  ngOnInit(): void {
    console.log("OnInit iniciado " + this.FUN_ObterDataAtual());
      setTimeout(() => {
        this.CiclosDeVida = "OnInit inicado após timeout";
        console.log("OnInit inicado após timeout " + this.FUN_ObterDataAtual());
      }, 5000);
  }


  FUN_ObterDataAtual(){
    let DataAtual:Date = new Date;
    let DataTela:String = DataAtual.getDate() + "/" + (DataAtual.getMonth() +1) + "/" + DataAtual.getFullYear() + " " + DataAtual.getHours() +":"+DataAtual.getMinutes()+ ":"+DataAtual.getSeconds();
    
    return DataTela;
  }
}                                                        
