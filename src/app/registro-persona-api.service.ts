import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RegistroPersonaItem {
  id: number;
  usuario: string;
  email: string;
  password: string;
  activo: boolean;
}

interface RegistroPersonaResponse {
  RegistroPersona: RegistroPersonaItem[];
}

@Injectable({ providedIn: 'root' })
export class RegistroPersonaApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:5999';

  getActivos(): Observable<RegistroPersonaResponse> {
    return this.http.get<RegistroPersonaResponse>(`${this.baseUrl}/api/RegistroPersona`);
  }
}
