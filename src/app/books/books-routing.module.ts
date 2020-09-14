import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { LoginGuard } from '../guards/login.guard';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'all', pathMatch: 'full'
  },
  {
    path: 'add', component: AddComponent, canActivate: [LoginGuard]
  },
  {
    path: 'list', component: ListComponent
  },
  {
    path: 'all', component: ListComponent
  },
  {
    path: 'update/:id', component: AddComponent
  },
  {
    path: '**', redirectTo: 'all', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
