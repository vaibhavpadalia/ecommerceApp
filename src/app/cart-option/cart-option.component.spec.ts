import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOptionComponent } from './cart-option.component';

describe('CartOptionComponent', () => {
  let component: CartOptionComponent;
  let fixture: ComponentFixture<CartOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
