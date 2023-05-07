import { Component } from '@angular/core';
import {WhoService} from "../../services/who.service";
import {ActivatedRoute} from "@angular/router";
import {Who} from "../../interfaces/who";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  personId: number = 0;
  who: Who = {
    id: 0,
    name: '',
    img: '',
    title1: '',
    article1: '',
    title2: '',
    article2: '',
    title3: '',
    article3: '',
    biography: '',
  };


  constructor(private whoService: WhoService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.personId = parseInt(this.route.snapshot.paramMap.get('id') || '0' );
    this.whoService.getWhos().subscribe(data => {
      this.who = data.filter(newItem => newItem.id == this.personId)[0]
    })
  }
}
