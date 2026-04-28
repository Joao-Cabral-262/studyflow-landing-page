import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marina Costa",
    role: "Engenharia · USP",
    text: "Passei a render o dobro estudando metade do tempo. O calendário inteligente é viciante.",
  },
  {
    name: "Lucas Andrade",
    role: "Direito · UFMG",
    text: "Os grupos de estudo viraram meu lugar favorito antes das provas. Simples e rápido.",
  },
  {
    name: "Beatriz Lima",
    role: "Medicina · UNIFESP",
    text: "O Pomodoro integrado me ajudou a finalmente criar consistência nos plantões de estudo.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-28 bg-secondary/20 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Depoimentos</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Estudantes que já transformaram a rotina
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-3xl bg-card/80 border border-border shadow-soft hover:scale-105 hover:border-primary/40 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-foreground/90 leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
