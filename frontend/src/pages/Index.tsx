import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import CookieBanner from '@/components/CookieBanner';
import VulnerabilityScanner from '@/components/VulnerabilityScanner';
import AuditForm from '@/components/AuditForm';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, Eye, Lock, AlertTriangle, Server, Cloud, Users, Award, CheckCircle, FileText, Scale, ShieldCheck, Search, Database, HardDrive } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Index() {
  const [isAuditFormOpen, setIsAuditFormOpen] = useState(false);
  const { t } = useLanguage();

  const services = [
    {
      icon: <AlertTriangle className="text-[#00D9FF]" size={40} />,
      title: t('services.threatIdentification'),
      description: t('services.threatDesc'),
    },
    {
      icon: <Shield className="text-[#00D9FF]" size={40} />,
      title: t('services.webProtection'),
      description: t('services.webDesc'),
    },
    {
      icon: <Eye className="text-[#00D9FF]" size={40} />,
      title: t('services.ethicalHacking'),
      description: t('services.ethicalDesc'),
    },
    {
      icon: <Server className="text-[#00D9FF]" size={40} />,
      title: t('services.monitoring'),
      description: t('services.monitoringDesc'),
    },
    {
      icon: <Lock className="text-[#00D9FF]" size={40} />,
      title: t('services.dataProtection'),
      description: t('services.dataDesc'),
    },
    {
      icon: <Cloud className="text-[#00D9FF]" size={40} />,
      title: t('services.cloudSecurity'),
      description: t('services.cloudDesc'),
    },
  ];

  const forensicServices = [
    {
      icon: <Search className="text-[#00D9FF]" size={40} />,
      title: t('forensics.digitalAnalysis'),
      description: t('forensics.digitalDesc'),
    },
    {
      icon: <Database className="text-[#00D9FF]" size={40} />,
      title: t('forensics.dataRecovery'),
      description: t('forensics.dataRecoveryDesc'),
    },
    {
      icon: <FileText className="text-[#00D9FF]" size={40} />,
      title: t('forensics.expertReports'),
      description: t('forensics.expertDesc'),
    },
    {
      icon: <HardDrive className="text-[#00D9FF]" size={40} />,
      title: t('forensics.deviceAnalysis'),
      description: t('forensics.deviceDesc'),
    },
    {
      icon: <Shield className="text-[#00D9FF]" size={40} />,
      title: t('forensics.chainCustody'),
      description: t('forensics.chainDesc'),
    },
    {
      icon: <Scale className="text-[#00D9FF]" size={40} />,
      title: t('forensics.legalAdvice'),
      description: t('forensics.legalDesc'),
    },
  ];

  const whyChooseUs = [
    {
      icon: <Users className="text-[#00D9FF]" size={32} />,
      title: t('why.blueTeam'),
      description: t('why.blueDesc'),
    },
    {
      icon: <Shield className="text-[#00D9FF]" size={32} />,
      title: t('why.redTeam'),
      description: t('why.redDesc'),
    },
    {
      icon: <AlertTriangle className="text-[#00D9FF]" size={32} />,
      title: t('why.incidentResponse'),
      description: t('why.incidentDesc'),
    },
    {
      icon: <Award className="text-[#00D9FF]" size={32} />,
      title: t('why.training'),
      description: t('why.trainingDesc'),
    },
  ];

  const socFeatures = [
    t('soc.cybersecurity'),
    t('soc.riskAssessment'),
    t('soc.networkSecurity'),
    t('soc.serverMonitoring'),
    t('soc.emailProtection'),
    t('soc.backup'),
  ];

  const regulations = [
    {
      icon: <ShieldCheck className="text-[#00D9FF]" size={48} />,
      title: 'RGPD',
      subtitle: t('compliance.rgpd.subtitle'),
      description: t('compliance.rgpd.description'),
    },
    {
      icon: <FileText className="text-[#00D9FF]" size={48} />,
      title: 'LOPDGDD',
      subtitle: t('compliance.lopdgdd.subtitle'),
      description: t('compliance.lopdgdd.description'),
    },
    {
      icon: <Scale className="text-[#00D9FF]" size={48} />,
      title: 'ENS',
      subtitle: t('compliance.ens.subtitle'),
      description: t('compliance.ens.description'),
    },
    {
      icon: <Lock className="text-[#00D9FF]" size={48} />,
      title: 'ISO 27001',
      subtitle: t('compliance.iso27001.subtitle'),
      description: t('compliance.iso27001.description'),
    },
    {
      icon: <Shield className="text-[#00D9FF]" size={48} />,
      title: 'NIS2',
      subtitle: t('compliance.nis2.subtitle'),
      description: t('compliance.nis2.description'),
    },
    {
      icon: <FileText className="text-[#00D9FF]" size={48} />,
      title: 'LSSI-CE',
      subtitle: t('compliance.lssi.subtitle'),
      description: t('compliance.lssi.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <ChatBot />
      <CookieBanner />
      <AuditForm isOpen={isAuditFormOpen} onClose={() => setIsAuditFormOpen(false)} />

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://mgx-backend-cdn.metadl.com/generate/images/275444/2026-01-09/2a2a636a-107a-4646-afe9-31afa173cc7d.png)'
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/70 to-[#0A0A0A]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-glow-cyan animate-float">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#nosotros">
              <Button className="bg-[#00D9FF] text-black hover:bg-[#0080FF] font-bold text-lg px-8 py-6 glow-cyan">
                {t('hero.knowUs')}
              </Button>
            </a>
            <a href="#contacto">
            <Button
              variant="outline"
              className="border-2 border-[#00D9FF] text-[#00D9FF] hover:bg-[#00D9FF] hover:text-black font-bold text-lg px-8 py-6"
            >
              {t('hero.contact')}
            </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="nosotros" className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A2E]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://mgx-backend-cdn.metadl.com/generate/images/275444/2026-01-09/f1a1944c-be3b-4c60-9ec5-9cc1a296c167.png"
                alt="Security Team"
                className="rounded-lg shadow-2xl glow-cyan"
              />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#00D9FF] mb-2">{t('about.label')}</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-cyan">
                {t('about.title')}
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                {t('about.text1')}
              </p>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                {t('about.text2')}
              </p>
              <Button className="bg-[#00D9FF] text-black hover:bg-[#0080FF] font-bold glow-cyan">
                {t('about.ourServices')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-[#1A1A2E]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sm font-bold text-[#00D9FF] mb-2">{t('services.label')}</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-glow-cyan mb-4">
              {t('services.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-[#0A0A0A] border-cyan-500/30 p-6 hover:border-[#00D9FF] hover:glow-cyan transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <div className="mb-4 w-10 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00D9FF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Informática Forense */}
      <section className="py-20 bg-gradient-to-b from-[#1A1A2E] to-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sm font-bold text-[#00D9FF] mb-2">{t('forensics.label')}</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-glow-cyan mb-4">
              {t('forensics.title')}
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
              {t('forensics.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {forensicServices.map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A2E] border-cyan-500/30 p-6 hover:border-[#00D9FF] hover:glow-cyan transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <div className="mb-4 w-10 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00D9FF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-[#00D9FF]/10 to-[#0080FF]/10 border-[#00D9FF] p-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Scale className="text-[#00D9FF]" size={64} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('forensics.teamTitle')}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {t('forensics.teamText1')}
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {t('forensics.teamText2')}
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-[#00D9FF]/20 px-4 py-2 rounded-full">
                    <CheckCircle className="text-[#00D9FF]" size={20} />
                    <span className="text-sm font-semibold text-white">{t('forensics.legalValidity')}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#00D9FF]/20 px-4 py-2 rounded-full">
                    <CheckCircle className="text-[#00D9FF]" size={20} />
                    <span className="text-sm font-semibold text-white">{t('forensics.chainCustody')}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#00D9FF]/20 px-4 py-2 rounded-full">
                    <CheckCircle className="text-[#00D9FF]" size={20} />
                    <span className="text-sm font-semibold text-white">{t('forensics.certifiedExperts')}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#00D9FF]/20 px-4 py-2 rounded-full">
                    <CheckCircle className="text-[#00D9FF]" size={20} />
                    <span className="text-sm font-semibold text-white">{t('forensics.technicalReports')}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Escáner de Vulnerabilidades */}
      <VulnerabilityScanner />

      {/* Normativas y Cumplimiento */}
      <section className="py-20 bg-gradient-to-b from-[#1A1A2E] to-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sm font-bold text-[#00D9FF] mb-2">{t('compliance.label')}</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-glow-cyan mb-4">
              {t('compliance.title')}
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('compliance.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regulations.map((regulation, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-[#1A1A2E] to-[#0A0A0A] border-cyan-500/30 p-8 hover:glow-cyan transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {regulation.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center text-white group-hover:text-[#00D9FF] transition-colors">
                  {regulation.title}
                </h3>
                <p className="text-sm text-[#00D9FF] text-center mb-4 font-semibold">
                  {regulation.subtitle}
                </p>
                <p className="text-gray-400 text-sm text-center leading-relaxed">
                  {regulation.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-[#00D9FF]/10 to-[#0080FF]/10 border-[#00D9FF] p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('compliance.auditTitle')}
              </h3>
              <p className="text-gray-300 mb-6">
                {t('compliance.auditText')}
              </p>
              <Button 
                onClick={() => setIsAuditFormOpen(true)}
                className="bg-[#00D9FF] text-black hover:bg-[#0080FF] font-bold glow-cyan"
              >
                {t('compliance.requestAudit')}
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Por Qué Elegirnos */}
      <section className="py-20 bg-[#1A1A2E]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sm font-bold text-[#00D9FF] mb-2">{t('why.label')}</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-glow-cyan mb-4">
              {t('why.title')}
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('why.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A2E] border-cyan-500/30 p-6 text-center hover:glow-cyan transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOC */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-cyan">
                {t('soc.title')}
              </h2>
              <div className="space-y-4">
                {socFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-[#00D9FF]" size={24} />
                    <span className="text-lg text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://mgx-backend-cdn.metadl.com/generate/images/275444/2026-01-09/ae3a49b0-936d-494c-8ef4-92faceb26ef9.png"
                alt="SOC Dashboard"
                className="rounded-lg shadow-2xl glow-cyan"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contacto" className="py-20 bg-[#1A1A2E]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-glow-cyan mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-gray-400 text-xl mb-8">
            {t('cta.subtitle')}
          </p>
          <Button className="bg-[#00D9FF] text-black hover:bg-[#0080FF] font-bold glow-cyan text-lg px-8 py-6">
            {t('cta.contact')}
          </Button>
        </div>
      </section>
 
      <Footer />
    </div>
  );
}