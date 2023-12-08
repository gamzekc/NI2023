import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { QuestionComponent } from './question/question.component';

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, QuestionComponent],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.css'
})
export class QuestionnaireComponent {

}
