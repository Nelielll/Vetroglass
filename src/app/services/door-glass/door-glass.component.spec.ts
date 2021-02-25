import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorGlassComponent } from './door-glass.component';

describe('DoorGlassComponent', () => {
  let component: DoorGlassComponent;
  let fixture: ComponentFixture<DoorGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
