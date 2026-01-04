import { MapPin, Calendar, Clock, Users } from 'lucide-react';
import CTAButton from './CTAButton';

const EventInfoSection = () => {
  return (
    <section id="informacoes" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Informações do Evento
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Quando e Onde
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Date & Time Card */}
            <div className="card-premium">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Data do Evento</h3>
                  <p className="text-primary font-bold text-xl">29 de Janeiro de 2026</p>
                  <p className="text-muted-foreground">Quinta-feira</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Horário</h3>
                  <p className="text-primary font-bold text-xl">19h às 23h</p>
                  <p className="text-muted-foreground">4 horas de experiência</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="card-premium">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Local</h3>
                  <p className="text-primary font-bold text-xl">EVOA – Aceleradora</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Edifício Atrium – Torre Norte<br />
                    Av. Bento Munhoz da Rocha Neto, 632<br />
                    19º andar – Salas 1905 a 1908<br />
                    Zona 7 – Maringá/PR
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Limited Spots Alert */}
          <div className="card-premium bg-gradient-to-r from-destructive/10 to-primary/10 border-destructive/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-destructive" />
                </div>
                <div>
                  <p className="text-foreground font-bold text-2xl">Apenas 50 Vagas</p>
                  <p className="text-muted-foreground">Quando preenchidas, as inscrições serão encerradas</p>
                </div>
              </div>
              <CTAButton>Garantir Minha Vaga</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfoSection;
