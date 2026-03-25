import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MessageCircle, X, Send, AlertTriangle, Shield } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
  isUrgent?: boolean;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: '¡Hola! Soy el asistente de ciberseguridad de Cyberlab Forensics con IA. Puedo ayudarte con incidentes de seguridad, ataques informáticos y consultas generales. ¿En qué puedo ayudarte?',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Escuchar evento personalizado para abrir el chatbot
  useEffect(() => {
    const handleOpenChatBot = () => {
      setIsOpen(true);
    };
    window.addEventListener('openChatBot', handleOpenChatBot);
    return () => window.removeEventListener('openChatBot', handleOpenChatBot);
  }, []);

  const quickReplies = [
    '🚨 Ataque de Ransomware',
    '🛡️ Phishing detectado',
    '💻 Sistema comprometido',
    'ℹ️ Información general',
  ];

  // Base de conocimiento de respuestas de emergencia
  const emergencyResponses: { [key: string]: string } = {
    'ransomware': `🚨 PROTOCOLO DE RESPUESTA INMEDIATA - RANSOMWARE:

1️⃣ DESCONECTAR INMEDIATAMENTE:
   • Desconecte el equipo de la red (WiFi y cable Ethernet)
   • NO apague el equipo todavía
   • Desconecte dispositivos USB y externos

2️⃣ AISLAR EL INCIDENTE:
   • Identifique otros equipos potencialmente infectados
   • Aísle todos los sistemas afectados
   • NO pague el rescate sin consultar

3️⃣ DOCUMENTAR:
   • Tome fotos de los mensajes de ransomware
   • Anote la hora exacta del incidente
   • Guarde cualquier email o archivo sospechoso

4️⃣ CONTACTAR URGENTE:
   📞 Llame a nuestro equipo de respuesta: 640 302 600
   📧 Email urgente: info@cyberlabforensics.com
   
⚠️ NO reinicie el sistema
⚠️ NO intente descifrar archivos por su cuenta
⚠️ NO elimine archivos del ransomware

Nuestro equipo está disponible 24/7 para ayudarte.`,

    'phishing': `🎣 PROTOCOLO DE RESPUESTA - PHISHING:

1️⃣ ACCIÓN INMEDIATA:
   • NO haga clic en enlaces sospechosos
   • NO descargue archivos adjuntos
   • NO proporcione credenciales

2️⃣ SI YA HIZO CLIC:
   • Cambie INMEDIATAMENTE sus contraseñas
   • Active autenticación de dos factores (2FA)
   • Desconecte el dispositivo de la red
   • Ejecute un análisis antivirus completo

3️⃣ VERIFICAR DAÑOS:
   • Revise actividad inusual en cuentas
   • Compruebe transacciones bancarias
   • Verifique accesos no autorizados

4️⃣ REPORTAR:
   • Reenvíe el email a: info@cyberlabforensics.com
   • Contacte a su banco si proporcionó datos financieros
   • Denuncie en: https://www.incibe.es

📞 Contacto urgente: 640 302 600

Señales de phishing:
   ⚠️ Remitente desconocido o sospechoso
   ⚠️ Urgencia extrema en el mensaje
   ⚠️ Errores ortográficos
   ⚠️ Enlaces acortados o extraños`,

    'comprometido': `💻 PROTOCOLO - SISTEMA COMPROMETIDO:

1️⃣ CONTENCIÓN INMEDIATA:
   • Desconecte de Internet AHORA
   • Cambie contraseñas desde otro dispositivo seguro
   • Revoque tokens y sesiones activas

2️⃣ EVALUACIÓN:
   • ¿Qué información está en riesgo?
   • ¿Cuándo comenzó el comportamiento extraño?
   • ¿Qué acciones inusuales ha notado?

3️⃣ NO HACER:
   ❌ NO apague el equipo (puede perder evidencia)
   ❌ NO intente "limpiar" el sistema usted mismo
   ❌ NO reinstale sin consultar

4️⃣ PRESERVAR EVIDENCIA:
   • Anote todos los comportamientos extraños
   • Capture pantallas si es posible
   • Liste software instalado recientemente

5️⃣ CONTACTO URGENTE 24/7:
   📞 640 302 600 / 927 764 021
   📧 info@cyberlabforensics.com

Nuestro equipo de respuesta a incidentes puede:
   ✅ Análisis forense inmediato
   ✅ Contención del ataque
   ✅ Recuperación de datos
   ✅ Informe detallado del incidente`,

    'ddos': `🌐 PROTOCOLO - ATAQUE DDoS:

1️⃣ IDENTIFICACIÓN:
   • Tráfico inusualmente alto
   • Sitio web lento o inaccesible
   • Múltiples IPs atacando simultáneamente

2️⃣ MITIGACIÓN INMEDIATA:
   • Active protección DDoS de su proveedor
   • Implemente rate limiting
   • Bloquee IPs maliciosas

3️⃣ CONTACTAR:
   📞 640 302 600 (Respuesta 24/7)
   📧 info@cyberlabforensics.com

Servicios de protección DDoS:
   ✅ Monitorización en tiempo real
   ✅ Filtrado de tráfico malicioso
   ✅ Balanceo de carga
   ✅ CDN con protección integrada`,

    'malware': `🦠 PROTOCOLO - DETECCIÓN DE MALWARE:

1️⃣ AISLAMIENTO:
   • Desconecte de la red inmediatamente
   • NO use el sistema para operaciones críticas

2️⃣ ANÁLISIS INICIAL:
   • ¿Qué síntomas presenta? (lentitud, ventanas emergentes, etc.)
   • ¿Cuándo comenzó?
   • ¿Instaló algo recientemente?

3️⃣ ACCIONES PROHIBIDAS:
   ❌ NO intente eliminar archivos manualmente
   ❌ NO use herramientas de limpieza no verificadas
   ❌ NO pague por "software antivirus" emergente

4️⃣ CONTACTO PROFESIONAL:
   📞 640 302 600
   📧 info@cyberlabforensics.com

Ofrecemos:
   ✅ Análisis forense completo
   ✅ Eliminación segura de malware
   ✅ Recuperación de sistema
   ✅ Prevención futura`,

    'breach': `🔓 PROTOCOLO - BRECHA DE DATOS:

1️⃣ EVALUACIÓN URGENTE:
   • ¿Qué datos fueron expuestos?
   • ¿Cuántos usuarios afectados?
   • ¿Cuándo ocurrió la brecha?

2️⃣ CONTENCIÓN:
   • Cierre el vector de ataque
   • Revoque credenciales comprometidas
   • Aísle sistemas afectados

3️⃣ OBLIGACIONES LEGALES:
   • Notificar a AEPD en 72 horas (RGPD)
   • Informar a usuarios afectados
   • Documentar el incidente

4️⃣ CONTACTO INMEDIATO:
   📞 640 302 600 (24/7)
   📧 info@cyberlabforensics.com

Nuestro servicio incluye:
   ✅ Análisis forense de la brecha
   ✅ Informe para AEPD
   ✅ Plan de comunicación
   ✅ Medidas correctivas`,
  };

  const generalResponses: { [key: string]: string } = {
    'servicios': 'Ofrecemos servicios de ciberseguridad incluyendo: Identificación de amenazas, Protección web, Hacking ético, Monitorización 24/7, Protección de datos RGPD, Seguridad en la nube, y Respuesta a incidentes. ¿Te gustaría saber más sobre alguno?',
    'soc': 'Nuestro SOC (Security Operations Center) funciona 24/7 monitorizando tu infraestructura. Incluye detección de amenazas en tiempo real, respuesta a incidentes, análisis forense, y cumplimiento normativo. ¿Necesitas más información?',
    'contacto': 'Puedes contactarnos en:\n📧 Email: info@cyberlabforensics.com\n📞 Teléfono: 640 302 600 / 927 764 021\n📍 EDIFICIO GARAJE 2.0 - C. Sta. Cristina, despacho S1, 10195 Cáceres\n🕐 Horario: 9:00 AM – 20:00 PM\n\n¿Necesitas asistencia urgente?',
    'precio': 'Nuestros planes se adaptan a las necesidades de cada cliente. Ofrecemos desde auditorías puntuales hasta servicios de monitorización continua. Te recomiendo contactar con nuestro equipo comercial para una cotización personalizada. ¿Te ayudo con algo más?',
    'rgpd': 'Ayudamos a cumplir con el RGPD (UE) 2016/679 y LOPDGDD 3/2018:\n✅ Auditorías de cumplimiento\n✅ Implementación de medidas técnicas\n✅ DPO externo\n✅ Análisis de riesgos\n✅ Documentación legal\n\n¿Necesitas una auditoría RGPD?',
    'hola': '¡Hola! Soy tu asistente de ciberseguridad con IA. Puedo ayudarte con:\n🚨 Emergencias (ransomware, phishing, brechas)\n🛡️ Información sobre servicios\n📋 Cumplimiento normativo\n📞 Contacto con expertos\n\n¿En qué puedo ayudarte?',
  };

  const getBotResponse = (userMessage: string): { text: string; isUrgent: boolean } => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Detectar emergencias
    if (lowerMessage.includes('ransomware') || lowerMessage.includes('secuestro') || lowerMessage.includes('rescate')) {
      return { text: emergencyResponses['ransomware'], isUrgent: true };
    }
    if (lowerMessage.includes('phishing') || lowerMessage.includes('correo sospechoso') || lowerMessage.includes('email extraño')) {
      return { text: emergencyResponses['phishing'], isUrgent: true };
    }
    if (lowerMessage.includes('comprometido') || lowerMessage.includes('hackeado') || lowerMessage.includes('infectado')) {
      return { text: emergencyResponses['comprometido'], isUrgent: true };
    }
    if (lowerMessage.includes('ddos') || lowerMessage.includes('ataque') && lowerMessage.includes('web')) {
      return { text: emergencyResponses['ddos'], isUrgent: true };
    }
    if (lowerMessage.includes('malware') || lowerMessage.includes('virus') || lowerMessage.includes('troyano')) {
      return { text: emergencyResponses['malware'], isUrgent: true };
    }
    if (lowerMessage.includes('brecha') || lowerMessage.includes('fuga') || lowerMessage.includes('datos expuestos')) {
      return { text: emergencyResponses['breach'], isUrgent: true };
    }

    // Respuestas generales
    if (lowerMessage.includes('servicio')) return { text: generalResponses['servicios'], isUrgent: false };
    if (lowerMessage.includes('soc') || lowerMessage.includes('centro de operaciones')) return { text: generalResponses['soc'], isUrgent: false };
    if (lowerMessage.includes('contacto') || lowerMessage.includes('contactar') || lowerMessage.includes('experto')) return { text: generalResponses['contacto'], isUrgent: false };
    if (lowerMessage.includes('precio') || lowerMessage.includes('plan') || lowerMessage.includes('costo')) return { text: generalResponses['precio'], isUrgent: false };
    if (lowerMessage.includes('rgpd') || lowerMessage.includes('proteccion de datos') || lowerMessage.includes('lopd')) return { text: generalResponses['rgpd'], isUrgent: false };
    if (lowerMessage.includes('hola') || lowerMessage.includes('buenos') || lowerMessage.includes('buenas')) return { text: generalResponses['hola'], isUrgent: false };
    
    return { 
      text: 'Entiendo tu consulta. Para brindarte la mejor asistencia:\n\n🚨 Si es una emergencia de seguridad, escribe: "ransomware", "phishing", "sistema comprometido"\n\nℹ️ Para información general, pregunta sobre: servicios, SOC, precios, RGPD\n\n📞 Para hablar con un experto: 640 302 600\n\n¿En qué puedo ayudarte específicamente?', 
      isUrgent: false 
    };
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(messageText);
      const botMessage: Message = {
        text: response.text,
        isBot: true,
        timestamp: new Date(),
        isUrgent: response.isUrgent,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Botón flotante */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          data-chatbot-trigger
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[#00D9FF] hover:bg-[#0080FF] text-black shadow-lg glow-cyan z-50"
        >
          <MessageCircle size={24} />
        </Button>
      )}

      {/* Ventana del chat */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] backdrop-blur-glass border-cyan-500 shadow-2xl glow-cyan z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#00D9FF] to-[#0080FF] p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center">
                <Shield size={20} className="text-[#00D9FF]" />
              </div>
              <div>
                <h3 className="font-bold text-black">Asistente IA Ciberseguridad</h3>
                <p className="text-xs text-black/80">🟢 En línea 24/7</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-black/80 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0A0A0A]/90">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-3 ${
                    message.isBot
                      ? message.isUrgent
                        ? 'bg-red-900/30 border-2 border-red-500'
                        : 'bg-[#1A1A2E] border border-cyan-500/30'
                      : 'bg-[#00D9FF] text-black'
                  }`}
                >
                  {message.isUrgent && message.isBot && (
                    <div className="flex items-center space-x-2 mb-2 text-red-400">
                      <AlertTriangle size={16} />
                      <span className="text-xs font-bold">PROTOCOLO DE EMERGENCIA</span>
                    </div>
                  )}
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className="text-xs mt-1 opacity-60">
                    {message.timestamp.toLocaleTimeString('es-ES', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#1A1A2E] border border-cyan-500/30 rounded-lg p-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-[#00D9FF] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#00D9FF] rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-[#00D9FF] rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Respuestas rápidas */}
          <div className="p-2 bg-[#0A0A0A]/90 border-t border-cyan-500/20">
            <div className="flex flex-wrap gap-2 mb-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(reply)}
                  className="text-xs px-3 py-1 bg-[#1A1A2E] hover:bg-[#00D9FF] hover:text-black border border-cyan-500/30 rounded-full transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 bg-[#0A0A0A]/90 border-t border-cyan-500/20">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Describe tu situación..."
                className="flex-1 bg-[#1A1A2E] border-cyan-500/30 text-white placeholder:text-gray-500"
              />
              <Button
                onClick={() => handleSendMessage()}
                className="bg-[#00D9FF] hover:bg-[#0080FF] text-black"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}