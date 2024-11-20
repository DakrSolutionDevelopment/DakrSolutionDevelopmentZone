import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service'; // Adjust the path as necessary
import { Product } from '../../model/product'; // Adjust the path as necessary

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'] // Correct property name
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  private productId: number | null = null;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productId = id !== null ? parseInt(id, 10) : null;
    if (this.productId !== null) {
      this.productService.getProductById(this.productId).subscribe((data: Product) => {
        this.product = data;
      });
    }
  }
}
