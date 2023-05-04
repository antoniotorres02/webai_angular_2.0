import { Component } from '@angular/core';
import { NewsService } from "../../services/news.service";
import {New} from "../../interfaces/news";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  news: New[] = []
  lastSpan: number = 0

  constructor(private newsService: NewsService) {

  }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(data => {
      this.news = data
    })
  }

  randomSpanning(): String {
    let span = Math.floor(Math.random() * 10) % 4 + 5
    return `span ${span}`
  }

}
