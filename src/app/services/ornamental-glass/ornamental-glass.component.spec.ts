import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrnamentalGlassComponent } from './ornamental-glass.component';

describe('OrnamentalGlassComponent', () => {
  let component: OrnamentalGlassComponent;
  let fixture: ComponentFixture<OrnamentalGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrnamentalGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrnamentalGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
