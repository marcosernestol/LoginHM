import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { RegistroPersonaApiService } from './registro-persona-api.service';

describe('RegistroPersonaApiService (Jest)', () => {
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

  it('should fetch active users from RegistroPersona endpoint', () => {
    const mockResponse = {
      RegistroPersona: [
        {
          id: 1,
          usuario: 'usuario-demo',
          email: 'demo@example.com',
          password: 'secret123',
          activo: true,
        },
      ],
    };

    service.getActivos().subscribe((response) => {
      expect(response.RegistroPersona).toHaveLength(1);
      expect(response.RegistroPersona[0].usuario).toBe('usuario-demo');
    });

    const req = httpMock.expectOne('http://localhost:5999/api/RegistroPersona');
    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
  });
});
