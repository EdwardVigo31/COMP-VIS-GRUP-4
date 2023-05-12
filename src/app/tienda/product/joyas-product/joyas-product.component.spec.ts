import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoyasProductComponent } from './joyas-product.component';

describe('JoyasProductComponent', () => {
  let component: JoyasProductComponent;
  let fixture: ComponentFixture<JoyasProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoyasProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoyasProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
