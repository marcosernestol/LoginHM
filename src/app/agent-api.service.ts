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

  invoke(message: string): Observable<AgentInvokeResponse> {
    return this.http.post<AgentInvokeResponse>(`${this.baseUrl}/api/agent/invoke`, {
      message,
    });
  }
}
