import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginGooglePage } from './login-google.page';

describe('LoginGooglePage', () => {
  let component: LoginGooglePage;
  let fixture: ComponentFixture<LoginGooglePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGooglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
