import { Component, ChangeDetectorRef, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() item: any;
  constructor(private router: Router) {}
  productById(id: number) {
    this.router.navigateByUrl(`layout/home/product-details/${id}`);
  }
}
