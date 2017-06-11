import { Component }          from '@angular/core';

@Component({
  selector: 'sudoku-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/ninebynine" routerLinkActive="active">Nine By Nine</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sudoku Solver';
}
