import { cn } from '@/lib/utils';

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'large';
}

const CTAButton = ({ children, className, size = 'default' }: CTAButtonProps) => {
  const handleClick = () => {
    window.open('https://www.sympla.com.br/evento/primeira-edicao-network-empresarial---2026/3265293', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'relative overflow-hidden font-semibold uppercase tracking-wider',
        'bg-primary text-primary-foreground rounded-lg',
        'transition-all duration-300 ease-out',
        'hover:shadow-[0_6px_40px_hsla(43,96%,56%,0.5)] hover:scale-105',
        'shadow-[0_4px_30px_hsla(43,96%,56%,0.3)]',
        'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
        'before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700',
        size === 'large' ? 'px-10 py-5 text-lg' : 'px-8 py-4 text-sm md:text-base',
        className
      )}
    >
      {children}
    </button>
  );
};

export default CTAButton;
