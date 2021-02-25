import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiburglaryGlassComponent } from './antiburglary-glass.component';

describe('AntiburglaryGlassComponent', () => {
  let component: AntiburglaryGlassComponent;
  let fixture: ComponentFixture<AntiburglaryGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiburglaryGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiburglaryGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
