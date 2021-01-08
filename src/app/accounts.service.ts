 import {IAccount} from "./iaccount";
 import {LoggingService} from "./loggin.service";
 import {Injectable} from "@angular/core";

 @Injectable()
export class AccountsService {
  accounts: IAccount[] = [
    {name: 'majid', pass: '1234'},
    {name: 'sara', pass: '1234'},
    {name: 'foad', pass: '1234'},
  ];

  constructor(private  logService: LoggingService) {
  }

  addAccount(a: IAccount) {
    this.accounts.push(a);
     this.logService.logMessage(a.toString());
  }

  getAccounts() {
    return this.accounts;
  }

}
