import { Component, signal } from '@angular/core';
import { RouterOutlet, } from '@angular/router';
import { Cafe } from './components/cafe/cafe';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cafe , Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Cafe');
}
