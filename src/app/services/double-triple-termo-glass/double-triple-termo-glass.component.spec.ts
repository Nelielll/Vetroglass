import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleTripleTermoGlassComponent } from './double-triple-termo-glass.component';

describe('DoubleTripletermoGlassComponent', () => {
  let component: DoubleTripleTermoGlassComponent;
  let fixture: ComponentFixture<DoubleTripleTermoGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleTripleTermoGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleTripleTermoGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
