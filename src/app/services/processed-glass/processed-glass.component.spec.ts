import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedGlassComponent } from './processed-glass.component';

describe('ProcessedGlassComponent', () => {
  let component: ProcessedGlassComponent;
  let fixture: ComponentFixture<ProcessedGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessedGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
