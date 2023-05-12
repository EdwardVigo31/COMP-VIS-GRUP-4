import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaProductComponent } from './moda-product.component';

describe('ModaProductComponent', () => {
  let component: ModaProductComponent;
  let fixture: ComponentFixture<ModaProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
