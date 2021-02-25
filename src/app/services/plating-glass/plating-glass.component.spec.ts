import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatingGlassComponent } from './plating-glass.component';

describe('PlatingGlassComponent', () => {
  let component: PlatingGlassComponent;
  let fixture: ComponentFixture<PlatingGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatingGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatingGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
