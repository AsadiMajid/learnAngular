import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Route, Router, RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
 import {BasichighlightDirective} from './directive/basichighlight.directive';
import {AdvancedHighlighDirectiveDirective} from './directive/advanced-highligh-directive.directive';
import {UnlessDirective} from './directive/unless.directive';

import {LoggingService} from "./loggin.service";
import {UsersComponent} from './users/users.component';
import {AccountsComponent} from './accounts/accounts.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BasichighlightDirective,
    AdvancedHighlighDirectiveDirective,
    UnlessDirective,
    UsersComponent,
    AccountsComponent,
    EditUserComponent,

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
