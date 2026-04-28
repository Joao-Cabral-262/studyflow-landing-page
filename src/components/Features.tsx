import { CalendarDays, Users, Timer } from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Calendário Inteligente",
    desc: "Sincronize provas, trabalhos e aulas. A IA reorganiza sua agenda quando algo muda.",
  },
  {
    icon: Users,
    title: "Grupos de Estudo",
    desc: "Crie salas, compartilhe materiais e revise conteúdos com colegas em tempo real.",
  },
  {
    icon: Timer,
    title: "Pomodoro Integrado",
    desc: "Sessões de foco com pausas inteligentes que se adaptam ao seu nível de energia.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-28 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Funcionalidades</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Tudo o que você precisa para estudar melhor
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ferramentas pensadas para reduzir a fricção e aumentar o foco.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-8 rounded-2xl bg-card/60 border border-border hover:border-primary/50 hover:scale-105 transition-all duration-300 shadow-soft"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow mb-6 group-hover:rotate-6 transition-transform">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
