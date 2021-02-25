import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizedTermoGlassComponent } from './personalized-termo-glass.component';

describe('PersonalizedTermoGlassComponent', () => {
  let component: PersonalizedTermoGlassComponent;
  let fixture: ComponentFixture<PersonalizedTermoGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizedTermoGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizedTermoGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
