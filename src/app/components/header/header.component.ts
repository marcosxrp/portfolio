import { Component, ElementRef, Renderer2, inject, signal, viewChild } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //injections
  private scrollService = inject(ScrollService);
  private renderer = inject(Renderer2);
  //variables
  protected pages = signal<string[]>(['home', 'trabalhos', 'sobre mim', 'contato']);
  private menuLogo = viewChild<ElementRef>('menuLogo');
  private closeLogo = viewChild<ElementRef>('closeLogo');
  private nav = viewChild<ElementRef>('nav');

  /**
   * Show and hide the nav in small screens
   */
  changeMenuVisibility(){
    if(this.closeLogo()?.nativeElement.classList.contains('hidden')){
      this.renderer.addClass(this.menuLogo()?.nativeElement, 'hidden');
      this.renderer.removeClass(this.closeLogo()?.nativeElement, 'hidden');
      this.renderer.removeClass(this.nav()?.nativeElement, 'scale-y-0');
    }else{
      this.renderer.removeClass(this.menuLogo()?.nativeElement, 'hidden');
      this.renderer.addClass(this.closeLogo()?.nativeElement, 'hidden');
      this.renderer.addClass(this.nav()?.nativeElement, 'scale-y-0');
    }


  }

  /**
   * go to home section
   */
  goToHome(){
    this.scrollService.goToSection('home');
  }


  /**
   * go to section
   * @param page
   */
  goToSection(page: string){
    this.scrollService.goToSection(page);
    this.changeMenuVisibility();
  }

}
