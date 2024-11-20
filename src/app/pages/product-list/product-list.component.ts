import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service'; // Adjust the path as necessary
import { Product } from '../../model/product'; // Adjust the path as necessary

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'] // Corrected to `styleUrls`
})
export class ProductListComponent implements OnInit {
  products: Product[] = []; // Define the products property

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}