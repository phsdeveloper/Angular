import { publishFacade } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})


export class TitleComponent {
  public title:string = "Bem vindo ao componente Title"

  constructor(){}
  
    ngOnInit():void{ }
  
}
