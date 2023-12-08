import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  themes: Theme[] = [];
  constructor(private http: HttpClient) {
   
    this.http.get<Theme[]>('./assets/Json/question.json').subscribe(
      (data: any) => {
        this.themes = data.question;
        
      },
      (error) => {
        console.error('Erreur lors du chargement des données JSON :', error);
      }
    );
   }

   public getTheme(id: number):Theme{
    return this.themes[id];
   }

   public getThemes():Theme[]{
    return this.themes;
   }

}
