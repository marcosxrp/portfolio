import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  // injections
  private scrollService = inject(ScrollService)

  //variables
  private contatoSection = viewChild<ElementRef>('contatoSection');


  /**
   * set the about section in the service
   */
  ngAfterViewInit(){
    this.scrollService.contatoSection.set(this.contatoSection());
  }

  goToPage(page: string){
    switch(page){
      case 'linkedin':
        window.open('https://www.linkedin.com/in/marcos-soliveira/','_blank');
        break;
      case 'github':
        window.open('https://github.com/marcosxrp','_blank');
        break;
      case 'whatsapp':
        window.open('https://wa.me/75988681722','_blank');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/marcoss.s0/','_blank');
        break;
    }
  }

}
