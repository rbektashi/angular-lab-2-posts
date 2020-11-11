import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() submitPost = new EventEmitter<Post>();
  constructor() {}

  ngOnInit(): void {}
  emitSubmitPost = (form: NgForm): void => {
    let newThought: Post = {
      title: form.value.title,
      thought: form.value.thought,
    };
    console.log(newThought);
    this.submitPost.emit(newThought);
  };
}
