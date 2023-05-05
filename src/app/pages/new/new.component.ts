import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsService} from "../../services/news.service";
import {New} from "../../interfaces/news";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  newId: String = '';
  new: New = {
    id: 0,
    title: '',
    content: '',
    img: '',
  };

  constructor(private route: ActivatedRoute, private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.newId = this.route.snapshot.paramMap.get('id')!;
    this.new = this.newsService.getNewById(this.newId)
  }
}
