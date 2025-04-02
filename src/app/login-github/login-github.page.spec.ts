import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginGithubPage } from './login-github.page';

describe('LoginGithubPage', () => {
  let component: LoginGithubPage;
  let fixture: ComponentFixture<LoginGithubPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGithubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
