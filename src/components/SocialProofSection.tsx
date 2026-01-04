import eventPhoto from '@/assets/event-photo.jpg';

const SocialProofSection = () => {
  return (
    <section id="prova-social" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Nossa História
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Desde 2021, conectando<br />
            <span className="text-gradient-gold">quem faz acontecer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mais de <strong className="text-foreground">200 empresários</strong> já participaram 
            do Network Empresarial e construíram conexões que transformaram seus negócios.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src={eventPhoto} 
              alt="Participantes do Network Empresarial" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            
            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <p className="text-foreground font-serif text-xl md:text-2xl italic text-center">
                "Cada edição é uma oportunidade de crescimento ao lado das pessoas certas."
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            'Networking de Qualidade',
            'Ambiente Exclusivo',
            'Conexões Reais',
            'Resultados Comprovados',
          ].map((badge, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border"
            >
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-foreground text-sm font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
