import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-binding',
  templateUrl: './component-binding.component.html',
  styleUrls: ['./component-binding.component.css']
})
export class ComponentBindingComponent implements OnInit {
  public imgURL = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
  public url = 'https://devmedia.com.br';
  constructor() { }

  ngOnInit(): void {
  }

}
