import { Scale, Building2, FileText, Mail, Phone, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LegalNoticePage() {
  const { t } = useLanguage();

  return (
    <section id="aviso-legal" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <Scale className="text-[#00D9FF] mx-auto mb-4" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold text-glow-cyan mb-4">
            {t('legal.title')}
          </h2>
          <p className="text-gray-400 text-lg">{t('legal.subtitle')}</p>
        </div>

        <div className="space-y-8">
          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Building2 className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('legal.section1.title')}</h3>
                <div className="text-gray-300 space-y-2">
                  <p><strong className="text-[#00D9FF]">{t('legal.owner')}:</strong> Cyberlab Forensics</p>
                  <p><strong className="text-[#00D9FF]">{t('legal.address')}:</strong> EDIFICIO GARAJE 2.0 - C. Sta. Cristina, despacho S1, 10195 Cáceres, España</p>
                  <p><strong className="text-[#00D9FF]">{t('legal.phone')}:</strong> 640 302 600 / 927 764 021</p>
                  <p><strong className="text-[#00D9FF]">{t('legal.email')}:</strong> info@cyberlabforensics.com</p>
                  <p><strong className="text-[#00D9FF]">{t('legal.website')}:</strong> www.cyberlabforensics.com</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <FileText className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('legal.section2.title')}</h3>
                <p className="text-gray-300 mb-3">{t('legal.section2.text1')}</p>
                <p className="text-gray-300">{t('legal.section2.text2')}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Scale className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('legal.section3.title')}</h3>
                <p className="text-gray-300 mb-3">{t('legal.section3.intro')}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>{t('legal.section3.item1')}</li>
                  <li>{t('legal.section3.item2')}</li>
                  <li>{t('legal.section3.item3')}</li>
                  <li>{t('legal.section3.item4')}</li>
                  <li>{t('legal.section3.item5')}</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <FileText className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('legal.section4.title')}</h3>
                <p className="text-gray-300 mb-3">{t('legal.section4.text1')}</p>
                <p className="text-gray-300 mb-3">{t('legal.section4.text2')}</p>
                <p className="text-gray-300">{t('legal.section4.text3')}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Scale className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('legal.section5.title')}</h3>
                <p className="text-gray-300 mb-3">{t('legal.section5.intro')}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>{t('legal.section5.item1')}</li>
                  <li>{t('legal.section5.item2')}</li>
                  <li>{t('legal.section5.item3')}</li>
                  <li>{t('legal.section5.item4')}</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <FileText className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('legal.section6.title')}</h3>
                <p className="text-gray-300 mb-3">{t('legal.section6.text1')}</p>
                <p className="text-gray-300">{t('legal.section6.text2')}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Scale className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('legal.section7.title')}</h3>
                <p className="text-gray-300">{t('legal.section7.text')}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <FileText className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('legal.section8.title')}</h3>
                <p className="text-gray-300 mb-3">{t('legal.section8.text1')}</p>
                <p className="text-gray-300">{t('legal.section8.text2')}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-[#00D9FF]/10 to-[#00D9FF]/10 border-[#00D9FF] p-8">
            <div className="flex items-start space-x-4">
              <Mail className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('legal.contact.title')}</h3>
                <p className="text-gray-300 mb-4">{t('legal.contact.text')}</p>
                <div className="space-y-2 text-gray-300">
                  <p className="flex items-center space-x-2">
                    <MapPin size={18} className="text-[#00D9FF]" />
                    <span>EDIFICIO GARAJE 2.0 - C. Sta. Cristina, despacho S1, 10195 Cáceres</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Mail size={18} className="text-[#00D9FF]" />
                    <a href="mailto:info@cyberlabforensics.com" className="text-[#00D9FF] hover:underline">
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
          <p>{t('legal.lastUpdate')}</p>
        </div>
      </div>
    </section>
  );
}
