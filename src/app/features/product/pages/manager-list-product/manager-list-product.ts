import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { PageRequest } from 'src/app/core/models/page-request.model';
import { Product } from '../../models/product.model';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-manager-list-product',
  imports: [SharedModule],
  templateUrl: './manager-list-product.html'
})
export class ManagerListProduct implements OnInit {
  private pageRequest = new PageRequest(1, 9, '', 'id', 'DESC');
  private productService = inject(ProductService);
  public listProducts = signal<Product[]>([]);
  public totalItems: number = 0;

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts(this.pageRequest).subscribe({
      next: (response) => {
        this.listProducts.set(response.data?.result ?? []);
        this.totalItems = response.data?.total ?? 0;
      },
      error: (err) => console.error('API Error:', err)
    });
  }
}
