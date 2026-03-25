import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Cookie, Shield } from 'lucide-react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(() => {
    // Initialize state based on localStorage to avoid cascading renders
    const consent = localStorage.getItem('cookieConsent');
    return !consent;
  });
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(necessaryOnly));
    setShowBanner(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end justify-center p-4">
      <Card className="bg-[#1A1A2E] border-cyan-500/30 p-6 max-w-4xl w-full mb-4 shadow-2xl">
        {!showSettings ? (
          <>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Cookie className="text-[#00D9FF]" size={32} />
                <h3 className="text-2xl font-bold text-white">Uso de Cookies</h3>
              </div>
              <button
                onClick={acceptNecessary}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <p className="text-gray-300 mb-4 leading-relaxed">
              Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación. Si continúa navegando, consideramos que acepta su uso. Puede obtener más información en nuestra{' '}
              <a href="#politica-privacidad" className="text-[#00D9FF] hover:text-[#00D9FF] underline">
                Política de Privacidad
              </a>
              {' '}y{' '}
              <a href="#politica-cookies" className="text-[#00D9FF] hover:text-[#00D9FF] underline">
                Política de Cookies
              </a>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={acceptAll}
                className="bg-[#00D9FF] text-black hover:bg-[#00D9FF] font-bold flex-1"
              >
                Aceptar Todas
              </Button>
              <Button
                onClick={acceptNecessary}
                variant="outline"
                className="border-2 border-[#00D9FF] text-[#00D9FF] hover:bg-[#00D9FF] hover:text-black font-bold flex-1"
              >
                Solo Necesarias
              </Button>
              <Button
                onClick={() => setShowSettings(true)}
                variant="outline"
                className="border-2 border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white font-bold flex-1"
              >
                Configurar
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Shield className="text-[#00D9FF]" size={32} />
                <h3 className="text-2xl font-bold text-white">Configuración de Cookies</h3>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-4 bg-[#0A0A0A] rounded-lg border border-cyan-500/20">
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-1">Cookies Necesarias</h4>
                  <p className="text-sm text-gray-400">
                    Estas cookies son esenciales para el funcionamiento del sitio web y no pueden desactivarse.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="w-5 h-5 accent-[#00D9FF]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-[#0A0A0A] rounded-lg border border-cyan-500/20">
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-1">Cookies Analíticas</h4>
                  <p className="text-sm text-gray-400">
                    Nos permiten analizar el uso del sitio web para mejorar el rendimiento y la experiencia del usuario.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences({ ...preferences, analytics: e.target.checked })
                    }
                    className="w-5 h-5 accent-[#00D9FF]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-[#0A0A0A] rounded-lg border border-cyan-500/20">
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-1">Cookies de Marketing</h4>
                  <p className="text-sm text-gray-400">
                    Se utilizan para rastrear a los visitantes en los sitios web y mostrar anuncios relevantes.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) =>
                      setPreferences({ ...preferences, marketing: e.target.checked })
                    }
                    className="w-5 h-5 accent-[#00D9FF]"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={savePreferences}
                className="bg-[#00D9FF] text-black hover:bg-[#00D9FF] font-bold flex-1"
              >
                Guardar Preferencias
              </Button>
              <Button
                onClick={() => setShowSettings(false)}
                variant="outline"
                className="border-2 border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white font-bold flex-1"
              >
                Cancelar
              </Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}