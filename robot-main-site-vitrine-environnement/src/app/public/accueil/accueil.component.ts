import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { JsonService } from '../../json.service';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [HeaderComponent],
  providers: [JsonService],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
