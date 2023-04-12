import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia de retornar "invalido" el formulario', () => {
    const mockCredentials = {
      email: '0x0x0x0x0x0',
      password: '1111111111111111111111111',
    };

    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    emailForm.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);

    expect(component.formLogin.invalid).toEqual(true);
  });

  it('Deberia de retornar "valido" el formulario', () => {
    const mockCredentials = {
      email: 'test@test.com',
      password: '12345678',
    };

    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    emailForm.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);

    expect(component.formLogin.invalid).toEqual(false);
  });

  it('El boton deberia de tener la palabra "Iniciar sesión"', () => {
    const elementRef = fixture.debugElement.query(
      By.css('.form-action button')
    );
    const getInnerText = elementRef.nativeElement.innerText;

    expect(getInnerText).toEqual('Iniciar sesión');
  });
});
