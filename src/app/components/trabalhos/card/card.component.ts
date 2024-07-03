import { Component, input } from '@angular/core';
import { Trabalho } from '../../../core/models/trabalho.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  //variables
  trabalhoInput = input.required<Trabalho>();


  goToSite(url: string){
    window.open(url, '_blank');
  }

  goToGithub(url: string){
    window.open(url, '_blank');
  }
}
