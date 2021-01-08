import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./user/user.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {EditAccountComponent} from "./edit-account/edit-account-component";
import {EditUserComponent} from "./edit-user/edit-user.component";

const routes: Routes = [
  {path: '', component: HomeComponent},

  {
    path: 'users', component: UsersComponent,
    children: [
      {path: ':id', component: UserComponent},
      {path: ':id/edit', component: EditUserComponent  },
    ]
  },

  {path: 'accounts', component: AccountsComponent},
  {path: 'accounts/:id/edit', component: EditAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
