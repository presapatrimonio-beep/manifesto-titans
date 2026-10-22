export type Language = 'pt' | 'en';

export interface Translations {
  // Gate screen
  gateSubtitle: string;
  selectLanguage: string;
  ptGroup: {
    title: string;
    countries: string;
    button: string;
  };
  enGroup: {
    title: string;
    countries: string;
    button: string;
  };
  
  // Header / Top marks
  publicationBadge: string;
  scrollIndicator: string;
  footerRights: string;
  
  // Chapter 1: Opening
  openingQuote: string;
  signature: string;
  
  // Chapter 2: Manifesto
  manifestoBadge: string;
  manifestoPremiseHeading: string;
  manifestoPremiseBody: string;
  
  distinctionBadge: string;
  distinctionLines: string[];
  
  genesisBadge: string;
  genesisHeading: string;
  genesisBody: string;
  
  beliefsBadge: string;
  beliefsCol1Label: string;
  beliefsCol1Text: string;
  beliefsCol2Label: string;
  beliefsCol2Text: string;
  
  belongingBadge: string;
  belongingHeading: string;
  belongingLine1: string;
  belongingLine2: string;
  belongingPrinciples: {
    num: string;
    text: string;
  }[];
  belongingBody: string[];
  
  commitmentBadge: string;
  commitmentHeading: string;
  commitmentParagraphs: string[];
  
  // Chapter 3: Guia de Vantagens
  guideBadge: string;
  guideTitle: string;
  guideSubtitle: string;
  guideIntro: string;
  guideNoteTitle: string;
  guideNoteBody: string;
  
  sections: {
    numBadge: string;
    title: string;
    bullets: string[];
  }[];
  
  section12Badge: string;
  section12Title: string;
  section12Paragraphs: string[];
  section12Warning: string;
  
  guideConclusionBadge: string;
  guideConclusionParagraphs: string[];
  
  // Chapter 4: Encerramento
  greatnessQuote: string;
  triadLines: string[];
  
  // Switcher
  switchLanguage: string;
}

