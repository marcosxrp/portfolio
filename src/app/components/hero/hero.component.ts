import { Component, ElementRef, inject, viewChild, AfterViewInit } from '@angular/core';
import { TrabalhosComponent } from '../trabalhos/trabalhos.component';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TrabalhosComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit {
  // injections
  private scrollService = inject(ScrollService);

  // variables
  private heroSection = viewChild<ElementRef>('heroSection')

  /**
   * set the hero section in the service
   */
  ngAfterViewInit(){
    this.scrollService.heroSection.set(this.heroSection());
  }

  /**
   * go to trabalhos section
   */
  goToTrabalhos(){
    this.scrollService.goToSection('trabalhos');
  }

}
