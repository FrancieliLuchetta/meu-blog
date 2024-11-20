import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  posts = [
    { id: 1, title: 'Angular: Comece Agora!', date: '20/11/2024', excerpt: 'Aprenda como começar com Angular de forma prática.' },
    { id: 2, title: 'Design Responsivo com Material', date: '18/11/2024', excerpt: 'Veja como criar páginas responsivas com Angular Material.' },
    { id: 3, title: 'Publicando no GitHub Pages', date: '15/11/2024', excerpt: 'Saiba como publicar seu projeto no GitHub Pages.' },
  ];
}