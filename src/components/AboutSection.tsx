const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Sobre o Evento
          </span>

          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-8">
            Mais do que um evento.<br />
            <span className="text-gradient-gold">Um ambiente de crescimento.</span>
          </h2>

          {/* Description */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              O Network Empresarial não é um evento comum. Desde 2021, criamos um 
              <strong className="text-foreground"> ambiente estratégico</strong> onde empresários e 
              empreendedores se conectam com <strong className="text-foreground">intenção e propósito</strong>.
            </p>
            <p>
              Aqui, o networking acontece com <strong className="text-foreground">tempo, qualidade e as pessoas certas</strong>. 
              Cada edição é pensada para proporcionar conversas que geram oportunidades reais, 
              parcerias sólidas e crescimento sustentável.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { number: '+200', label: 'Empresários' },
              { number: '5', label: 'Anos de História' },
              { number: '50', label: 'Vagas por Edição' },
              { number: '100%', label: 'Presencial' },
            ].map((stat, index) => (
              <div key={index} className="card-premium text-center">
                <span className="text-3xl md:text-4xl font-bold text-primary block mb-2">
                  {stat.number}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
