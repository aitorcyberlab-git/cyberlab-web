import { Cookie, Info, Settings, BarChart, Target, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function CookiePolicy() {
  return (
    <section id="politica-cookies" className="py-20 bg-[#1A1A2E]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <Cookie className="text-[#00D9FF] mx-auto mb-4" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold text-glow-cyan mb-4">
            Política de Cookies
          </h2>
          <p className="text-gray-400 text-lg">
            Información sobre el uso de cookies en nuestro sitio web
          </p>
        </div>

        <div className="space-y-8">
          <Card className="bg-[#0A0A0A] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Info className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">¿Qué son las cookies?</h3>
                <p className="text-gray-300 mb-3">
                  Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil) cuando visita un sitio web. Las cookies permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo, por lo que no tiene que volver a configurarlas cada vez que regresa al sitio o navega de una página a otra.
                </p>
                <p className="text-gray-300">
                  Cyberlab Forensics utiliza cookies para mejorar la experiencia del usuario, analizar el tráfico del sitio web y personalizar el contenido.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#0A0A0A] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Settings className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Tipos de Cookies que Utilizamos</h3>
                
                <div className="space-y-6 mt-4">
                  <div className="border-l-4 border-[#00D9FF] pl-4">
                    <h4 className="text-xl font-bold text-[#00D9FF] mb-2">1. Cookies Técnicas o Necesarias</h4>
                    <p className="text-gray-300 mb-2">
                      Son esenciales para el correcto funcionamiento del sitio web. Permiten la navegación y el uso de las diferentes opciones o servicios que existen en ella.
                    </p>
                    <div className="bg-[#1A1A2E] p-4 rounded-lg mt-3">
                      <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Nombre:</strong> cookieConsent</p>
                      <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Finalidad:</strong> Almacenar las preferencias de cookies del usuario</p>
                      <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Duración:</strong> 1 año</p>
                      <p className="text-sm text-gray-400"><strong className="text-white">Tipo:</strong> Propia</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-[#00D9FF] pl-4">
                    <h4 className="text-xl font-bold text-[#00D9FF] mb-2">2. Cookies Analíticas</h4>
                    <p className="text-gray-300 mb-2">
                      Permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de cómo los usuarios utilizan el servicio ofrecido.
                    </p>
                    <div className="bg-[#1A1A2E] p-4 rounded-lg mt-3">
                      <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Proveedor:</strong> Google Analytics</p>
                      <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Cookies:</strong> _ga, _gid, _gat</p>
                      <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Finalidad:</strong> Análisis del comportamiento de los usuarios</p>
                      <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Duración:</strong> 2 años (_ga), 24 horas (_gid), 1 minuto (_gat)</p>
                      <p className="text-sm text-gray-400"><strong className="text-white">Tipo:</strong> Terceros</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-[#00D9FF] pl-4">
                    <h4 className="text-xl font-bold text-[#00D9FF] mb-2">3. Cookies de Publicidad y Marketing</h4>
                    <p className="text-gray-300 mb-2">
                      Permiten la gestión de los espacios publicitarios en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios.
                    </p>
                    <div className="bg-[#1A1A2E] p-4 rounded-lg mt-3">
                      <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Proveedor:</strong> Google Ads, Facebook Pixel</p>
                      <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Finalidad:</strong> Mostrar publicidad personalizada</p>
                      <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Duración:</strong> Variable (hasta 2 años)</p>
                      <p className="text-sm text-gray-400"><strong className="text-white">Tipo:</strong> Terceros</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-[#0A0A0A] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Shield className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Base Legal</h3>
                <p className="text-gray-300 mb-3">
                  El uso de cookies se basa en el consentimiento del usuario, de acuerdo con:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD)</li>
                  <li>Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)</li>
                  <li>Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE)</li>
                  <li>Directiva 2002/58/CE sobre privacidad y comunicaciones electrónicas (Directiva ePrivacy)</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#0A0A0A] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Settings className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Cómo Gestionar las Cookies</h3>
                <p className="text-gray-300 mb-4">
                  Puede gestionar sus preferencias de cookies en cualquier momento a través de:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-[#1A1A2E] p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-[#00D9FF] mb-2">1. Panel de Configuración de Cookies</h4>
                    <p className="text-gray-300 text-sm">
                      Utilice el panel de configuración que aparece al acceder al sitio web por primera vez o acceda a él en cualquier momento desde el pie de página.
                    </p>
                  </div>

                  <div className="bg-[#1A1A2E] p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-[#00D9FF] mb-2">2. Configuración del Navegador</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Puede configurar su navegador para aceptar o rechazar cookies. A continuación, le indicamos cómo hacerlo en los navegadores más populares:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                      <li><strong className="text-white">Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                      <li><strong className="text-white">Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
                      <li><strong className="text-white">Safari:</strong> Preferencias → Privacidad → Cookies</li>
                      <li><strong className="text-white">Edge:</strong> Configuración → Privacidad → Cookies</li>
                    </ul>
                  </div>

                  <div className="bg-[#1A1A2E] p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-[#00D9FF] mb-2">3. Herramientas de Terceros</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Para cookies de terceros, puede gestionarlas directamente:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                      <li><strong className="text-white">Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#00D9FF] hover:text-[#00D9FF] underline">Complemento de inhabilitación</a></li>
                      <li><strong className="text-white">Google Ads:</strong> <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#00D9FF] hover:text-[#00D9FF] underline">Configuración de anuncios</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-[#0A0A0A] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Info className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Consecuencias de Desactivar las Cookies</h3>
                <p className="text-gray-300 mb-3">
                  Si decide desactivar las cookies, algunas funcionalidades del sitio web pueden verse limitadas:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>No se recordarán sus preferencias de navegación</li>
                  <li>Algunas funciones del sitio pueden no estar disponibles</li>
                  <li>La experiencia de usuario puede verse reducida</li>
                  <li>No podremos personalizar el contenido según sus intereses</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#0A0A0A] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Settings className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Actualización de la Política de Cookies</h3>
                <p className="text-gray-300">
                  Cyberlab Forensics puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos. Cuando se produzcan cambios significativos, se notificará a los usuarios mediante un aviso informativo en el sitio web.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-[#00D9FF]/10 to-[#00D9FF]/10 border-[#00D9FF] p-8">
            <div className="flex items-start space-x-4">
              <Cookie className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Más Información</h3>
                <p className="text-gray-300 mb-4">
                  Para más información sobre el uso de cookies y protección de datos, puede consultar:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><a href="#politica-privacidad" className="text-[#00D9FF] hover:text-[#00D9FF] underline">Política de Privacidad</a></li>
                  <li><a href="#aviso-legal" className="text-[#00D9FF] hover:text-[#00D9FF] underline">Aviso Legal</a></li>
                  <li><a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#00D9FF] hover:text-[#00D9FF] underline">Agencia Española de Protección de Datos (AEPD)</a></li>
                  <li><a href="mailto:info@cyberlabforensics.com" className="text-[#00D9FF] hover:text-[#00D9FF] underline">Contacto: info@cyberlabforensics.com</a></li>
                </ul>
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