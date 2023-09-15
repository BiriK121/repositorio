import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DATOSComponent } from './datos.component';

describe('DATOSComponent', () => {
  let component: DATOSComponent;
  let fixture: ComponentFixture<DATOSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DATOSComponent]
    });
    fixture = TestBed.createComponent(DATOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
