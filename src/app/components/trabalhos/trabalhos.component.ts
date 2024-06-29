import { Component, viewChild, ElementRef, inject, AfterViewInit, signal, Renderer2 } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-trabalhos',
  standalone: true,
  imports: [],
  templateUrl: './trabalhos.component.html',
  styleUrl: './trabalhos.component.css'
})
export class TrabalhosComponent implements AfterViewInit{
  // variables
  private scrollService = inject(ScrollService);
  private renderer = inject(Renderer2);


  private trabalhosSection = viewChild<ElementRef>('trabalhosSection')
  private optionsDiv = viewChild<ElementRef>('optionsDiv');

  // signals
  protected options = signal(['Todos', 'Angular', 'Css', 'Tailwind']);
  protected selectedOption = signal<string>('Todos');

  ngAfterViewInit(){
    this.scrollService.trabalhosSection.set(this.trabalhosSection());
  }

  changeSelectionView(){
    if(this.optionsDiv()?.nativeElement.classList.contains('hidden')){
      this.renderer.removeClass(this.optionsDiv(), 'hidden');
    }else{
      this.renderer.addClass(this.optionsDiv(), 'hidden');
    }
  }

  selectOption(option: string){
    this.selectedOption.set(option);
    this.changeSelectionView();

  }


}
