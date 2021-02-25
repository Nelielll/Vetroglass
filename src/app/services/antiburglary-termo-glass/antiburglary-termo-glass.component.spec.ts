import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiburglaryTermoGlassComponent } from './antiburglary-termo-glass.component';

describe('AntiburglaryTermoGlassComponent', () => {
  let component: AntiburglaryTermoGlassComponent;
  let fixture: ComponentFixture<AntiburglaryTermoGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiburglaryTermoGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiburglaryTermoGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
