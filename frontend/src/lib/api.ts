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
    const response = await fetch('https://cyberlab-web-5.onrender.com/api/v1/entities/audit_requests', {
      url: '/api/v1/entities/audit_requests',
      method: 'POST',
      data,
    });
    
    return {
      success: true,
      message: 'Solicitud enviada correctamente',
      request_id: response.data?.id,
    };
  } catch (error: unknown) {
    const err = error as { data?: { detail?: string }; response?: { data?: { detail?: string } }; message?: string };
    const detail = err?.data?.detail || err?.response?.data?.detail || err.message || 'Error desconocido';
    throw new Error(detail);
  }
};