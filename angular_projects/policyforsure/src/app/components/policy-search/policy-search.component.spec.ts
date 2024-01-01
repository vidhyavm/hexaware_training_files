import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicySearchComponent } from './policy-search.component';

describe('PolicySearchComponent', () => {
  let component: PolicySearchComponent;
  let fixture: ComponentFixture<PolicySearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolicySearchComponent]
    });
    fixture = TestBed.createComponent(PolicySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
