import {Component, OnInit} from '@angular/core';
import {IUser} from "../user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  users: IUser[] = [
    {id: 1, name: 'majid'},
    {id: 2, name: 'alie'},
    {id: 3, name: 'sara'}
  ];
  selectedAccount: number;

  constructor(private  rout: Router) {
  }

  ngOnInit(): void {
  }

  onClick(id: number) {
    this.rout.navigate(
      ['/accounts', id, 'edit'],
      {queryParams: {allowEdit: 1, key: 3}, fragment: 'majid'});
  }
















}
