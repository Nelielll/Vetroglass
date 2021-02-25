import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlastedGlassComponent } from './blasted-glass.component';

describe('BlastedGlassComponent', () => {
  let component: BlastedGlassComponent;
  let fixture: ComponentFixture<BlastedGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlastedGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlastedGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
