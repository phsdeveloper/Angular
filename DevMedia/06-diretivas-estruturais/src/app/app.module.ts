import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentNgIfComponent } from './component-ng-if/component-ng-if.component';
import { ComponentNgForComponent } from './component-ng-for/component-ng-for.component';
import { ComponentNgSwitchComponent } from './component-ng-switch/component-ng-switch.component';
import { ComponentNgSwitchRevistaComponent } from './component-ng-switch-revista/component-ng-switch-revista.component';
import { ComponentNgSwitchLivroComponent } from './component-ng-switch-livro/component-ng-switch-livro.component';
import { ComponentNgSwitchFilmeComponent } from './component-ng-switch-filme/component-ng-switch-filme.component';
import { ComponentNgforNgifComponent } from './component-ngfor-ngif/component-ngfor-ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentNgIfComponent,
    ComponentNgForComponent,
    ComponentNgSwitchComponent,
    ComponentNgSwitchRevistaComponent,
    ComponentNgSwitchLivroComponent,
    ComponentNgSwitchFilmeComponent,
    ComponentNgforNgifComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
