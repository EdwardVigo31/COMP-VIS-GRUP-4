import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescartablesProductComponent } from './descartables-product.component';

describe('DescartablesProductComponent', () => {
  let component: DescartablesProductComponent;
  let fixture: ComponentFixture<DescartablesProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescartablesProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescartablesProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
