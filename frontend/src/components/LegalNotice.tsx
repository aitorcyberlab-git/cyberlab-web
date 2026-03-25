import { Scale, Building2, FileText, Mail, Phone, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function LegalNotice() {
  return (
    <section id="aviso-legal" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <Scale className="text-[#00D9FF] mx-auto mb-4" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold text-glow-cyan mb-4">
            Aviso Legal
          </h2>
          <p className="text-gray-400 text-lg">
            Información legal y condiciones de uso del sitio web
          </p>
        </div>

        <div className="space-y-8">
          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Building2 className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">1. Datos Identificativos</h3>
                <div className="text-gray-300 space-y-2">
                  <p><strong className="text-[#00D9FF]">Titular:</strong> Cyberlab Forensics</p>
                  <p><strong className="text-[#00D9FF]">Domicilio Social:</strong> EDIFICIO GARAJE 2.0 - C. Sta. Cristina, despacho S1, 10195 Cáceres, España</p>
                  <p><strong className="text-[#00D9FF]">Teléfono:</strong> 640 302 600 / 927 764 021</p>
                  <p><strong className="text-[#00D9FF]">Email:</strong> info@cyberlabforensics.com</p>
                  <p><strong className="text-[#00D9FF]">Sitio Web:</strong> www.cyberlabforensics.com</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <FileText className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">2. Objeto</h3>
                <p className="text-gray-300 mb-3">
                  El presente Aviso Legal regula el uso y utilización del sitio web www.cyberlabforensics.com, del que es titular Cyberlab Forensics.
                </p>
                <p className="text-gray-300">
                  La navegación por el sitio web atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal, que pueden sufrir modificaciones.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Scale className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">3. Condiciones de Uso</h3>
                <p className="text-gray-300 mb-3">
                  El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Cyberlab Forensics ofrece a través de su sitio web y con carácter enunciativo pero no limitativo, a no emplearlos para:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público</li>
                  <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos</li>
                  <li>Provocar daños en los sistemas físicos y lógicos de Cyberlab Forensics, de sus proveedores o de terceras personas</li>
                  <li>Introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar los daños anteriormente mencionados</li>
                  <li>Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <FileText className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">4. Propiedad Intelectual e Industrial</h3>
                <p className="text-gray-300 mb-3">
                  Todos los contenidos del sitio web, salvo que se indique lo contrario, son titularidad exclusiva de Cyberlab Forensics y, en particular, el diseño gráfico, código fuente, logos, textos, gráficos, ilustraciones, fotografías, y demás elementos que aparecen en el sitio web.
                </p>
                <p className="text-gray-300 mb-3">
                  Asimismo, todos los nombres comerciales, marcas o signos distintivos de cualquier clase contenidos en el sitio web están protegidos por la Ley de Propiedad Industrial.
                </p>
                <p className="text-gray-300">
                  Cyberlab Forensics no concede ninguna licencia o autorización de uso de ninguna clase sobre sus derechos de propiedad intelectual e industrial o sobre cualquier otra propiedad o derecho relacionado con el sitio web.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Scale className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">5. Exclusión de Garantías y Responsabilidad</h3>
                <p className="text-gray-300 mb-3">
                  Cyberlab Forensics no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Errores u omisiones en los contenidos</li>
                  <li>Falta de disponibilidad del sitio web o la transmisión de virus o programas maliciosos o lesivos en los contenidos</li>
                  <li>Uso ilícito o incorrecto del sitio web</li>
                  <li>Falta de utilidad o rendimiento de los contenidos del sitio web</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <FileText className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">6. Enlaces</h3>
                <p className="text-gray-300 mb-3">
                  En el caso de que en el sitio web se dispusiesen enlaces o hipervínculos hacia otros sitios de Internet, Cyberlab Forensics no ejercerá ningún tipo de control sobre dichos sitios y contenidos.
                </p>
                <p className="text-gray-300">
                  En ningún caso Cyberlab Forensics asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida en ninguno de dichos hipervínculos u otros sitios de Internet.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Scale className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">7. Modificaciones</h3>
                <p className="text-gray-300">
                  Cyberlab Forensics se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su sitio web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su sitio web.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <FileText className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">8. Legislación Aplicable y Jurisdicción</h3>
                <p className="text-gray-300 mb-3">
                  La relación entre Cyberlab Forensics y el usuario se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y Tribunales de la ciudad de Cáceres.
                </p>
                <p className="text-gray-300">
                  En el caso de que cualquier disposición o disposiciones de este Aviso Legal resultaren inválidas o inaplicables en virtud de la legislación aplicable o como consecuencia de resolución judicial o administrativa, dicha invalidez o inaplicación no hará inválido o inaplicable el Aviso Legal en su conjunto.
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
                  Para cualquier consulta sobre este Aviso Legal, puede contactarnos:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p className="flex items-center space-x-2">
                    <MapPin size={18} className="text-[#00D9FF]" />
                    <span>EDIFICIO GARAJE 2.0 - C. Sta. Cristina, despacho S1, 10195 Cáceres</span>
                  </p>
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