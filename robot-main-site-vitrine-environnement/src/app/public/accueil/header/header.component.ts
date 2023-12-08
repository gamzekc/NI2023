import { Component, OnInit } from '@angular/core';
import { JsonService } from '../../../json.service';
import { CommonModule } from '@angular/common';

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
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  

  themes !: Theme[]; 
  
  ngOnInit(): void {
    this.themes = this.jsonService.getThemes();
    console.log(this.themes);
  }

  constructor(private jsonService : JsonService){
    
  }

  
}
