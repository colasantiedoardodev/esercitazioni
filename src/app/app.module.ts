import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimoComponenteComponent } from './components/primo-componente/primo-componente.component';
import { SecondoComponenteComponent } from './components/secondo-componente/secondo-componente.component';
import { TerzoComponenteComponent } from './components/terzo-componente/terzo-componente.component';
import { LifecicleComponent } from './components/lifecicle/lifecicle.component';
import { TsComponent } from './components/ts/ts.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponenteComponent,
    SecondoComponenteComponent,
    TerzoComponenteComponent,
    LifecicleComponent,
    TsComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
