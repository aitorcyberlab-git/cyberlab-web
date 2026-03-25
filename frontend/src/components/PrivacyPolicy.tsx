import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function PrivacyPolicy() {
  return (
    <section id="politica-privacidad" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <Shield className="text-[#00D9FF] mx-auto mb-4" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold text-glow-cyan mb-4">
            Política de Privacidad y Protección de Datos
          </h2>
          <p className="text-gray-400 text-lg">
            Cumplimiento del RGPD (UE) 2016/679 y LOPDGDD 3/2018
          </p>
        </div>

        <div className="space-y-8">
          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <FileText className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">1. Responsable del Tratamiento</h3>
                <div className="text-gray-300 space-y-2">
                  <p><strong className="text-[#00D9FF]">Identidad:</strong> Cyberlab Forensics</p>
                  <p><strong className="text-[#00D9FF]">Dirección:</strong> EDIFICIO GARAJE 2.0 - C. Sta. Cristina, despacho S1, 10195 Cáceres</p>
                  <p><strong className="text-[#00D9FF]">Teléfono:</strong> 640 302 600 / 927 764 021</p>
                  <p><strong className="text-[#00D9FF]">Email:</strong> info@cyberlabforensics.com</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Lock className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">2. Finalidad del Tratamiento</h3>
                <p className="text-gray-300 mb-3">
                  Los datos personales que nos proporcione serán tratados con las siguientes finalidades:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Gestión de consultas y solicitudes de información</li>
                  <li>Prestación de servicios de ciberseguridad contratados</li>
                  <li>Envío de comunicaciones comerciales (con su consentimiento)</li>
                  <li>Cumplimiento de obligaciones legales</li>
                  <li>Análisis y mejora de nuestros servicios</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Shield className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">3. Legitimación</h3>
                <p className="text-gray-300 mb-3">
                  La base legal para el tratamiento de sus datos es:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Consentimiento del interesado para el envío de comunicaciones comerciales</li>
                  <li>Ejecución de un contrato en el que el interesado es parte</li>
                  <li>Cumplimiento de obligaciones legales aplicables al responsable</li>
                  <li>Interés legítimo del responsable para la mejora de servicios</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Eye className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">4. Conservación de Datos</h3>
                <p className="text-gray-300">
                  Los datos personales se conservarán mientras sean necesarios para la prestación del servicio solicitado. Una vez finalizada la relación contractual, los datos se conservarán bloqueados durante los plazos legalmente establecidos para atender posibles responsabilidades.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <FileText className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">5. Derechos del Usuario</h3>
                <p className="text-gray-300 mb-3">
                  Puede ejercer los siguientes derechos:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong className="text-[#00D9FF]">Acceso:</strong> Conocer qué datos personales tenemos sobre usted</li>
                  <li><strong className="text-[#00D9FF]">Rectificación:</strong> Modificar datos inexactos o incompletos</li>
                  <li><strong className="text-[#00D9FF]">Supresión:</strong> Solicitar la eliminación de sus datos</li>
                  <li><strong className="text-[#00D9FF]">Oposición:</strong> Oponerse al tratamiento de sus datos</li>
                  <li><strong className="text-[#00D9FF]">Limitación:</strong> Solicitar la limitación del tratamiento</li>
                  <li><strong className="text-[#00D9FF]">Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Para ejercer estos derechos, puede contactarnos en <a href="mailto:info@cyberlabforensics.com" className="text-[#00D9FF] hover:text-[#00D9FF] underline">info@cyberlabforensics.com</a> o en nuestra dirección postal.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Lock className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">6. Medidas de Seguridad</h3>
                <p className="text-gray-300">
                  Cyberlab Forensics ha adoptado medidas técnicas y organizativas de seguridad apropiadas para proteger sus datos personales contra el acceso no autorizado, la alteración, divulgación o destrucción de información. Cumplimos con los estándares de seguridad establecidos por el RGPD y el ENS (Esquema Nacional de Seguridad).
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Shield className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">7. Reclamaciones</h3>
                <p className="text-gray-300">
                  Si considera que el tratamiento de sus datos personales no se ajusta a la normativa, puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#00D9FF] hover:text-[#00D9FF] underline">www.aepd.es</a>.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-[#00D9FF]/10 to-[#00D9FF]/10 border-[#00D9FF] p-8">
            <div className="flex items-start space-x-4">
              <Mail className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Contacto</h3>
                <p className="text-gray-300 mb-4">
                  Para cualquier consulta sobre nuestra política de privacidad o el tratamiento de sus datos personales, puede contactarnos:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p className="flex items-center space-x-2">
                    <Mail size={18} className="text-[#00D9FF]" />
                    <a href="mailto:info@cyberlabforensics.com" className="text-[#00D9FF] hover:text-[#00D9FF] underline">
                      info@cyberlabforensics.com
                    </a>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Phone size={18} className="text-[#00D9FF]" />
                    <span>640 302 600 / 927 764 021</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Última actualización: Enero 2025</p>
        </div>
      </div>
    </section>
  );
}