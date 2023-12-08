import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-question-card',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './question-card.component.html',
  styleUrl: './question-card.component.css'
})
export class QuestionCardComponent implements OnInit{
  Id : any;
  Theme : any;
  Description : any;
  Question : any;
  card_question: any = [];
  
 
  private jsonUrl = '../../../src/assets/Json/question.json';

  constructor(private http: HttpClient) { }
 ngOnInit(): void {
    this.http.get(this.jsonUrl).subscribe((data) => {
      this.card_question = data;
  });
  }

}
