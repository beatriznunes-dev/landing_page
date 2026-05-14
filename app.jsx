import React, { useState } from 'react';
import { Calendar, ChevronRight, Menu, X, ShieldCheck, Award, Ruler, Compass } from 'lucide-react';

export default function LuxuryTailoringLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-sans antialiased selection:bg-[#C5A880] selection:text-black">
      
      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl tracking-[0.25em] text-white uppercase hover:opacity-80 transition-opacity">
            AURELIUS
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12 text-xs uppercase tracking-[0.2em] text-[#A3A3A3]">
            <a href="#heritage" className="hover:text-white transition-colors">O Legado</a>
            <a href="#experience" className="hover:text-white transition-colors">A Experiência</a>
            <a href="#collections" className="hover:text-white transition-colors">Coleções</a>
            <a href="#process" className="hover:text-white transition-colors">O Processo</a>
          </nav>

          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-[#C5A880] text-xs uppercase tracking-[0.2em] text-[#C5A880] hover:bg-[#C5A880] hover:text-black transition-all duration-300"
            >
              Agendar Consultoria
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="absolute top-24 left-0 w-full bg-[#0A0A0A] border-b border-white/5 px-6 py-8 flex flex-col space-y-6 text-xs uppercase tracking-[0.2em] md:hidden animate-fadeIn">
            <a href="#heritage" onClick={() => setIsMenuOpen(false)} className="text-[#A3A3A3] hover:text-white">O Legado</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-[#A3A3A3] hover:text-white">A Experiência</a>
            <a href="#collections" onClick={() => setIsMenuOpen(false)} className="text-[#A3A3A3] hover:text-white">Coleções</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)} className="text-[#A3A3A3] hover:text-white">O Processo</a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-center py-3 border border-[#C5A880] text-[#C5A880]"
            >
              Agendar Consultoria
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Background Sophisticated Geometry / Minimal Overlay */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(25,25,25,0.8)_0%,rgba(10,10,10,1)_100%)]" />
        
        {/* Decorative Grid Line (Quiet Luxury Detail) */}
        <div className="absolute inset-y-0 left-1/4 w-[1px] bg-white/[0.02] hidden md:block"></div>
        <div className="absolute inset-y-0 left-3/4 w-[1px] bg-white/[0.02] hidden md:block"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 space-y-8">
          <p className="text-xs uppercase tracking-[0.4em] text-[#C5A880] font-medium opacity-90 animate-slideDown">
            Vestindo o Poder Silencioso
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white tracking-wide leading-[1.15] font-light">
            Não é sobre ser notado.<br />
            <span className="italic text-[#F5F5F5]">É sobre ser lembrado.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#A3A3A3] max-w-xl mx-auto font-light tracking-wide leading-relaxed">
            Alta alfaiataria sob medida para executivos e líderes que compreendem que a imagem pessoal é o mais alto nível de posicionamento e credibilidade.
          </p>
          <div className="pt-4">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 bg-[#E5E5E5] text-black px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#C5A880] hover:text-black transition-all duration-300 shadow-lg"
            >
              Reserve seu Atendimento Privado
              <ChevronRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
          <span className="text-[10px] uppercase tracking-[0.3em] font-light">Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* MANIFESTO / HERITAGE */}
      <section id="heritage" className="py-32 border-t border-white/5 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] block font-medium">O Manifesto</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-wide font-light leading-tight">
              A Armadura do Mundo Corporativo Contemporâneo
            </h2>
          </div>
          <div className="md:col-span-7 text-[#909090] font-light text-base leading-relaxed space-y-6 border-l border-white/10 md:pl-12">
            <p>
              No epicentro dos grandes negócios, a presença precede a palavra. A verdadeira sofisticação não grita; ela se impõe pela precisão do corte, pelo caimento impecável e pela escolha cirúrgica das matérias-primas.
            </p>
            <p>
              Nossa missão é traduzir sua trajetória de sucesso em linhas, tecidos e estruturas exclusivas. Unimos a tradição secular da alfaiataria artesanal a uma visão estética moderna e minimalista, moldando não apenas roupas, mas o seu legado visual.
            </p>
          </div>
        </div>
      </section>

      {/* THE EXPERIENCE (PILLARS) */}
      <section id="experience" className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto space-y-4 mb-20">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-medium block">Excelência Absoluta</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-wide font-light">Os Pilares da Distinção</h2>
            <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mt-4"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Ruler size={24} className="text-[#C5A880]" />,
                title: "Fit Anatômico Perfeito",
                desc: "Mais de trinta medidas individuais mapeadas para construir um caimento estruturado que valoriza a postura natural."
              },
              {
                icon: <Compass size={24} className="text-[#C5A880]" />,
                title: "Curadoria de Fios",
                desc: "Seleção rigorosa das lãs frias mais nobres do mundo, provenientes dos melhores moinhos italianos e ingleses."
              },
              {
                icon: <Award size={24} className="text-[#C5A880]" />,
                title: "Artesanato Atemporal",
                desc: "Detalhes finalizados à mão por mestres alfaiates. Casas de botão e pespontos executados com precisão milimétrica."
              },
              {
                icon: <ShieldCheck size={24} className="text-[#C5A880]" />,
                title: "Posicionamento de Status",
                desc: "Uma experiência de vestuário desenhada para projetar autoridade imediata, credibilidade e liderança natural."
              }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-[#121212] p-8 border border-white/5 hover:border-[#C5A880]/30 transition-all duration-500 group">
                <div className="mb-6 transform group-hover:scale-105 transition-transform duration-300">{pillar.icon}</div>
                <h3 className="font-serif text-lg text-white mb-3 font-light tracking-wide">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-[#8E8E8E] font-light leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTIONS PREVIEW */}
      <section id="collections" className="py-32 bg-[#0F0F0F] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-medium block">Linhas Exclusivas</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-wide font-light">Cortes de Alta Patente</h2>
            </div>
            <p className="text-sm text-[#909090] max-w-sm font-light">
              Do boardroom ao Black Tie. Trajes milimetricamente arquitetados para cada esfera de influência.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "The Boardroom Suit", subtitle: "Lãs Super 150s & 180s", category: "Poder Executivo" },
              { title: "Casual Premium", subtitle: "Blazers Desestruturados & Linho", category: "Luxo Despojado" },
              { title: "Solemn Evening", subtitle: "Smokings & Casacas Sob Medida", category: "Gala & Eventos" }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#161616] aspect-[3/4] p-10 flex flex-col justify-between border border-white/5 group hover:bg-[#1A1A1A] transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.05),transparent)]"></div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880]">{item.category}</span>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-white font-light tracking-wide">{item.title}</h3>
                  <p className="text-xs text-[#8E8E8E] font-light tracking-wider uppercase">{item.subtitle}</p>
                  <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-xs uppercase tracking-widest text-white">
                    Saber Mais <ChevronRight size={12} className="text-[#C5A880]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVATE APPOINTMENT FORM */}
      <section id="contact" className="py-32 bg-[#0A0A0A] relative">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <Calendar className="text-[#C5A880] mx-auto mb-2" size={28} />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A880] font-medium block">Atendimento Reservado</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-wide font-light">Agende uma Consultoria Privada</h2>
            <p className="text-sm text-[#8E8E8E] font-light max-w-md mx-auto pt-2">
              Disponível em seu escritório, residência ou em nosso Atelier Privé. Preencha os campos abaixo e nosso concierge entrará em contato em até duas horas.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-8 backend-placeholder">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#A3A3A3] block">Nome Completo</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white text-sm focus:outline-none focus:border-[#C5A880] transition-colors font-light"
                  placeholder="Ex: Dr. Alexandre Whitaker" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#A3A3A3] block">Cargo / Corporação</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white text-sm focus:outline-none focus:border-[#C5A880] transition-colors font-light"
                  placeholder="Ex: CEO / Diretor Executivo" 
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#A3A3A3] block">Contato Corporativo (E-mail ou WhatsApp)</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white text-sm focus:outline-none focus:border-[#C5A880] transition-colors font-light"
                  placeholder="contato@empresa.com.br" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#A3A3A3] block">Preferência de Local</label>
                <select className="w-full bg-transparent border-b border-white/10 py-3 text-[#A3A3A3] text-sm focus:outline-none focus:border-[#C5A880] transition-colors font-light appearance-none rounded-none cursor-pointer">
                  <option value="atelier" className="bg-[#121212] text-white">Nosso Atelier Privé</option>
                  <option value="office" className="bg-[#121212] text-white">Meu Escritório / Empresa</option>
                  <option value="residence" className="bg-[#121212] text-white">Minha Residência</option>
                </select>
              </div>
            </div>

            <div className="pt-6 text-center">
              <button 
                type="submit" 
                className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-[#C5A880] text-[#C5A880] px-12 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#C5A880] hover:text-black transition-all duration-500"
              >
                Solicitar Convite Exclusivo
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] text-[#707070] py-16 border-t border-white/5 text-xs font-light tracking-wider">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="font-serif text-lg text-white tracking-[0.2em] uppercase">AURELIUS</p>
            <p className="text-[11px] opacity-60 text-[#A3A3A3]">ALFAIATARIA ARTESANAL SOB MEDIDA</p>
          </div>
          <div className="flex space-x-8 uppercase text-[10px] tracking-[0.15em]">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
            <a href="#" className="hover:text-white transition-colors">Atendimento VIP</a>
          </div>
          <p className="text-[10px] opacity-50">
            &copy; {new Date().getFullYear()} Aurelius. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}