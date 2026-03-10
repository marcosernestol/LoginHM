
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

/**
 * Componente raiz de LoginHM.
 *
 * @remarks
 * Este es un buen lugar para documentar el objetivo del componente,
 * dependencias principales y reglas de negocio relevantes.
 */
export class App {
  private readonly formBuilder = inject(FormBuilder);

  /**
   * Indica si el usuario ya intento enviar el formulario.
   * Se usa para mostrar errores de validacion en la vista.
   */
  submitted = false;

  /**
   * Formulario reactivo principal del login.
   *
   * @property nombreUnico - Nombre de usuario unico (minimo 3 caracteres).
   * @property correoElectronico - Correo con formato valido.
   * @property password - Contrasena (minimo 6 caracteres).
   */
  readonly loginForm = this.formBuilder.nonNullable.group({
    nombreUnico: ['', [Validators.required, Validators.minLength(3)]],
    correoElectronico: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  /** Devuelve el control del campo `nombreUnico` para validaciones en template. */
  get nombreUnicoControl() {
    return this.loginForm.controls.nombreUnico;
  }

  /** Devuelve el control del campo `correoElectronico` para validaciones en template. */
  get correoElectronicoControl() {
    return this.loginForm.controls.correoElectronico;
  }

  /** Devuelve el control del campo `password` para validaciones en template. */
  get passwordControl() {
    return this.loginForm.controls.password;
  }

  /**
   * Procesa el envio del formulario.
   *
   * @returns `void`
   * @remarks
   * Marca el formulario como enviado, valida campos y, si es valido,
   * construye el payload para procesarlo (API, servicio, etc.).
   */
  guardarFormulario(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
          console.log('LoginHM Invàlido');
          alert('LoginHM Invàlido');
      return;
    }

    const payload = this.loginForm.getRawValue();
    console.log('Login válido:', payload);
    alert('LoginHM: formulario válido.');
  }

  /**
   * Limpia el formulario y reinicia el estado visual de validacion.
   *
   * @returns `void`
   */
  cancelar(): void {
    this.loginForm.reset({
      nombreUnico: '',
      correoElectronico: '',
      password: '',
    });
    this.submitted = false;
  }
}




