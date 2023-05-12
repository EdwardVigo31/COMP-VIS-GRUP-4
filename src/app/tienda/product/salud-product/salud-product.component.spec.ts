import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludProductComponent } from './salud-product.component';

describe('SaludProductComponent', () => {
  let component: SaludProductComponent;
  let fixture: ComponentFixture<SaludProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaludProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
