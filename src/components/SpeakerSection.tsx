import speakerImage from '@/assets/speaker-gian.jpg';
import CTAButton from './CTAButton';

const SpeakerSection = () => {
  return (
    <section id="palestrante" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Palestrante da Noite
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
              Gian Bruneri
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img 
                  src={speakerImage} 
                  alt="Gian Bruneri - Palestrante" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 translate-x-4 translate-y-4 -z-10" />
            </div>

            {/* Content */}
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Empresário renomado em Maringá, com <strong className="text-foreground">mais de 20 anos de carreira</strong>. 
                Formado em Direito, Administração e Contabilidade, construiu sua trajetória atuando em diversos segmentos.
              </p>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Áreas de Atuação
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Seguros', 'Contabilidade', 'Consultoria', 'Construção Civil'].map((area, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full bg-secondary text-foreground text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  O Que Você Vai Aprender
                </h4>
                <ul className="space-y-3">
                  {[
                    'O início da jornada empresarial',
                    'Os erros que quase custaram caro',
                    'Os acertos que mudaram o jogo',
                    'Aprendizados que só a prática ensina',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-foreground font-medium italic border-l-2 border-primary pl-4">
                "Uma conversa real, madura e prática — voltada para quem está construindo algo de verdade."
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <CTAButton>Quero Participar</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
