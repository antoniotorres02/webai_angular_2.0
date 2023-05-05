import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsService} from "../../services/news.service";
import {New} from "../../interfaces/news";
import {NodeWithI18n} from "@angular/compiler";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  newId: number = 0;
  new: New = {
    id: 0,
    title: '',
    content: '',
    img: '',
  };

  constructor(private route: ActivatedRoute, private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.newId = parseInt(this.route.snapshot.paramMap.get('id') || '0' );
    this.newsService.getNews().subscribe(data => {
      this.new = data.filter(newItem => newItem.id == this.newId)[0]
      })
  }
}
