import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalzadoProductComponent } from './calzado-product.component';

describe('CalzadoProductComponent', () => {
  let component: CalzadoProductComponent;
  let fixture: ComponentFixture<CalzadoProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalzadoProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalzadoProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
