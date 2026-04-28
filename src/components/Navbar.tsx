import { GraduationCap } from "lucide-react";

const links = [
  { label: "Funcionalidades", href: "#features" },
  { label: "Preços", href: "#pricing" },
  { label: "Depoimentos", href: "#testimonials" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-semibold text-lg">
          <span className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </span>
          <span className="tracking-tight">StudyFlow</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-primary after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#cta"
          className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-secondary hover:bg-secondary/70 transition-colors border border-border"
        >
          Entrar
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
