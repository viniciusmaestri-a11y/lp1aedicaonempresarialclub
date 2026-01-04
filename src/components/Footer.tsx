import { Instagram, MessageCircle } from 'lucide-react';
import logoHorizontal from '@/assets/logo-horizontal.png';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border bg-card">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <img 
              src={logoHorizontal} 
              alt="Network Empresarial" 
              className="h-10"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/nempresarialclub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Instagram className="w-5 h-5 text-primary" />
              <span className="text-foreground text-sm">@nempresarialclub</span>
            </a>
            <a 
              href="https://wa.me/5544998700933" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="text-foreground text-sm">(44) 99870-0933</span>
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Evento presencial em Maringá/PR • Vagas limitadas a 50 participantes
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} Network Empresarial. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
