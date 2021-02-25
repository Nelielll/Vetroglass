import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrnamentalTermoGlassComponent } from './ornamental-termo-glass.component';

describe('OrnamentalTermoGlassComponent', () => {
  let component: OrnamentalTermoGlassComponent;
  let fixture: ComponentFixture<OrnamentalTermoGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrnamentalTermoGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrnamentalTermoGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
