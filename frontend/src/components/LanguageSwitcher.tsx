import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const languages: { code: Language; name: string; flagUrl: string }[] = [
  { code: 'es', name: 'Español', flagUrl: 'https://flagcdn.com/w20/es.png' },
  { code: 'en', name: 'English', flagUrl: 'https://flagcdn.com/w20/gb.png' },
  { code: 'fr', name: 'Français', flagUrl: 'https://flagcdn.com/w20/fr.png' },
  { code: 'it', name: 'Italiano', flagUrl: 'https://flagcdn.com/w20/it.png' },
  { code: 'de', name: 'Deutsch', flagUrl: 'https://flagcdn.com/w20/de.png' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:text-[#00D9FF] hover:bg-transparent gap-2"
        >
          <Globe size={18} />
          {currentLanguage && (
            <img
              src={currentLanguage.flagUrl}
              alt={currentLanguage.name}
              className="h-4 w-5 rounded-sm object-cover"
              loading="lazy"
            />
          )}
          <span className="hidden md:inline text-sm font-bold">
            {currentLanguage?.name}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-[#1A1A2E] border-cyan-500/30">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`cursor-pointer hover:bg-[#00D9FF]/20 hover:text-[#00D9FF] ${
              language === lang.code ? 'bg-[#00D9FF]/10 text-[#00D9FF]' : 'text-white'
            }`}
          >
            <img
              src={lang.flagUrl}
              alt={lang.name}
              className="h-4 w-5 rounded-sm object-cover mr-2"
              loading="lazy"
            />
            <span className="font-semibold">{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}