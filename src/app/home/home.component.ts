import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IComment} from '../icomment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comments: IComment[] = [];
  @ViewChild('commentText') txtComment: ElementRef;

  constructor() {

  }
  ngOnInit(): void {

  }

  addComment() {
    let c: IComment = {
      comment: this.txtComment.nativeElement.value,
      dislike: 0,
      numberOfReviews: 0,
      like: 0,
      star: 0
    }
    this.comments.push(c);
  }

  reviews(c: IComment, n: HTMLInputElement) {
    c.numberOfReviews++;
    c.star += parseInt(n.value.toString());
  }

  commentLike(c: IComment) {
    c.like++;
  }

  commentDisLike(c: IComment) {
    c.dislike--;
  }
}
