(function () {
  'use strict';

  var STORAGE_KEY = 'polaris-lang';
  var DEFAULT_LANG = 'es';
  var SUPPORTED = ['es', 'en', 'pt', 'fr'];

  var DICT = {
    es: {
      'meta.title': 'Polaris Marketing | Estrategia, Marketing y Digitalización',
      'meta.description': 'Polaris Marketing. Estrategia, marketing y digitalización para crecer con foco, claridad y resultados medibles.',
      'a11y.skipLink': 'Saltar al contenido principal',
      'a11y.goHome': 'Ir al inicio',
      'brand.logoAlt': 'Logo de Polaris Marketing',
      'brand.tagline': 'Estrategia · Marketing · Digital',
      'a11y.openMenu': 'Abrir menú',
      'a11y.langSwitch': 'Selecciona idioma',
      'nav.porque': 'Enfoque',
      'nav.que': 'Servicios',
      'nav.metodo': 'Método',
      'nav.quien': 'Equipo',
      'nav.contacto': 'Contacto',
      'nav.cta': 'Contacto',
      'hero.badge': 'Estrategia comercial · Marketing · Digitalización',
      'hero.eyebrow': 'Estrategia con ejecución real',
      'hero.title': '<span>Vuestra empresa necesita crecer.</span><span>Nosotros podemos ayudaros.</span>',
      'hero.subtitle': 'Acompañamos a pymes y marcas a ordenar prioridades, tomar mejores decisiones y convertir la estrategia en acciones concretas.',
      'hero.ctaPrimary': 'Cuéntanos tu caso',
      'hero.ctaSecondary': 'Ver servicios',
      'a11y.heroKpis': 'Indicadores de impacto',
      'hero.kpi1Label': 'Proyectos acompañados',
      'hero.kpi2Label': 'Frentes de trabajo integrados',
      'hero.kpi3Label': 'Planes adaptados al negocio real',
      'porque.eyebrow': 'Por qué lo hacemos',
      'porque.title': 'Nos mueve construir crecimiento que se sostenga en el tiempo.',
      'porque.body': 'Trabajamos para que cada empresa tenga una estrategia accionable, conectada con su realidad y su etapa de crecimiento.',
      'porque.quote': '"Queremos ayudar a personas y empresas a entrar o crecer en su mercado con confianza."',
      'a11y.trustSection': 'Empresas que confían en nosotros',
      'trust.title': 'Empresas que confían en nosotros',
      'trust.copyHtml': 'Nuestra experiencia principal es en <strong>Retail</strong>, <strong>Alimentación</strong> y <strong>Textil</strong>, junto a proyectos de <strong>Restauración</strong>, <strong>Decoración</strong> y <strong>Arquitectura</strong>. Algunos ejemplos: Juan Valdez, Quadratura y WOW.',
      'a11y.trustLogos': 'Marcas destacadas',
      'a11y.visitJuanValdez': 'Visitar web de Juan Valdez',
      'a11y.visitQuadratura': 'Visitar web de Quadratura',
      'a11y.visitWow': 'Visitar web de WOW',
      'brand.logoAltJuanValdez': 'Logo de Juan Valdez',
      'brand.logoAltQuadratura': 'Logo de Quadratura',
      'brand.logoAltWow': 'Logo de WOW',
      'que.eyebrow': 'Qué hacemos',
      'que.title': 'Creamos impacto donde el negocio crece.',
      'que.intro': 'Trabajamos sobre las áreas que más afectan al crecimiento: el modelo comercial, la forma de llegar al mercado y las herramientas que sostienen la operación.',
      'a11y.servicesList': 'Áreas de servicio',
      'a11y.que1': 'Puntos clave de estrategia comercial',
      'que.card1.title': 'Modelo comercial',
      'que.card1.lead': 'Ordenamos propuesta de valor, prioridades comerciales y ruta de crecimiento.',
      'que.card1.focus': 'Trabajamos en: encaje mercado-oferta, líneas de ingreso y decisiones prioritarias.',
      'a11y.que2': 'Puntos clave de marketing',
      'que.card2.title': 'Mercado y marca',
      'que.card2.lead': 'Definimos cómo comunicar, captar y fidelizar con una marca más clara.',
      'que.card2.focus': 'Trabajamos en: posicionamiento, mensaje, contenido y demanda cualificada.',
      'a11y.que3': 'Puntos clave de digitalización',
      'que.card3.title': 'Operación digital',
      'que.card3.lead': 'Incorporamos herramientas y procesos que ayudan al equipo sin complicar la operación.',
      'que.card3.focus': 'Trabajamos en: automatización, herramientas útiles y seguimiento operativo.',
      'metodo.eyebrow': 'Método de trabajo',
      'metodo.title': 'Un proceso claro para decisiones más rápidas y mejores resultados.',
      'metodo.intro': 'Cada proyecto se adapta a la etapa real del negocio, con foco en impacto, ritmo de ejecución y seguimiento continuo.',
      'a11y.methodTimeline': 'Línea de tiempo del método de trabajo',
      'metodo.step1.title': 'Diagnóstico',
      'metodo.step1.body': 'Analizamos objetivo, contexto comercial y capacidad operativa para tomar decisiones con base real.',
      'metodo.step1.li1': 'Entrevista de contexto y prioridades',
      'metodo.step1.li2': 'Revisión de posicionamiento y demanda',
      'metodo.step1.outcomeHtml': '<strong>Resultado:</strong> mapa claro de prioridades y primeras decisiones con base real.',
      'metodo.step2.title': 'Plan accionable',
      'metodo.step2.body': 'Definimos prioridades, responsables, recursos y tiempos para ejecutar sin dispersión.',
      'metodo.step2.li1': 'Roadmap de 90 días con hitos claros',
      'metodo.step2.li2': 'KPIs prácticos para seguimiento',
      'metodo.step2.outcomeHtml': '<strong>Resultado:</strong> hoja de ruta a 90 días con responsables y métricas definidas.',
      'metodo.step3.title': 'Seguimiento',
      'metodo.step3.body': 'Medimos avance, revisamos indicadores y ajustamos el rumbo para sostener crecimiento.',
      'metodo.step3.li1': 'Ritmo de revisión quincenal o mensual',
      'metodo.step3.li2': 'Decisión y ajuste rápido según resultados',
      'metodo.step3.outcomeHtml': '<strong>Resultado:</strong> ajustes rápidos y crecimiento sostenido mes a mes.',
      'a11y.aboutImage': 'Equipo reunido en sesión de trabajo',
      'a11y.aboutSnapshot': 'Detalle de sesión de trabajo en equipo',
      'a11y.aboutBadge': 'Experiencia acumulada',
      'quien.badgeLabel': 'años de experiencia',
      'quien.eyebrow': 'Quiénes somos',
      'quien.title': 'Estrategia que se ejecuta. Resultados que se miden.',
      'quien.body1': 'Polaris Marketing es un equipo especializado en estrategia comercial, marketing y digitalización. Ayudamos a las empresas a crecer con foco y resultados reales.',
      'quien.body2Html': 'Antes que consultores, somos personas que creen en algo simple: los resultados duraderos llegan cuando lo que una empresa <strong>es</strong> está alineado con lo que <strong>hace</strong>.',
      'quien.body3': 'Por eso empezamos siempre por el propósito. Antes de diseñar cualquier estrategia, dedicamos tiempo a conocer tu identidad, historia y valores para construir crecimiento sólido y coherente.',
      'quien.profileBio': 'Más de 24 años de experiencia en estrategia comercial, marketing e innovación en retail. Lidera procesos de crecimiento con enfoque en resultados, personas e implementación real.',
      'quien.linkedin': 'Ver LinkedIn',
      'contacto.eyebrow': 'Contacto',
      'contacto.title': 'Hablemos',
      'contacto.body': 'Si quieres claridad para tu siguiente paso, escríbenos. Te respondemos sin rodeos.',
      'contacto.emailItemHtml': '<strong>Email</strong><span>contacto@polarismarketing.es</span>',
      'contacto.phoneItemHtml': '<strong>Teléfono</strong><span>+34 659 69 39 76</span>',
      'contacto.addressItemHtml': '<strong>Dirección</strong><span>C/ Santiago Ramon y Cajal 16, 28660 Madrid</span>',
      'contacto.emailBtn': 'Escribir por email',
      'contacto.callBtn': 'Llamar ahora',
      'contacto.form.name': 'Nombre',
      'contacto.form.namePlaceholder': 'Tu nombre',
      'contacto.form.email': 'Email',
      'contacto.form.emailPlaceholder': 'tu@email.com',
      'contacto.form.message': 'Mensaje',
      'contacto.form.messagePlaceholder': 'Cuéntanos qué necesitas mejorar o impulsar.',
      'contacto.form.consentHtml': 'Acepto la <a href="politica-privacidad.html">Política de privacidad</a> y el <a href="aviso-legal.html">Aviso legal</a>.',
      'contacto.form.submit': 'Enviar mensaje',
      'contacto.form.feedbackSuccess': 'Gracias. Se abrirá tu gestor de correo para completar el envío.',
      'footer.copyright': '© 2026 Polaris Marketing. Todos los derechos reservados.',
      'footer.privacy': 'Política de privacidad',
      'footer.legal': 'Aviso legal',
      'a11y.backToTop': 'Volver arriba'
    },
    en: {
      'meta.title': 'Polaris Marketing | Strategy, Marketing and Digitalization',
      'meta.description': 'Polaris Marketing. Strategy, marketing and digitalization to grow with focus, clarity and measurable results.',
      'a11y.skipLink': 'Skip to main content',
      'a11y.goHome': 'Go to homepage',
      'brand.logoAlt': 'Polaris Marketing logo',
      'brand.tagline': 'Strategy · Marketing · Digital',
      'a11y.openMenu': 'Open menu',
      'a11y.langSwitch': 'Select language',
      'nav.porque': 'Approach',
      'nav.que': 'Services',
      'nav.metodo': 'Method',
      'nav.quien': 'Team',
      'nav.contacto': 'Contact',
      'nav.cta': 'Contact',
      'hero.badge': 'Business strategy · Marketing · Digitalization',
      'hero.eyebrow': 'Strategy with real execution',
      'hero.title': '<span>Your company needs to grow.</span><span>We can help.</span>',
      'hero.subtitle': 'We help SMEs and brands order priorities, make better decisions and turn strategy into concrete action.',
      'hero.ctaPrimary': 'Tell us your case',
      'hero.ctaSecondary': 'See services',
      'a11y.heroKpis': 'Impact indicators',
      'hero.kpi1Label': 'Projects supported',
      'hero.kpi2Label': 'Integrated work fronts',
      'hero.kpi3Label': 'Plans tailored to your real business',
      'porque.eyebrow': 'Why we do it',
      'porque.title': "We're driven to build growth that lasts over time.",
      'porque.body': 'We work so every company has an actionable strategy, connected to its reality and its stage of growth.',
      'porque.quote': '"We want to help people and companies enter or grow in their market with confidence."',
      'a11y.trustSection': 'Companies that trust us',
      'trust.title': 'Companies that trust us',
      'trust.copyHtml': 'Our main experience is in <strong>Retail</strong>, <strong>Food</strong> and <strong>Textile</strong>, alongside projects in <strong>Restaurants</strong>, <strong>Decoration</strong> and <strong>Architecture</strong>. Some examples: Juan Valdez, Quadratura and WOW.',
      'a11y.trustLogos': 'Featured brands',
      'a11y.visitJuanValdez': 'Visit Juan Valdez website',
      'a11y.visitQuadratura': 'Visit Quadratura website',
      'a11y.visitWow': 'Visit WOW website',
      'brand.logoAltJuanValdez': 'Juan Valdez logo',
      'brand.logoAltQuadratura': 'Quadratura logo',
      'brand.logoAltWow': 'WOW logo',
      'que.eyebrow': 'What we do',
      'que.title': 'We create impact where business grows.',
      'que.intro': 'We work on the areas that most affect growth: the commercial model, the way you reach the market and the tools that support operations.',
      'a11y.servicesList': 'Service areas',
      'a11y.que1': 'Key points of commercial strategy',
      'que.card1.title': 'Commercial model',
      'que.card1.lead': 'We organize value proposition, commercial priorities and growth route.',
      'que.card1.focus': 'We work on: market-offer fit, revenue lines and priority decisions.',
      'a11y.que2': 'Key points of marketing',
      'que.card2.title': 'Market and brand',
      'que.card2.lead': 'We define how to communicate, acquire and retain with a clearer brand.',
      'que.card2.focus': 'We work on: positioning, message, content and qualified demand.',
      'a11y.que3': 'Key points of digitalization',
      'que.card3.title': 'Digital operations',
      'que.card3.lead': 'We add tools and processes that help the team without complicating operations.',
      'que.card3.focus': 'We work on: automation, useful tools and operational follow-up.',
      'metodo.eyebrow': 'Working method',
      'metodo.title': 'A clear process for faster decisions and better results.',
      'metodo.intro': 'Each project adapts to the real stage of the business, focusing on impact, execution pace and continuous follow-up.',
      'a11y.methodTimeline': 'Working method timeline',
      'metodo.step1.title': 'Diagnosis',
      'metodo.step1.body': 'We analyze the goal, business context and operational capacity to make decisions based on real data.',
      'metodo.step1.li1': 'Context and priorities interview',
      'metodo.step1.li2': 'Positioning and demand review',
      'metodo.step1.outcomeHtml': '<strong>Result:</strong> a clear map of priorities and first decisions based on real data.',
      'metodo.step2.title': 'Actionable plan',
      'metodo.step2.body': 'We define priorities, owners, resources and timelines to execute without dispersion.',
      'metodo.step2.li1': '90-day roadmap with clear milestones',
      'metodo.step2.li2': 'Practical KPIs for follow-up',
      'metodo.step2.outcomeHtml': '<strong>Result:</strong> a 90-day roadmap with owners and defined metrics.',
      'metodo.step3.title': 'Follow-up',
      'metodo.step3.body': 'We measure progress, review indicators and adjust course to sustain growth.',
      'metodo.step3.li1': 'Biweekly or monthly review pace',
      'metodo.step3.li2': 'Fast decisions and adjustments based on results',
      'metodo.step3.outcomeHtml': '<strong>Result:</strong> fast adjustments and sustained growth month after month.',
      'a11y.aboutImage': 'Team gathered in a work session',
      'a11y.aboutSnapshot': 'Detail of a team work session',
      'a11y.aboutBadge': 'Accumulated experience',
      'quien.badgeLabel': 'years of experience',
      'quien.eyebrow': 'About us',
      'quien.title': 'Strategy that gets executed. Results that get measured.',
      'quien.body1': 'Polaris Marketing is a team specialized in business strategy, marketing and digitalization. We help companies grow with focus and real results.',
      'quien.body2Html': 'Before being consultants, we are people who believe in something simple: lasting results come when what a company <strong>is</strong> is aligned with what it <strong>does</strong>.',
      'quien.body3': "That's why we always start with purpose. Before designing any strategy, we take the time to understand your identity, history and values to build solid, coherent growth.",
      'quien.profileBio': 'More than 24 years of experience in business strategy, marketing and innovation in retail. Leads growth processes with a focus on results, people and real implementation.',
      'quien.linkedin': 'View LinkedIn',
      'contacto.eyebrow': 'Contact',
      'contacto.title': "Let's talk",
      'contacto.body': 'If you want clarity for your next step, write to us. We answer straight to the point.',
      'contacto.emailItemHtml': '<strong>Email</strong><span>contacto@polarismarketing.es</span>',
      'contacto.phoneItemHtml': '<strong>Phone</strong><span>+34 659 69 39 76</span>',
      'contacto.addressItemHtml': '<strong>Address</strong><span>C/ Santiago Ramon y Cajal 16, 28660 Madrid, Spain</span>',
      'contacto.emailBtn': 'Write an email',
      'contacto.callBtn': 'Call now',
      'contacto.form.name': 'Name',
      'contacto.form.namePlaceholder': 'Your name',
      'contacto.form.email': 'Email',
      'contacto.form.emailPlaceholder': 'you@email.com',
      'contacto.form.message': 'Message',
      'contacto.form.messagePlaceholder': 'Tell us what you need to improve or boost.',
      'contacto.form.consentHtml': 'I accept the <a href="politica-privacidad.html">Privacy policy</a> and the <a href="aviso-legal.html">Legal notice</a>.',
      'contacto.form.submit': 'Send message',
      'contacto.form.feedbackSuccess': 'Thank you. Your email client will open to complete the sending.',
      'footer.copyright': '© 2026 Polaris Marketing. All rights reserved.',
      'footer.privacy': 'Privacy policy',
      'footer.legal': 'Legal notice',
      'a11y.backToTop': 'Back to top'
    },
    pt: {
      'meta.title': 'Polaris Marketing | Estrategia, Marketing e Digitalizacao',
      'meta.description': 'Polaris Marketing. Estrategia, marketing e digitalizacao para crescer com foco, clareza e resultados mensuraveis.',
      'a11y.skipLink': 'Saltar para o conteudo principal',
      'a11y.goHome': 'Ir para o inicio',
      'brand.logoAlt': 'Logotipo da Polaris Marketing',
      'brand.tagline': 'Estrategia · Marketing · Digital',
      'a11y.openMenu': 'Abrir menu',
      'a11y.langSwitch': 'Selecionar idioma',
      'nav.porque': 'Enfoque',
      'nav.que': 'Servicos',
      'nav.metodo': 'Metodo',
      'nav.quien': 'Equipa',
      'nav.contacto': 'Contacto',
      'nav.cta': 'Contacto',
      'hero.badge': 'Estrategia comercial · Marketing · Digitalizacao',
      'hero.eyebrow': 'Estrategia com execucao real',
      'hero.title': '<span>A vossa empresa precisa de crescer.</span><span>Podemos ajudar.</span>',
      'hero.subtitle': 'Ajudamos PMEs e marcas a ordenar prioridades, tomar melhores decisoes e transformar estrategia em acoes concretas.',
      'hero.ctaPrimary': 'Conta-nos o teu caso',
      'hero.ctaSecondary': 'Ver servicos',
      'a11y.heroKpis': 'Indicadores de impacto',
      'hero.kpi1Label': 'Projetos acompanhados',
      'hero.kpi2Label': 'Frentes de trabalho integradas',
      'hero.kpi3Label': 'Planos adaptados ao negocio real',
      'porque.eyebrow': 'Porque o fazemos',
      'porque.title': 'O que nos move e construir crescimento que se sustente no tempo.',
      'porque.body': 'Trabalhamos para que cada empresa tenha uma estrategia acionavel, ligada a sua realidade e a sua etapa de crescimento.',
      'porque.quote': '"Queremos ajudar pessoas e empresas a entrar ou crescer no seu mercado com confianca."',
      'a11y.trustSection': 'Empresas que confiam em nos',
      'trust.title': 'Empresas que confiam em nos',
      'trust.copyHtml': 'A nossa experiencia principal e em <strong>Retalho</strong>, <strong>Alimentacao</strong> e <strong>Textil</strong>, alem de projetos em <strong>Restauracao</strong>, <strong>Decoracao</strong> e <strong>Arquitetura</strong>. Alguns exemplos: Juan Valdez, Quadratura e WOW.',
      'a11y.trustLogos': 'Marcas em destaque',
      'a11y.visitJuanValdez': 'Visitar o site da Juan Valdez',
      'a11y.visitQuadratura': 'Visitar o site da Quadratura',
      'a11y.visitWow': 'Visitar o site da WOW',
      'brand.logoAltJuanValdez': 'Logotipo da Juan Valdez',
      'brand.logoAltQuadratura': 'Logotipo da Quadratura',
      'brand.logoAltWow': 'Logotipo da WOW',
      'que.eyebrow': 'O que fazemos',
      'que.title': 'Criamos impacto onde o negocio cresce.',
      'que.intro': 'Trabalhamos nas areas que mais afetam o crescimento: o modelo comercial, a forma de chegar ao mercado e as ferramentas que sustentam a operacao.',
      'a11y.servicesList': 'Areas de servico',
      'a11y.que1': 'Pontos-chave de estrategia comercial',
      'que.card1.title': 'Modelo comercial',
      'que.card1.lead': 'Organizamos proposta de valor, prioridades comerciais e rota de crescimento.',
      'que.card1.focus': 'Trabalhamos em: encaixe mercado-oferta, linhas de receita e decisoes prioritarias.',
      'a11y.que2': 'Pontos-chave de marketing',
      'que.card2.title': 'Mercado e marca',
      'que.card2.lead': 'Definimos como comunicar, captar e fidelizar com uma marca mais clara.',
      'que.card2.focus': 'Trabalhamos em: posicionamento, mensagem, conteudo e procura qualificada.',
      'a11y.que3': 'Pontos-chave de digitalizacao',
      'que.card3.title': 'Operacao digital',
      'que.card3.lead': 'Incorporamos ferramentas e processos que ajudam a equipa sem complicar a operacao.',
      'que.card3.focus': 'Trabalhamos em: automatizacao, ferramentas uteis e acompanhamento operativo.',
      'metodo.eyebrow': 'Metodo de trabalho',
      'metodo.title': 'Um processo claro para decisoes mais rapidas e melhores resultados.',
      'metodo.intro': 'Cada projeto adapta-se a etapa real do negocio, com foco em impacto, ritmo de execucao e acompanhamento continuo.',
      'a11y.methodTimeline': 'Linha do tempo do metodo de trabalho',
      'metodo.step1.title': 'Diagnostico',
      'metodo.step1.body': 'Analisamos o objetivo, o contexto comercial e a capacidade operacional para tomar decisoes com base real.',
      'metodo.step1.li1': 'Entrevista de contexto e prioridades',
      'metodo.step1.li2': 'Revisao de posicionamento e procura',
      'metodo.step1.outcomeHtml': '<strong>Resultado:</strong> mapa claro de prioridades e primeiras decisoes com base real.',
      'metodo.step2.title': 'Plano acionavel',
      'metodo.step2.body': 'Definimos prioridades, responsaveis, recursos e prazos para executar sem dispersao.',
      'metodo.step2.li1': 'Roteiro de 90 dias com marcos claros',
      'metodo.step2.li2': 'KPIs praticos para acompanhamento',
      'metodo.step2.outcomeHtml': '<strong>Resultado:</strong> roteiro de 90 dias com responsaveis e metricas definidas.',
      'metodo.step3.title': 'Acompanhamento',
      'metodo.step3.body': 'Medimos o avanco, revemos indicadores e ajustamos o rumo para sustentar o crescimento.',
      'metodo.step3.li1': 'Ritmo de revisao quinzenal ou mensal',
      'metodo.step3.li2': 'Decisao e ajuste rapido conforme os resultados',
      'metodo.step3.outcomeHtml': '<strong>Resultado:</strong> ajustes rapidos e crescimento sustentado mes a mes.',
      'a11y.aboutImage': 'Equipa reunida numa sessao de trabalho',
      'a11y.aboutSnapshot': 'Detalhe de uma sessao de trabalho em equipa',
      'a11y.aboutBadge': 'Experiencia acumulada',
      'quien.badgeLabel': 'anos de experiencia',
      'quien.eyebrow': 'Quem somos',
      'quien.title': 'Estrategia que se executa. Resultados que se medem.',
      'quien.body1': 'A Polaris Marketing e uma equipa especializada em estrategia comercial, marketing e digitalizacao. Ajudamos as empresas a crescer com foco e resultados reais.',
      'quien.body2Html': 'Antes de consultores, somos pessoas que acreditam em algo simples: os resultados duradouros chegam quando o que uma empresa <strong>e</strong> esta alinhado com o que <strong>faz</strong>.',
      'quien.body3': 'Por isso comecamos sempre pelo proposito. Antes de desenhar qualquer estrategia, dedicamos tempo a conhecer a tua identidade, historia e valores para construir um crescimento solido e coerente.',
      'quien.profileBio': 'Mais de 24 anos de experiencia em estrategia comercial, marketing e inovacao em retalho. Lidera processos de crescimento com foco em resultados, pessoas e implementacao real.',
      'quien.linkedin': 'Ver LinkedIn',
      'contacto.eyebrow': 'Contacto',
      'contacto.title': 'Vamos falar',
      'contacto.body': 'Se queres clareza para o teu proximo passo, escreve-nos. Respondemos sem rodeios.',
      'contacto.emailItemHtml': '<strong>Email</strong><span>contacto@polarismarketing.es</span>',
      'contacto.phoneItemHtml': '<strong>Telefone</strong><span>+34 659 69 39 76</span>',
      'contacto.addressItemHtml': '<strong>Morada</strong><span>C/ Santiago Ramon y Cajal 16, 28660 Madrid, Espanha</span>',
      'contacto.emailBtn': 'Escrever por email',
      'contacto.callBtn': 'Ligar agora',
      'contacto.form.name': 'Nome',
      'contacto.form.namePlaceholder': 'O teu nome',
      'contacto.form.email': 'Email',
      'contacto.form.emailPlaceholder': 'tu@email.com',
      'contacto.form.message': 'Mensagem',
      'contacto.form.messagePlaceholder': 'Conta-nos o que precisas de melhorar ou impulsionar.',
      'contacto.form.consentHtml': 'Aceito a <a href="politica-privacidad.html">Politica de privacidade</a> e o <a href="aviso-legal.html">Aviso legal</a>.',
      'contacto.form.submit': 'Enviar mensagem',
      'contacto.form.feedbackSuccess': 'Obrigado. O teu gestor de correio vai abrir-se para completares o envio.',
      'footer.copyright': '© 2026 Polaris Marketing. Todos os direitos reservados.',
      'footer.privacy': 'Politica de privacidade',
      'footer.legal': 'Aviso legal',
      'a11y.backToTop': 'Voltar ao topo'
    },
    fr: {
      'meta.title': 'Polaris Marketing | Strategie, Marketing et Digitalisation',
      'meta.description': 'Polaris Marketing. Strategie, marketing et digitalisation pour grandir avec concentration, clarte et resultats mesurables.',
      'a11y.skipLink': 'Aller au contenu principal',
      'a11y.goHome': "Aller a l'accueil",
      'brand.logoAlt': 'Logo de Polaris Marketing',
      'brand.tagline': 'Strategie · Marketing · Digital',
      'a11y.openMenu': 'Ouvrir le menu',
      'a11y.langSwitch': 'Choisir la langue',
      'nav.porque': 'Approche',
      'nav.que': 'Services',
      'nav.metodo': 'Methode',
      'nav.quien': 'Equipe',
      'nav.contacto': 'Contact',
      'nav.cta': 'Contact',
      'hero.badge': 'Strategie commerciale · Marketing · Digitalisation',
      'hero.eyebrow': "Strategie avec une execution reelle",
      'hero.title': '<span>Votre entreprise doit grandir.</span><span>Nous pouvons vous aider.</span>',
      'hero.subtitle': 'Nous aidons PME et marques a organiser leurs priorites, prendre de meilleures decisions et transformer la strategie en actions concretes.',
      'hero.ctaPrimary': 'Parlez-nous de votre cas',
      'hero.ctaSecondary': 'Voir les services',
      'a11y.heroKpis': "Indicateurs d'impact",
      'hero.kpi1Label': 'Projets accompagnes',
      'hero.kpi2Label': 'Fronts de travail integres',
      'hero.kpi3Label': 'Plans adaptes a votre realite',
      'porque.eyebrow': 'Pourquoi nous le faisons',
      'porque.title': 'Ce qui nous motive : construire une croissance durable.',
      'porque.body': "Nous travaillons pour que chaque entreprise dispose d'une strategie applicable, connectee a sa realite et a son etape de croissance.",
      'porque.quote': '"Nous voulons aider les personnes et les entreprises a entrer ou a grandir sur leur marche en toute confiance."',
      'a11y.trustSection': 'Des entreprises qui nous font confiance',
      'trust.title': 'Des entreprises qui nous font confiance',
      'trust.copyHtml': "Notre experience principale se situe dans le <strong>commerce de detail</strong>, l'<strong>alimentation</strong> et le <strong>textile</strong>, ainsi que des projets en <strong>restauration</strong>, <strong>decoration</strong> et <strong>architecture</strong>. Quelques exemples : Juan Valdez, Quadratura et WOW.",
      'a11y.trustLogos': 'Marques phares',
      'a11y.visitJuanValdez': 'Visiter le site de Juan Valdez',
      'a11y.visitQuadratura': 'Visiter le site de Quadratura',
      'a11y.visitWow': 'Visiter le site de WOW',
      'brand.logoAltJuanValdez': 'Logo de Juan Valdez',
      'brand.logoAltQuadratura': 'Logo de Quadratura',
      'brand.logoAltWow': 'Logo de WOW',
      'que.eyebrow': 'Ce que nous faisons',
      'que.title': "Nous creons de l'impact la ou l'entreprise grandit.",
      'que.intro': "Nous travaillons sur les axes qui influencent le plus la croissance : le modele commercial, la maniere d'atteindre le marche et les outils qui soutiennent l'operation.",
      'a11y.servicesList': 'Domaines de service',
      'a11y.que1': 'Points cles de la strategie commerciale',
      'que.card1.title': 'Modele commercial',
      'que.card1.lead': 'Nous organisons proposition de valeur, priorites commerciales et trajectoire de croissance.',
      'que.card1.focus': "Nous travaillons sur : adequation marche-offre, sources de revenus et decisions prioritaires.",
      'a11y.que2': 'Points cles du marketing',
      'que.card2.title': 'Marche et marque',
      'que.card2.lead': 'Nous definissons comment communiquer, acquerir et fideliser avec une marque plus claire.',
      'que.card2.focus': 'Nous travaillons sur : positionnement, message, contenu et demande qualifiee.',
      'a11y.que3': 'Points cles de la digitalisation',
      'que.card3.title': 'Operation digitale',
      'que.card3.lead': "Nous integrons des outils et processus qui aident l'equipe sans compliquer l'operation.",
      'que.card3.focus': 'Nous travaillons sur : automatisation, outils utiles et suivi operationnel.',
      'metodo.eyebrow': 'Methode de travail',
      'metodo.title': 'Un processus clair pour des decisions plus rapides et de meilleurs resultats.',
      'metodo.intro': "Chaque projet s'adapte a l'etape reelle de l'entreprise, avec un focus sur l'impact, le rythme d'execution et le suivi continu.",
      'a11y.methodTimeline': 'Chronologie de la methode de travail',
      'metodo.step1.title': 'Diagnostic',
      'metodo.step1.body': "Nous analysons l'objectif, le contexte commercial et la capacite operationnelle pour prendre des decisions basees sur des donnees reelles.",
      'metodo.step1.li1': 'Entretien de contexte et de priorites',
      'metodo.step1.li2': 'Analyse du positionnement et de la demande',
      'metodo.step1.outcomeHtml': '<strong>Resultat :</strong> une carte claire des priorites et les premieres decisions basees sur des donnees reelles.',
      'metodo.step2.title': "Plan d'action",
      'metodo.step2.body': 'Nous definissons priorites, responsables, ressources et delais pour executer sans dispersion.',
      'metodo.step2.li1': 'Feuille de route a 90 jours avec des jalons clairs',
      'metodo.step2.li2': 'KPI pratiques pour le suivi',
      'metodo.step2.outcomeHtml': '<strong>Resultat :</strong> une feuille de route a 90 jours avec responsables et indicateurs definis.',
      'metodo.step3.title': 'Suivi',
      'metodo.step3.body': "Nous mesurons l'avancement, revisons les indicateurs et ajustons le cap pour soutenir la croissance.",
      'metodo.step3.li1': 'Rythme de revision bimensuel ou mensuel',
      'metodo.step3.li2': 'Decision et ajustement rapides selon les resultats',
      'metodo.step3.outcomeHtml': '<strong>Resultat :</strong> des ajustements rapides et une croissance soutenue mois apres mois.',
      'a11y.aboutImage': "Equipe reunie lors d'une session de travail",
      'a11y.aboutSnapshot': "Detail d'une session de travail en equipe",
      'a11y.aboutBadge': 'Experience cumulee',
      'quien.badgeLabel': "ans d'experience",
      'quien.eyebrow': 'Qui sommes-nous',
      'quien.title': "Une strategie qui s'execute. Des resultats qui se mesurent.",
      'quien.body1': 'Polaris Marketing est une equipe specialisee en strategie commerciale, marketing et digitalisation. Nous aidons les entreprises a grandir avec concentration et des resultats reels.',
      'quien.body2Html': "Avant d'etre consultants, nous sommes des personnes qui croient en une chose simple : les resultats durables arrivent quand ce qu'une entreprise <strong>est</strong> est aligne avec ce qu'elle <strong>fait</strong>.",
      'quien.body3': "C'est pourquoi nous commencons toujours par la raison d'etre. Avant de concevoir toute strategie, nous prenons le temps de connaitre votre identite, votre histoire et vos valeurs pour construire une croissance solide et coherente.",
      'quien.profileBio': "Plus de 24 ans d'experience en strategie commerciale, marketing et innovation dans le commerce de detail. Elle dirige des processus de croissance axes sur les resultats, les personnes et une mise en oeuvre reelle.",
      'quien.linkedin': 'Voir LinkedIn',
      'contacto.eyebrow': 'Contact',
      'contacto.title': 'Discutons',
      'contacto.body': 'Si vous voulez de la clarte pour votre prochaine etape, ecrivez-nous. Nous repondons sans detour.',
      'contacto.emailItemHtml': '<strong>Email</strong><span>contacto@polarismarketing.es</span>',
      'contacto.phoneItemHtml': '<strong>Telephone</strong><span>+34 659 69 39 76</span>',
      'contacto.addressItemHtml': '<strong>Adresse</strong><span>C/ Santiago Ramon y Cajal 16, 28660 Madrid, Espagne</span>',
      'contacto.emailBtn': 'Ecrire un email',
      'contacto.callBtn': 'Appeler maintenant',
      'contacto.form.name': 'Nom',
      'contacto.form.namePlaceholder': 'Votre nom',
      'contacto.form.email': 'Email',
      'contacto.form.emailPlaceholder': 'vous@email.com',
      'contacto.form.message': 'Message',
      'contacto.form.messagePlaceholder': "Dites-nous ce que vous avez besoin d'ameliorer ou de developper.",
      'contacto.form.consentHtml': "J'accepte la <a href=\"politica-privacidad.html\">Politique de confidentialite</a> et l'<a href=\"aviso-legal.html\">Avis legal</a>.",
      'contacto.form.submit': 'Envoyer le message',
      'contacto.form.feedbackSuccess': "Merci. Votre client de messagerie va s'ouvrir pour finaliser l'envoi.",
      'footer.copyright': '© 2026 Polaris Marketing. Tous droits reserves.',
      'footer.privacy': 'Politique de confidentialite',
      'footer.legal': 'Avis legal',
      'a11y.backToTop': 'Retour en haut'
    }
  };

  function getInitialLang() {
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) {
        return saved;
      }
    } catch (e) {
      /* localStorage unavailable, fall back silently */
    }
    return DEFAULT_LANG;
  }

  function t(key, lang) {
    var dict = DICT[lang] || DICT[DEFAULT_LANG];
    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      return dict[key];
    }
    return DICT[DEFAULT_LANG][key] || key;
  }

  function applyLanguage(lang) {
    if (SUPPORTED.indexOf(lang) === -1) {
      lang = DEFAULT_LANG;
    }

    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'), lang);
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'), lang);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder'), lang));
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria-label'), lang));
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      el.setAttribute('alt', t(el.getAttribute('data-i18n-alt'), lang));
    });

    document.querySelectorAll('[data-i18n-content]').forEach(function (el) {
      el.setAttribute('content', t(el.getAttribute('data-i18n-content'), lang));
    });

    var currentLabel = document.querySelector('[data-lang-current-label]');
    if (currentLabel) {
      currentLabel.textContent = lang.toUpperCase();
    }

    document.querySelectorAll('[data-lang-option]').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang-option') === lang);
    });

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage unavailable, ignore */
    }

    window.i18n.currentLang = lang;
  }

  window.i18n = {
    currentLang: DEFAULT_LANG,
    t: function (key) {
      return t(key, window.i18n.currentLang);
    },
    setLanguage: applyLanguage
  };

  function setupLangSwitch() {
    var switcher = document.querySelector('[data-lang-switch]');
    var toggle = document.querySelector('[data-lang-toggle]');
    var options = document.querySelector('[data-lang-options]');

    if (!switcher || !toggle || !options) {
      return;
    }

    function closeOptions() {
      switcher.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    function toggleOptions() {
      var isOpen = switcher.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    }

    toggle.addEventListener('click', function (event) {
      event.stopPropagation();
      toggleOptions();
    });

    document.querySelectorAll('[data-lang-option]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLanguage(btn.getAttribute('data-lang-option'));
        closeOptions();
      });
    });

    document.addEventListener('click', function (event) {
      if (!switcher.contains(event.target)) {
        closeOptions();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeOptions();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLanguage(getInitialLang());
    setupLangSwitch();
  });
})();
