import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  login:FormGroup

  constructor( private router: Router, private fb: FormBuilder, private http: HttpClient) {
    this.login=this.fb.group({
    emailid: new FormControl(),
    pass: new FormControl()
    })
   }

  ngOnInit() {
  }
  reg(a){
    let body={
      email:a.emailid,
      password:a.pass

    }

    this.http.post('https://reqres.in/api/users',body).subscribe(body=>{
      console.log(body)
    })
    this.http.post('https://reqres.in/api/register',body).subscribe(body=>{
      console.log(body)
    })
  }

}
