import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-sobre-mim',
  standalone: true,
  imports: [],
  templateUrl: './sobre-mim.component.html',
  styleUrl: './sobre-mim.component.css'
})
export class SobreMimComponent {
  // injections
  scrollService = inject(ScrollService);

  //variables
  info = signal([
    {titulo: 'Faculdade', lista: ['Unirios(2023-2027) atualmente no 4 semestre']},
    {titulo: 'Certificações', lista: ['Bootcamp Fullstack Dio - Angular + Java']},
    {titulo: 'Qualidades', lista: ['Ótimo com trabalho em equipe!', 'Sempre cumprindo prazos!', 'Sempre buscando o melhor em meus projetos!']},
    {titulo: 'Qualidades dos meus projetos', lista: ['Responsividade sempre!', 'SEO', 'Expêriencia de qualidade para o usuário!', 'Código limpo e bem comentado']}
  ])
  private aboutSection = viewChild<ElementRef>('aboutSection');

  /**
   * set the about section in the service
   */
  ngAfterViewInit(){
    this.scrollService.aboutSection.set(this.aboutSection());
  }

}
