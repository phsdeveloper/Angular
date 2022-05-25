import { 
          AfterContentChecked, 
          AfterContentInit, 
          AfterViewChecked, 
          AfterViewInit, 
          Component, 
          DoCheck, 
          OnInit 
      } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
              <app-title ngOnInitTeste="Alterado"></app-title>
              <router-outlet></router-outlet>
              <br/> 
              <span>Ciclos de vida do Angular | </span> <span>{{valor}} | </span><button (click)="adicionar()">Adicionar</button>

  `
})
export class AppComponent implements OnInit,
                                     DoCheck,
                                     AfterContentInit,
                                     AfterContentChecked,
                                     AfterViewInit,
                                     AfterViewChecked 
  {

  public valor: number = 1;
  constructor() { }
  /**
   * Método criado para exemplificar o ciclo dde vida de um click
   * @returns novo valor
   */
  public adicionar(): number {
    console.log("Chamado metodo Adicionar");
    return this.valor += 1;
  }


  ngOnInit(): void {
    console.log('ngOnInit iniciado automaticamente.');
    setTimeout(() => {
      console.log('ngOnInit iniciado apos 5 segundos');
    }, 5000)
  }

  ngDoCheck(): void {
    console.log('01) Evento ngDoCheck invocado');
  }

  ngAfterContentInit(): void {
    console.log('02) Evento ngAfterContentInit invocado');
  }

  ngAfterContentChecked(): void {
    console.log('03) Evento ngAfterContentChecked invocado');
  }
  ngAfterViewInit(): void {
    console.log('04) Evento ngAfterViewInit invocado');
  }

  ngAfterViewChecked(): void {
    console.log('05) Evento ngAfterViewChecked invocado');
  }
}
