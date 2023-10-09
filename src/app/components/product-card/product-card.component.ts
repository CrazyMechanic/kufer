import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
//   export class ProductCardComponent implements OnInit {
//   productId: number;
//   productData: any; // Заменить на интерфейс или модель данных
//
//   constructor(
//     private route: ActivatedRoute,
//     private productService: ProductService
//   ) {}
//
//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       this.productId = +params['id'];
//       this.loadProductData(this.productId);
//     });
//   }
//
//   loadProductData(productId: number): void {
//     // Использывать сервис productService для загрузки данных о продукте по ID
//     this.productData = this.productService.getProduct(productId);
//   }
// }
}
