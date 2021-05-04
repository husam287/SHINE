import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  price(form: NgForm) {

    const url = { url: form.form.value.name }
    this.http.post('https://shein-webscrapping.herokuapp.com/api/shein/get', url).subscribe(result => {
      console.log(result)

    })
  }
  ngOnInit(): void {

  }

}
