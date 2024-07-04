import { Component, signal } from '@angular/core';
import { Linguagem } from '../../core/models/linguagem.model';

@Component({
  selector: 'app-linguagens-frameworks',
  standalone: true,
  imports: [],
  templateUrl: './linguagens-frameworks.component.html',
  styleUrl: './linguagens-frameworks.component.css'
})
export class LinguagensFrameworksComponent {
  linguagens = signal<Linguagem[]>([
    {nome: 'Javascript', imagem: 'assets/javascript-fourth.svg'},
    {nome: 'Typescript', imagem: 'assets/typescript-fourth.svg'},
    {nome: 'Angular', imagem: 'assets/angular-fourth.svg'},
    {nome: 'Css', imagem: 'assets/css-fourth.svg'},
    {nome: 'Html', imagem: 'assets/html-fourth.svg'},
    {nome: 'Tailwind', imagem: 'assets/tailwind-fourth.svg'}
  ]);

}
