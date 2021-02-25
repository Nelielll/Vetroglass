import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowerGlassComponent } from './shower-glass.component';

describe('ShowerGlassComponent', () => {
  let component: ShowerGlassComponent;
  let fixture: ComponentFixture<ShowerGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowerGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowerGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
