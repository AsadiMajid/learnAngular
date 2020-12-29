import {Component, OnInit} from '@angular/core';
import {IComment} from '../icomment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comments: IComment[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
