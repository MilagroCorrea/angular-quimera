import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ropa-list',
  templateUrl: './ropa-list.component.html',
  styleUrls: ['./ropa-list.component.scss']
})
export class RopaListComponent implements OnInit {
  ropa = {
    "name":"Vestido",
    "description":"Vestido negro largo de morley",
    "category": "Vestidos",
    "price": 1500,
    "stock": 10,
    "image":"assets/img/2.png"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
