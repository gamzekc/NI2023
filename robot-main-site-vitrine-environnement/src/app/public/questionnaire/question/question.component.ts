import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JsonService } from '../../../json.service';
import { HttpClient } from '@angular/common/http';
interface Question {
  id : number, 
  question: string, 
  multiselect:boolean, 
  prop1:string,
  prop2:string,
  prop3:string,
  prop4:string,
  correcte:number[]
}

interface Theme {
  id : number,
  theme : string,
  description: string, 
  questions :Question[]
}
@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  providers: [HttpClient, JsonService],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit{

  constructor(private jsonService : JsonService){}
  public theme : Theme | undefined; 


  ngOnInit(): void {
    this.theme = this.jsonService.getTheme(0);
    
    this.question = this.theme.questions[0]; 
    console.log(this.question);
  }
  question : Question| undefined; 
  response1 : boolean = false;
  response2 : boolean = false;
  response3 : boolean = false;
  response4 : boolean = false;
  multiselect : boolean = false;

  select(id: number){
    if(!this.multiselect){
      if(this.response1 || this.response2 || this.response3 || this.response4){
        if(id == 1 && this.response1){
          this.response1 = !this.response1;
        }else{
          
          if(id == 2 && this.response2){
            this.response2 = !this.response2;
          }else{
            if(id == 3 && this.response3){
              this.response3 = !this.response3;
            }else{
              if(id == 4 && this.response4){
                this.response4 = !this.response4;
              }else{

              }
            }
          }
        }
      }else{
        switch(id){
          case 1 : this.response1 = !this.response1;break;
          case 2 : this.response2 = !this.response2;break;
          case 3 : this.response3 = !this.response3;break;
          case 4 : this.response4 = !this.response4;break;
        }
      }
    }else{
      switch(id){
        case 1 : this.response1 = !this.response1;break;
        case 2 : this.response2 = !this.response2;break;
        case 3 : this.response3 = !this.response3;break;
        case 4 : this.response4 = !this.response4;break;
      }
    }

  }

}
