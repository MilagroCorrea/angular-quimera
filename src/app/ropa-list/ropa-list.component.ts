import { Component, OnInit } from '@angular/core';
import {Ropa} from './ropa';

@Component({
  selector: 'app-ropa-list',
  templateUrl: './ropa-list.component.html',
  styleUrls: ['./ropa-list.component.scss']
})
export class RopaListComponent implements OnInit {
  items: Ropa[]= [{
    name:"Vestido Rayas",
    description:"Vestido largo con rayas gruesas verticales",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/vestidoRayas.png",
    clearance: false,
    quantity: 0,
  },
  {
    name:"Blusa de Hilo",
    description:"Blusa de Hilo color negro",
    category: "Blusas",
    price: 600,
    stock: 0,
    image:"assets/img/blusaHilo.PNG",
    clearance: true,
    quantity: 0,
  },
  {
    name:"Musculosa Mystique",
    description:"Musulosa deportiva de algodón gris con estampa",
    category: "Remeras",
    price: 500,
    stock: 20,
    image:"assets/img/muscuMystique.PNG",
    clearance: false,
    quantity: 0,
  },
  {
    name:"Blusa Básica",
    description:"Blusa negra con breteles plateados",
    category: "Blusas",
    price: 800,
    stock: 10,
    image:"assets/img/muscuNegra.PNG",
    clearance: true,
    quantity: 0,
  },
  {
    name:"Remera Animal Print",
    description:"Remeras animal print, tres modelos",
    category: "Remeras",
    price: 900,
    stock: 10,
    image:"assets/img/remeAnimalPrint.PNG",
    clearance: false,
    quantity: 0,
  },
  {
    name:"Remera Bolsillo",
    description:"Remera blanca con bolsillo de lentejuelas negras",
    category: "Remeras",
    price: 850,
    stock: 10,
    image:"assets/img/remeBolsillo.PNG",
    clearance: false,
    quantity:0,
  },
  {
    name:"Remera Corazón",
    description:"Remera blanca con aplique de corazón con lentejuelas rojas",
    category: "Remeras",
    price: 1000,
    stock: 10,
    image:"assets/img/remeCorazon.PNG",
    clearance: true,
    quantity:0,
  },
  {
    name:"Remera Cuadrito Friends",
    description:"Remeca gris con estampa del clásico cuadrito de Friends",
    category: "Remeras",
    price: 600,
    stock: 10,
    image:"assets/img/remeCuadrito.PNG",
    clearance: false,
    quantity:0,
  },
  {
    name:"Remera Led Zeppelin",
    description:"Remera con estampa de Led Zeppelin",
    category: "Remeras",
    price: 800,
    stock: 10,
    image:"assets/img/remeLedZep.PNG",
    clearance:false,
    quantity: 0,
  },
  {
    name:"Remera ACDC",
    description:"Remera con estampa de ACDC",
    category: "Remeras",
    price: 800,
    stock: 10,
    image:"assets/img/remeraACDC.PNG",
    clearance: false,
    quantity:0,
  },
  {
    name:"Remera Queen",
    description:"Remera con estampa de Queen",
    category: "Remeras",
    price: 700,
    stock: 10,
    image:"assets/img/remeQueen.PNG",
    clearance: true,
    quantity:0,
  },
  {
    name:"Remera White Snake",
    description:"Remera con estampa de White Snake",
    category: "Remeras",
    price: 800,
    stock: 10,
    image:"assets/img/remeraWhiteSnake.PNG",
    clearance: true,
    quantity: 0,
  },
  {
    name:"Remera Red Hot",
    description:"Remera con estampa de Red Hot Chili Peppers",
    category: "Remeras",
    price: 1000,
    stock: 10,
    image:"assets/img/remeRedHot.PNG",
    clearance:true,
    quantity:0,
  },
  {
    name:"Solera Negra",
    description:"Vestido solera negra de modal",
    category: "Vestidos",
    price: 1000,
    stock: 10,
    image:"assets/img/soleraNegra.PNG",
    clearance: false,
    quantity:0,
  },
  {
    name:"Vestido Batik",
    description:"Vestido batik negro y blanco",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/vestidoBatik.PNG",
    clearance:false,
    quantity:0,
  },
  {
    name:"Vestido Tajo",
    description:"Vestido largo color ladrillo con tajo",
    category: "Vestidos",
    price: 1300,
    stock: 10,
    image:"assets/img/vestidoLadrillo.PNG",
    clearance: false,
    quantity:0,
  },
  {
    name:"Vestido Morley",
    description:"Vestido negro largo de morley",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/vestidoNegroMorley.PNG",
    clearance: false,
    quantity:0,
  },
  {
    name:"Vestido Oliva",
    description:"Vestido largo de modal color oliva",
    category: "Vestidos",
    price: 1650,
    stock: 10,
    image:"assets/img/vestidoOliva.PNG",
    clearance: true,
    quantity:0,
  },
  {
    name:"Vestido",
    description:"Vestido Rojo largo intermedio",
    category: "Vestidos",
    price: 900,
    stock: 10,
    image:"assets/img/vestidoRojo.PNG",
    clearance: false,
    quantity:0,
  }
  /*{
    name:"Vestido",
    description:"Vestido negro largo de morley",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/2.png"
  },
  {
    name:"Vestido",
    description:"Vestido negro largo de morley",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/2.png"
  },
  {
    name:"Vestido",
    description:"Vestido negro largo de morley",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/2.png"
  },
  {
    name:"Vestido",
    description:"Vestido negro largo de morley",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/2.png"
  },
  {
    name:"Vestido",
    description:"Vestido negro largo de morley",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/2.png"
  },
  {
    name:"Vestido",
    description:"Vestido negro largo de morley",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/2.png"
  },
  {
    name:"Vestido",
    description:"Vestido negro largo de morley",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/2.png"
  },
  {
    name:"Vestido",
    description:"Vestido negro largo de morley",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/2.png"
  },
  {
    name:"Vestido",
    description:"Vestido negro largo de morley",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/2.png"
  },
  {
    name:"Vestido",
    description:"Vestido negro largo de morley",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/2.png"
  },
  {
    name:"Vestido",
    description:"Vestido negro largo de morley",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/2.png"
  },
  {
    name:"Vestido",
    description:"Vestido negro largo de morley",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/2.png"
  },
  {
    name:"Vestido",
    description:"Vestido negro largo de morley",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/2.png"
  },
  {
    name:"Vestido",
    description:"Vestido negro largo de morley",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/2.png"
  },
  {
    name:"Vestido",
    description:"Vestido negro largo de morley",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/2.png"
  },
  {
    name:"Vestido",
    description:"Vestido negro largo de morley",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/2.png"
  },
  {
    name:"Vestido",
    description:"Vestido negro largo de morley",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/2.png"
  },
  {
    name:"Vestido",
    description:"Vestido negro largo de morley",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/2.png"
  },
  {
    name:"Vestido",
    description:"Vestido negro largo de morley",
    category: "Vestidos",
    price: 1500,
    stock: 10,
    image:"assets/img/2.png"
  }*/
]

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(item: Ropa):void{
    if(item.quantity<item.stock)
    item.quantity++;
  }

  downQuantity(item: Ropa):void{
    if(item.quantity>0)
    item.quantity--;
  }

}
