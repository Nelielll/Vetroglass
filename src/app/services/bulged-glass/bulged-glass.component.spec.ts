import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulgedGlassComponent } from './bulged-glass.component';

describe('BulgedGlassComponent', () => {
  let component: BulgedGlassComponent;
  let fixture: ComponentFixture<BulgedGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulgedGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulgedGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
