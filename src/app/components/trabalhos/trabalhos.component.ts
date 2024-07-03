import { Component, viewChild, ElementRef, inject, AfterViewInit, signal, Renderer2, computed } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';
import { TrabalhosService } from '../../core/services/trabalhos.service';
import { CardComponent } from './card/card.component';
import { Trabalho } from '../../core/models/trabalho.model';

@Component({
  selector: 'app-trabalhos',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './trabalhos.component.html',
  styleUrl: './trabalhos.component.css'
})
export class TrabalhosComponent implements AfterViewInit{
  // injections
  private scrollService = inject(ScrollService);
  protected trabalhosService = inject(TrabalhosService);
  private renderer = inject(Renderer2);

  // variables
  private trabalhosSection = viewChild<ElementRef>('trabalhosSection')
  private optionsDiv = viewChild<ElementRef>('optionsDiv');
  private optionSvg = viewChild<ElementRef>('optionSvg');

  protected options = signal(['todos', 'angular', 'css', 'tailwind', 'typescript']);
  protected selectedOption = signal<string>('Todos');
  /**
   * Get the selected option and return the filtered data
   */
  protected trabalhosFiltered = computed<Trabalho[]>(() => {
    if(this.selectedOption().toLowerCase() === 'todos') return this.trabalhosService.trabalhos();
    return this.trabalhosService.trabalhos().filter(trabalho => trabalho.tags.includes(this.selectedOption()))
  })

  /**
   * set the trabalhos section in the service
   */
  ngAfterViewInit(){
    this.scrollService.trabalhosSection.set(this.trabalhosSection());
  }

  /**
   * Show and hide the options and change the style of the svg
   */
  changeSelectionView(){
    if(this.optionsDiv()?.nativeElement.classList.contains('hidden')){
      this.renderer.removeClass(this.optionsDiv()?.nativeElement, 'hidden');
      this.renderer.setStyle(this.optionSvg()?.nativeElement, 'transform', 'rotate(180deg)');
    }else{
      this.renderer.addClass(this.optionsDiv()?.nativeElement, 'hidden');
      this.renderer.setStyle(this.optionSvg()?.nativeElement, 'transform', 'rotate(0)');
    }
  }

  /**
   * Select the option to be displayed
   * @param option
   */
  selectOption(option: string){
    this.selectedOption.set(option);
    this.changeSelectionView();

  }


}
