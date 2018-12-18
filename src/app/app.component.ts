import { Article } from './components/article/article.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }
  constructor() {
    this.articles = [
      new Article('Google', 'https://www.google.com', 3),
      new Article('Facebook', 'https://www.facebook.com', 2),
      new Article('Angular', 'https://www.angular.io', 1)
    ];
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
