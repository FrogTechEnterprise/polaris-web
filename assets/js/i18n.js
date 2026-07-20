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
      'nav.porque': 'Por qué',
      'nav.que': 'Qué hacemos',
      'nav.metodo': 'Método',
      'nav.quien': 'Quiénes somos',
      'nav.cta': 'Hablemos',
      'hero.badge': 'Consultoría para crecer con criterio',
      'hero.eyebrow': 'Estrategia con ejecución real',
      'hero.title': 'Crecer con sentido, foco y resultados medibles.',
      'hero.subtitle': 'Acompañamos a pymes y marcas en decisiones de negocio, marketing y digitalización, con una mirada clara: menos ruido, más impacto.',
      'hero.ctaPrimary': 'Empecemos',
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
      'que.title': 'Acciones concretas en tres frentes clave.',
      'que.intro': 'En Polaris Marketing acompañamos a pequeñas y medianas empresas en su crecimiento, conectando estrategia comercial, marketing y digitalización para pasar de la idea a la ejecución con foco.',
      'a11y.que1': 'Puntos clave de modelo de negocio',
      'que.card1.title': 'Modelo de negocio',
      'que.card1.lead': 'Crear, redefinir o evolucionar modelos de negocio que tengan encaje real en el mercado.',
      'que.card1.li1': 'Diagnóstico rápido del encaje mercado-oferta',
      'que.card1.li2': 'Propuesta de valor y líneas de ingreso claras',
      'que.card1.li3': 'Ruta de crecimiento con prioridades concretas',
      'que.card1.outcome': 'Resultado: decisiones comerciales con menos riesgo y mayor claridad.',
      'que.card2.ribbon': 'Más solicitado',
      'a11y.que2': 'Puntos clave de marketing',
      'que.card2.title': 'Marketing',
      'que.card2.lead': 'Vender más empieza por una marca bien construida, que se entienda y se recuerde.',
      'que.card2.li1': 'Plan de captación con foco en conversión',
      'que.card2.li2': 'Posicionamiento y contenido que diferencia',
      'que.card2.li3': 'Fidelización para mejorar recurrencia y margen',
      'que.card2.outcome': 'Resultado: más demanda cualificada y una comunicación coherente en todos los canales.',
      'a11y.que3': 'Puntos clave de digitalización',
      'que.card3.title': 'Digitalización',
      'que.card3.lead': 'Transformación digital adaptada a vuestra realidad, ritmo y capacidad operativa.',
      'que.card3.li1': 'Automatización de tareas con impacto real',
      'que.card3.li2': 'Herramientas útiles según madurez del negocio',
      'que.card3.li3': 'Implementación gradual con acompañamiento',
      'que.card3.outcome': 'Resultado: equipos más eficientes y mejor control para decidir a tiempo.',
      'metodo.eyebrow': 'Método de trabajo',
      'metodo.title': 'Un proceso claro para decisiones más rápidas y mejores resultados.',
      'metodo.intro': 'Cada proyecto se adapta a la etapa real del negocio, con foco en impacto, ritmo de ejecución y seguimiento continuo.',
      'a11y.methodTimeline': 'Línea de tiempo del método de trabajo',
      'metodo.step1.tag': 'Semana 1-2',
      'metodo.step1.title': 'Diagnóstico',
      'metodo.step1.body': 'Analizamos objetivo, contexto comercial y capacidad operativa para tomar decisiones con base real.',
      'metodo.step1.li1': 'Entrevista de contexto y prioridades',
      'metodo.step1.li2': 'Revisión de posicionamiento y demanda',
      'metodo.step1.outcomeHtml': '<strong>Resultado:</strong> mapa claro de prioridades y primeras decisiones con base real.',
      'metodo.step2.tag': 'Semana 3-6',
      'metodo.step2.title': 'Plan accionable',
      'metodo.step2.body': 'Definimos prioridades, responsables, recursos y tiempos para ejecutar sin dispersión.',
      'metodo.step2.li1': 'Roadmap de 90 días con hitos claros',
      'metodo.step2.li2': 'KPIs prácticos para seguimiento',
      'metodo.step2.outcomeHtml': '<strong>Resultado:</strong> hoja de ruta a 90 días con responsables y métricas definidas.',
      'metodo.step3.tag': 'Continuo',
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
      'a11y.contactBadges': 'Compromisos de respuesta',
      'contacto.badge1': 'Respuesta en 24-48h',
      'contacto.badge2': 'Primera llamada sin coste',
      'contacto.badge3': 'Propuesta clara por fases',
      'contacto.personTitle': 'Habla directamente con Carmen',
      'contacto.personSubtitle': 'Fundadora. Respuesta personal, sin intermediarios.',
      'contacto.emailItemHtml': '<span class="contact-icon" aria-hidden="true">EM</span><strong>Email:</strong> contacto@polarismarketing.es',
      'contacto.phoneItemHtml': '<span class="contact-icon" aria-hidden="true">TEL</span><strong>Teléfono:</strong> +34 659 69 39 76',
      'contacto.addressItemHtml': '<span class="contact-icon" aria-hidden="true">DIR</span><strong>Dirección:</strong> C/ Santiago Ramon y Cajal 16, 28660 Madrid',
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
      'nav.porque': 'Why',
      'nav.que': 'What we do',
      'nav.metodo': 'Method',
      'nav.quien': 'About us',
      'nav.cta': "Let's talk",
      'hero.badge': 'Consulting to grow with purpose',
      'hero.eyebrow': 'Strategy with real execution',
      'hero.title': 'Grow with purpose, focus and measurable results.',
      'hero.subtitle': 'We support SMEs and brands in business, marketing and digitalization decisions, with a clear view: less noise, more impact.',
      'hero.ctaPrimary': "Let's start",
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
      'que.title': 'Concrete actions across three key fronts.',
      'que.intro': 'At Polaris Marketing we support small and medium businesses in their growth, connecting business strategy, marketing and digitalization to move from idea to focused execution.',
      'a11y.que1': 'Key points of business model',
      'que.card1.title': 'Business model',
      'que.card1.lead': 'Create, redefine or evolve business models with a real fit in the market.',
      'que.card1.li1': 'Fast diagnosis of market-offer fit',
      'que.card1.li2': 'Clear value proposition and revenue streams',
      'que.card1.li3': 'Growth path with concrete priorities',
      'que.card1.outcome': 'Result: business decisions with less risk and more clarity.',
      'que.card2.ribbon': 'Most requested',
      'a11y.que2': 'Key points of marketing',
      'que.card2.title': 'Marketing',
      'que.card2.lead': 'Selling more starts with a well-built brand that people understand and remember.',
      'que.card2.li1': 'Acquisition plan focused on conversion',
      'que.card2.li2': 'Positioning and content that stands out',
      'que.card2.li3': 'Loyalty programs to improve retention and margin',
      'que.card2.outcome': 'Result: more qualified demand and coherent communication across all channels.',
      'a11y.que3': 'Key points of digitalization',
      'que.card3.title': 'Digitalization',
      'que.card3.lead': 'Digital transformation adapted to your reality, pace and operational capacity.',
      'que.card3.li1': 'Automation of tasks with real impact',
      'que.card3.li2': 'Useful tools according to business maturity',
      'que.card3.li3': 'Gradual implementation with hands-on support',
      'que.card3.outcome': 'Result: more efficient teams and better control for timely decisions.',
      'metodo.eyebrow': 'Working method',
      'metodo.title': 'A clear process for faster decisions and better results.',
      'metodo.intro': 'Each project adapts to the real stage of the business, focusing on impact, execution pace and continuous follow-up.',
      'a11y.methodTimeline': 'Working method timeline',
      'metodo.step1.tag': 'Week 1-2',
      'metodo.step1.title': 'Diagnosis',
      'metodo.step1.body': 'We analyze the goal, business context and operational capacity to make decisions based on real data.',
      'metodo.step1.li1': 'Context and priorities interview',
      'metodo.step1.li2': 'Positioning and demand review',
      'metodo.step1.outcomeHtml': '<strong>Result:</strong> a clear map of priorities and first decisions based on real data.',
      'metodo.step2.tag': 'Week 3-6',
      'metodo.step2.title': 'Actionable plan',
      'metodo.step2.body': 'We define priorities, owners, resources and timelines to execute without dispersion.',
      'metodo.step2.li1': '90-day roadmap with clear milestones',
      'metodo.step2.li2': 'Practical KPIs for follow-up',
      'metodo.step2.outcomeHtml': '<strong>Result:</strong> a 90-day roadmap with owners and defined metrics.',
      'metodo.step3.tag': 'Ongoing',
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
      'a11y.contactBadges': 'Response commitments',
      'contacto.badge1': 'Response within 24-48h',
      'contacto.badge2': 'First call at no cost',
      'contacto.badge3': 'Clear proposal in phases',
      'contacto.personTitle': 'Talk directly with Carmen',
      'contacto.personSubtitle': 'Founder. Personal response, no intermediaries.',
      'contacto.emailItemHtml': '<span class="contact-icon" aria-hidden="true">EM</span><strong>Email:</strong> contacto@polarismarketing.es',
      'contacto.phoneItemHtml': '<span class="contact-icon" aria-hidden="true">TEL</span><strong>Phone:</strong> +34 659 69 39 76',
      'contacto.addressItemHtml': '<span class="contact-icon" aria-hidden="true">DIR</span><strong>Address:</strong> C/ Santiago Ramon y Cajal 16, 28660 Madrid, Spain',
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
      'nav.porque': 'Porque',
      'nav.que': 'O que fazemos',
      'nav.metodo': 'Metodo',
      'nav.quien': 'Quem somos',
      'nav.cta': 'Vamos falar',
      'hero.badge': 'Consultoria para crescer com criterio',
      'hero.eyebrow': 'Estrategia com execucao real',
      'hero.title': 'Crescer com sentido, foco e resultados mensuraveis.',
      'hero.subtitle': 'Acompanhamos PMEs e marcas em decisoes de negocio, marketing e digitalizacao, com um olhar claro: menos ruido, mais impacto.',
      'hero.ctaPrimary': 'Vamos comecar',
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
      'que.title': 'Acoes concretas em tres frentes-chave.',
      'que.intro': 'Na Polaris Marketing acompanhamos pequenas e medias empresas no seu crescimento, ligando estrategia comercial, marketing e digitalizacao para passar da ideia a execucao com foco.',
      'a11y.que1': 'Pontos-chave do modelo de negocio',
      'que.card1.title': 'Modelo de negocio',
      'que.card1.lead': 'Criar, redefinir ou evoluir modelos de negocio com encaixe real no mercado.',
      'que.card1.li1': 'Diagnostico rapido do encaixe mercado-oferta',
      'que.card1.li2': 'Proposta de valor e linhas de receita claras',
      'que.card1.li3': 'Rota de crescimento com prioridades concretas',
      'que.card1.outcome': 'Resultado: decisoes comerciais com menos risco e mais clareza.',
      'que.card2.ribbon': 'Mais solicitado',
      'a11y.que2': 'Pontos-chave de marketing',
      'que.card2.title': 'Marketing',
      'que.card2.lead': 'Vender mais comeca por uma marca bem construida, que se entenda e se recorde.',
      'que.card2.li1': 'Plano de captacao com foco em conversao',
      'que.card2.li2': 'Posicionamento e conteudo que diferencia',
      'que.card2.li3': 'Fidelizacao para melhorar recorrencia e margem',
      'que.card2.outcome': 'Resultado: mais procura qualificada e uma comunicacao coerente em todos os canais.',
      'a11y.que3': 'Pontos-chave de digitalizacao',
      'que.card3.title': 'Digitalizacao',
      'que.card3.lead': 'Transformacao digital adaptada a vossa realidade, ritmo e capacidade operacional.',
      'que.card3.li1': 'Automatizacao de tarefas com impacto real',
      'que.card3.li2': 'Ferramentas uteis conforme a maturidade do negocio',
      'que.card3.li3': 'Implementacao gradual com acompanhamento',
      'que.card3.outcome': 'Resultado: equipas mais eficientes e melhor controlo para decidir a tempo.',
      'metodo.eyebrow': 'Metodo de trabalho',
      'metodo.title': 'Um processo claro para decisoes mais rapidas e melhores resultados.',
      'metodo.intro': 'Cada projeto adapta-se a etapa real do negocio, com foco em impacto, ritmo de execucao e acompanhamento continuo.',
      'a11y.methodTimeline': 'Linha do tempo do metodo de trabalho',
      'metodo.step1.tag': 'Semana 1-2',
      'metodo.step1.title': 'Diagnostico',
      'metodo.step1.body': 'Analisamos o objetivo, o contexto comercial e a capacidade operacional para tomar decisoes com base real.',
      'metodo.step1.li1': 'Entrevista de contexto e prioridades',
      'metodo.step1.li2': 'Revisao de posicionamento e procura',
      'metodo.step1.outcomeHtml': '<strong>Resultado:</strong> mapa claro de prioridades e primeiras decisoes com base real.',
      'metodo.step2.tag': 'Semana 3-6',
      'metodo.step2.title': 'Plano acionavel',
      'metodo.step2.body': 'Definimos prioridades, responsaveis, recursos e prazos para executar sem dispersao.',
      'metodo.step2.li1': 'Roteiro de 90 dias com marcos claros',
      'metodo.step2.li2': 'KPIs praticos para acompanhamento',
      'metodo.step2.outcomeHtml': '<strong>Resultado:</strong> roteiro de 90 dias com responsaveis e metricas definidas.',
      'metodo.step3.tag': 'Continuo',
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
      'a11y.contactBadges': 'Compromissos de resposta',
      'contacto.badge1': 'Resposta em 24-48h',
      'contacto.badge2': 'Primeira chamada sem custo',
      'contacto.badge3': 'Proposta clara por fases',
      'contacto.personTitle': 'Fala diretamente com a Carmen',
      'contacto.personSubtitle': 'Fundadora. Resposta pessoal, sem intermediarios.',
      'contacto.emailItemHtml': '<span class="contact-icon" aria-hidden="true">EM</span><strong>Email:</strong> contacto@polarismarketing.es',
      'contacto.phoneItemHtml': '<span class="contact-icon" aria-hidden="true">TEL</span><strong>Telefone:</strong> +34 659 69 39 76',
      'contacto.addressItemHtml': '<span class="contact-icon" aria-hidden="true">DIR</span><strong>Morada:</strong> C/ Santiago Ramon y Cajal 16, 28660 Madrid, Espanha',
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
      'nav.porque': 'Pourquoi',
      'nav.que': 'Ce que nous faisons',
      'nav.metodo': 'Methode',
      'nav.quien': 'Qui sommes-nous',
      'nav.cta': 'Discutons',
      'hero.badge': 'Conseil pour grandir avec discernement',
      'hero.eyebrow': "Strategie avec une execution reelle",
      'hero.title': 'Grandir avec sens, concentration et resultats mesurables.',
      'hero.subtitle': "Nous accompagnons PME et marques dans leurs decisions d'affaires, de marketing et de digitalisation, avec un regard clair : moins de bruit, plus d'impact.",
      'hero.ctaPrimary': 'Commencons',
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
      'que.title': 'Des actions concretes sur trois fronts cles.',
      'que.intro': "Chez Polaris Marketing, nous accompagnons les petites et moyennes entreprises dans leur croissance, en reliant strategie commerciale, marketing et digitalisation pour passer de l'idee a l'execution avec concentration.",
      'a11y.que1': 'Points cles du modele economique',
      'que.card1.title': 'Modele economique',
      'que.card1.lead': 'Creer, redefinir ou faire evoluer des modeles economiques reellement adaptes au marche.',
      'que.card1.li1': "Diagnostic rapide de l'adequation marche-offre",
      'que.card1.li2': 'Proposition de valeur et sources de revenus claires',
      'que.card1.li3': 'Parcours de croissance avec des priorites concretes',
      'que.card1.outcome': 'Resultat : des decisions commerciales avec moins de risque et plus de clarte.',
      'que.card2.ribbon': 'Le plus demande',
      'a11y.que2': 'Points cles du marketing',
      'que.card2.title': 'Marketing',
      'que.card2.lead': 'Vendre plus commence par une marque bien construite, comprise et memorable.',
      'que.card2.li1': "Plan d'acquisition axe sur la conversion",
      'que.card2.li2': 'Positionnement et contenu qui font la difference',
      'que.card2.li3': 'Fidelisation pour ameliorer la recurrence et la marge',
      'que.card2.outcome': 'Resultat : une demande plus qualifiee et une communication coherente sur tous les canaux.',
      'a11y.que3': 'Points cles de la digitalisation',
      'que.card3.title': 'Digitalisation',
      'que.card3.lead': 'Transformation numerique adaptee a votre realite, votre rythme et votre capacite operationnelle.',
      'que.card3.li1': 'Automatisation des taches a impact reel',
      'que.card3.li2': "Outils utiles selon la maturite de l'entreprise",
      'que.card3.li3': 'Mise en oeuvre progressive avec accompagnement',
      'que.card3.outcome': 'Resultat : des equipes plus efficaces et un meilleur controle pour decider a temps.',
      'metodo.eyebrow': 'Methode de travail',
      'metodo.title': 'Un processus clair pour des decisions plus rapides et de meilleurs resultats.',
      'metodo.intro': "Chaque projet s'adapte a l'etape reelle de l'entreprise, avec un focus sur l'impact, le rythme d'execution et le suivi continu.",
      'a11y.methodTimeline': 'Chronologie de la methode de travail',
      'metodo.step1.tag': 'Semaine 1-2',
      'metodo.step1.title': 'Diagnostic',
      'metodo.step1.body': "Nous analysons l'objectif, le contexte commercial et la capacite operationnelle pour prendre des decisions basees sur des donnees reelles.",
      'metodo.step1.li1': 'Entretien de contexte et de priorites',
      'metodo.step1.li2': 'Analyse du positionnement et de la demande',
      'metodo.step1.outcomeHtml': '<strong>Resultat :</strong> une carte claire des priorites et les premieres decisions basees sur des donnees reelles.',
      'metodo.step2.tag': 'Semaine 3-6',
      'metodo.step2.title': "Plan d'action",
      'metodo.step2.body': 'Nous definissons priorites, responsables, ressources et delais pour executer sans dispersion.',
      'metodo.step2.li1': 'Feuille de route a 90 jours avec des jalons clairs',
      'metodo.step2.li2': 'KPI pratiques pour le suivi',
      'metodo.step2.outcomeHtml': '<strong>Resultat :</strong> une feuille de route a 90 jours avec responsables et indicateurs definis.',
      'metodo.step3.tag': 'Continu',
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
      'a11y.contactBadges': 'Engagements de reponse',
      'contacto.badge1': 'Reponse sous 24-48h',
      'contacto.badge2': 'Premier appel gratuit',
      'contacto.badge3': 'Proposition claire par phases',
      'contacto.personTitle': 'Parlez directement avec Carmen',
      'contacto.personSubtitle': 'Fondatrice. Reponse personnelle, sans intermediaires.',
      'contacto.emailItemHtml': '<span class="contact-icon" aria-hidden="true">EM</span><strong>Email :</strong> contacto@polarismarketing.es',
      'contacto.phoneItemHtml': '<span class="contact-icon" aria-hidden="true">TEL</span><strong>Telephone :</strong> +34 659 69 39 76',
      'contacto.addressItemHtml': '<span class="contact-icon" aria-hidden="true">DIR</span><strong>Adresse :</strong> C/ Santiago Ramon y Cajal 16, 28660 Madrid, Espagne',
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
