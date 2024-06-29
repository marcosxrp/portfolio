import { Injectable, signal, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  heroSection = signal<ElementRef | undefined>(undefined);
  trabalhosSection = signal<ElementRef | undefined>(undefined);

  constructor() {
  }

  goToSection(page: string){
    switch(page){
      case 'home':
        this.heroSection()?.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'trabalhos':
        this.trabalhosSection()?.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }
}
