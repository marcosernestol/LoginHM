import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { AgentApiService } from './agent-api.service';

describe('AgentApiService (Vitest)', () => {
  let service: AgentApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(AgentApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should call Google endpoint with the provided message', () => {
    const payload = { ok: true, model: 'gemini', reply: 'Hola desde Vitest' };

    service.invokeGoogle('Prueba Vitest').subscribe((response) => {
      expect(response).toEqual(payload);
      expect(response.ok).toBe(true);
    });

    const req = httpMock.expectOne('http://localhost:5999/api/agent/google/invoke');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ message: 'Prueba Vitest' });

    req.flush(payload);
  });
});
