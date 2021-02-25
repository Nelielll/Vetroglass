import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredTermoGlassComponent } from './secured-termo-glass.component';

describe('SecuredTermoGlassComponent', () => {
  let component: SecuredTermoGlassComponent;
  let fixture: ComponentFixture<SecuredTermoGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuredTermoGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuredTermoGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
