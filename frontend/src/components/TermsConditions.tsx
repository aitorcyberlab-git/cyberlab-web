import { FileText, CheckCircle, XCircle, AlertTriangle, Scale, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TermsConditionsPage() {
  const { t } = useLanguage();

  return (
    <section id="terminos-condiciones" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <FileText className="text-[#00D9FF] mx-auto mb-4" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold text-glow-cyan mb-4">
            {t('terms.title')}
          </h2>
          <p className="text-gray-400 text-lg">{t('terms.subtitle')}</p>
        </div>

        <div className="space-y-8">
          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <FileText className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('terms.section1.title')}</h3>
                <p className="text-gray-300 mb-3">{t('terms.section1.intro')}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>{t('terms.section1.item1')}</li>
                  <li>{t('terms.section1.item2')}</li>
                  <li>{t('terms.section1.item3')}</li>
                  <li>{t('terms.section1.item4')}</li>
                  <li>{t('terms.section1.item5')}</li>
                  <li>{t('terms.section1.item6')}</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <CheckCircle className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('terms.section2.title')}</h3>
                <p className="text-gray-300 mb-3">{t('terms.section2.intro')}</p>
                <div className="space-y-4">
                  <div className="bg-[#0A0A0A] p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-[#00D9FF] mb-2">{t('terms.section2.sub1.title')}</h4>
                    <p className="text-gray-300 text-sm">{t('terms.section2.sub1.desc')}</p>
                  </div>
                  <div className="bg-[#0A0A0A] p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-[#00D9FF] mb-2">{t('terms.section2.sub2.title')}</h4>
                    <p className="text-gray-300 text-sm">{t('terms.section2.sub2.desc')}</p>
                  </div>
                  <div className="bg-[#0A0A0A] p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-[#00D9FF] mb-2">{t('terms.section2.sub3.title')}</h4>
                    <p className="text-gray-300 text-sm">{t('terms.section2.sub3.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Shield className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('terms.section3.title')}</h3>
                <p className="text-gray-300 mb-3">{t('terms.section3.intro')}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>{t('terms.section3.item1')}</li>
                  <li>{t('terms.section3.item2')}</li>
                  <li>{t('terms.section3.item3')}</li>
                  <li>{t('terms.section3.item4')}</li>
                  <li>{t('terms.section3.item5')}</li>
                  <li>{t('terms.section3.item6')}</li>
                  <li>{t('terms.section3.item7')}</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <CheckCircle className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('terms.section4.title')}</h3>
                <p className="text-gray-300 mb-3">{t('terms.section4.intro')}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>{t('terms.section4.item1')}</li>
                  <li>{t('terms.section4.item2')}</li>
                  <li>{t('terms.section4.item3')}</li>
                  <li>{t('terms.section4.item4')}</li>
                  <li>{t('terms.section4.item5')}</li>
                  <li>{t('terms.section4.item6')}</li>
                  <li>{t('terms.section4.item7')}</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <FileText className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('terms.section5.title')}</h3>
                <div className="space-y-4">
                  <div className="bg-[#0A0A0A] p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-[#00D9FF] mb-2">{t('terms.section5.sub1.title')}</h4>
                    <p className="text-gray-300 text-sm">{t('terms.section5.sub1.desc')}</p>
                  </div>
                  <div className="bg-[#0A0A0A] p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-[#00D9FF] mb-2">{t('terms.section5.sub2.title')}</h4>
                    <p className="text-gray-300 text-sm">{t('terms.section5.sub2.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <AlertTriangle className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('terms.section6.title')}</h3>
                <p className="text-gray-300 mb-3">{t('terms.section6.intro')}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>{t('terms.section6.item1')}</li>
                  <li>{t('terms.section6.item2')}</li>
                </ul>
                <p className="text-gray-300 mt-3 mb-3">{t('terms.section6.notResponsible')}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>{t('terms.section6.item3')}</li>
                  <li>{t('terms.section6.item4')}</li>
                  <li>{t('terms.section6.item5')}</li>
                  <li>{t('terms.section6.item6')}</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <XCircle className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('terms.section7.title')}</h3>
                <div className="space-y-4">
                  <div className="bg-[#0A0A0A] p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-[#00D9FF] mb-2">{t('terms.section7.sub1.title')}</h4>
                    <p className="text-gray-300 text-sm">{t('terms.section7.sub1.desc')}</p>
                  </div>
                  <div className="bg-[#0A0A0A] p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-[#00D9FF] mb-2">{t('terms.section7.sub2.title')}</h4>
                    <p className="text-gray-300 text-sm">{t('terms.section7.sub2.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <FileText className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('terms.section8.title')}</h3>
                <p className="text-gray-300 mb-3">{t('terms.section8.text1')}</p>
                <p className="text-gray-300">{t('terms.section8.text2')}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <Scale className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('terms.section9.title')}</h3>
                <p className="text-gray-300">{t('terms.section9.text')}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#1A1A2E] border-cyan-500/30 p-8">
            <div className="flex items-start space-x-4 mb-4">
              <FileText className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('terms.section10.title')}</h3>
                <p className="text-gray-300">{t('terms.section10.text')}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-[#00D9FF]/10 to-[#00D9FF]/10 border-[#00D9FF] p-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="text-[#00D9FF] flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{t('terms.acceptance.title')}</h3>
                <p className="text-gray-300 mb-4">{t('terms.acceptance.text')}</p>
                <a href="mailto:info@cyberlabforensics.com" className="text-[#00D9FF] hover:underline font-bold">
                  info@cyberlabforensics.com
                </a>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>{t('terms.lastUpdate')}</p>
        </div>
      </div>
    </section>
  );
}
