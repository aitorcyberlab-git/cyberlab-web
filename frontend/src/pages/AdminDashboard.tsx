import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { api } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';
import { 
  Shield, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Mail, 
  Phone, 
  User,
  MessageSquare,
  Calendar,
  RefreshCw
} from 'lucide-react';

interface AuditRequest {
  id: number;
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

const statusConfig = {
  pending: { label: 'Pendiente', color: 'bg-yellow-500', icon: Clock },
  in_progress: { label: 'En Proceso', color: 'bg-blue-500', icon: RefreshCw },
  completed: { label: 'Completada', color: 'bg-green-500', icon: CheckCircle },
  cancelled: { label: 'Cancelada', color: 'bg-red-500', icon: XCircle },
};

export default function AdminDashboard() {
  const [requests, setRequests] = useState<AuditRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchRequests = async () => {
    try {
      setLoading(true);
      const response = await api.entities.audit_requests.queryAll({
        sort: '-created_at',
        limit: 100,
      });
      setRequests(response.data.items);
    } catch (error: unknown) {
      toast({
        title: "Error",
        description: "No se pudieron cargar las solicitudes",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: number, newStatus: string) => {
    try {
      await api.entities.audit_requests.update({
        id: id.toString(),
        data: { 
          status: newStatus,
          updated_at: new Date().toISOString()
        },
      });
      
      toast({
        title: "Estado actualizado",
        description: `La solicitud ha sido marcada como ${statusConfig[newStatus as keyof typeof statusConfig].label}`,
      });
      
      fetchRequests();
    } catch (error: unknown) {
      toast({
        title: "Error",
        description: "No se pudo actualizar el estado",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const stats = {
    total: requests.length,
    pending: requests.filter(r => r.status === 'pending').length,
    in_progress: requests.filter(r => r.status === 'in_progress').length,
    completed: requests.filter(r => r.status === 'completed').length,
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Shield className="text-[#00D9FF]" size={32} />
          <h1 className="text-3xl font-bold">Panel de Administración</h1>
        </div>
        <p className="text-gray-400">Gestión de Solicitudes de Auditoría</p>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-[#1A1A2E] border-cyan-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total</p>
              <p className="text-3xl font-bold text-white">{stats.total}</p>
            </div>
            <Shield className="text-[#00D9FF]" size={32} />
          </div>
        </Card>

        <Card className="bg-[#1A1A2E] border-yellow-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Pendientes</p>
              <p className="text-3xl font-bold text-yellow-500">{stats.pending}</p>
            </div>
            <Clock className="text-yellow-500" size={32} />
          </div>
        </Card>

        <Card className="bg-[#1A1A2E] border-blue-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">En Proceso</p>
              <p className="text-3xl font-bold text-blue-500">{stats.in_progress}</p>
            </div>
            <RefreshCw className="text-blue-500" size={32} />
          </div>
        </Card>

        <Card className="bg-[#1A1A2E] border-green-500/30 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Completadas</p>
              <p className="text-3xl font-bold text-green-500">{stats.completed}</p>
            </div>
            <CheckCircle className="text-green-500" size={32} />
          </div>
        </Card>
      </div>

      {/* Requests List */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Solicitudes Recientes</h2>
          <Button
            onClick={fetchRequests}
            variant="outline"
            className="border-cyan-500/30 text-white hover:bg-[#1A1A2E]"
          >
            <RefreshCw size={16} className="mr-2" />
            Actualizar
          </Button>
        </div>

        {loading ? (
          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8 text-center">
            <p className="text-gray-400">Cargando solicitudes...</p>
          </Card>
        ) : requests.length === 0 ? (
          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8 text-center">
            <p className="text-gray-400">No hay solicitudes registradas</p>
          </Card>
        ) : (
          <div className="space-y-4">
            {requests.map((request) => {
              const StatusIcon = statusConfig[request.status].icon;
              return (
                <Card
                  key={request.id}
                  className="bg-[#1A1A2E] border-cyan-500/30 p-6 hover:border-cyan-500/60 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{request.company}</h3>
                        <Badge className={`${statusConfig[request.status].color} text-white`}>
                          <StatusIcon size={14} className="mr-1" />
                          {statusConfig[request.status].label}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <User size={14} className="text-[#00D9FF]" />
                          <span>{request.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail size={14} className="text-[#00D9FF]" />
                          <span>{request.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone size={14} className="text-[#00D9FF]" />
                          <span>{request.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-[#00D9FF]" />
                          <span>{new Date(request.created_at).toLocaleDateString('es-ES')}</span>
                        </div>
                      </div>

                      <div className="mt-3 flex items-start gap-2">
                        <MessageSquare size={14} className="text-[#00D9FF] mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-300 line-clamp-2">{request.message}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    {request.status !== 'in_progress' && (
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          updateStatus(request.id, 'in_progress');
                        }}
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                      >
                        Marcar En Proceso
                      </Button>
                    )}
                    {request.status !== 'completed' && (
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          updateStatus(request.id, 'completed');
                        }}
                        className="bg-green-500 hover:bg-green-600 text-white"
                      >
                        Marcar Completada
                      </Button>
                    )}
                    {request.status !== 'cancelled' && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          updateStatus(request.id, 'cancelled');
                        }}
                        className="border-red-500/30 text-red-500 hover:bg-red-500/10"
                      >
                        Cancelar
                      </Button>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}