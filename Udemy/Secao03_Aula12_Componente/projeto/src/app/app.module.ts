/*****************************************************************************************
 *                                 Arquivo app.module.ts                                 * 
 *****************************************************************************************
 * Nesse arquivo fica todas as referencias de componentes que serão utilizados no        *                                                                                  
 * projeto                                                                               *          
 *                                                                                       *    
 *                                                                                       *   
 *                                                                                       *     
 *****************************************************************************************/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DataBindingComponent } from './data-binding/data-binding.component'; 
import { FormsModule } from '@angular/forms';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { DiretivasatributosComponent } from './diretivasatributos/diretivasatributos.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DataBindingComponent,
    DiretivasEstruturaisComponent,
    DiretivasatributosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
