import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
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
