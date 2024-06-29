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
  //variables
  private scrollService = inject(ScrollService);

  private heroSection = viewChild<ElementRef>('heroSection')

  ngAfterViewInit(){
    this.scrollService.heroSection.set(this.heroSection());
  }

  goToTrabalhos(){
    this.scrollService.trabalhosSection()?.nativeElement.scrollIntoView({behavior:'smooth', block: 'start'})
  }

}
