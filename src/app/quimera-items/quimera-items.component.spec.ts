import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuimeraItemsComponent } from './quimera-items.component';

describe('QuimeraItemsComponent', () => {
  let component: QuimeraItemsComponent;
  let fixture: ComponentFixture<QuimeraItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuimeraItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuimeraItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
