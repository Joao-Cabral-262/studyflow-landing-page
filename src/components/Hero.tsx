import { ArrowRight, Sparkles } from "lucide-react";

import { useEffect, useState } from "react";
import { fetchPagina } from "@/utils/fetchPagina";
import { parseContent } from "@/utils/parseContent";

type Conteudo = ReturnType<typeof parseContent>;


const Hero = () => {

  const [conteudo, setConteudo] = useState<Conteudo | null>(null); 

  useEffect(() => { 
    fetchPagina("pagina-1") 
      .then(pagina => { 
        // fetchPagina trouxe o JSON completo da página 
        // parseContent separa o HTML em paragrafos, titulos, imagens... 
        const elementos = parseContent(pagina.content.rendered); 
        setConteudo(elementos); 
      }) 
      .catch(() => { 
      console.warn("Não foi possível buscar o conteúdo do WordPress."); 
      }); 
  }, []);

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-hero">
      <div className="container mx-auto text-center max-w-4xl px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/60 border border-border text-xs text-muted-foreground mb-8 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          Novo: Pomodoro com IA integrado
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] animate-fade-in-slow">
          {conteudo?.titulos[0]?.textContent}
          <span className="text-gradient">{conteudo?.titulos[1]?.textContent}</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-slow">
          {conteudo?.paragrafos[0]?.textContent}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-slow">
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform duration-300"
          >
            Começar gratuitamente
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#features"
            className="px-7 py-4 rounded-full border border-border text-foreground/90 hover:bg-secondary/60 transition-colors"
          >
            Ver funcionalidades
          </a>
        </div>

        <div className="mt-20 relative animate-fade-in-slow">
          <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 rounded-full" />
          <div className="relative mx-auto max-w-3xl rounded-2xl border border-border bg-card/60 backdrop-blur-sm shadow-soft p-6 animate-float">
            <div className="grid grid-cols-3 gap-4 text-left">
              {[
                { k: "+12k", v: "estudantes ativos" },
                { k: "98%", v: "concluem metas semanais" },
                { k: "4.9★", v: "avaliação média" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="text-2xl md:text-3xl font-bold text-gradient">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
