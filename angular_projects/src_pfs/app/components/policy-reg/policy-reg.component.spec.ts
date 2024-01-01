import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyRegComponent } from './policy-reg.component';

describe('PolicyRegComponent', () => {
  let component: PolicyRegComponent;
  let fixture: ComponentFixture<PolicyRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyRegComponent]
    });
    fixture = TestBed.createComponent(PolicyRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
