import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Angular',
      thought: 'Its not you its me',
    },
    {
      title: 'CSS',
      thought: 'I like your style',
    },
    {
      title: 'Html',
      thought: ' I like your body',
    },
    {
      title: 'Vanilla JavaScript',
      thought: 'How I miss you',
    },
    {
      title: 'Dot notation',
      thought: 'Lets get straight to the point ',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onSubmit = (post: Post): void => {
    this.posts.push(post);
  };
  deletePost = (index: number): void => {
    this.posts.splice(index, 1);
  };
}
