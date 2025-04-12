import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
  <div class="site-layout">
    <app-header></app-header>
    <div class="container">
  </div>
    <router-outlet></router-outlet>
  </div>
  `,
})
export class AppComponent {
  title = 'friendlychat';
}
