import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordEditingComponent } from './password-editing.component';

describe('PasswordEditingComponent', () => {
  let component: PasswordEditingComponent;
  let fixture: ComponentFixture<PasswordEditingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordEditingComponent]
    });
    fixture = TestBed.createComponent(PasswordEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
