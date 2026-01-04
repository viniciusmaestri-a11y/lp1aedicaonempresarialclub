import { Check, Wine, MessageSquare, Sparkles, Users, Lightbulb } from 'lucide-react';

const benefits = [
  { icon: Users, text: 'Networking qualificado com empresários selecionados' },
  { icon: MessageSquare, text: 'Conversas estratégicas em ambiente exclusivo' },
  { icon: Sparkles, text: 'Ambiente empresarial premium e sofisticado' },
  { icon: Lightbulb, text: 'Conteúdo prático e experiências reais' },
  { icon: Wine, text: 'Frios e vinhos inclusos na experiência' },
  { icon: Check, text: 'Tempo para conexões genuínas e de qualidade' },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              O Que Você Vai Encontrar
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
              Uma experiência pensada para<br />
              <span className="text-gradient-gold">gerar resultados reais</span>
            </h2>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Card */}
          <div className="relative">
            <div className="card-premium bg-gradient-to-br from-card to-secondary/50">
              <div className="text-center py-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Wine className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Experiência Completa
                </h3>
                <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
                  4 horas de networking, conteúdo e conexões em um ambiente 
                  confortável e sofisticado.
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-background/50">
                    <span className="text-2xl font-bold text-primary block">19h</span>
                    <span className="text-xs text-muted-foreground">Início</span>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50">
                    <span className="text-2xl font-bold text-primary block">23h</span>
                    <span className="text-xs text-muted-foreground">Encerramento</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
