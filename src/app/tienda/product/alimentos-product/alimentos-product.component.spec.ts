import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentosProductComponent } from './alimentos-product.component';

describe('AlimentosProductComponent', () => {
  let component: AlimentosProductComponent;
  let fixture: ComponentFixture<AlimentosProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentosProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentosProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
