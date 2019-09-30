import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
album;
  posts;

  constructor(private router: Router, private http: HttpClient, private fb : FormBuilder) { 
  this.album=this.fb.group({
    userId : new FormControl(),
    id: new FormControl(),
    body:new FormControl(),
    title:new FormControl()
  })
  }
  ngOnInit() {
  
  this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(body=>{
 console.log(body)
 this.posts=body
})
  }
}
