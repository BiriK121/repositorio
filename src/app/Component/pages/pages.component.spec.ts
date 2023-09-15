import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAGESComponent } from './pages.component';

describe('PAGESComponent', () => {
  let component: PAGESComponent;
  let fixture: ComponentFixture<PAGESComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PAGESComponent]
    });
    fixture = TestBed.createComponent(PAGESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
