import { FileText, CheckCircle, XCircle, AlertTriangle, Scale, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function TermsConditions() {
  return (
    <section id="terminos-condiciones" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <FileText className="text-[#00D9FF] mx-auto mb-4" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold text-glow-cyan mb-4">
            Términos y Condiciones de Servicio
          </h2>
          <p className="text-gray-400 text-lg">
            Condiciones generales de contratación de servicios de ciberseguridad
          </p>
        </div>

        <div className="space-y-8">
          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <FileText className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">1. Objeto y Ámbito de Aplicación</h3>
                <p className="text-gray-300 mb-3">
                  Los presentes Términos y Condiciones regulan la prestación de servicios de ciberseguridad por parte de Cyberlab Forensics a sus clientes. Estos términos son aplicables a todos los servicios ofrecidos, incluyendo pero no limitándose a:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Auditorías de seguridad y pruebas de penetración</li>
                  <li>Servicios de monitorización y SOC (Security Operations Center)</li>
                  <li>Consultoría en ciberseguridad y cumplimiento normativo</li>
                  <li>Formación y concienciación en seguridad</li>
                  <li>Respuesta a incidentes de seguridad</li>
                  <li>Implementación de soluciones de seguridad</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <CheckCircle className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">2. Contratación de Servicios</h3>
                <p className="text-gray-300 mb-3">
                  La contratación de servicios se formalizará mediante:
                </p>
                <div className="space-y-4">
                  <div className="bg-[#0A0A0A] p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-[#00D9FF] mb-2">2.1. Propuesta Comercial</h4>
                    <p className="text-gray-300 text-sm">
                      Cyberlab Forensics enviará una propuesta comercial detallando el alcance de los servicios, plazos de ejecución, condiciones económicas y términos específicos del proyecto.
                    </p>
                  </div>
                  <div className="bg-[#0A0A0A] p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-[#00D9FF] mb-2">2.2. Aceptación</h4>
                    <p className="text-gray-300 text-sm">
                      El cliente deberá aceptar expresamente la propuesta mediante firma del documento o confirmación por escrito. La aceptación implica el conocimiento y conformidad con estos Términos y Condiciones.
                    </p>
                  </div>
                  <div className="bg-[#0A0A0A] p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-[#00D9FF] mb-2">2.3. Contrato de Servicios</h4>
                    <p className="text-gray-300 text-sm">
                      Una vez aceptada la propuesta, se formalizará un contrato de servicios que incluirá las condiciones específicas del proyecto, anexos técnicos y acuerdos de nivel de servicio (SLA) cuando corresponda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Shield className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">3. Obligaciones de Cyberlab Forensics</h3>
                <p className="text-gray-300 mb-3">
                  Cyberlab Forensics se compromete a:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Prestar los servicios con la máxima diligencia profesional y conforme a las mejores prácticas del sector</li>
                  <li>Asignar personal cualificado y con la experiencia necesaria para la ejecución de los servicios</li>
                  <li>Mantener la confidencialidad de toda la información a la que tenga acceso durante la prestación del servicio</li>
                  <li>Cumplir con los plazos establecidos en la propuesta comercial o contrato de servicios</li>
                  <li>Informar al cliente de cualquier incidencia o hallazgo relevante durante la prestación del servicio</li>
                  <li>Entregar los informes y documentación acordados en los formatos especificados</li>
                  <li>Cumplir con toda la normativa aplicable en materia de protección de datos y seguridad de la información</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <CheckCircle className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">4. Obligaciones del Cliente</h3>
                <p className="text-gray-300 mb-3">
                  El cliente se compromete a:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Proporcionar toda la información necesaria para la correcta prestación de los servicios</li>
                  <li>Facilitar el acceso a los sistemas, instalaciones y personal necesario</li>
                  <li>Designar un interlocutor responsable para la coordinación del proyecto</li>
                  <li>Abonar los importes acordados en los plazos establecidos</li>
                  <li>Notificar cualquier cambio en los requisitos o alcance del proyecto</li>
                  <li>Obtener las autorizaciones necesarias para la realización de pruebas de seguridad</li>
                  <li>Implementar las recomendaciones de seguridad proporcionadas</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <FileText className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">5. Condiciones Económicas</h3>
                <div className="space-y-4">
                  <div className="bg-[#0A0A0A] p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-[#00D9FF] mb-2">5.1. Precio y Facturación</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Los precios de los servicios se especificarán en la propuesta comercial y podrán ser:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                      <li>Precio fijo por proyecto</li>
                      <li>Tarifa por hora/día de trabajo</li>
                      <li>Cuota mensual/anual para servicios recurrentes</li>
                    </ul>
                    <p className="text-gray-300 text-sm mt-2">
                      Todos los precios se entienden sin IVA, que se añadirá según la legislación vigente.
                    </p>
                  </div>
                  <div className="bg-[#0A0A0A] p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-[#00D9FF] mb-2">5.2. Forma de Pago</h4>
                    <p className="text-gray-300 text-sm">
                      El pago se realizará mediante transferencia bancaria en un plazo máximo de 30 días desde la fecha de emisión de la factura, salvo que se acuerde otro plazo en el contrato.
                    </p>
                  </div>
                  <div className="bg-[#0A0A0A] p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-[#00D9FF] mb-2">5.3. Impago</h4>
                    <p className="text-gray-300 text-sm">
                      En caso de impago, Cyberlab Forensics se reserva el derecho a suspender la prestación de servicios y reclamar los intereses de demora legalmente establecidos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Shield className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">6. Confidencialidad</h3>
                <p className="text-gray-300 mb-3">
                  Ambas partes se comprometen a mantener la confidencialidad de toda la información intercambiada durante la prestación del servicio. Esta obligación incluye:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>No divulgar información confidencial a terceros sin autorización previa por escrito</li>
                  <li>Utilizar la información únicamente para los fines del proyecto contratado</li>
                  <li>Implementar medidas de seguridad adecuadas para proteger la información</li>
                  <li>Devolver o destruir toda la información confidencial al finalizar el proyecto</li>
                </ul>
                <p className="text-gray-300 mt-3">
                  Esta obligación permanecerá vigente incluso después de la finalización del contrato.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <AlertTriangle className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">7. Limitación de Responsabilidad</h3>
                <p className="text-gray-300 mb-3">
                  La responsabilidad de Cyberlab Forensics se limita a:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Daños directos causados por negligencia grave o dolo en la prestación de los servicios</li>
                  <li>El importe total facturado por el servicio en cuestión</li>
                </ul>
                <p className="text-gray-300 mt-3 mb-3">
                  Cyberlab Forensics no será responsable de:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Daños indirectos, lucro cesante o pérdida de datos</li>
                  <li>Daños causados por la no implementación de las recomendaciones proporcionadas</li>
                  <li>Interrupciones del servicio causadas por el cliente o terceros</li>
                  <li>Vulnerabilidades no descubiertas durante las pruebas de seguridad</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <XCircle className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">8. Resolución y Cancelación</h3>
                <div className="space-y-4">
                  <div className="bg-[#0A0A0A] p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-[#00D9FF] mb-2">8.1. Por el Cliente</h4>
                    <p className="text-gray-300 text-sm">
                      El cliente podrá cancelar el servicio con un preaviso mínimo de 30 días. En caso de servicios en curso, deberá abonar los trabajos realizados hasta la fecha de cancelación.
                    </p>
                  </div>
                  <div className="bg-[#0A0A0A] p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-[#00D9FF] mb-2">8.2. Por Cyberlab Forensics</h4>
                    <p className="text-gray-300 text-sm">
                      Cyberlab Forensics podrá resolver el contrato en caso de incumplimiento grave de las obligaciones del cliente, especialmente en caso de impago o falta de colaboración.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <FileText className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">9. Propiedad Intelectual</h3>
                <p className="text-gray-300 mb-3">
                  Los informes, metodologías, herramientas y cualquier otro material desarrollado por Cyberlab Forensics son de su propiedad exclusiva. El cliente recibe una licencia de uso limitada para los fines del proyecto contratado.
                </p>
                <p className="text-gray-300">
                  El cliente conserva todos los derechos sobre su información y datos proporcionados durante la prestación del servicio.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Shield className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">10. Protección de Datos</h3>
                <p className="text-gray-300 mb-3">
                  El tratamiento de datos personales se realizará conforme a lo establecido en:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Reglamento (UE) 2016/679 (RGPD)</li>
                  <li>Ley Orgánica 3/2018 (LOPDGDD)</li>
                  <li>Nuestra Política de Privacidad</li>
                </ul>
                <p className="text-gray-300 mt-3">
                  Para más información, consulte nuestra <a href="#politica-privacidad" className="text-[#00D9FF] hover:text-[#00D9FF] underline">Política de Privacidad</a>.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Scale className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">11. Legislación Aplicable y Jurisdicción</h3>
                <p className="text-gray-300 mb-3">
                  Estos Términos y Condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales de Cáceres, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <FileText className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">12. Modificaciones</h3>
                <p className="text-gray-300">
                  Cyberlab Forensics se reserva el derecho a modificar estos Términos y Condiciones. Las modificaciones serán notificadas a los clientes con servicios activos y entrarán en vigor para nuevos contratos desde su publicación en el sitio web.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-[#00D9FF]/10 to-[#00D9FF]/10 border-[#00D9FF] p-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Aceptación de los Términos</h3>
                <p className="text-gray-300 mb-4">
                  La contratación de cualquier servicio de Cyberlab Forensics implica la aceptación expresa de estos Términos y Condiciones. Para cualquier consulta o aclaración, puede contactarnos en:
                </p>
                <p className="text-gray-300">
                  <a href="mailto:info@cyberlabforensics.com" className="text-[#00D9FF] hover:text-[#00D9FF] underline font-bold">
                    info@cyberlabforensics.com
                  </a>
                </p>
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