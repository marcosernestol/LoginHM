import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

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
  private readonly baseUrl = environment.apiBaseUrl;

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
