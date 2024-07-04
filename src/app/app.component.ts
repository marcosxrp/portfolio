import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { TrabalhosComponent } from './components/trabalhos/trabalhos.component';
import { LinguagensFrameworksComponent } from './components/linguagens-frameworks/linguagens-frameworks.component';
import { SobreMimComponent } from './components/sobre-mim/sobre-mim.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, TrabalhosComponent, LinguagensFrameworksComponent, SobreMimComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
