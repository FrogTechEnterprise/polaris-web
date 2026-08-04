(function () {
  'use strict';

  var STORAGE_KEY = 'polaris-lang';
  var DEFAULT_LANG = 'es';
  var SUPPORTED = ['es', 'en', 'pt', 'fr'];

  var DICT = {
    es: {
      'meta.title': 'Polaris Marketing | Estrategia comercial, marketing y digitalizacion para pymes',
      'meta.description': 'Consultoria de estrategia comercial, marketing y digitalizacion para pymes y autonomos. Te ayudamos a ordenar prioridades, captar clientes y crecer con foco.',
      'a11y.skipLink': 'Saltar al contenido principal',
      'a11y.goHome': 'Ir al inicio',
      'brand.logoAlt': 'Logo de Polaris Marketing',
      'brand.tagline': 'Estrategia · Marketing · Digital',
      'a11y.openMenu': 'Abrir menú',
      'a11y.langSwitch': 'Selecciona idioma',
      'nav.porque': 'Mision',
      'nav.que': 'Servicios',
      'nav.metodo': 'Método',
      'nav.quien': 'Equipo',
      'nav.testimonios': 'Valores',
      'nav.contacto': 'Contacto',
      'nav.cta': 'Contacto',
      'hero.badge': 'Para pymes y negocios en crecimiento',
      'hero.eyebrow': 'Estrategia con ejecución real',
      'hero.title': '<span>¿Vas a emprender o crecer?</span><span>Os damos la ruta para vender más.</span>',
      'hero.subtitle': 'Polaris acompaña a <strong>pymes, personas que empiezan un negocio y empresas que quieren crecer</strong> para ordenar prioridades y convertir decisiones en resultados.',
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
      'que.intro': 'Acompañamos a pymes en estrategia comercial, marketing y digitalización, desde la definición del plan hasta su ejecución.',
      'a11y.servicesList': 'Áreas de servicio',
      'a11y.que1': 'Puntos clave de estrategia comercial',
      'que.card1.title': 'Modelo de negocio',
      'que.card1.lead': 'Definimos o rediseñamos vuestra propuesta de valor para crecer con foco.',
      'que.card1.focus': 'Si empezáis o ya estáis en marcha, ordenamos prioridades y decisiones clave.',
      'a11y.que2': 'Puntos clave de marketing',
      'que.card2.title': 'Marketing digital y equipo externo',
      'que.card2.lead': 'Construimos una marca clara para captar mejor y vender más.',
      'que.card2.focus': 'Diseñamos la estrategia y, si lo necesitáis, actuamos como vuestro equipo de marketing.',
      'a11y.que3': 'Puntos clave de digitalización',
      'que.card3.title': 'Transformación digital',
      'que.card3.lead': 'Desarrollamos proyectos de transformación digital adaptados a vuestra realidad, con sentido y foco.',
      'que.card3.focus': 'Digitalizamos y optimizamos procesos internos para ganar eficiencia y resultados.',
      'que.card4.title': 'Fidelización y CRM',
      'que.card4.lead': 'No solo captar: hacemos que vuestros clientes vuelvan.',
      'que.card4.focus': 'Implementamos programas simples y CRM práctico para aumentar recurrencia.',
      'que.card5.title': 'Acompañamiento comercial',
      'que.card5.lead': 'Pasamos del plan a la acción junto a vuestro equipo.',
      'que.card5.focus': 'Priorizamos, ejecutamos y medimos para mantener ritmo y resultados.',
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
      'quien.badgeLabel': 'años guiando empresas',
      'quien.eyebrow': 'Quiénes somos',
      'quien.title': 'Toda gran empresa nace de una decisión valiente.',
      'quien.body1': 'Polaris Marketing es un equipo especializado en estrategia comercial, marketing y digitalización. Ayudamos a las empresas a crecer con foco y resultados reales.',
      'quien.body2Html': 'Antes que consultores, somos personas que creen en algo simple: los resultados duraderos llegan cuando lo que una empresa <strong>es</strong> está alineado con lo que <strong>hace</strong>.',
      'quien.body3': 'Por eso empezamos siempre por el propósito. Antes de diseñar cualquier estrategia, dedicamos tiempo a conocer tu identidad, historia y valores para construir crecimiento sólido y coherente.',
      'quien.profileTag': 'Perfil destacado',
      'quien.profileBio': 'Más de 24 años de experiencia en estrategia comercial, marketing e innovación en el sector retail. Desde 2025 ayudando a empresas a crecer y desarrollando su estrategia comercial, marketing y ecommerce. Ha formado parte del Comité de Dirección de Alcampo, liderando el área de Marketing, Ecommerce e Innovación. Combina visión estratégica, foco en resultados, personas e impulso constante a la innovación, con formación especializada en IA, analítica de datos y negocio digital.',
      'quien.linkedin': 'Perfil de Carmen',
      'contacto.eyebrow': 'Contacto',
      'contacto.title': 'Hablemos',
      'contacto.body': 'Cada empresa tiene su propio punto de partida. El nuestro es escucharos. Si queréis crecer con más claridad, mejorar vuestra estrategia comercial o dar el salto digital, hablemos. Sin compromisos, sin formularios eternos.',
      'contacto.emailItemHtml': '<strong>Email</strong><span>cpernas@polarismarketing.es</span>',
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
      'contacto.form.feedbackSuccess': 'Gracias. Tu mensaje se ha enviado correctamente.',
      'footer.copyright': '© 2026 Polaris Marketing. Todos los derechos reservados.',
      'footer.privacy': 'Política de privacidad',
      'footer.legal': 'Aviso legal',
      'a11y.backToTop': 'Volver arriba',
      'testimonials.fab': 'Testimonios',
      'testimonials.close': 'Cerrar testimonios',
      'testimonials.eyebrow': 'Nuestros valores',
      'testimonials.title': 'Cuatro formas de trabajar que nos definen',
      'testimonials.subtitle': 'Integridad, compromiso, respeto y responsabilidad en cada proyecto.',
      'testimonials.outro': 'No importa el sector: convertimos ideas en un plan claro y ejecutable.',
      'testimonials.1.title': 'Con integridad',
      'testimonials.1.answer': 'Os decimos lo que necesit\u00e1is escuchar, no lo que quer\u00e9is o\u00edr. Sabemos en qu\u00e9 somos buenos y nos comprometemos solo con proyectos donde de verdad podemos aportar valor. Lo que no sabemos hacer, no lo aceptamos.',
      'testimonials.1.lang': 'Español',
      'testimonials.2.title': 'Con compromiso',
      'testimonials.2.answer': 'Nos involucramos en vuestra empresa como si fuera la nuestra. Por eso invertimos tiempo en conocer, entender y diagnosticar vuestra empresa antes de ponernos a trabajar.',
      'testimonials.2.lang': 'Español',
      'testimonials.3.title': 'Desde el respeto',
      'testimonials.3.answer': 'Escuchamos y analizamos antes de proponer. Cada soluci\u00f3n se adapta a vuestra realidad, vuestra visi\u00f3n de futuro y vuestro presupuesto.',
      'testimonials.3.lang': 'Español',
      'testimonials.4.title': 'Con responsabilidad',
      'testimonials.4.answer': 'Cada recomendaci\u00f3n que hacemos est\u00e1 respaldada por criterio, experiencia y datos reales.',
      'testimonials.4.lang': 'Español',
      'testimonials.5.title': '¿Me puede ayudar Polaris en mi ferretería?',
      'testimonials.5.answer': 'Claro que sí. Priorizamos categorías, promociones y seguimiento comercial para vender mejor sin perder control operativo.',
      'testimonials.5.lang': 'Español',
      'testimonials.6.title': '¿Me puede ayudar Polaris en mi academia?',
      'testimonials.6.answer': 'Sí, podemos ayudarte. Estructuramos propuesta por programa, captación y fidelización para crecer con procesos claros y medibles.',
      'testimonials.6.lang': 'Español'
    },
    en: {
      'meta.title': 'Polaris Marketing | Strategy, marketing and digitalization for SMEs',
      'meta.description': 'Business strategy, marketing and digitalization consulting for SMEs and growing businesses that need clearer priorities and measurable growth.',
      'a11y.skipLink': 'Skip to main content',
      'a11y.goHome': 'Go to homepage',
      'brand.logoAlt': 'Polaris Marketing logo',
      'brand.tagline': 'Strategy · Marketing · Digital',
      'a11y.openMenu': 'Open menu',
      'a11y.langSwitch': 'Select language',
      'nav.porque': 'Mission',
      'nav.que': 'Services',
      'nav.metodo': 'Method',
      'nav.quien': 'Team',
      'nav.testimonios': 'Values',
      'nav.contacto': 'Contact',
      'nav.cta': 'Contact',
      'hero.badge': 'For SMEs and growing businesses',
      'hero.eyebrow': 'Strategy with real execution',
      'hero.title': '<span>Starting a business or growing it?</span><span>We give you the roadmap to sell more.</span>',
      'hero.subtitle': 'Polaris supports <strong>SMEs, people starting a business and companies that want to grow</strong> to set priorities and turn decisions into results.',
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
      'que.intro': 'We support SMEs with commercial strategy, marketing and digitalization, from planning to execution.',
      'a11y.servicesList': 'Service areas',
      'a11y.que1': 'Key points of commercial strategy',
      'que.card1.title': 'Business model',
      'que.card1.lead': 'We define or redesign your value proposition so you can grow with focus.',
      'que.card1.focus': 'Whether you are starting out or already running, we prioritize key decisions.',
      'a11y.que2': 'Key points of marketing',
      'que.card2.title': 'Digital marketing and external team',
      'que.card2.lead': 'We build a clear brand to attract better and sell more.',
      'que.card2.focus': 'We design your strategy and, if needed, act as your marketing team.',
      'a11y.que3': 'Key points of digitalization',
      'que.card3.title': 'Digital transformation',
      'que.card3.lead': 'We deliver digital transformation projects adapted to your reality, with purpose and focus.',
      'que.card3.focus': 'We digitize and optimize internal processes to improve efficiency and results.',
      'que.card4.title': 'Loyalty and CRM',
      'que.card4.lead': 'It is not only about acquisition: we help customers come back.',
      'que.card4.focus': 'We implement simple loyalty programs and practical CRM to increase repeat business.',
      'que.card5.title': 'Commercial support',
      'que.card5.lead': 'We move from plan to action with your team.',
      'que.card5.focus': 'We prioritize, execute and measure to sustain pace and results.',
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
      'quien.profileTag': 'Featured profile',
      'quien.profileBio': 'More than 24 years of experience in business strategy, marketing and innovation in retail. Leads growth processes with a focus on results, people and real implementation.',
      'quien.linkedin': 'Carmen on LinkedIn',
      'contacto.eyebrow': 'Contact',
      'contacto.title': "Let's talk",
      'contacto.body': "Every business has its own starting point. Ours is listening first. If you want to grow with more clarity, strengthen your commercial strategy or make the digital leap, let's talk. No commitment, no endless forms.",
      'contacto.emailItemHtml': '<strong>Email</strong><span>cpernas@polarismarketing.es</span>',
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
      'contacto.form.feedbackSuccess': 'Thank you. Your message has been sent successfully.',
      'footer.copyright': '© 2026 Polaris Marketing. All rights reserved.',
      'footer.privacy': 'Privacy policy',
      'footer.legal': 'Legal notice',
      'a11y.backToTop': 'Back to top',
      'testimonials.fab': 'Testimonials',
      'testimonials.close': 'Close testimonials',
      'testimonials.eyebrow': 'Our values',
      'testimonials.title': 'Four ways of working that define us',
      'testimonials.subtitle': 'Integrity, commitment, respect and responsibility in every project.',
      'testimonials.outro': 'Real stories, clear decisions and growth with focus.',
      'testimonials.1.title': 'With integrity',
      'testimonials.1.answer': 'We tell you what you need to hear, not only what you want to hear. We know where we can really help and only commit to projects where we can create value. What we cannot do well, we do not accept.',
      'testimonials.1.lang': 'English',
      'testimonials.2.title': 'With commitment',
      'testimonials.2.answer': 'We get involved in your company as if it were our own. That is why we invest time in knowing, understanding and diagnosing your business before starting the work.',
      'testimonials.2.lang': 'English',
      'testimonials.3.title': 'With respect',
      'testimonials.3.answer': 'We listen and analyse before proposing. Each solution is adapted to your reality, your vision for the future and your budget.',
      'testimonials.3.lang': 'English',
      'testimonials.4.title': 'With responsibility',
      'testimonials.4.answer': 'Every recommendation we make is supported by judgement, experience and real data.',
      'testimonials.4.lang': 'English',
      'testimonials.5.title': 'Can Polaris help my hardware store?',
      'testimonials.5.answer': 'Absolutely. We prioritize categories, promotions and sales routines to increase revenue without losing operational control.',
      'testimonials.5.lang': 'English',
      'testimonials.6.title': 'Can Polaris help my academy?',
      'testimonials.6.answer': 'Absolutely. We structure your offer, acquisition and retention to scale with clear and practical processes.',
      'testimonials.6.lang': 'English'
    },
    pt: {
      'meta.title': 'Polaris Marketing | Estrat�gia, marketing e digitaliza��o para PMEs',
      'meta.description': 'Consultoria de estrat�gia comercial, marketing e digitaliza��o para PMEs e neg�cios em crescimento que precisam de foco e resultados mensur�veis.',
      'a11y.skipLink': 'Saltar para o conteudo principal',
      'a11y.goHome': 'Ir para o inicio',
      'brand.logoAlt': 'Logotipo da Polaris Marketing',
      'brand.tagline': 'Estrategia · Marketing · Digital',
      'a11y.openMenu': 'Abrir menu',
      'a11y.langSwitch': 'Selecionar idioma',
      'nav.porque': 'Missao',
      'nav.que': 'Servicos',
      'nav.metodo': 'Metodo',
      'nav.quien': 'Equipa',
      'nav.testimonios': 'Valores',
      'nav.contacto': 'Contacto',
      'nav.cta': 'Contacto',
      'hero.badge': 'Para PMEs e negocios em crescimento',
      'hero.eyebrow': 'Estrategia com execucao real',
      'hero.title': '<span>Vais empreender ou crescer?</span><span>Damos-vos o caminho para vender mais.</span>',
      'hero.subtitle': 'A Polaris acompanha <strong>PMEs, pessoas que estao a comecar um negocio e empresas que querem crescer</strong> para ordenar prioridades e transformar decisoes em resultados.',
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
      'que.intro': 'Apoiamos PMEs em estrategia comercial, marketing e digitalizacao, desde a definicao do plano ate a execucao.',
      'a11y.servicesList': 'Areas de servico',
      'a11y.que1': 'Pontos-chave de estrategia comercial',
      'que.card1.title': 'Modelo de negocio',
      'que.card1.lead': 'Definimos ou redesenhamos a vossa proposta de valor para crescer com foco.',
      'que.card1.focus': 'Se estao a comecar ou ja estao em atividade, ordenamos prioridades e decisoes-chave.',
      'a11y.que2': 'Pontos-chave de marketing',
      'que.card2.title': 'Marketing digital e equipa externa',
      'que.card2.lead': 'Construimos uma marca clara para captar melhor e vender mais.',
      'que.card2.focus': 'Desenhamos a estrategia e, se precisarem, atuamos como a vossa equipa de marketing.',
      'a11y.que3': 'Pontos-chave de digitalizacao',
      'que.card3.title': 'Transformacao digital',
      'que.card3.lead': 'Desenvolvemos projetos de transformacao digital adaptados a vossa realidade, com sentido e foco.',
      'que.card3.focus': 'Digitalizamos e otimizamos processos internos para ganhar eficiencia e resultados.',
      'que.card4.title': 'Fidelizacao e CRM',
      'que.card4.lead': 'Nao basta captar: fazemos com que os vossos clientes voltem.',
      'que.card4.focus': 'Implementamos programas simples de fidelizacao e CRM pratico para aumentar recorrencia.',
      'que.card5.title': 'Acompanhamento comercial',
      'que.card5.lead': 'Passamos do plano a acao junto da vossa equipa.',
      'que.card5.focus': 'Priorizamos, executamos e medimos para manter ritmo e resultados.',
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
      'quien.profileTag': 'Perfil em destaque',
      'quien.profileBio': 'Mais de 24 anos de experiencia em estrategia comercial, marketing e inovacao em retalho. Lidera processos de crescimento com foco em resultados, pessoas e implementacao real.',
      'quien.linkedin': 'Perfil da Carmen',
      'contacto.eyebrow': 'Contacto',
      'contacto.title': 'Vamos falar',
      'contacto.body': 'Cada empresa tem o seu ponto de partida. O nosso e ouvir-vos. Se querem crescer com mais clareza, melhorar a vossa estrategia comercial ou dar o salto digital, vamos falar. Sem compromisso, sem formularios interminaveis.',
      'contacto.emailItemHtml': '<strong>Email</strong><span>cpernas@polarismarketing.es</span>',
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
      'contacto.form.feedbackSuccess': 'Obrigado. A tua mensagem foi enviada com sucesso.',
      'footer.copyright': '© 2026 Polaris Marketing. Todos os direitos reservados.',
      'footer.privacy': 'Politica de privacidade',
      'footer.legal': 'Aviso legal',
      'a11y.backToTop': 'Voltar ao topo',
      'testimonials.fab': 'Testemunhos',
      'testimonials.close': 'Fechar testemunhos',
      'testimonials.eyebrow': 'Os nossos valores',
      'testimonials.title': 'Quatro formas de trabalhar que nos definem',
      'testimonials.subtitle': 'Integridade, compromisso, respeito e responsabilidade em cada projeto.',
      'testimonials.outro': 'Historias reais, decisoes claras e crescimento com foco.',
      'testimonials.1.title': 'Com integridade',
      'testimonials.1.answer': 'Dizemos o que precisam de ouvir, nao apenas o que querem ouvir. Sabemos onde podemos ajudar e comprometemo-nos apenas com projetos onde podemos aportar valor real. O que nao sabemos fazer, nao aceitamos.',
      'testimonials.1.lang': 'Português',
      'testimonials.2.title': 'Com compromisso',
      'testimonials.2.answer': 'Envolvemo-nos na vossa empresa como se fosse nossa. Por isso investimos tempo em conhecer, compreender e diagnosticar o negocio antes de comecar a trabalhar.',
      'testimonials.2.lang': 'Português',
      'testimonials.3.title': 'Com respeito',
      'testimonials.3.answer': 'Escutamos e analisamos antes de propor. Cada solucao adapta-se a vossa realidade, visao de futuro e orcamento.',
      'testimonials.3.lang': 'Português',
      'testimonials.4.title': 'Com responsabilidade',
      'testimonials.4.answer': 'Cada recomendacao que fazemos e apoiada por criterio, experiencia e dados reais.',
      'testimonials.4.lang': 'Português',
      'testimonials.5.title': 'A Polaris pode ajudar a minha ferragem?',
      'testimonials.5.answer': 'Claro. Priorizamos categorias, promocoes e rotina comercial para vender melhor com controlo operativo.',
      'testimonials.5.lang': 'Português',
      'testimonials.6.title': 'A Polaris pode ajudar a minha academia?',
      'testimonials.6.answer': 'Claro. Estruturamos oferta, captacao e retencao para escalar com processos claros e mediveis.',
      'testimonials.6.lang': 'Português'
    },
    fr: {
      'meta.title': 'Polaris Marketing | Strat�gie, marketing et digitalisation pour PME',
      'meta.description': 'Conseil en strat�gie commerciale, marketing et digitalisation pour PME et entreprises en croissance qui veulent prioriser et grandir avec clart�.',
      'a11y.skipLink': 'Aller au contenu principal',
      'a11y.goHome': "Aller a l'accueil",
      'brand.logoAlt': 'Logo de Polaris Marketing',
      'brand.tagline': 'Strategie · Marketing · Digital',
      'a11y.openMenu': 'Ouvrir le menu',
      'a11y.langSwitch': 'Choisir la langue',
      'nav.porque': 'Mission',
      'nav.que': 'Services',
      'nav.metodo': 'Methode',
      'nav.quien': 'Equipe',
      'nav.testimonios': 'Valeurs',
      'nav.contacto': 'Contact',
      'nav.cta': 'Contact',
      'hero.badge': 'Pour les PME et les entreprises en croissance',
      'hero.eyebrow': "Strategie avec une execution reelle",
      'hero.title': '<span>Vous lancez votre activite ou vous voulez grandir ?</span><span>Nous vous donnons la voie pour vendre plus.</span>',
      'hero.subtitle': 'Polaris accompagne <strong>PME, personnes qui lancent une activite et entreprises qui veulent grandir</strong> pour prioriser et transformer les decisions en resultats.',
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
      'que.intro': "Nous accompagnons les PME en strategie commerciale, marketing et digitalisation, de la definition du plan a son execution.",
      'a11y.servicesList': 'Domaines de service',
      'a11y.que1': 'Points cles de la strategie commerciale',
      'que.card1.title': "Modele d'activite",
      'que.card1.lead': 'Nous definissons ou redesignons votre proposition de valeur pour grandir avec clarte.',
      'que.card1.focus': 'Que vous demarriez ou soyez deja en activite, nous priorisons les decisions cles.',
      'a11y.que2': 'Points cles du marketing',
      'que.card2.title': 'Marketing digital et equipe externe',
      'que.card2.lead': 'Nous construisons une marque claire pour mieux attirer et vendre davantage.',
      'que.card2.focus': 'Nous concevons la strategie et, si besoin, nous agissons comme votre equipe marketing.',
      'a11y.que3': 'Points cles de la digitalisation',
      'que.card3.title': 'Transformation digitale',
      'que.card3.lead': 'Nous menons des projets de transformation digitale adaptes a votre realite, avec sens et focus.',
      'que.card3.focus': 'Nous digitalisons et optimisons les processus internes pour gagner en efficacite et en resultats.',
      'que.card4.title': 'Fidelisation et CRM',
      'que.card4.lead': 'Ce n est pas seulement capter : nous faisons revenir vos clients.',
      'que.card4.focus': 'Nous mettons en place des programmes simples de fidelisation et un CRM pratique pour augmenter la recurrence.',
      'que.card5.title': 'Accompagnement commercial',
      'que.card5.lead': "Nous passons du plan a l'action avec votre equipe.",
      'que.card5.focus': 'Nous priorisons, executons et mesurons pour maintenir rythme et resultats.',
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
      'quien.profileTag': 'Profil mis en avant',
      'quien.profileBio': "Plus de 24 ans d'experience en strategie commerciale, marketing et innovation dans le commerce de detail. Elle dirige des processus de croissance axes sur les resultats, les personnes et une mise en oeuvre reelle.",
      'quien.linkedin': 'Profil de Carmen',
      'contacto.eyebrow': 'Contact',
      'contacto.title': 'Discutons',
      'contacto.body': 'Chaque entreprise a son propre point de depart. Le notre est de vous ecouter. Si vous voulez grandir avec plus de clarte, renforcer votre strategie commerciale ou franchir le cap digital, discutons. Sans engagement, sans formulaires interminables.',
      'contacto.emailItemHtml': '<strong>Email</strong><span>cpernas@polarismarketing.es</span>',
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
      'contacto.form.feedbackSuccess': 'Merci. Votre message a ete envoye avec succes.',
      'footer.copyright': '© 2026 Polaris Marketing. Tous droits reserves.',
      'footer.privacy': 'Politique de confidentialite',
      'footer.legal': 'Avis legal',
      'a11y.backToTop': 'Retour en haut',
      'testimonials.fab': 'Temoignages',
      'testimonials.close': 'Fermer les temoignages',
      'testimonials.eyebrow': 'Nos valeurs',
      'testimonials.title': 'Quatre facons de travailler qui nous definissent',
      'testimonials.subtitle': 'Integrite, engagement, respect et responsabilite dans chaque projet.',
      'testimonials.outro': 'Des histoires reelles, des decisions claires et une croissance maitrisee.',
      'testimonials.1.title': 'Avec integrite',
      'testimonials.1.answer': 'Nous disons ce que vous devez entendre, pas seulement ce que vous voulez entendre. Nous savons ou nous pouvons vraiment aider et nous nous engageons seulement sur les projets ou nous pouvons apporter de la valeur.',
      'testimonials.1.lang': 'Français',
      'testimonials.2.title': 'Avec engagement',
      'testimonials.2.answer': 'Nous nous impliquons dans votre entreprise comme si c etait la notre. C est pourquoi nous prenons le temps de connaitre, comprendre et diagnostiquer avant de commencer.',
      'testimonials.2.lang': 'Français',
      'testimonials.3.title': 'Avec respect',
      'testimonials.3.answer': 'Nous ecoutons et analysons avant de proposer. Chaque solution s adapte a votre realite, votre vision d avenir et votre budget.',
      'testimonials.3.lang': 'Français',
      'testimonials.4.title': 'Avec responsabilite',
      'testimonials.4.answer': 'Chaque recommandation que nous faisons est soutenue par du jugement, de l experience et des donnees reelles.',
      'testimonials.4.lang': 'Français',
      'testimonials.5.title': 'Polaris peut-il aider ma quincaillerie?',
      'testimonials.5.answer': 'Bien sur. Nous priorisons categories, promotions et suivi commercial pour vendre mieux avec plus de controle.',
      'testimonials.5.lang': 'Français',
      'testimonials.6.title': 'Polaris peut-il aider mon academie?',
      'testimonials.6.answer': 'Bien sur. Nous structurons offre, acquisition et retention pour scaler avec des processus simples et mesurables.',
      'testimonials.6.lang': 'Français'
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
