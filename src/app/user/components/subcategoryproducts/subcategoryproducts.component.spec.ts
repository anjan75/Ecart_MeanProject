import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryproductsComponent } from './subcategoryproducts.component';

describe('SubcategoryproductsComponent', () => {
  let component: SubcategoryproductsComponent;
  let fixture: ComponentFixture<SubcategoryproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoryproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
