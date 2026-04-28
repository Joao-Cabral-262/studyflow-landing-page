import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="py-28">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-12 md:p-20 text-center shadow-soft">
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto">
              Pronto para um semestre <span className="text-gradient">sem estresse</span>?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Comece grátis hoje. Sem cartão de crédito.
            </p>
            <a
              href="#"
              className="group mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              Criar minha conta
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
