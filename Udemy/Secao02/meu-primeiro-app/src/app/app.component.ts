import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
              <app-title ngOnInitTeste="Alterado"></app-title>
              <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit iniciado automaticamente.');
    setTimeout(() => {
      console.log('ngOnInit iniciado apos 5 segundos');
    }, 5000)
  }
}
