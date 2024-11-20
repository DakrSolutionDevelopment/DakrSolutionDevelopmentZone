import {Routes} from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CartComponent } from './pages/cart/cart.component';
export const routes:Routes=[
  {path:'login', component: LoginComponent},
  {path:'register', component:RegisterComponent},
  {
    path:'',
    component:LayoutComponent,
    children:
    [
      { path: 'home', component: HomeComponent }, 
      { path: 'products', component: ProductListComponent }, 
      { path: 'product/:id', component: ProductDetailsComponent }, 
      { path: 'cart', component: CartComponent }

    ]
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];