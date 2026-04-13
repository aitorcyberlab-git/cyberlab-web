import { createClient } from '@metagptx/web-sdk';

export const api = createClient();

export interface AuditRequestData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export interface AuditRequestResponse {
  success: boolean;
  message: string;
  request_id?: number;
}

export const submitAuditRequest = async (data: AuditRequestData): Promise<AuditRequestResponse> => {
  try {
    const res = await fetch('https://cyberlab-web-5.onrender.com/api/v1/entities/audit_requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        status: 'pending',
        created_at: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.detail || 'Error al enviar');
    }

    const result = await res.json();
    return {
      success: true,
      message: 'Solicitud enviada correctamente',
      request_id: result.id,
    };
  } catch (error: unknown) {
    const err = error as Error;
    throw new Error(err.message || 'Error desconocido');
  }
};