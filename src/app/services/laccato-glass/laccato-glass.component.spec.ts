import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaccatoGlassComponent } from './laccato-glass.component';

describe('LaccatoGlassComponent', () => {
  let component: LaccatoGlassComponent;
  let fixture: ComponentFixture<LaccatoGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaccatoGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaccatoGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
