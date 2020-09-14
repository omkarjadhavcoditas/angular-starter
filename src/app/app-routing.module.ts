import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoutGuard } from './guards/logout.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent, canActivate: [LogoutGuard]
  },
  {
    path: 'register', component: RegisterComponent, canActivate: [LogoutGuard]
  },
  {
    path: 'books', loadChildren: () => import('./books/books.module').then(b => b.BooksModule)
  },
  {
    path: '**', loadChildren: () => import('./books/books.module').then(b => b.BooksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
