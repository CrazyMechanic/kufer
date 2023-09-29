import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesOfProductsComponent } from './categories-of-products.component';

describe('CategoriesOfProductsComponent', () => {
  let component: CategoriesOfProductsComponent;
  let fixture: ComponentFixture<CategoriesOfProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesOfProductsComponent]
    });
    fixture = TestBed.createComponent(CategoriesOfProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
