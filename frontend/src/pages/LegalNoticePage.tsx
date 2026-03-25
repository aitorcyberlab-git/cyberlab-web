import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalNotice from '@/components/LegalNotice';

export default function LegalNoticePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <div className="pt-20">
        <LegalNotice />
      </div>
      <Footer />
    </div>
  );
}