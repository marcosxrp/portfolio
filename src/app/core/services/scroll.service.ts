import { Injectable, signal, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  // variables
  heroSection = signal<ElementRef | undefined>(undefined);
  trabalhosSection = signal<ElementRef | undefined>(undefined);
  aboutSection = signal<ElementRef | undefined>(undefined);
  contatoSection = signal<ElementRef | undefined>(undefined);

  constructor() {
  }

  /**
   * Scroll to the selected page
   * @param page
   */
  goToSection(page: string){
    switch(page){
      case 'home':
        this.heroSection()?.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'trabalhos':
        this.trabalhosSection()?.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'sobre mim':
        this.aboutSection()?.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contato':
        this.contatoSection()?.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }
}
