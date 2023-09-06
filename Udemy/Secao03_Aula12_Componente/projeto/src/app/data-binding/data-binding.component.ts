import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public ComponentName:string = "data-binding";
  public title:string = "Bem vindo ao componente: " + this.ComponentName;

  public nome:string = "Paulo Santos";
  public imgSRC:string = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
  public imgTitle:string = "Title via property Binding";
  public idade: number = 30;

  public checkedDisabled:boolean = true;

  constructor(){

  }
  ngOnInit(): void {
      
  }


}
