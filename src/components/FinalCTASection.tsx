import CTAButton from './CTAButton';

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 border border-destructive/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
            <span className="text-destructive font-medium text-sm">Vagas limitadas – Garanta a sua agora</span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Comece 2026 cercado das<br />
            <span className="text-gradient-gold">conexões certas</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Empresários, empreendedores e líderes reunidos em um ambiente que 
            transforma conversas em oportunidades.
          </p>

          {/* CTA Button */}
          <CTAButton size="large">
            Comprar Ingresso Agora
          </CTAButton>

          {/* Trust Text */}
          <p className="mt-8 text-sm text-muted-foreground">
            Pagamento seguro via Sympla • Confirmação imediata
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
