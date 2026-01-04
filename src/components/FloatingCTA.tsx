import CTAButton from './CTAButton';

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-md border-t border-border md:hidden">
      <CTAButton className="w-full">
        Garantir Minha Vaga
      </CTAButton>
    </div>
  );
};

export default FloatingCTA;
