import { Component, ElementRef, Renderer2, inject, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //injections
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
      this.renderer.removeClass(this.nav()?.nativeElement, 'hidden');
    }else{
      this.renderer.removeClass(this.menuLogo()?.nativeElement, 'hidden');
      this.renderer.addClass(this.closeLogo()?.nativeElement, 'hidden');
      this.renderer.addClass(this.nav()?.nativeElement, 'hidden');
    }


  }

}
