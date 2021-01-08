import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Route, Router, RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StarComponent} from './star/star.component';
import {BasichighlightDirective} from './basichighlight.directive';
import {AdvancedHighlighDirectiveDirective} from './advanced-highligh-directive.directive';
import {UnlessDirective} from './unless.directive';
import {AddAccountComponent} from './add-account/add-account.component';
import {LoggingService} from "./loggin.service.service";
import {UsersComponent} from './users/users.component';
import {AccountsComponent} from './accounts/accounts.component';
import { UserComponent } from './user/user.component';
import {EditAccountComponent} from "./edit-account/edit-account-component";
import {EditUserComponent} from "./edit-user/edit-user.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StarComponent,
    BasichighlightDirective,
    AdvancedHighlighDirectiveDirective,
    UnlessDirective,
    AddAccountComponent,
    UsersComponent,
    AccountsComponent,
    UserComponent,
    EditAccountComponent,
    EditUserComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
