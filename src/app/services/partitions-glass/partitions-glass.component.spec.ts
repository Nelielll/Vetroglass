import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartitionsGlassComponent } from './partitions-glass.component';

describe('PartitionsGlassComponent', () => {
  let component: PartitionsGlassComponent;
  let fixture: ComponentFixture<PartitionsGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartitionsGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartitionsGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
