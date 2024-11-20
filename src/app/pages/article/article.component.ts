import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: any;

  articles = [
    { id: 1, title: 'Angular: Comece Agora!', date: '20/11/2024', content: 'Este é o conteúdo completo do artigo.' },
    { id: 2, title: 'Design Responsivo com Material', date: '18/11/2024', content: 'Este é o conteúdo completo do artigo.' },
    { id: 3, title: 'Publicando no GitHub Pages', date: '15/11/2024', content: 'Este é o conteúdo completo do artigo.' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.article = this.articles.find(a => a.id === id);
  }
}