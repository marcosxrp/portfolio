import { Injectable, signal, ElementRef, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  element = signal<ElementRef | undefined>(undefined)

  constructor() {
  }
}
