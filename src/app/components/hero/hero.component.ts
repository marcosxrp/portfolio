import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { TrabalhosComponent } from '../trabalhos/trabalhos.component';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TrabalhosComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  //variables
  scrollService = inject(ScrollService);

  goToTrabalhos(){
    this.scrollService.element()?.nativeElement.scrollIntoView({behavior:'smooth', block: 'start'})
  }

}
