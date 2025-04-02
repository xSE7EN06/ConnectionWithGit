import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeQrBrrsPage } from './code-qr-brrs.page';

describe('CodeQrBrrsPage', () => {
  let component: CodeQrBrrsPage;
  let fixture: ComponentFixture<CodeQrBrrsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeQrBrrsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
