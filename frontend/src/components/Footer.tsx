import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Clock } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const { pathname } = useLocation();


  const handleNavClick = (e: React.MouseEvent, href: string) => {

    e.preventDefault();

    const hash = href.split('#')[1];

    if (pathname === '/') {

      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });

    } else {

      navigate('/#' + hash);

    }

  };


  return (
    <footer className="bg-[#0A0A0A] border-t border-cyan-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-lg font-bold text-glow-cyan">
                CYBERLAB FORENSICS
              </span>
            </div>
            <p className="text-sm text-gray-400">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#00D9FF] mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {[
                { label: t('nav.about'),    href: '/#nosotros' },
                { label: t('nav.services'),  href: '/#servicios' },
                { label: t('nav.scanner'),   href: '/#escaner'  },
                { label: t('nav.contact'),   href: '/#contacto' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}

                    className="text-sm text-gray-400 hover:text-[#00D9FF] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#00D9FF] mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li><Link to="/aviso-legal" className="text-sm text-gray-400 hover:text-[#00D9FF] transition-colors">{t('footer.legalNotice')}</Link></li>
              <li><Link to="/politica-privacidad" className="text-sm text-gray-400 hover:text-[#00D9FF] transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link to="/politica-cookies" className="text-sm text-gray-400 hover:text-[#00D9FF] transition-colors">{t('footer.cookies')}</Link></li>
              <li><Link to="/terminos-condiciones" className="text-sm text-gray-400 hover:text-[#00D9FF] transition-colors">{t('footer.terms')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#00D9FF] mb-4">{t('footer.contactInfo')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-gray-400">
                <MapPin size={16} className="mt-1 text-[#00D9FF] flex-shrink-0" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-400">
                <Clock size={16} className="mt-1 text-[#00D9FF] flex-shrink-0" />
                <span>{t('footer.hours')}</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone size={16} className="text-[#00D9FF] flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+34640302600" className="hover:text-[#00D9FF] transition-colors">640 302 600</a>
                  <a href="tel:+34927764021" className="hover:text-[#00D9FF] transition-colors">927 764 021</a>
                </div>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail size={16} className="text-[#00D9FF] flex-shrink-0" />
                <a href="mailto:info@cyberlabforensics.com" className="hover:text-[#00D9FF] transition-colors break-all">
                  info@cyberlabforensics.com
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/p/Cyberlab-Forensics-61567041316831/" className="text-gray-400 hover:text-[#00D9FF] transition-colors"><Facebook size={20} /></a>
              <a href="https://es.linkedin.com/company/cyberlabforensics" className="text-gray-400 hover:text-[#00D9FF] transition-colors"><Linkedin size={20} /></a>
              <a href="https://www.instagram.com/grupo_cyberlab_forensics/" className="text-gray-400 hover:text-[#00D9FF] transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

        </div>
        <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Cyberlab Forensics. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}