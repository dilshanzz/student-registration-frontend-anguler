import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sr',
  standalone: true,
  imports: [HttpClientModule,FormsModule],
  templateUrl: './sr.component.html',
  styleUrl: './sr.component.css'
})
export class SrComponent {

  private http;

  constructor(private httpClient:HttpClient){
    this.http = httpClient;
  }

  public student = {
    firstName: '',
    lastName: '',
    contact:'',
  };

  createStudent(){
    this.http
    .post("http://localhost:8080/student/add",this.student)
    .subscribe((data) => {
      console.log(data);
    });
  }
}
