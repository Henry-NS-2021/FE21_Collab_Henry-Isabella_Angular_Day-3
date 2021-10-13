import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;
  
  constructor() { }

  ngOnInit(): void {
  }

}
