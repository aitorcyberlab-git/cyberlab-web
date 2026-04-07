import { Cookie, Info, Settings, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CookiePolicyPage() {
  const { t } = useLanguage();

  return (
    <section id="politica-cookies" className="py-20 bg-[#1A1A2E]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <Cookie className="text-[#00D9FF] mx-auto mb-4" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold text-glow-cyan mb-4">
            {t('cookies.title')}
          </h2>
          <p className="text-gray-400 text-lg">{t('cookies.subtitle')}</p>
        </div>

        <div className="space-y-8">
          <Card className="bg-[#0A0A0A] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Info className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('cookies.section1.title')}</h3>
                <p className="text-gray-300 mb-3">{t('cookies.section1.text1')}</p>
                <p className="text-gray-300">{t('cookies.section1.text2')}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#0A0A0A] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Settings className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('cookies.section2.title')}</h3>
                <div className="space-y-6 mt-4">
                  <div className="border-l-4 border-[#00D9FF] pl-4">
                    <h4 className="text-xl font-bold text-[#00D9FF] mb-2">{t('cookies.section2.type1.title')}</h4>
                    <p className="text-gray-300 mb-2">{t('cookies.section2.type1.desc')}</p>
                    <div className="bg-[#1A1A2E] p-4 rounded-lg mt-3">
                      <p className="text-sm text-gray-400 mb-2"><strong className="text-white">{t('cookies.name')}:</strong> cookieConsent</p>
                      <p className="text-sm text-gray-400 mb-2"><strong className="text-white">{t('cookies.purpose')}:</strong> {t('cookies.section2.type1.purpose')}</p>
                      <p className="text-sm text-gray-400 mb-2"><strong className="text-white">{t('cookies.duration')}:</strong> {t('cookies.section2.type1.duration')}</p>
                      <p className="text-sm text-gray-400"><strong className="text-white">{t('cookies.type')}:</strong> {t('cookies.own')}</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-[#00D9FF] pl-4">
                    <h4 className="text-xl font-bold text-[#00D9FF] mb-2">{t('cookies.section2.type2.title')}</h4>
                    <p className="text-gray-300 mb-2">{t('cookies.section2.type2.desc')}</p>
                    <div className="bg-[#1A1A2E] p-4 rounded-lg mt-3">
                      <p className="text-sm text-gray-400 mb-2"><strong className="text-white">{t('cookies.provider')}:</strong> Google Analytics</p>
                      <p className="text-sm text-gray-400 mb-2"><strong className="text-white">{t('cookies.duration')}:</strong> {t('cookies.section2.type2.duration')}</p>
                      <p className="text-sm text-gray-400"><strong className="text-white">{t('cookies.type')}:</strong> {t('cookies.thirdParty')}</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-[#00D9FF] pl-4">
                    <h4 className="text-xl font-bold text-[#00D9FF] mb-2">{t('cookies.section2.type3.title')}</h4>
                    <p className="text-gray-300 mb-2">{t('cookies.section2.type3.desc')}</p>
                    <div className="bg-[#1A1A2E] p-4 rounded-lg mt-3">
                      <p className="text-sm text-gray-400 mb-2"><strong className="text-white">{t('cookies.provider')}:</strong> Google Ads, Facebook Pixel</p>
                      <p className="text-sm text-gray-400 mb-2"><strong className="text-white">{t('cookies.duration')}:</strong> {t('cookies.section2.type3.duration')}</p>
                      <p className="text-sm text-gray-400"><strong className="text-white">{t('cookies.type')}:</strong> {t('cookies.thirdParty')}</p>
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
                <h3 className="text-2xl font-bold text-white mb-3">{t('cookies.section3.title')}</h3>
                <p className="text-gray-300 mb-3">{t('cookies.section3.intro')}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>{t('cookies.section3.item1')}</li>
                  <li>{t('cookies.section3.item2')}</li>
                  <li>{t('cookies.section3.item3')}</li>
                  <li>{t('cookies.section3.item4')}</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#0A0A0A] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Settings className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('cookies.section4.title')}</h3>
                <p className="text-gray-300 mb-4">{t('cookies.section4.intro')}</p>
                <div className="space-y-4">
                  <div className="bg-[#1A1A2E] p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-[#00D9FF] mb-2">{t('cookies.section4.option1.title')}</h4>
                    <p className="text-gray-300 text-sm">{t('cookies.section4.option1.desc')}</p>
                  </div>
                  <div className="bg-[#1A1A2E] p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-[#00D9FF] mb-2">{t('cookies.section4.option2.title')}</h4>
                    <p className="text-gray-300 text-sm mb-3">{t('cookies.section4.option2.desc')}</p>
                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                      <li><strong className="text-white">Chrome:</strong> {t('cookies.section4.option2.chrome')}</li>
                      <li><strong className="text-white">Firefox:</strong> {t('cookies.section4.option2.firefox')}</li>
                      <li><strong className="text-white">Safari:</strong> {t('cookies.section4.option2.safari')}</li>
                      <li><strong className="text-white">Edge:</strong> {t('cookies.section4.option2.edge')}</li>
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
                <h3 className="text-2xl font-bold text-white mb-3">{t('cookies.section5.title')}</h3>
                <p className="text-gray-300 mb-3">{t('cookies.section5.intro')}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>{t('cookies.section5.item1')}</li>
                  <li>{t('cookies.section5.item2')}</li>
                  <li>{t('cookies.section5.item3')}</li>
                  <li>{t('cookies.section5.item4')}</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-[#00D9FF]/10 to-[#00D9FF]/10 border-[#00D9FF] p-8">
            <div className="flex items-start space-x-4">
              <Cookie className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('cookies.moreInfo.title')}</h3>
                <p className="text-gray-300 mb-4">{t('cookies.moreInfo.text')}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><a href="/politica-privacidad" className="text-[#00D9FF] hover:underline">{t('footer.privacy')}</a></li>
                  <li><a href="/aviso-legal" className="text-[#00D9FF] hover:underline">{t('footer.legalNotice')}</a></li>
                  <li><a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#00D9FF] hover:underline">AEPD</a></li>
                  <li><a href="mailto:info@cyberlabforensics.com" className="text-[#00D9FF] hover:underline">info@cyberlabforensics.com</a></li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>{t('cookies.lastUpdate')}</p>
        </div>
      </div>
    </section>
  );
}
