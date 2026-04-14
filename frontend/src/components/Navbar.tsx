import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();

  const { pathname } = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {

    e.preventDefault();

    const hash = href.split('#')[1];

    if (pathname === '/') {

      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });

    } else {

      navigate('/#' + hash);

    }

  };


  const navLinks = [
    { name: t('nav.home'), href: '/#inicio' },
    { name: t('nav.about'), href: '/#nosotros' },
    { name: t('nav.services'), href: '/#servicios' },
    { name: t('nav.scanner'), href: '/#escaner' },
    { name: t('nav.contact'), href: '/#contacto' },
  ];

  const handleConsultaGratis = () => {
    const chatBotButton = document.querySelector('[data-chatbot-trigger]') as HTMLElement;
    if (chatBotButton) {
      chatBotButton.click();
    } else {
      window.dispatchEvent(new CustomEvent('openChatBot'));
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-glass border-b border-cyan-500/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold text-glow-cyan">
              CYBERLAB FORENSICS
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}

                className="text-sm font-bold text-white hover:text-[#00D9FF] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-2 text-[#00D9FF]">
              <Phone size={18} />
              <span className="text-sm font-bold">640 302 600</span>
            </div>
            <LanguageSwitcher />
            <Button
              onClick={handleConsultaGratis}
              className="bg-[#00D9FF] text-black hover:bg-[#00D9FF] font-bold glow-cyan"
            >
              {t('nav.freeConsultation')}
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 backdrop-blur-glass rounded-lg p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { handleNavClick(e, link.href); setIsMobileMenuOpen(false); }}

                className="block text-sm font-bold text-white hover:text-[#00D9FF] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-2 text-[#00D9FF] justify-center py-2">
              <Phone size={18} />
              <span className="text-sm font-bold">640 302 600</span>
            </div>
            <div className="flex justify-center py-2">
              <LanguageSwitcher />
            </div>
            <Button
              onClick={() => {
                handleConsultaGratis();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-[#00D9FF] text-black hover:bg-[#00D9FF] font-bold"
            >
              {t('nav.freeConsultation')}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}