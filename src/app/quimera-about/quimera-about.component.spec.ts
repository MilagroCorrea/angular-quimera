import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuimeraAboutComponent } from './quimera-about.component';

describe('QuimeraAboutComponent', () => {
  let component: QuimeraAboutComponent;
  let fixture: ComponentFixture<QuimeraAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuimeraAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuimeraAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
