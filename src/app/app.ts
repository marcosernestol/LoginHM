
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AgentApiService } from './agent-api.service';
import { RegistroPersonaApiService } from './registro-persona-api.service';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  private readonly agentApiService = inject(AgentApiService);
  private readonly registroPersonaApiService = inject(RegistroPersonaApiService);

  /**
   * Indica si el usuario ya intento enviar el formulario.
   * Se usa para mostrar errores de validacion en la vista.
   */
  submitted = false;
  readonly loginLoading = signal(false);
  readonly loginError = signal('');
  readonly usuarioAutenticado = signal('');
  readonly ollamaLoading = signal(false);
  readonly ollamaReply = signal('');
  readonly ollamaError = signal('');
  readonly googleLoading = signal(false);
  readonly googleReply = signal('');
  readonly googleError = signal('');

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
    ollamaPrompt: [''],
    googlePrompt: [''],
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

  get ollamaPromptControl() {
    return this.loginForm.controls.ollamaPrompt;
  }

  get googlePromptControl() {
    return this.loginForm.controls.googlePrompt;
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
    this.loginError.set('');

    if (this.loginForm.invalid) {
      this.loginError.set('Login invalido: revisa los campos capturados.');
      return;
    }

    const payload = this.loginForm.getRawValue();
    const usuarioInput = payload.nombreUnico.trim().toLowerCase();
    const correoInput = payload.correoElectronico.trim().toLowerCase();
    const passwordInput = payload.password;

    this.loginLoading.set(true);

    this.registroPersonaApiService.getActivos().subscribe({
      next: (response) => {
        const registros = Array.isArray(response?.RegistroPersona) ? response.RegistroPersona : [];
        const registroMatch = registros.find((registro) => {
          const usuarioRegistro = String(registro?.usuario || '')
            .trim()
            .toLowerCase();
          const correoRegistro = String(registro?.email || '')
            .trim()
            .toLowerCase();
          const passwordRegistro = String(registro?.password || '');

          return (
            usuarioRegistro === usuarioInput &&
            correoRegistro === correoInput &&
            passwordRegistro === passwordInput
          );
        });

        if (!registroMatch) {
          this.loginError.set('Usuario, e-mail o contrasena incorrectos.');
          this.loginLoading.set(false);
          return;
        }

        this.usuarioAutenticado.set(registroMatch.usuario || payload.nombreUnico);
        this.loginLoading.set(false);
      },
      error: () => {
        this.loginError.set('No fue posible consultar el WS RegistroPersona.');
        this.loginLoading.set(false);
      },
    });
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
      ollamaPrompt: '',
      googlePrompt: '',
    });
    this.submitted = false;
    this.loginError.set('');
    this.ollamaReply.set('');
    this.ollamaError.set('');
    this.googleReply.set('');
    this.googleError.set('');
  }

  cerrarSesion(): void {
    this.usuarioAutenticado.set('');
    this.cancelar();
  }

  enviarAOllama(): void {
    const prompt = this.ollamaPromptControl.value.trim();

    if (!prompt) {
      this.ollamaError.set('Escribe un mensaje para el agente de Ollama.');
      this.ollamaReply.set('');
      return;
    }

    this.ollamaLoading.set(true);
    this.ollamaError.set('');

    this.agentApiService.invokeOllama(prompt).subscribe({
      next: (response) => {
        if (!response.ok) {
          this.ollamaReply.set('');
          this.ollamaError.set(response.message || 'No fue posible obtener respuesta del agente.');
          this.ollamaLoading.set(false);
          return;
        }

        this.ollamaReply.set(response.reply || '(El agente no devolvio texto)');
        this.ollamaLoading.set(false);
      },
      error: (error) => {
        const message =
          error?.error?.message ||
          error?.error?.detail ||
          'Error de conexion con el backend del agente Ollama.';

        this.ollamaReply.set('');
        this.ollamaError.set(message);
        this.ollamaLoading.set(false);
      },
    });
  }

  enviarAGoogleLangChain(): void {
    const prompt = this.googlePromptControl.value.trim();

    if (!prompt) {
      this.googleError.set('Escribe un mensaje para el agente de Google.');
      this.googleReply.set('');
      return;
    }

    this.googleLoading.set(true);
    this.googleError.set('');

    this.agentApiService.invokeGoogle(prompt).subscribe({
      next: (response) => {
        if (!response.ok) {
          this.googleReply.set('');
          this.googleError.set(
            response.message || 'No fue posible obtener respuesta del agente LangChain + Google.'
          );
          this.googleLoading.set(false);
          return;
        }

        this.googleReply.set(response.reply || '(El agente no devolvio texto)');
        this.googleLoading.set(false);
      },
      error: (error) => {
        const message =
          error?.error?.message ||
          error?.error?.detail ||
          'Error de conexion con el backend del agente LangChain + Google.';

        this.googleReply.set('');
        this.googleError.set(message);
        this.googleLoading.set(false);
      },
    });
  }
}




