import { Injectable, signal } from '@angular/core';
import { Trabalho } from '../models/trabalho.model';


@Injectable({
  providedIn: 'root'
})
export class TrabalhosService {
  //variables
  trabalhos = signal<Trabalho[]>([
    {id: 1, nome: 'Trabalho 1', descricao: 'loremloremlo remloremlorem loremloremloremloremlorem lorem loremloremloremlorem loremloremloremlorem', imagem: 'assets/default-test.jpg', paginaWeb: 'https://google.com', paginaDocumentacao: 'https://youtube.com', tags: ['angular', 'css', 'typescript', 'html']},
    {id: 2, nome: 'Trabalho 2', descricao: 'Descrição do trabalho 2', imagem: 'assets/default-test.jpg', paginaWeb: 'https://google.com', paginaDocumentacao: 'https://youtube.com', tags: ['angular', 'tailwind', 'html']},
    {id: 3, nome: 'Trabalho 3', descricao: 'loremloremlo remloremlorem loremloremloremloremlorem lorem loremloremloremlorem loremloremloremlorem', imagem: 'assets/default-test.jpg', paginaWeb: 'https://google.com', paginaDocumentacao: 'https://youtube.com', tags: ['css', 'typescript', 'html', 'tailwind']},
    {id: 4, nome: 'Trabalho 4', descricao: 'Descrição do trabalho 4', imagem: 'assets/default-test.jpg', paginaWeb: 'https://google.com', paginaDocumentacao: 'https://youtube.com', tags: ['angular', 'tailwind', 'typescript', 'html']}
  ]);

  constructor() { }
}
