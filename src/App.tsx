import React, { useEffect, useState } from 'react';
import { OfficialLogo } from './components/OfficialLogo';
import { ChevronUp } from 'lucide-react';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      setShowScrollTop(currentScroll > 800);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F3F0E9] selection:bg-[#C6A15B]/30 selection:text-[#E2CC96] font-sans antialiased overflow-x-hidden relative">
      {/* ─────────────────────────────────────────────────────────────
          ULTRA-DISCREET READING PROGRESS (Quiet Hairline at the Top)
          ───────────────────────────────────────────────────────────── */}
      <div className="fixed top-0 inset-x-0 h-[2px] z-50 pointer-events-none bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#C6A15B]/40 via-[#E2CC96] to-[#C6A15B] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          CAPÍTULO 1: A ABERTURA MONUMENTAL (O PRIMEIRO IMPACTO)
          100vh · Luz Volumétrica · Arquitetura · Presença
          ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-between items-center px-6 py-12 md:py-16 text-center overflow-hidden">
        {/* Cinematic Atmospheric Light Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 luxury-noise opacity-40" />
          {/* Volumetric ambient light cone */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] md:w-[1100px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(198,161,91,0.18)_0%,_rgba(226,204,150,0.04)_45%,_transparent_75%)] blur-3xl" />
          {/* Fine architectural vertical guide lines */}
          <div className="absolute inset-0 flex justify-between px-12 md:px-24 opacity-15">
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#C6A15B] to-transparent" />
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#E2CC96]/40 to-transparent hidden md:block" />
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#C6A15B] to-transparent" />
          </div>
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>

        {/* Quiet Top Mark */}
        <div className="relative z-10 pt-4">
          <span className="text-[10px] md:text-xs font-mono tracking-[0.35em] uppercase text-[#C6A15B]/80 font-medium">
            TITANS SOCIETY · PUBLICAÇÃO INSTITUCIONAL
          </span>
        </div>

        {/* Monumental Centerpiece */}
        <div className="relative z-10 max-w-5xl mx-auto space-y-10 my-auto py-12">
          {/* Official Golden Crest */}
          <div className="transform hover:scale-[1.01] transition-transform duration-700">
            <OfficialLogo size="hero" className="mx-auto" />
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto" />
            
            <h1 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#F3F0E9] font-light leading-relaxed md:leading-[1.35] tracking-wide text-balance">
              “NÃO É SOBRE ESTAR ENTRE PESSOAS. É SOBRE O QUE SOMOS CAPAZES DE CONSTRUIR JUNTOS.”
            </h1>

            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto" />
          </div>

          <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-[#C6A15B] font-medium pt-2">
            Conhecimento • Relações • Propósito
          </p>
        </div>

        {/* Quiet Scroll Indicator */}
        <div className="relative z-10 pb-4 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#F3F0E9]/60 font-mono">
            ROLE PARA INICIAR A LEITURA
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#C6A15B] to-transparent animate-pulse" />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CAPÍTULO 2: O MANIFESTO TITANS (FLUIDEZ EDITORIAL CONTÍNUA)
          ───────────────────────────────────────────────────────────── */}
      
      {/* SEÇÃO 2.1: A PREMISSA FUNDAMENTAL */}
      <section className="relative py-28 md:py-36 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="space-y-12">
          <div className="flex items-center gap-4 text-xs font-mono tracking-[0.3em] uppercase text-[#C6A15B]/80">
            <span>01</span>
            <div className="w-12 h-[1px] bg-[#C6A15B]/40" />
            <span>MANIFESTO TITANS</span>
          </div>

          <div className="space-y-8 max-w-4xl">
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F3F0E9] font-medium leading-[1.2] tracking-tight">
              Acreditamos que o próximo nível de uma trajetória não depende exclusivamente do que uma pessoa sabe, do que possui ou do que já conquistou.
            </h2>

            <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-[#E2CC96]/90 font-light leading-relaxed pl-4 md:pl-8 border-l border-[#C6A15B]/40">
              Depende também das perspectivas às quais tem acesso, das relações que constrói, da confiança que inspira e da capacidade de reconhecer valor onde outros enxergam apenas mais um contato.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2.2: A DISTINÇÃO ESSENCIAL (IMPACTO TIPOGRÁFICO MONUMENTAL EM OBSIDIANA) */}
      <section className="relative py-32 md:py-44 px-6 md:px-16 bg-[#101010] border-y border-[#C6A15B]/20">
        <div className="absolute inset-0 luxury-noise opacity-30 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto space-y-14 relative z-10 text-center">
          <span className="text-xs font-mono tracking-[0.35em] uppercase text-[#C6A15B] font-semibold">
            A DISTINÇÃO ESSENCIAL
          </span>

          <div className="space-y-8 max-w-4xl mx-auto">
            <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#F3F0E9]/70 font-light">
              O mundo é construído pela conexão que há entre as pessoas.
            </p>
            
            <p className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F3F0E9] font-normal leading-tight">
              Mas conexão, por si só, não significa relacionamento.
            </p>
            
            <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#E2CC96] font-light">
              Presença não significa contribuição.
            </p>
            
            <p className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#F3F0E9] font-light">
              E proximidade não significa confiança.
            </p>
          </div>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto" />
        </div>
      </section>

      {/* SEÇÃO 2.3: A GÊNESE (TRANSIÇÃO PARA MARFIM EDITORIAL #F3F0E9) */}
      <section className="relative py-32 md:py-40 px-6 md:px-16 bg-[#F3F0E9] text-[#171717]">
        <div className="absolute inset-0 luxury-noise-ivory opacity-30 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <div className="flex items-center gap-4 text-xs font-mono tracking-[0.3em] uppercase text-[#8E6F33]">
            <span>02</span>
            <div className="w-12 h-[1px] bg-[#C6A15B]/50" />
            <span>A ORIGEM DA TITANS SOCIETY</span>
          </div>

          <div className="space-y-8">
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#171717] font-medium leading-tight">
              Foi a partir dessa distinção que nasceu a Titans Society.
            </h2>

            <div className="prose prose-lg max-w-none text-[#2d2d2d] font-editorial text-xl sm:text-2xl leading-relaxed space-y-6 font-light">
              <p>
                Não para criar mais um ambiente de apresentações superficiais, mas para desenvolver uma comunidade na qual pessoas possam se conhecer com mais profundidade, compartilhar experiências com propósito e explorar possibilidades de crescimento com responsabilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2.4: NOSSAS CRENÇAS FUNDAMENTAIS (DUAS COLUNAS EDITORIAIS EM GRAFITE) */}
      <section className="relative py-32 md:py-40 px-6 md:px-16 bg-[#171717] text-[#F3F0E9] border-t border-[#C6A15B]/20">
        <div className="absolute inset-0 luxury-noise opacity-30 pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-16 relative z-10">
          <div className="flex items-center gap-4 text-xs font-mono tracking-[0.3em] uppercase text-[#C6A15B]">
            <span>03</span>
            <div className="w-12 h-[1px] bg-[#C6A15B]/40" />
            <span>NOSSAS CRENÇAS FUNDAMENTAIS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6">
              <span className="text-xs font-mono tracking-widest uppercase text-[#E2CC96]">
                EQUILÍBRIO & PRINCÍPIOS
              </span>
              <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-[#F3F0E9] font-light leading-relaxed">
                Acreditamos na força da competência individual, mas reconhecemos o potencial da inteligência compartilhada; na ambição, desde que acompanhada de integridade; nos negócios, sem reduzir todas as relações a interesses comerciais; e na exclusividade, não como instrumento de superioridade, mas como responsabilidade na preservação da qualidade de uma comunidade.
              </p>
            </div>

            <div className="space-y-6 lg:border-l lg:border-[#C6A15B]/25 lg:pl-12">
              <span className="text-xs font-mono tracking-widest uppercase text-[#C6A15B]">
                TEMPO & HORIZONTE
              </span>
              <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-[#E2CC96]/95 font-light leading-relaxed">
                E acreditamos que o verdadeiro valor de uma conexão não está apenas no que ela pode proporcionar hoje, mas também na confiança e nas possibilidades que pode ajudar a construir ao longo do tempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2.5: NOSSA VISÃO DE PERTENCIMENTO (COMPOSIÇÃO ESCULTURAL EM OBSIDIANA) */}
      <section className="relative py-36 md:py-48 px-6 md:px-16 bg-[#050505]">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono tracking-[0.35em] uppercase text-[#C6A15B]">
              04 · POSTURA & IDENTIDADE
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F3F0E9] font-medium leading-tight">
              Nossa Visão de Pertencimento
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#E2CC96] font-normal">
              Ser um Titan não é carregar um título.
            </p>
            <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#F3F0E9] font-light">
              É assumir uma postura.
            </p>
          </div>

          {/* Os 4 Princípios da Postura */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-6">
            <div className="border-t border-[#C6A15B]/30 pt-6 space-y-2">
              <span className="text-xs font-mono text-[#C6A15B]">01</span>
              <p className="font-editorial text-2xl text-[#F3F0E9] font-light">
                Reputação não se exige: constrói-se.
              </p>
            </div>

            <div className="border-t border-[#C6A15B]/30 pt-6 space-y-2">
              <span className="text-xs font-mono text-[#C6A15B]">02</span>
              <p className="font-editorial text-2xl text-[#F3F0E9] font-light">
                Confiança não se compra: conquista-se.
              </p>
            </div>

            <div className="border-t border-[#C6A15B]/30 pt-6 space-y-2">
              <span className="text-xs font-mono text-[#C6A15B]">03</span>
              <p className="font-editorial text-2xl text-[#F3F0E9] font-light">
                Oportunidades não se garantem: identificam-se, desenvolvem-se e são avaliadas.
              </p>
            </div>

            <div className="border-t border-[#C6A15B]/30 pt-6 space-y-2">
              <span className="text-xs font-mono text-[#C6A15B]">04</span>
              <p className="font-editorial text-2xl text-[#E2CC96] font-light">
                A comunidade não se torna extraordinária apenas pelas pessoas que reúne, mas pela qualidade das relações que consegue cultivar.
              </p>
            </div>
          </div>

          {/* Continuação da Visão de Pertencimento */}
          <div className="pt-12 max-w-4xl mx-auto space-y-8 border-t border-[#C6A15B]/15">
            <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-[#F3F0E9]/85 font-light leading-relaxed">
              Não buscamos apenas pessoas interessadas em receber. Valorizamos aquelas que também desejam contribuir.
            </p>
            <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-[#F3F0E9]/85 font-light leading-relaxed">
              Não buscamos uniformidade de pensamentos, trajetórias ou negócios. Valorizamos a diversidade de experiências que amplia perspectivas e estimula novas possibilidades.
            </p>
            <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-[#E2CC96] font-light leading-relaxed">
              Não prometemos resultados prontos. Trabalhamos para construir as condições nas quais relações relevantes possam se desenvolver.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2.6: NOSSO COMPROMISSO (PROVOCAÇÃO DE LEGADO EM MARFIM EDITORIAL) */}
      <section className="relative py-32 md:py-44 px-6 md:px-16 bg-[#F3F0E9] text-[#171717] border-t border-[#C6A15B]/30">
        <div className="absolute inset-0 luxury-noise-ivory opacity-30 pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <div className="flex items-center gap-4 text-xs font-mono tracking-[0.3em] uppercase text-[#8E6F33]">
            <span>05</span>
            <div className="w-12 h-[1px] bg-[#C6A15B]/50" />
            <span>MANIFESTO TITANS</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#171717] font-medium leading-[1.15]">
            Nosso Compromisso
          </h2>

          <div className="space-y-8 font-editorial text-xl sm:text-2xl md:text-[26px] text-[#242424] font-light leading-relaxed">
            <p>
              Construir um ambiente no qual a confiança tenha importância, o conhecimento circule, as experiências sejam valorizadas e a colaboração aconteça com liberdade, responsabilidade e propósito.
            </p>

            <p>
              Um ambiente em que cada participante preserve sua individualidade, sua autonomia e seus objetivos, enquanto encontra oportunidades para ampliar sua visão por meio da convivência com outras trajetórias.
            </p>

            <p className="text-[#8E6F33] font-normal pt-4 border-t border-[#C6A15B]/30">
              Porque crescer não significa apenas chegar mais longe. Significa também desenvolver a capacidade de reconhecer boas oportunidades, tomar decisões melhores e construir algo que tenha valor para além de si próprio.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CAPÍTULO 3: O GUIA DE VANTAGENS PARA O FILIADO
          Um Ecossistema Editorial Contínuo e Completo
          ───────────────────────────────────────────────────────────── */}
      
      {/* TRANSIÇÃO SUTIL & NOTA IMPORTANTE */}
      <section className="relative py-36 md:py-48 px-6 md:px-16 bg-[#050505] border-t border-[#C6A15B]/20">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="space-y-6 text-center">
            <span className="text-xs font-mono tracking-[0.35em] uppercase text-[#C6A15B]">
              CAPÍTULO II · PROPOSTA INSTITUCIONAL
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#F3F0E9] font-medium">
              Guia de Vantagens para o Filiado
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#E2CC96] tracking-[0.25em] uppercase font-medium">
              Networking estratégico • Acesso qualificado • Relações de confiança • Desenvolvimento empresarial
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8 font-editorial text-xl sm:text-2xl text-[#F3F0E9]/80 font-light leading-relaxed text-center">
            <p>
              A Titans Society é concebida como uma comunidade empresarial seletiva, voltada a aproximar empresários e lideranças com capacidade de decisão, interesses complementares e disposição para construir relações de longo prazo. Este guia adapta as vantagens típicas de uma rede de negócios ao posicionamento proposto para a Titans Society.
            </p>
          </div>

          {/* Nota Importante Integral */}
          <div className="max-w-3xl mx-auto p-8 border border-[#C6A15B]/35 bg-[#171717]/80 backdrop-blur-sm space-y-3">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#E2CC96] font-semibold block">
              Nota importante sobre as diretrizes institucionais
            </span>
            <p className="text-xs sm:text-sm text-[#F3F0E9]/75 font-light leading-relaxed">
              Os benefícios abaixo são possibilidades a serem definidas e implementadas pelo projeto, não serviços já garantidos. A afiliação não assegura contratos, indicações, faturamento, investimentos ou retorno financeiro. Os entregáveis, a frequência dos eventos e as condições de participação deverão constar da proposta comercial e do contrato de afiliação.
            </p>
          </div>
        </div>
      </section>

      {/* AS 12 SEÇÕES INTEGRAIS DO GUIA DE VANTAGENS */}

      {/* SEÇÃO 1: ACESSO A REDE EMPRESARIAL */}
      <section className="relative py-28 md:py-36 px-6 md:px-16 bg-[#171717] border-t border-[#C6A15B]/15">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#C6A15B] tracking-widest uppercase">
              SEÇÃO 01
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#F3F0E9] font-medium leading-tight">
              1. Acesso a uma rede empresarial altamente selecionada
            </h3>
          </div>

          <div className="space-y-6 pt-4 font-editorial text-xl sm:text-2xl text-[#F3F0E9]/85 font-light leading-relaxed">
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Relacionar-se com um grupo limitado de empresários e líderes, favorecendo conversas mais próximas e aprofundadas.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Conhecer decisores empresariais e profissionais com experiência, influência e redes de relacionamento próprias.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Ampliar o acesso a círculos empresariais que exigiriam tempo e esforço para alcançar individualmente.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Participar de uma comunidade que busca compatibilidade de valores, reputação, objetivos e contribuição mútua.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: GERAÇÃO DE OPORTUNIDADES (MARFIM EDITORIAL) */}
      <section className="relative py-28 md:py-36 px-6 md:px-16 bg-[#F3F0E9] text-[#171717] border-t border-[#C6A15B]/30">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#8E6F33] tracking-widest uppercase">
              SEÇÃO 02
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#171717] font-medium leading-tight">
              2. Geração de oportunidades e desenvolvimento de negócios
            </h3>
          </div>

          <div className="space-y-6 pt-4 font-editorial text-xl sm:text-2xl text-[#2a2a2a] font-light leading-relaxed">
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Identificar oportunidades comerciais, parcerias, clientes e fornecedores por meio de apresentações qualificadas.
            </p>
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Aumentar a possibilidade de negócios originados de relações de confiança e conhecimento mútuo.
            </p>
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Explorar oportunidades de venda cruzada e soluções complementares entre empresas filiadas.
            </p>
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Encontrar parceiros para projetos, expansão territorial, novos canais de distribuição ou atendimento multidisciplinar.
            </p>
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Compartilhar oportunidades de forma responsável, respeitando confidencialidade, conflitos de interesse e regras profissionais.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: CONEXÕES ESTRATÉGICAS */}
      <section className="relative py-28 md:py-36 px-6 md:px-16 bg-[#050505] border-t border-[#C6A15B]/20">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#C6A15B] tracking-widest uppercase">
              SEÇÃO 03
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#F3F0E9] font-medium leading-tight">
              3. Conexões estratégicas e apresentações personalizadas
            </h3>
          </div>

          <div className="space-y-6 pt-4 font-editorial text-xl sm:text-2xl text-[#F3F0E9]/85 font-light leading-relaxed">
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Possibilidade de receber apresentações direcionadas a pessoas ou empresas compatíveis com objetivos específicos.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Mapeamento colaborativo de necessidades, competências e conexões relevantes entre os filiados.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Reuniões individuais ou pequenos encontros temáticos, caso previstos no calendário oficial.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Aproximação entre empresários de setores complementares para explorar projetos de interesse comum.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Apoio de conectores e embaixadores na identificação de contatos pertinentes, conforme disponibilidade e regras do projeto.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: AMBIENTE RESERVADO (GRAFITE ESCURO) */}
      <section className="relative py-28 md:py-36 px-6 md:px-16 bg-[#171717] border-t border-[#C6A15B]/20">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#C6A15B] tracking-widest uppercase">
              SEÇÃO 04
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#F3F0E9] font-medium leading-tight">
              4. Ambiente reservado e experiência diferenciada
            </h3>
          </div>

          <div className="space-y-6 pt-4 font-editorial text-xl sm:text-2xl text-[#F3F0E9]/85 font-light leading-relaxed">
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Participação em encontros presenciais organizados, com pauta e objetivo definidos.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Oportunidade de discutir desafios empresariais com pares que compreendem responsabilidades de gestão e tomada de decisão.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Espaço para conversas aprofundadas, com atenção à confidencialidade e à qualidade das interações.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Experiência de comunidade baseada em confiança, discrição, respeito ao tempo dos participantes e preparação dos encontros.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Possibilidade de cafés executivos, mesas-redondas, jantares ou encontros especiais, quando incluídos na programação.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: INTELIGÊNCIA EMPRESARIAL (MARFIM EDITORIAL) */}
      <section className="relative py-28 md:py-36 px-6 md:px-16 bg-[#F3F0E9] text-[#171717] border-t border-[#C6A15B]/30">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#8E6F33] tracking-widest uppercase">
              SEÇÃO 05
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#171717] font-medium leading-tight">
              5. Inteligência empresarial e troca de experiências
            </h3>
          </div>

          <div className="space-y-6 pt-4 font-editorial text-xl sm:text-2xl text-[#2a2a2a] font-light leading-relaxed">
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Compartilhar experiências sobre gestão, crescimento, liderança, sucessão, inovação e desenvolvimento de mercados.
            </p>
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Aprender com decisões, erros e boas práticas de outros empresários, sem substituir consultoria especializada.
            </p>
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Discutir tendências e desafios em encontros temáticos ou painéis com convidados.
            </p>
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Acessar perspectivas diferentes para apoiar a análise de decisões estratégicas.
            </p>
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Identificar oportunidades de colaboração a partir de conhecimentos e competências complementares.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: VISIBILIDADE, REPUTAÇÃO E POSICIONAMENTO */}
      <section className="relative py-28 md:py-36 px-6 md:px-16 bg-[#050505] border-t border-[#C6A15B]/20">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#C6A15B] tracking-widest uppercase">
              SEÇÃO 06
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#F3F0E9] font-medium leading-tight">
              6. Visibilidade, reputação e posicionamento
            </h3>
          </div>

          <div className="space-y-6 pt-4 font-editorial text-xl sm:text-2xl text-[#F3F0E9]/85 font-light leading-relaxed">
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Apresentar a empresa, sua proposta de valor e suas competências a uma audiência empresarial selecionada.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Fortalecer a reputação por meio de contribuições consistentes, conduta ética e entregas de qualidade.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Ser reconhecido como participante ativo de uma comunidade que valoriza relações profissionais duradouras.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Explorar conteúdos, entrevistas ou apresentações institucionais, caso sejam criados e aprovados.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Desenvolver uma narrativa empresarial mais clara ao explicar atuação, diferenciais e objetivos.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7: EXPANSÃO DE MERCADO E ALCANCE GEOGRÁFICO (MARFIM EDITORIAL) */}
      <section className="relative py-28 md:py-36 px-6 md:px-16 bg-[#F3F0E9] text-[#171717] border-t border-[#C6A15B]/30">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#8E6F33] tracking-widest uppercase">
              SEÇÃO 07
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#171717] font-medium leading-tight">
              7. Expansão de mercado e alcance geográfico
            </h3>
          </div>

          <div className="space-y-6 pt-4 font-editorial text-xl sm:text-2xl text-[#2a2a2a] font-light leading-relaxed">
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Identificar contatos comerciais em outras cidades, estados ou países por meio das redes dos filiados.
            </p>
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Localizar potenciais parceiros locais para estudar a entrada em novos mercados.
            </p>
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Explorar alianças empresariais para projetos em diferentes regiões.
            </p>
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Compartilhar referências de fornecedores, especialistas e prestadores de serviços, quando adequados.
            </p>
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Avaliar oportunidades de expansão sem presumir validação ou garantia de desempenho de terceiros.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8: DESENVOLVIMENTO DE LIDERANÇA E CONTRIBUIÇÃO */}
      <section className="relative py-28 md:py-36 px-6 md:px-16 bg-[#171717] border-t border-[#C6A15B]/20">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#C6A15B] tracking-widest uppercase">
              SEÇÃO 08
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#F3F0E9] font-medium leading-tight">
              8. Desenvolvimento de liderança e contribuição
            </h3>
          </div>

          <div className="space-y-6 pt-4 font-editorial text-xl sm:text-2xl text-[#F3F0E9]/85 font-light leading-relaxed">
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Contribuir para a agenda, os temas e a evolução da comunidade.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Compartilhar conhecimento e experiência, respeitando limites de confidencialidade.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Participar de comitês, grupos de trabalho ou iniciativas especiais, se instituídos pela governança.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Desenvolver habilidades de comunicação, negociação, escuta, relacionamento e colaboração.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Ser reconhecido pela contribuição efetiva, segundo critérios transparentes que venham a ser definidos.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 9: GOVERNANÇA E QUALIDADE DA EXPERIÊNCIA (MARFIM EDITORIAL) */}
      <section className="relative py-28 md:py-36 px-6 md:px-16 bg-[#F3F0E9] text-[#171717] border-t border-[#C6A15B]/30">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#8E6F33] tracking-widest uppercase">
              SEÇÃO 09
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#171717] font-medium leading-tight">
              9. Governança e qualidade da experiência
            </h3>
          </div>

          <div className="space-y-6 pt-4 font-editorial text-xl sm:text-2xl text-[#2a2a2a] font-light leading-relaxed">
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Conhecer regras de participação, critérios de admissão, renovação e conduta.
            </p>
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Receber informações claras sobre calendário, serviços incluídos, canais de comunicação e responsáveis.
            </p>
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Ter mecanismos para sugerir melhorias e reportar problemas, conforme os instrumentos adotados.
            </p>
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Avaliar a experiência por indicadores como qualidade das conexões, oportunidades qualificadas e satisfação.
            </p>
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Participar de um modelo que priorize a qualidade da contribuição e do relacionamento, não apenas o número de membros.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 10: ENTREGÁVEIS A FORMALIZAR NA PROPOSTA DE AFILIAÇÃO */}
      <section className="relative py-28 md:py-36 px-6 md:px-16 bg-[#050505] border-t border-[#C6A15B]/20">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#C6A15B] tracking-widest uppercase">
              SEÇÃO 10
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#F3F0E9] font-medium leading-tight">
              10. Entregáveis a formalizar na proposta de afiliação
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-4 font-editorial text-xl text-[#F3F0E9]/85 font-light leading-relaxed">
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Calendário anual e número mínimo de encontros incluídos.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Formato e frequência de reuniões individuais ou encontros de pequenos grupos.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Processo de apresentação de conexões e critérios de qualificação.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Encontros com convidados, especialistas ou líderes empresariais.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Relatórios periódicos de atividades, conexões e avaliação da experiência.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Política de confidencialidade, conflitos de interesse e proteção de dados.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Critérios objetivos de admissão, participação, desempenho e renovação.
            </p>
            <p className="pl-6 border-l border-[#C6A15B]/40">
              • Serviços adicionais, eventos especiais e despesas não incluídos na anuidade.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 11: COMPROMISSOS ESPERADOS DO FILIADO (MARFIM EDITORIAL) */}
      <section className="relative py-28 md:py-36 px-6 md:px-16 bg-[#F3F0E9] text-[#171717] border-t border-[#C6A15B]/30">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#8E6F33] tracking-widest uppercase">
              SEÇÃO 11
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#171717] font-medium leading-tight">
              11. Compromissos esperados do filiado
            </h3>
          </div>

          <div className="space-y-6 pt-4 font-editorial text-xl sm:text-2xl text-[#2a2a2a] font-light leading-relaxed">
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Participar de forma ativa e respeitosa, dentro das regras e da agenda acordadas.
            </p>
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Manter informações empresariais atualizadas quando necessário.
            </p>
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Tratar os demais membros com discrição, ética e profissionalismo.
            </p>
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Compartilhar oportunidades pertinentes sem pressão por reciprocidade ou indicações artificiais.
            </p>
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Respeitar confidencialidade, proteção de dados, direitos de terceiros e normas profissionais aplicáveis.
            </p>
            <p className="pl-6 border-l border-[#8E6F33]/40">
              • Informar conflitos de interesse e cumprir os critérios definidos em contrato.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 12: COMO AVALIAR O VALOR DA AFILIAÇÃO */}
      <section className="relative py-28 md:py-36 px-6 md:px-16 bg-[#171717] border-t border-[#C6A15B]/20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#C6A15B] tracking-widest uppercase">
              SEÇÃO 12
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#F3F0E9] font-medium leading-tight">
              12. Como avaliar o valor da afiliação
            </h3>
          </div>

          <div className="space-y-6 pt-2 font-editorial text-xl sm:text-2xl text-[#F3F0E9]/85 font-light leading-relaxed">
            <p>
              A proposta de valor deverá ser avaliada pela qualidade das relações construídas, utilidade das conexões, oportunidades desenvolvidas e experiência oferecida.
            </p>
            <p>
              Recomenda-se acompanhar a quantidade e qualidade das conexões, reuniões realizadas, oportunidades qualificadas, parcerias iniciadas, satisfação e resultados comerciais efetivamente concretizados.
            </p>
            <p className="text-[#E2CC96] font-normal pt-2 border-t border-[#C6A15B]/25">
              Nenhum indicador, isoladamente, garante retorno financeiro.
            </p>
          </div>
        </div>
      </section>

      {/* CONCLUSÃO DO GUIA DE VANTAGENS (MARFIM EDITORIAL) */}
      <section className="relative py-28 md:py-36 px-6 md:px-16 bg-[#F3F0E9] text-[#171717] border-t border-[#C6A15B]/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="text-xs font-mono text-[#8E6F33] tracking-widest uppercase">
            CONCLUSÃO DO GUIA DE VANTAGENS
          </span>

          <div className="space-y-6 font-editorial text-2xl sm:text-3xl text-[#1f1f1f] font-light leading-relaxed">
            <p>
              A Titans Society pretende oferecer mais do que acesso a eventos: propõe uma comunidade empresarial seletiva na qual confiança, acesso qualificado, inteligência compartilhada e colaboração possam criar condições para oportunidades de longo prazo.
            </p>
            <p className="text-[#8E6F33] font-normal">
              O valor real dependerá da qualidade dos participantes, da governança, da execução da agenda e da contribuição de cada filiado.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CAPÍTULO 4: ENCERRAMENTO INSTITUCIONAL
          A Definição de Grandeza · A Tríade · Presença Solene
          ───────────────────────────────────────────────────────────── */}
      <section className="relative py-36 md:py-48 px-6 md:px-16 bg-[#050505] border-t border-[#C6A15B]/20 text-center overflow-hidden">
        {/* Subtle Bottom Light Halo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 luxury-noise opacity-40" />
          <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(198,161,91,0.14)_0%,_transparent_70%)] blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto space-y-16 relative z-10">
          {/* A Definição de Grandeza */}
          <div className="space-y-6">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto" />
            
            <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#F3F0E9] font-light leading-relaxed max-w-3xl mx-auto">
              “Não definimos grandeza apenas pelo que alguém conquistou. Reconhecemos também a forma como essa pessoa se relaciona, contribui e participa da construção de possibilidades para o futuro.”
            </p>

            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto" />
          </div>

          {/* A Tríade de Compromisso */}
          <div className="space-y-5 max-w-2xl mx-auto">
            <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-[#E2CC96] font-light">
              Não apenas conexões. Relações que merecem ser construídas.
            </p>
            <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-[#E2CC96] font-light">
              Não apenas oportunidades. A capacidade de reconhecê-las e desenvolvê-las.
            </p>
            <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-[#E2CC96] font-light">
              Não apenas pertencimento. Compromisso com o valor que construímos juntos.
            </p>
          </div>

          {/* Logotipo Oficial & Assinatura */}
          <div className="pt-8 space-y-6">
            <OfficialLogo size="lg" className="mx-auto" />
            
            <div className="space-y-2">
              <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-[#C6A15B] font-medium">
                Conhecimento • Relações • Propósito
              </p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#F3F0E9]/40 font-mono">
                TITANS SOCIETY · TODOS OS DIREITOS RESERVADOS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FLOAT RETURN-TO-TOP BUTTON (Ultra-discreet, appears after 800px)
          ───────────────────────────────────────────────────────────── */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Voltar ao início"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#171717]/80 text-[#C6A15B] border border-[#C6A15B]/30 hover:border-[#C6A15B] hover:text-[#E2CC96] backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
