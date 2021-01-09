import {Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {IAccount} from "./iaccount";
import {AccountsService} from "./accounts.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  providers: [AccountsService]
})

export class AppComponent implements OnInit {

  constructor(private  accService: AccountsService, private  router: Router, private routActive: ActivatedRoute) {

  }

  Accounts: IAccount[];

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/users',this.routActive]);
    }, 4000);

  }


}
