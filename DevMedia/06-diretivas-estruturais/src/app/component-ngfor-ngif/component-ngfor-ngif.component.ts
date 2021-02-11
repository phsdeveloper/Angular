import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-ngfor-ngif',
  templateUrl: './component-ngfor-ngif.component.html',
  styleUrls: ['./component-ngfor-ngif.component.css']
})
export class ComponentNgforNgifComponent implements OnInit 
{

  hoje:string = "";

  public DiasSemana=[
     'Segunda - feira'
    ,'Terça - feira'
    ,'Quarta - feira'
    ,'Quinta - feira'
    ,'Sexta - feira'
    ,'Sabado'
    ,'Domingo'
  ]
  constructor() 
  { 
    this.hoje = this.DiasSemana[new Date().getDay() -1]
  }

  ngOnInit(): void {
    
  }

}
