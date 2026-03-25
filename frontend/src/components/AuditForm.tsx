import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { X, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { submitAuditRequest } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

interface AuditFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditForm({ isOpen, onClose }: AuditFormProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await submitAuditRequest(formData);
      
      if (response.success) {
        setIsSuccess(true);
        
        toast({
          title: "¡Solicitud Enviada!",
          description: response.message,
          duration: 5000,
        });
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            message: '',
          });
          onClose();
        }, 3000);
      }
    } catch (error: unknown) {
      const err = error as Error;
      toast({
        title: "Error",
        description: err.message || 'Hubo un error al enviar el formulario. Por favor, intenta nuevamente.',
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="bg-[#0A0A0A] border-cyan-500 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#00D9FF] to-[#0080FF] p-6 flex items-center justify-between sticky top-0 z-10">
          <h2 className="text-2xl font-bold text-black">Solicitar Auditoría de Seguridad</h2>
          <button
            onClick={onClose}
            className="text-black hover:text-black/80 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-12">
              <CheckCircle className="text-[#00D9FF] mx-auto mb-4" size={64} />
              <h3 className="text-2xl font-bold text-white mb-2">¡Solicitud Enviada!</h3>
              <p className="text-gray-400">
                Tu solicitud ha sido guardada y enviada exitosamente.
              </p>
              <p className="text-gray-400 mt-2">
                Recibirás un email de confirmación y nos pondremos en contacto contigo en las próximas 24 horas.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-bold text-[#00D9FF] mb-2 block">
                  Nombre Completo *
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Juan Pérez"
                  className="bg-[#1A1A2E] border-cyan-500/30 text-white placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-[#00D9FF] mb-2 block">
                  Email Corporativo *
                </label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="juan.perez@empresa.com"
                  className="bg-[#1A1A2E] border-cyan-500/30 text-white placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-[#00D9FF] mb-2 block">
                  Empresa *
                </label>
                <Input
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Nombre de la empresa"
                  className="bg-[#1A1A2E] border-cyan-500/30 text-white placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-[#00D9FF] mb-2 block">
                  Teléfono *
                </label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+34 XXX XXX XXX"
                  className="bg-[#1A1A2E] border-cyan-500/30 text-white placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-[#00D9FF] mb-2 block">
                  Mensaje / Detalles de la Auditoría *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe brevemente tus necesidades de auditoría de seguridad..."
                  rows={5}
                  className="bg-[#1A1A2E] border-cyan-500/30 text-white placeholder:text-gray-500 resize-none"
                />
              </div>

              <div className="bg-[#1A1A2E] border border-cyan-500/30 rounded-lg p-4">
                <p className="text-xs text-gray-400">
                  Al enviar este formulario, aceptas nuestra{' '}
                  <a href="/politica-privacidad" className="text-[#00D9FF] hover:underline">
                    Política de Privacidad
                  </a>
                  . Tus datos serán guardados de forma segura en nuestra base de datos y solo se utilizarán para contactarte sobre tu solicitud de auditoría.
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  onClick={onClose}
                  variant="outline"
                  className="flex-1 border-cyan-500/30 text-white hover:bg-[#1A1A2E]"
                  disabled={isSubmitting}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-[#00D9FF] text-black hover:bg-[#0080FF] font-bold"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Enviar Solicitud
                    </>
                  )}
                </Button>
              </div>

              <p className="text-center text-sm text-gray-400">
                Tu solicitud será guardada en nuestra base de datos y recibirás una confirmación por email.
              </p>
            </form>
          )}
        </div>
      </Card>
    </div>
  );
}