export const translations: Record<Language, Translations> = {
  pt: {
    gateSubtitle: 'The Art of Connection',
    selectLanguage: 'Selecione seu país ou idioma para entrar',
    ptGroup: {
      title: 'PORTUGUÊS',
      countries: 'BRASIL • PORTUGAL',
      button: 'ENTRAR',
    },
    enGroup: {
      title: 'ENGLISH',
      countries: 'UNITED STATES • UNITED KINGDOM',
      button: 'ENTER',
    },
    publicationBadge: 'TITANS SOCIETY · PUBLICAÇÃO INSTITUCIONAL',
    scrollIndicator: 'ROLE PARA INICIAR A LEITURA',
    footerRights: 'TITANS SOCIETY · TODOS OS DIREITOS RESERVADOS',
    openingQuote: '“NÃO É SOBRE ESTAR ENTRE PESSOAS. É SOBRE O QUE SOMOS CAPAZES DE CONSTRUIR JUNTOS.”',
    signature: 'Conhecimento • Relações • Propósito',
    
    manifestoBadge: 'MANIFESTO TITANS',
    manifestoPremiseHeading:
      'Acreditamos que o próximo nível de uma trajetória não depende exclusivamente do que uma pessoa sabe, do que possui ou do que já conquistou.',
    manifestoPremiseBody:
      'Depende também das perspectivas às quais tem acesso, das relações que constrói, da confiança que inspira e da capacidade de reconhecer valor onde outros enxergam apenas mais um contato.',
    
    distinctionBadge: 'A DISTINÇÃO ESSENCIAL',
    distinctionLines: [
      'O mundo é construído pela conexão que há entre as pessoas.',
      'Mas conexão, por si só, não significa relacionamento.',
      'Presença não significa contribuição.',
      'E proximidade não significa confiança.',
    ],
    
    genesisBadge: 'A ORIGEM DA TITANS SOCIETY',
    genesisHeading: 'Foi a partir dessa distinção que nasceu a Titans Society.',
    genesisBody:
      'Não para criar mais um ambiente de apresentações superficiais, mas para desenvolver uma comunidade na qual pessoas possam se conhecer com mais profundidade, compartilhar experiências com propósito e explorar possibilidades de crescimento com responsabilidade.',
    
    beliefsBadge: 'NOSSAS CRENÇAS FUNDAMENTAIS',
    beliefsCol1Label: 'EQUILÍBRIO & PRINCÍPIOS',
    beliefsCol1Text:
      'Acreditamos na força da competência individual, mas reconhecemos o potencial da inteligência compartilhada; na ambição, desde que acompanhada de integridade; nos negócios, sem reduzir todas as relações a interesses comerciais; e na exclusividade, não como instrumento de superioridade, mas como responsabilidade na preservação da qualidade de uma comunidade.',
    beliefsCol2Label: 'TEMPO & HORIZONTE',
    beliefsCol2Text:
      'E acreditamos que o verdadeiro valor de uma conexão não está apenas no que ela pode proporcionar hoje, mas também na confiança e nas possibilidades que pode ajudar a construir ao longo do tempo.',
    
    belongingBadge: '04 · POSTURA & IDENTIDADE',
    belongingHeading: 'Nossa Visão de Pertencimento',
    belongingLine1: 'Ser um Titan não é carregar um título.',
    belongingLine2: 'É assumir uma postura.',
    belongingPrinciples: [
      { num: '01', text: 'Reputação não se exige: constrói-se.' },
      { num: '02', text: 'Confiança não se compra: conquista-se.' },
      { num: '03', text: 'Oportunidades não se garantem: identificam-se, desenvolvem-se e são avaliadas.' },
      {
        num: '04',
        text: 'A comunidade não se torna extraordinária apenas pelas pessoas que reúne, mas pela qualidade das relações que consegue cultivar.',
      },
    ],
    belongingBody: [
      'Não buscamos apenas pessoas interessadas em receber. Valorizamos aquelas que também desejam contribuir.',
      'Não buscamos uniformidade de pensamentos, trajetórias ou negócios. Valorizamos a diversidade de experiências que amplia perspectivas e estimula novas possibilidades.',
      'Não prometemos resultados prontos. Trabalhamos para construir as condições nas quais relações relevantes possam se desenvolver.',
    ],
    
    commitmentBadge: 'MANIFESTO TITANS',
    commitmentHeading: 'Nosso Compromisso',
    commitmentParagraphs: [
      'Construir um ambiente no qual a confiança tenha importância, o conhecimento circule, as experiências sejam valorizadas e a colaboração aconteça com liberdade, responsabilidade e propósito.',
      'Um ambiente em que cada participante preserve sua individualidade, sua autonomia e seus objetivos, enquanto encontra oportunidades para ampliar sua visão por meio da convivência com outras trajetórias.',
      'Porque crescer não significa apenas chegar mais longe. Significa também desenvolver a capacidade de reconhecer boas oportunidades, tomar decisões melhores e construir algo que tenha valor para além de si próprio.',
    ],
    
    guideBadge: 'CAPÍTULO II · PROPOSTA INSTITUCIONAL',
    guideTitle: 'Guia de Vantagens para o Filiado',
    guideSubtitle: 'Networking estratégico • Acesso qualificado • Relações de confiança • Desenvolvimento empresarial',
    guideIntro:
      'A Titans Society é concebida como uma comunidade empresarial seletiva, voltada a aproximar empresários e lideranças com capacidade de decisão, interesses complementares e disposição para construir relações de longo prazo. Este guia adapta as vantagens típicas de uma rede de negócios ao posicionamento proposto para a Titans Society.',
    guideNoteTitle: 'Nota importante sobre as diretrizes institucionais',
    guideNoteBody:
      'Os benefícios abaixo são possibilidades a serem definidas e implementadas pelo projeto, não serviços já garantidos. A afiliação não assegura contratos, indicações, faturamento, investimentos ou retorno financeiro. Os entregáveis, a frequência dos eventos e as condições de participação deverão constar da proposta comercial e do contrato de afiliação.',
    
    sections: [
      {
        numBadge: 'SEÇÃO 01',
        title: '1. Acesso a uma rede empresarial altamente selecionada',
        bullets: [
          '• Relacionar-se com um grupo limitado de empresários e líderes, favorecendo conversas mais próximas e aprofundadas.',
          '• Conhecer decisores empresariais e profissionais com experiência, influência e redes de relacionamento próprias.',
          '• Ampliar o acesso a círculos empresariais que exigiriam tempo e esforço para alcançar individualmente.',
          '• Participar de uma comunidade que busca compatibilidade de valores, reputação, objetivos e contribuição mútua.',
        ],
      },
      {
        numBadge: 'SEÇÃO 02',
        title: '2. Geração de oportunidades e desenvolvimento de negócios',
        bullets: [
          '• Identificar oportunidades comerciais, parcerias, clientes e fornecedores por meio de apresentações qualificadas.',
          '• Aumentar a possibilidade de negócios originados de relações de confiança e conhecimento mútuo.',
          '• Explorar oportunidades de venda cruzada e soluções complementares entre empresas filiadas.',
          '• Encontrar parceiros para projetos, expansão territorial, novos canais de distribuição ou atendimento multidisciplinar.',
          '• Compartilhar oportunidades de forma responsável, respeitando confidencialidade, conflitos de interesse e regras profissionais.',
        ],
      },
      {
        numBadge: 'SEÇÃO 03',
        title: '3. Conexões estratégicas e apresentações personalizadas',
        bullets: [
          '• Possibilidade de receber apresentações direcionadas a pessoas ou empresas compatíveis com objetivos específicos.',
          '• Mapeamento colaborativo de necessidades, competências e conexões relevantes entre os filiados.',
          '• Reuniões individuais ou pequenos encontros temáticos, caso previstos no calendário oficial.',
          '• Aproximação entre empresários de setores complementares para explorar projetos de interesse comum.',
          '• Apoio de conectores e embaixadores na identificação de contatos pertinentes, conforme disponibilidade e regras do projeto.',
        ],
      },
      {
        numBadge: 'SEÇÃO 04',
        title: '4. Ambiente reservado e experiência diferenciada',
        bullets: [
          '• Participação em encontros presenciais organizados, com pauta e objetivo definidos.',
          '• Oportunidade de discutir desafios empresariais com pares que compreendem responsabilidades de gestão e tomada de decisão.',
          '• Espaço para conversas aprofundadas, com atenção à confidencialidade e à qualidade das interações.',
          '• Experiência de comunidade baseada em confiança, discrição, respeito ao tempo dos participantes e preparação dos encontros.',
          '• Possibilidade de cafés executivos, mesas-redondas, jantares ou encontros especiais, quando incluídos na programação.',
        ],
      },
      {
        numBadge: 'SEÇÃO 05',
        title: '5. Inteligência empresarial e troca de experiências',
        bullets: [
          '• Compartilhar experiências sobre gestão, crescimento, liderança, sucessão, inovação e desenvolvimento de mercados.',
          '• Aprender com decisões, erros e boas práticas de outros empresários, sem substituir consultoria especializada.',
          '• Discutir tendências e desafios em encontros temáticos ou painéis com convidados.',
          '• Acessar perspectivas diferentes para apoiar a análise de decisões estratégicas.',
          '• Identificar oportunidades de colaboração a partir de conhecimentos e competências complementares.',
        ],
      },
      {
        numBadge: 'SEÇÃO 06',
        title: '6. Visibilidade, reputação e posicionamento',
        bullets: [
          '• Apresentar a empresa, sua proposta de valor e suas competências a uma audiência empresarial selecionada.',
          '• Fortalecer a reputação por meio de contribuições consistentes, conduta ética e entregas de qualidade.',
          '• Ser reconhecido como participante ativo de uma comunidade que valoriza relações profissionais duradouras.',
          '• Explorar conteúdos, entrevistas ou apresentações institucionais, caso sejam criados e aprovados.',
          '• Desenvolver uma narrativa empresarial mais clara ao explicar atuação, diferenciais e objetivos.',
        ],
      },
      {
        numBadge: 'SEÇÃO 07',
        title: '7. Expansão de mercado e alcance geográfico',
        bullets: [
          '• Identificar contatos comerciais em outras cidades, estados ou países por meio das redes dos filiados.',
          '• Localizar potenciais parceiros locais para estudar a entrada em novos mercados.',
          '• Explorar alianças empresariais para projetos em diferentes regiões.',
          '• Compartilhar referências de fornecedores, especialistas e prestadores de serviços, quando adequados.',
          '• Avaliar oportunidades de expansão sem presumir validação ou garantia de desempenho de terceiros.',
        ],
      },
      {
        numBadge: 'SEÇÃO 08',
        title: '8. Desenvolvimento de liderança e contribuição',
        bullets: [
          '• Contribuir para a agenda, os temas e a evolução da comunidade.',
          '• Compartilhar conhecimento e experiência, respeitando limites de confidencialidade.',
          '• Participar de comitês, grupos de trabalho ou iniciativas especiais, se instituídos pela governança.',
          '• Desenvolver habilidades de comunicação, negociação, escuta, relacionamento e colaboração.',
          '• Ser reconhecido pela contribuição efetiva, segundo critérios transparentes que venham a ser definidos.',
        ],
      },
      {
        numBadge: 'SEÇÃO 09',
        title: '9. Governança e qualidade da experiência',
        bullets: [
          '• Conhecer regras de participação, critérios de admissão, renovação e conduta.',
          '• Receber informações claras sobre calendário, serviços incluídos, canais de comunicação e responsáveis.',
          '• Ter mecanismos para sugerir melhorias e reportar problemas, conforme os instrumentos adotados.',
          '• Avaliar a experiência por indicadores como qualidade das conexões, oportunidades qualificadas e satisfação.',
          '• Participar de um modelo que priorize a qualidade da contribuição e do relacionamento, não apenas o número de membros.',
        ],
      },
      {
        numBadge: 'SEÇÃO 10',
        title: '10. Entregáveis a formalizar na proposta de afiliação',
        bullets: [
          '• Calendário anual e número mínimo de encontros incluídos.',
          '• Formato e frequência de reuniões individuais ou encontros de pequenos grupos.',
          '• Processo de apresentação de conexões e critérios de qualificação.',
          '• Encontros com convidados, especialistas ou líderes empresariais.',
          '• Relatórios periódicos de atividades, conexões e avaliação da experiência.',
          '• Política de confidencialidade, conflitos de interesse e proteção de dados.',
          '• Critérios objetivos de admissão, participação, desempenho e renovação.',
          '• Serviços adicionais, eventos especiais e despesas não incluídos na anuidade.',
        ],
      },
      {
        numBadge: 'SEÇÃO 11',
        title: '11. Compromissos esperados do filiado',
        bullets: [
          '• Participar de forma ativa e respeitosa, dentro das regras e da agenda acordadas.',
          '• Manter informações empresariais atualizadas quando necessário.',
          '• Tratar os demais membros com discrição, ética e profissionalismo.',
          '• Compartilhar oportunidades pertinentes sem pressão por reciprocidade ou indicações artificiais.',
          '• Respeitar confidencialidade, proteção de dados, direitos de terceiros e normas profissionais aplicáveis.',
          '• Informar conflitos de interesse e cumprir os critérios definidos em contrato.',
        ],
      },
    ],
    
    section12Badge: 'SEÇÃO 12',
    section12Title: '12. Como avaliar o valor da afiliação',
    section12Paragraphs: [
      'A proposta de valor deverá ser avaliada pela qualidade das relações construídas, utilidade das conexões, oportunidades desenvolvidas e experiência oferecida.',
      'Recomenda-se acompanhar a quantidade e qualidade das conexões, reuniões realizadas, oportunidades qualificadas, parcerias iniciadas, satisfação e resultados comerciais efetivamente concretizados.',
    ],
    section12Warning: 'Nenhum indicador, isoladamente, garante retorno financeiro.',
    
    guideConclusionBadge: 'CONCLUSÃO DO GUIA DE VANTAGENS',
    guideConclusionParagraphs: [
      'A Titans Society pretende oferecer mais do que acesso a eventos: propõe uma comunidade empresarial seletiva na qual confiança, acesso qualificado, inteligência compartilhada e colaboração possam criar condições para oportunidades de longo prazo.',
      'O valor real dependerá da qualidade dos participantes, da governança, da execução da agenda e da contribuição de cada filiado.',
    ],
    
    greatnessQuote:
      '“Não definimos grandeza apenas pelo que alguém conquistou. Reconhecemos também a forma como essa pessoa se relaciona, contribui e participa da construção de possibilidades para o futuro.”',
    triadLines: [
      'Não apenas conexões. Relações que merecem ser construídas.',
      'Não apenas oportunidades. A capacidade de reconhecê-las e desenvolvê-las.',
      'Não apenas pertencimento. Compromisso com o valor que construímos juntos.',
    ],
    switchLanguage: 'Idioma / Language',
  },
  
  en: {
    gateSubtitle: 'The Art of Connection',
    selectLanguage: 'Select your country or language to enter',
    ptGroup: {
      title: 'PORTUGUÊS',
      countries: 'BRAZIL • PORTUGAL',
      button: 'ENTRAR',
    },
    enGroup: {
      title: 'ENGLISH',
      countries: 'UNITED STATES • UNITED KINGDOM',
      button: 'ENTER',
    },
    publicationBadge: 'TITANS SOCIETY · INSTITUTIONAL PUBLICATION',
    scrollIndicator: 'SCROLL TO BEGIN READING',
    footerRights: 'TITANS SOCIETY · ALL RIGHTS RESERVED',
    openingQuote: '“IT IS NOT ABOUT BEING AMONG PEOPLE. IT IS ABOUT WHAT WE ARE CAPABLE OF BUILDING TOGETHER.”',
    signature: 'Knowledge • Relationships • Purpose',
    
    manifestoBadge: 'TITANS MANIFESTO',
    manifestoPremiseHeading:
      'We believe that the next level of a journey does not depend exclusively on what one knows, what one possesses, or what one has already achieved.',
    manifestoPremiseBody:
      'It also depends on the perspectives to which one has access, the relationships one builds, the trust one inspires, and the ability to recognize value where others see merely another contact.',
    
    distinctionBadge: 'THE ESSENTIAL DISTINCTION',
    distinctionLines: [
      'The world is built through the connection between people.',
      'But connection, in itself, does not mean relationship.',
      'Presence does not mean contribution.',
      'And proximity does not mean trust.',
    ],
    
    genesisBadge: 'THE GENESIS OF TITANS SOCIETY',
    genesisHeading: 'It was from this distinction that Titans Society was born.',
    genesisBody:
      'Not to create yet another environment of superficial introductions, but to develop a community in which individuals can know each other more deeply, share experiences with purpose, and explore growth opportunities with responsibility.',
    
    beliefsBadge: 'OUR FUNDAMENTAL BELIEFS',
    beliefsCol1Label: 'EQUILIBRIUM & PRINCIPLES',
    beliefsCol1Text:
      'We believe in the strength of individual competence, but we recognize the potential of shared intelligence; in ambition, provided it is accompanied by integrity; in business, without reducing all relationships to commercial interests; and in exclusivity, not as an instrument of superiority, but as a responsibility in preserving the quality of a community.',
    beliefsCol2Label: 'TIME & HORIZON',
    beliefsCol2Text:
      'And we believe that the true value of a connection lies not only in what it can provide today, but also in the trust and possibilities it can help build over time.',
    
    belongingBadge: '04 · STANCE & IDENTITY',
    belongingHeading: 'Our Vision of Belonging',
    belongingLine1: 'To be a Titan is not to carry a title.',
    belongingLine2: 'It is to assume a stance.',
    belongingPrinciples: [
      { num: '01', text: 'Reputation is not demanded: it is built.' },
      { num: '02', text: 'Trust is not bought: it is earned.' },
      { num: '03', text: 'Opportunities are not guaranteed: they are identified, developed, and evaluated.' },
      {
        num: '04',
        text: 'A community does not become extraordinary merely by the people it brings together, but by the quality of the relationships it manages to cultivate.',
      },
    ],
    belongingBody: [
      'We do not seek only those interested in receiving. We value those who also wish to contribute.',
      'We do not seek uniformity of thought, trajectories, or businesses. We value the diversity of experiences that broadens perspectives and stimulates new possibilities.',
      'We do not promise ready-made results. We work to build the conditions in which meaningful relationships can develop.',
    ],
    
    commitmentBadge: 'TITANS MANIFESTO',
    commitmentHeading: 'Our Commitment',
    commitmentParagraphs: [
      'To build an environment in which trust matters, knowledge circulates, experiences are valued, and collaboration happens with freedom, responsibility, and purpose.',
      'An environment in which each participant preserves their individuality, autonomy, and objectives, while discovering opportunities to broaden their vision through the shared company of other trajectories.',
      'Because growing does not merely mean reaching further. It also means developing the ability to recognize sound opportunities, make better decisions, and build something of enduring value beyond oneself.',
    ],
    
    guideBadge: 'CHAPTER II · INSTITUTIONAL PROPOSAL',
    guideTitle: 'Member Advantage Guide',
    guideSubtitle: 'Strategic networking • Qualified access • Relationships of trust • Business development',
    guideIntro:
      'Titans Society is conceived as a selective business community, dedicated to bringing together business leaders and decision-makers with complementary interests and the disposition to build long-term relationships. This guide adapts the hallmark advantages of a business network to the positioning defined for Titans Society.',
    guideNoteTitle: 'Important note on institutional guidelines',
    guideNoteBody:
      'The benefits below represent possibilities to be defined and implemented by the project, not pre-guaranteed services. Membership does not guarantee contracts, referrals, revenues, investments, or financial returns. Deliverables, event frequencies, and terms of participation shall be set forth in the commercial proposal and membership agreement.',
    
    sections: [
      {
        numBadge: 'SECTION 01',
        title: '1. Access to a highly curated business network',
        bullets: [
          '• Connect with a limited group of business leaders, fostering closer and deeper dialogues.',
          '• Meet business decision-makers and professionals with established experience, influence, and trusted personal networks.',
          '• Expand access to business circles that would require years of time and effort to reach individually.',
          '• Participate in a community that seeks compatibility of values, reputation, shared objectives, and mutual contribution.',
        ],
      },
      {
        numBadge: 'SECTION 02',
        title: '2. Generation of opportunities and business development',
        bullets: [
          '• Identify commercial opportunities, partnerships, clients, and suppliers through qualified introductions.',
          '• Enhance the likelihood of business emerging organically from trust and reciprocal knowledge.',
          '• Explore cross-selling opportunities and complementary solutions among member companies.',
          '• Find partners for joint ventures, territorial expansion, new distribution channels, or multidisciplinary delivery.',
          '• Share opportunities responsibly, upholding confidentiality, avoiding conflicts of interest, and respecting professional standards.',
        ],
      },
      {
        numBadge: 'SECTION 03',
        title: '3. Strategic connections and personalized introductions',
        bullets: [
          '• Potential to receive tailored introductions to individuals or organizations aligned with specific strategic objectives.',
          '• Collaborative mapping of needs, competencies, and relevant relationships among members.',
          '• One-on-one sessions or curated small-group thematic meetings, as scheduled in the official calendar.',
          '• Bringing together leaders from complementary industries to explore initiatives of mutual interest.',
          '• Guidance from senior connectors and ambassadors in identifying relevant contacts, subject to project rules and availability.',
        ],
      },
      {
        numBadge: 'SECTION 04',
        title: '4. Private setting and refined experience',
        bullets: [
          '• Participation in organized in-person gatherings, guided by clear agendas and defined objectives.',
          '• The opportunity to discuss business dilemmas with peers who shoulder executive and governance responsibilities.',
          '• A dedicated space for in-depth conversations, characterized by strict confidentiality and high-calibre interaction.',
          '• A community experience rooted in trust, discretion, scrupulous respect for participants’ time, and thorough preparation.',
          '• Possibility of executive breakfasts, roundtables, private dinners, or special summits when included in the calendar.',
        ],
      },
      {
        numBadge: 'SECTION 05',
        title: '5. Business intelligence and peer-to-peer exchange',
        bullets: [
          '• Share real-world experience across management, scaling, leadership, succession, innovation, and market development.',
          '• Learn from the pivotal decisions, missteps, and best practices of fellow entrepreneurs, without replacing specialized advisory.',
          '• Discuss macroeconomic trends and challenges during thematic forums or keynote guest panels.',
          '• Gain access to diverse perspectives to sharpen and support strategic decision-making.',
          '• Uncover collaborative opportunities founded on complementary expertise and capabilities.',
        ],
      },
      {
        numBadge: 'SECTION 06',
        title: '6. Visibility, reputation, and positioning',
        bullets: [
          '• Present the organization, its value proposition, and its capabilities before a curated business audience.',
          '• Solidify reputation through consistent contributions, ethical conduct, and excellence in execution.',
          '• Be recognized as an active contributor within a community that values enduring professional relationships.',
          '• Explore editorial features, leadership interviews, or institutional presentations, where curated and approved.',
          '• Hone a sharper business narrative when articulating market role, differentiators, and long-term vision.',
        ],
      },
      {
        numBadge: 'SECTION 07',
        title: '7. Market expansion and geographic reach',
        bullets: [
          '• Identify qualified commercial contacts in other cities, states, or countries through members’ extended networks.',
          '• Locate trusted local partners to evaluate entry into new geographic markets.',
          '• Explore corporate alliances for multidisciplinary projects across regional borders.',
          '• Exchange vetted referrals for suppliers, legal experts, and specialized service providers where appropriate.',
          '• Assess expansion opportunities prudently without presuming third-party validation or performance guarantees.',
        ],
      },
      {
        numBadge: 'SECTION 08',
        title: '8. Leadership development and active contribution',
        bullets: [
          '• Contribute actively to the agenda, strategic themes, and ongoing evolution of the community.',
          '• Impart knowledge and practical wisdom within the bounds of mutual confidentiality.',
          '• Participate in committees, working groups, or special initiatives instituted by the governance council.',
          '• Sharpen skills in strategic communication, negotiation, active listening, relationship building, and collaboration.',
          '• Earn peer recognition for meaningful contribution according to transparent criteria to be established.',
        ],
      },
      {
        numBadge: 'SECTION 09',
        title: '9. Governance and quality of experience',
        bullets: [
          '• Clear awareness of terms of participation, admission criteria, renewal requirements, and code of conduct.',
          '• Receive explicit guidance regarding calendar schedules, included privileges, communication channels, and leadership contacts.',
          '• Direct mechanisms to propose continuous improvements and report concerns under adopted institutional frameworks.',
          '• Periodic evaluation of the experience through metrics such as connection quality, qualified introductions, and member satisfaction.',
          '• Membership in a model that prioritizes calibre of contribution and relationship depth over member volume.',
        ],
      },
      {
        numBadge: 'SECTION 10',
        title: '10. Deliverables to be formalized in the membership proposal',
        bullets: [
          '• Annual calendar and guaranteed minimum number of included gatherings.',
          '• Format and frequency of individual meetings or small-group executive roundtables.',
          '• Structured process for connection introductions and qualification criteria.',
          '• Gatherings featuring distinguished guest speakers, sector specialists, or industry titans.',
          '• Periodic reports detailing community activity, connections made, and experience evaluation.',
          '• Comprehensive policies on confidentiality, conflicts of interest, and data protection (GDPR/LGPD).',
          '• Objective criteria governing admission, participation standards, compliance, and annual renewal.',
          '• Additional services, bespoke global summits, and expenses not included in the standard membership fee.',
        ],
      },
      {
        numBadge: 'SECTION 11',
        title: '11. Expected member commitments',
        bullets: [
          '• Participate actively and respectfully within agreed rules, schedules, and community decorum.',
          '• Keep corporate and executive profile details accurate and up to date.',
          '• Treat fellow members with discretion, unwavering ethics, and executive professionalism.',
          '• Share legitimate opportunities without artificial pressure for reciprocity or forced commercial commissions.',
          '• Uphold absolute confidentiality, personal data protection, third-party rights, and applicable professional regulations.',
          '• Disclose any conflicts of interest proactively and adhere strictly to contractual standards.',
        ],
      },
    ],
    
    section12Badge: 'SECTION 12',
    section12Title: '12. How to evaluate the value of membership',
    section12Paragraphs: [
      'The value proposition should be assessed through the quality of relationships built, the utility of strategic connections, the opportunities developed, and the standard of executive experience delivered.',
      'Members are encouraged to monitor the calibre of relationships, meetings conducted, qualified opportunities, partnerships initiated, satisfaction, and tangible commercial milestones achieved.',
    ],
    section12Warning: 'No single indicator, in isolation, guarantees financial return.',
    
    guideConclusionBadge: 'CONCLUSION OF THE MEMBER ADVANTAGE GUIDE',
    guideConclusionParagraphs: [
      'Titans Society intends to offer far more than access to events: it proposes a selective business community in which trust, qualified access, shared intelligence, and collaboration create the conditions for long-term opportunities.',
      'The true value will always depend on the calibre of its participants, the rigor of its governance, the faithful execution of its agenda, and the contribution of each member.',
    ],
    
    greatnessQuote:
      '“We do not define greatness solely by what someone has achieved. We also recognize the way that person relates, contributes, and participates in building possibilities for the future.”',
    triadLines: [
      'Not merely connections. Relationships worth building.',
      'Not merely opportunities. The ability to recognize and develop them.',
      'Not merely belonging. Commitment to the value we build together.',
    ],
    switchLanguage: 'Idioma / Language',
  },
};
