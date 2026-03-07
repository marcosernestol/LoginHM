
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly formBuilder = inject(FormBuilder);

  submitted = false;

  readonly loginForm = this.formBuilder.nonNullable.group({
    nombreUnico: ['', [Validators.required, Validators.minLength(3)]],
    correoElectronico: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get nombreUnicoControl() {
    return this.loginForm.controls.nombreUnico;
  }

  get correoElectronicoControl() {
    return this.loginForm.controls.correoElectronico;
  }

  get passwordControl() {
    return this.loginForm.controls.password;
  }

  guardarFormulario(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const payload = this.loginForm.getRawValue();
    console.log('Login válido:', payload);
    alert('LoginHM: formulario válido.');
  }

  cancelar(): void {
    this.loginForm.reset({
      nombreUnico: '',
      correoElectronico: '',
      password: '',
    });
    this.submitted = false;
  }
}




