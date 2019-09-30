import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  

  task

  constructor(private router: Router, private http: HttpClient, private fb : FormBuilder) {
     
}
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(body=>{
      console.log(body)
      this.task=body
    })
  }

}
