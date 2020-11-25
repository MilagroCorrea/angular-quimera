import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaCartComponent } from './ropa-cart.component';

describe('RopaCartComponent', () => {
  let component: RopaCartComponent;
  let fixture: ComponentFixture<RopaCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopaCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RopaCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
