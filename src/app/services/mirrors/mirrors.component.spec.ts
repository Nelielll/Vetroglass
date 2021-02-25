import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MirrorsComponent } from './mirrors.component';

describe('MirrorsComponent', () => {
  let component: MirrorsComponent;
  let fixture: ComponentFixture<MirrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MirrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MirrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
