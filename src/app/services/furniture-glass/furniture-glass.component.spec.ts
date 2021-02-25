import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureGlassComponent } from './furniture-glass.component';

describe('FurnitureGlassComponent', () => {
  let component: FurnitureGlassComponent;
  let fixture: ComponentFixture<FurnitureGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnitureGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
