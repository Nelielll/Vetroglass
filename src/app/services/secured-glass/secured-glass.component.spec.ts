import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredGlassComponent } from './secured-glass.component';

describe('SecuredGlassComponent', () => {
  let component: SecuredGlassComponent;
  let fixture: ComponentFixture<SecuredGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuredGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuredGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
