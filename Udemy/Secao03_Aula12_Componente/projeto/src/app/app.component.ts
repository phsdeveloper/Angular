import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';  
                                                        
@Component({                                                                                            
  selector: 'app-root',                                                                                                   
  template:`
            <div class="container">
              <app-title *ngIf="destruir"></app-title>

                <div div class="row col-sm-5 col-md-12 mt-4">
                  <div class="card">
                       <div class="card-header text-center"><h3><strong>{{title}}</strong></h3></div>
                       <div class="card-body">
                          <div class="row">
                                    <div class="col-sm-5 col-md-6">
                                      <div class="card">
                                          <div class="card-header text-center">
                                              <strong> Seção 03 Aula 17. ngDoCheck</strong>
                                          </div>
                                          <div class="card-body">
                                              <h5 class="card-title">Dados verifição</h5>
                                              <p class="card-text">{{Evento_Construtor}}</p>
                                              <p class="card-text">{{Evento_ngAfterViewChecked}}</p>
                                              <p class="card-text">{{Evento_ngAfterViewInit}}</p>
                                              <p class="card-text">{{Evento_ngAfterContentChecked}}</p>
                                              <p class="card-text">{{Evento_ngAfterContentInit}}</p>
                                              <p class="card-text">{{Evento_ngDoCheck}}</p>
                                              
                                              <button class="btn btn-primary" (click)="FUN_Adicionar()">Adicionar</button>
                                              <span> valor <strong> {{valor}}</strong> </span>
                                          </div>
                                      </div>
                                    </div>
                                    <div class="col-sm-5 col-md-6">
                                      <div class="card">
                                          <div class="card-header text-center">
                                              <strong> Seção 03 Aula 18. ngOnDestroy</strong>
                                          </div>
                                          <div class="card-body">
                                              <h5 class="card-title">Vai tirar da tela o componete Title (destruir)</h5>
                                              <button class="btn btn-primary" (click)="FUN_DestruirComponente()"*ngIf="destruir">Destruir componente</button>
                                              <button class="btn btn-primary" (click)="FUN_DestruirComponente()" *ngIf="!destruir">Recriar componente</button>
                                          </div>
                                      </div>
                                    </div>
                          </div>
                       </div>
                  </div>
                </div>
                <app-data-binding></app-data-binding>
                <router-outlet></router-outlet>
            </div>
             
            `                                                     
})                                                        
export class AppComponent implements OnInit,
                                     DoCheck,
                                     AfterContentInit,
                                     AfterContentChecked,
                                     AfterViewInit,
                                     AfterViewChecked 
                                     

{                                                        
  title = 'Bem vindo ao app component';  
  public CiclosDeVida:string = "";
  public Evento_ngAfterViewChecked:string = "";
  public Evento_ngAfterViewInit:string = "";
  public Evento_ngAfterContentChecked:string = "";
  public Evento_ngAfterContentInit:string = "";
  public Evento_ngDoCheck:string = "";

  public Evento_Construtor:string="";

  public valor:number =1;
  public destruir:boolean = true;

  

  constructor(){
    console.log("Construtor Chamado " + this.FUN_ObterDataAtual());
    this.Evento_Construtor = "Construtor Chamado em: " + this.FUN_ObterDataAtual();
    setTimeout(() => {
      //console.log("Construtor Chamado Timeout " + this.FUN_ObterDataAtual());
    }, 3000);
  }

    ngDoCheck(): void {
    this.Evento_ngDoCheck = "ngDoCheck             | Chamado em: " + this.FUN_ObterDataAtual();
    console.log("ngDoCheck             | Chamado em: " + this.FUN_ObterDataAtual());
  }

    ngAfterContentInit(): void {
    //this.Evento_ngAfterContentInit = "ngAfterContentInit Chamado em: " + this.FUN_ObterDataAtual();
    console.log("ngAfterContentInit    | Chamado em: " + this.FUN_ObterDataAtual());
  }


  ngAfterViewChecked(): void {
    //this.Evento_ngAfterViewChecked = "ngAfterViewChecked Chamado em: " + this.FUN_ObterDataAtual();
     console.log("ngAfterViewChecked    | Chamado em: " + this.FUN_ObterDataAtual());
  }
  ngAfterViewInit(): void {
    //this.Evento_ngAfterViewInit = "ngAfterViewInit Chamado em:" + this.FUN_ObterDataAtual();
    console.log("ngAfterContentInit    | Chamado em: " + this.FUN_ObterDataAtual());
  }
  ngAfterContentChecked(): void {
    //this.Evento_ngAfterContentChecked = "AfterContentChecked Chamado em: " + this.FUN_ObterDataAtual();
    console.log("ngAfterContentChecked | Chamado em: " + this.FUN_ObterDataAtual());
  }



  ngOnInit(): void {
    //console.log("OnInit iniciado " + this.FUN_ObterDataAtual());
      setTimeout(() => {
        this.CiclosDeVida = "OnInit inicado após timeout";
        //console.log("OnInit inicado após timeout " + this.FUN_ObterDataAtual());
      }, 5000);
  }


  FUN_ObterDataAtual(){
    let DataAtual:Date = new Date;
    let DataTela:String = DataAtual.getDate() + "/" + (DataAtual.getMonth() +1) + "/" + DataAtual.getFullYear() + " " + DataAtual.getHours() +":"+DataAtual.getMinutes()+ ":"+DataAtual.getSeconds();
    
    return DataTela;
  }
  public FUN_Adicionar():number{
    return this.valor+=1;
  }

  

  public FUN_DestruirComponente():void{
    this.destruir = !this.destruir;
  }
}                                                        
