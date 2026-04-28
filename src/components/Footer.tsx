import { GraduationCap, Twitter, Instagram, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-primary-foreground" />
          </span>
          <span className="font-semibold">StudyFlow</span>
          <span className="text-muted-foreground text-sm ml-2">© 2026</span>
        </div>

        <ul className="flex items-center gap-6 text-sm text-muted-foreground">
          <li><a href="#features" className="hover:text-foreground transition-colors">Funcionalidades</a></li>
          <li><a href="#pricing" className="hover:text-foreground transition-colors">Preços</a></li>
          <li><a href="#testimonials" className="hover:text-foreground transition-colors">Depoimentos</a></li>
        </ul>

        <div className="flex items-center gap-3">
          {[Twitter, Instagram, Github, Linkedin].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:scale-110 transition-all"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
