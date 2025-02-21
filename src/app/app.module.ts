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
import { MatInputModule } from '@angular/material/input';
import { UserListComponent } from './components/user-list/user-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponenteComponent,
    SecondoComponenteComponent,
    TerzoComponenteComponent,
    LifecicleComponent,
    TsComponent,
    TaskComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
