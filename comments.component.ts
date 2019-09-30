import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  
  
  comment

  constructor(private router: Router, private http: HttpClient, private fb : FormBuilder) {
    
   }

  ngOnInit() {
  
  this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe(body=>{
  console.log(body)  
  this.comment=body
  })
  }
}
