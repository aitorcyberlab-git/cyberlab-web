import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <section id="politica-privacidad" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <Shield className="text-[#00D9FF] mx-auto mb-4" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold text-glow-cyan mb-4">
            {t('privacy.title')}
          </h2>
          <p className="text-gray-400 text-lg">{t('privacy.subtitle')}</p>
        </div>

        <div className="space-y-8">
          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <FileText className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('privacy.section1.title')}</h3>
                <div className="text-gray-300 space-y-2">
                  <p><strong className="text-[#00D9FF]">{t('privacy.identity')}:</strong> Cyberlab Forensics</p>
                  <p><strong className="text-[#00D9FF]">{t('privacy.address')}:</strong> EDIFICIO GARAJE 2.0 - C. Sta. Cristina, despacho S1, 10195 Cáceres</p>
                  <p><strong className="text-[#00D9FF]">{t('privacy.phone')}:</strong> 640 302 600 / 927 764 021</p>
                  <p><strong className="text-[#00D9FF]">{t('privacy.email')}:</strong> info@cyberlabforensics.com</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Lock className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('privacy.section2.title')}</h3>
                <p className="text-gray-300 mb-3">{t('privacy.section2.intro')}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>{t('privacy.section2.item1')}</li>
                  <li>{t('privacy.section2.item2')}</li>
                  <li>{t('privacy.section2.item3')}</li>
                  <li>{t('privacy.section2.item4')}</li>
                  <li>{t('privacy.section2.item5')}</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Shield className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('privacy.section3.title')}</h3>
                <p className="text-gray-300 mb-3">{t('privacy.section3.intro')}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>{t('privacy.section3.item1')}</li>
                  <li>{t('privacy.section3.item2')}</li>
                  <li>{t('privacy.section3.item3')}</li>
                  <li>{t('privacy.section3.item4')}</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Eye className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('privacy.section4.title')}</h3>
                <p className="text-gray-300">{t('privacy.section4.text')}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <FileText className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('privacy.section5.title')}</h3>
                <p className="text-gray-300 mb-3">{t('privacy.section5.intro')}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong className="text-[#00D9FF]">{t('privacy.section5.right1.name')}:</strong> {t('privacy.section5.right1.desc')}</li>
                  <li><strong className="text-[#00D9FF]">{t('privacy.section5.right2.name')}:</strong> {t('privacy.section5.right2.desc')}</li>
                  <li><strong className="text-[#00D9FF]">{t('privacy.section5.right3.name')}:</strong> {t('privacy.section5.right3.desc')}</li>
                  <li><strong className="text-[#00D9FF]">{t('privacy.section5.right4.name')}:</strong> {t('privacy.section5.right4.desc')}</li>
                  <li><strong className="text-[#00D9FF]">{t('privacy.section5.right5.name')}:</strong> {t('privacy.section5.right5.desc')}</li>
                  <li><strong className="text-[#00D9FF]">{t('privacy.section5.right6.name')}:</strong> {t('privacy.section5.right6.desc')}</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  {t('privacy.section5.contact')}{' '}
                  <a href="mailto:info@cyberlabforensics.com" className="text-[#00D9FF] hover:underline">
                    info@cyberlabforensics.com
                  </a>
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Lock className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('privacy.section6.title')}</h3>
                <p className="text-gray-300">{t('privacy.section6.text')}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Shield className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('privacy.section7.title')}</h3>
                <p className="text-gray-300">
                  {t('privacy.section7.text')}{' '}
                  <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#00D9FF] hover:underline">
                    www.aepd.es
                  </a>.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-[#00D9FF]/10 to-[#00D9FF]/10 border-[#00D9FF] p-8">
            <div className="flex items-start space-x-4">
              <Mail className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('privacy.contact.title')}</h3>
                <p className="text-gray-300 mb-4">{t('privacy.contact.text')}</p>
                <div className="space-y-2 text-gray-300">
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
          <p>{t('privacy.lastUpdate')}</p>
        </div>
      </div>
    </section>
  );
}
