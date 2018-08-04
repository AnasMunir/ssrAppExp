import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishryLibComponent } from './fishry-lib.component';

describe('FishryLibComponent', () => {
  let component: FishryLibComponent;
  let fixture: ComponentFixture<FishryLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishryLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishryLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
