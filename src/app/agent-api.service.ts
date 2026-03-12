import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface AgentInvokeResponse {
  ok: boolean;
  model?: string;
  reply?: string;
  message?: string;
  detail?: string;
}

@Injectable({ providedIn: 'root' })
export class AgentApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:5999';

  invokeOllama(message: string): Observable<AgentInvokeResponse> {
    return this.http.post<AgentInvokeResponse>(`${this.baseUrl}/api/agent/ollama/invoke`, {
      message,
    });
  }

  invokeGoogle(message: string): Observable<AgentInvokeResponse> {
    return this.http.post<AgentInvokeResponse>(`${this.baseUrl}/api/agent/google/invoke`, {
      message,
    });
  }

  invoke(message: string): Observable<AgentInvokeResponse> {
    return this.http.post<AgentInvokeResponse>(`${this.baseUrl}/api/agent/invoke`, {
      message,
    });
  }
}
