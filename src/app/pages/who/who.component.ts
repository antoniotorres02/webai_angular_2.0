import { Component } from '@angular/core';
import {Who} from "../../interfaces/who";
import {WhoService} from "../../services/who.service";

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.css']
})
export class WhoComponent {
    whos: Who[] = []

    constructor(private whoService: WhoService) { }

    ngOnInit(): void {
      this.whoService.getWhos().subscribe(data => {
        this.whos = data
      })
    }
}
