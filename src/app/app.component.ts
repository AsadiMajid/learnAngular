import {Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {IAccount} from "./iaccount";
import {AccountsService} from "./accounts.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})

export class AppComponent implements OnInit {

  constructor(private  accService: AccountsService, private  router: Router, private rout: ActivatedRoute) {

  }

  Accounts: IAccount[];

  ngOnInit() {
    setTimeout(() => {
        this.router.navigate(['/users'],{relativeTo:this.rout});

      }
      , 1000
    );
    this.Accounts = this.accService.getAccounts();
    console.log(this.accService.accounts);
  }


}
