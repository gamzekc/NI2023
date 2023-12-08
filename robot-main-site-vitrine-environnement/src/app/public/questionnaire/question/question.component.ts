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
  theme : Theme | undefined; 
  nbrQuestion : number = 0;
  nbrBonneReponse : number = 0;
  idQuestion : number = 0;
  resultatFinal : boolean = false;
  question : Question| undefined; 
  response1 : boolean = false;
  response2 : boolean = false;
  response3 : boolean = false;
  response4 : boolean = false;
  resultat : boolean = false;
  verif1 : boolean = false;
  verif2 : boolean = false;
  verif3 : boolean = false;
  verif4 : boolean = false;

  ngOnInit(): void {
    this.theme = this.jsonService.getTheme(0);
    this.question = this.theme.questions[this.idQuestion]; 
    this.nbrQuestion = this.theme.questions.length+1;
  }


  select(id: number){
    if(!this.question?.multiselect){
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

  validate(){
    this.question?.correcte.forEach((element)=>{
      switch(element){
        case 1 : this.verif1 = true; break; 
        case 2 : this.verif2 = true; break; 
        case 3 : this.verif3 = true; break; 
        case 4 : this.verif4 = true; break; 
      }
      this.resultat = true;
      if(this.response1 == this.verif1 && this.response2 == this.verif2 && this.response3 == this.verif3 && this.response4 == this.verif4){
        console.log('reponse correcte')
      }else{
        console.log('reponse incorrecte')
      }
    })

  }

  nextQuestion(){
    if(this.idQuestion <= this.nbrQuestion && this.theme){
      this.idQuestion = this.idQuestion +1;
      console.log('next : ' + this.idQuestion )
      console.log(this.question);
      this.question = this.theme.questions[this.idQuestion]; 
      // this.response1 = false;
      // this.response2 = false;
      // this.response3 = false;
      // this.response4 = false;
      this.resultat = false;
    }else{
      this.resultatFinal = true;
    }
  }

}
