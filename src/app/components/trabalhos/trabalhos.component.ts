import { Component, viewChild, ElementRef, inject } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-trabalhos',
  standalone: true,
  imports: [],
  templateUrl: './trabalhos.component.html',
  styleUrl: './trabalhos.component.css'
})
export class TrabalhosComponent{
  // variables
  scrollService = inject(ScrollService);

  public trabalhosSection = viewChild<ElementRef>('trabalhosSection');

  ngAfterViewInit(){
    this.scrollService.element.set(this.trabalhosSection());
  }

}
