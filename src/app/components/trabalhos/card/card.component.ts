import { Component, inject, input } from '@angular/core';
import { Trabalho } from '../../../core/models/trabalho.model';
import { ScrollService } from '../../../core/services/scroll.service';

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
  scrollService = inject(ScrollService);


  goToSite(url: string){
    if(url === 'home'){
      this.scrollService.goToSection('home');
      return;
    }
    window.open(url, '_blank');
  }

  goToGithub(url: string){
    window.open(url, '_blank');
  }
}
