import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Paulo";
  public idade: number = 40;
  public btn_title: string = "Button Property Binding";
  public btn_Disabled: boolean = true;

public position:{x:number,y:number} = {x:0,y:0};

  constructor() { }

  ngOnInit(): void {
  }

  chequedDisabled(): boolean {

    return this.btn_Disabled;
  }

  alertInfo() {
    alert("funcionou");
    this.btn_Disabled = !this.btn_Disabled;
    console.log(this.btn_Disabled);
  }

  alertInfoValor(valor: string) {
    alert(valor);
    this.btn_Disabled = !this.btn_Disabled;
    console.log(this.btn_Disabled);
  }

  public alertInfoEvent(valor: MouseEvent) {
    console.log(valor);

  }

  public MouseMoveTeste(valor: MouseEvent) {
    console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }


}
