import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
album:FormGroup;
data
  constructor(private router: Router, private http: HttpClient, private fb : FormBuilder) { 
    this.album=this.fb.group({
      uid : new FormControl(),
      id: new FormControl(),
      title:new FormControl(),
  })
}

  ngOnInit() {}
    album1(){
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(body=>{
      console.log(body)
      this.data=body;
    })
  
}


}
