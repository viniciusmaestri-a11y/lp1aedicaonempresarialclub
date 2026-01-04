import { Briefcase, TrendingUp, Users, Wallet, Award } from 'lucide-react';

const audiences = [
  { icon: Briefcase, title: 'Empresários', description: 'Donos de empresas buscando expansão' },
  { icon: TrendingUp, title: 'Empreendedores', description: 'Fundadores e startupeiros' },
  { icon: Users, title: 'Profissionais Liberais', description: 'Especialistas do mercado' },
  { icon: Wallet, title: 'Investidores', description: 'Capital buscando oportunidades' },
  { icon: Award, title: 'Líderes e Gestores', description: 'Executivos e decisores' },
];

const AudienceSection = () => {
  return (
    <section id="para-quem" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Para Quem É
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Pessoas que entendem que o<br />
            <span className="text-gradient-gold">ambiente certo faz a diferença</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Se você está construindo algo de verdade, esse encontro é para você.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {audiences.map((item, index) => (
            <div 
              key={index}
              className="card-premium text-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Urgency Notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-destructive/10 border border-destructive/30 rounded-full">
            <span className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
            <span className="text-destructive font-medium">
              Evento presencial com apenas 50 vagas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
