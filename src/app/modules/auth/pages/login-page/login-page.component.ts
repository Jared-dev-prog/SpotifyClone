import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  sessionError: boolean = false;
  formLogin: FormGroup = new FormGroup({});

  constructor(
    private authService: AuthService,
    private cookie: CookieService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    });
  }

  public sendLogin(): void {
    const { email, password } = this.formLogin.value;
    this.authService.sendCredentials(email, password).subscribe({
      next: (response) => {
        console.log('Inicio de sesion exitoso', response);
        const { tokenSession, data } = response;
        this.cookie.set('token', tokenSession, 4, '/');
        this.router.navigate(['/', 'tracks']);
      },
      error: (e) => {
        this.sessionError = true;
        setTimeout(() => {
          this.sessionError = false;
        }, 5000);

        console.log('Error en el inicio de sesion', e);
      },
    });
  }
}
