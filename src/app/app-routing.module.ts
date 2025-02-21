import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrimoComponenteComponent} from "./components/primo-componente/primo-componente.component";
import {SecondoComponenteComponent} from "./components/secondo-componente/secondo-componente.component";
import {TerzoComponenteComponent} from "./components/terzo-componente/terzo-componente.component";
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'user-list',
    component: UserListComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'page_not_found',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'PrimoComponent',
  },
  {
    path: 'PrimoComponent',
    component: PrimoComponenteComponent,
  },
  {
    path: 'SecondoComponent',
    component: SecondoComponenteComponent,
  },
  {
    path: 'TerzoComponent',
    component: TerzoComponenteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
