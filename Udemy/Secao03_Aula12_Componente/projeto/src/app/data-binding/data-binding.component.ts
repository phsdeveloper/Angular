import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  public ComponentName:string = "data-binding";
  public title:string = "Bem vindo ao componente: " + this.ComponentName;

  public nome:string = "Paulo Santos";
  public idade: number = 30;



}
