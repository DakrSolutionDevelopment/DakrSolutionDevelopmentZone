import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  featuredProducts = [
    { id: 1, name: 'Product 1', description: 'This is the description of Product 1' },
    { id: 2, name: 'Product 2', description: 'This is the description of Product 2' },
    { id: 3, name: 'Product 3', description: 'This is the description of Product 3' }
  ];
}
