import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { RegistroPersonaApiService } from './registro-persona-api.service';
import { ProbarElDoble } from './probar-el-doble';

describe('RegistroPersonaApiService (Vitest)', () => {
  let service: RegistroPersonaApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(RegistroPersonaApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch RegistroPersona data from API', () => {
    const mockResponse = {
      RegistroPersona: [
        {
          id: 10,
          usuario: 'vitest-user',
          email: 'vitest@example.com',
          password: 'vitest123',
          activo: true,
        },
      ],
    };

    service.getActivos().subscribe((response) => {
      expect(response.RegistroPersona).toHaveLength(1);
      expect(response.RegistroPersona[0].email).toBe('vitest@example.com');
    });

    const req = httpMock.expectOne('http://localhost:5999/api/RegistroPersona');
    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
  });
});


//---------------------------------------------------------------
// Aqui escribí mi prueba para Vitest, a ver si me funciona.
describe('Mi prueba Vitest para ProbarElDoble', () => {
  it('Debe retornar el doble del numero dado', () => {
    const resultado  = ProbarElDoble(2);
    expect(resultado).toBe(4);
  });
});


