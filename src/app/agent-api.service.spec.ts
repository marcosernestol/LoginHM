import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { AgentApiService } from './agent-api.service';

describe('AgentApiService (Jest)', () => {
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

  it('should call Ollama endpoint with the provided message', () => {
    const payload = { ok: true, model: 'llama3.2', reply: 'Hola!' };

    service.invokeOllama('Prueba').subscribe((response) => {
      expect(response).toEqual(payload);
      expect(response.ok).toBe(true);
    });

    const req = httpMock.expectOne('http://localhost:5999/api/agent/ollama/invoke');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ message: 'Prueba' });

    req.flush(payload);
  });
});
