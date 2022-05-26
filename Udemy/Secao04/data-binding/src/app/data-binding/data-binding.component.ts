import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome:string = "Paulo";
  public idade:number = 40;

  constructor() { }

  ngOnInit(): void {
  }

}
