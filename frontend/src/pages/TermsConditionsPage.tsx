import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TermsConditions from '@/components/TermsConditions';

export default function TermsConditionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <div className="pt-20">
        <TermsConditions />
      </div>
      <Footer />
    </div>
  );
}