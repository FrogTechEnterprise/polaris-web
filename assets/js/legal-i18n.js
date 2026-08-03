(function () {
  'use strict';

  var STORAGE_KEY = 'polaris-lang';
  var DEFAULT_LANG = 'es';
  var SUPPORTED = ['es', 'en', 'pt', 'fr'];

  var COMMON = {
    es: {
      brand: 'Estrategia · Marketing · Digital',
      contact: 'Volver al contacto',
      home: 'Volver a la pagina principal',
      langLabel: 'Selecciona idioma'
    },
    en: {
      brand: 'Strategy · Marketing · Digital',
      contact: 'Back to contact',
      home: 'Back to homepage',
      langLabel: 'Select language'
    },
    pt: {
      brand: 'Estrategia · Marketing · Digital',
      contact: 'Voltar ao contacto',
      home: 'Voltar a pagina principal',
      langLabel: 'Selecionar idioma'
    },
    fr: {
      brand: 'Strategie · Marketing · Digital',
      contact: 'Retour au contact',
      home: "Retour a la page d'accueil",
      langLabel: 'Choisir la langue'
    }
  };

  var PAGES = {
    privacy: {
      es: {
        title: 'Politica de Privacidad',
        meta: 'Ultima actualizacion: 20 de julio de 2026',
        description: 'Politica de privacidad de Polaris Marketing.',
        sections: [
          ['1. Responsable del tratamiento', 'Polaris Marketing es responsable del tratamiento de los datos personales recabados a traves de esta web y de los canales de contacto asociados.'],
          ['2. Datos que recopilamos', 'Podemos tratar los datos que nos facilitas voluntariamente mediante el formulario de contacto:', ['Nombre', 'Correo electronico', 'Informacion incluida en el mensaje']],
          ['3. Finalidad del tratamiento', 'Usamos tus datos para atender solicitudes de informacion, responder consultas, valorar oportunidades de colaboracion y gestionar comunicaciones profesionales relacionadas con nuestros servicios.'],
          ['4. Base juridica', 'La base legal principal es tu consentimiento al enviarnos voluntariamente tus datos y, cuando proceda, la aplicacion de medidas precontractuales solicitadas por ti.'],
          ['5. Conservacion de datos', 'Conservaremos los datos durante el tiempo necesario para atender tu solicitud y, en su caso, durante los plazos exigidos por obligaciones legales.'],
          ['6. Destinatarios y transferencias', 'No cedemos datos personales a terceros salvo obligacion legal o cuando resulte imprescindible para prestar el servicio solicitado, bajo medidas de seguridad adecuadas.'],
          ['7. Derechos de las personas usuarias', 'Puedes ejercer tus derechos de acceso, rectificacion, supresion, oposicion, limitacion y portabilidad, asi como retirar tu consentimiento en cualquier momento, escribiendo a cpernas@polarismarketing.es.'],
          ['8. Seguridad', 'Aplicamos medidas tecnicas y organizativas razonables para proteger los datos personales frente a perdida, alteracion, acceso no autorizado o tratamiento indebido.'],
          ['9. Cambios en esta politica', 'Podemos actualizar esta politica para adaptarla a novedades legales o mejoras del servicio. Recomendamos revisarla periodicamente.']
        ]
      },
      en: {
        title: 'Privacy Policy',
        meta: 'Last updated: July 20, 2026',
        description: 'Privacy policy of Polaris Marketing.',
        sections: [
          ['1. Data controller', 'Polaris Marketing is responsible for processing personal data collected through this website and its associated contact channels.'],
          ['2. Data we collect', 'We may process the data you voluntarily provide through the contact form:', ['Name', 'Email address', 'Information included in your message']],
          ['3. Purpose of processing', 'We use your data to handle information requests, answer enquiries, assess collaboration opportunities and manage professional communications related to our services.'],
          ['4. Legal basis', 'The main legal basis is your consent when you voluntarily send us your data and, where applicable, the application of pre-contractual measures requested by you.'],
          ['5. Data retention', 'We will keep the data for the time needed to handle your request and, where applicable, for periods required by legal obligations.'],
          ['6. Recipients and transfers', 'We do not transfer personal data to third parties unless legally required or when strictly necessary to provide the requested service, under appropriate security measures.'],
          ['7. User rights', 'You may exercise your rights of access, rectification, erasure, objection, restriction and portability, and withdraw consent at any time by writing to cpernas@polarismarketing.es.'],
          ['8. Security', 'We apply reasonable technical and organisational measures to protect personal data against loss, alteration, unauthorised access or improper processing.'],
          ['9. Changes to this policy', 'We may update this policy to reflect legal changes or service improvements. We recommend reviewing it periodically.']
        ]
      },
      pt: {
        title: 'Politica de Privacidade',
        meta: 'Ultima atualizacao: 20 de julho de 2026',
        description: 'Politica de privacidade da Polaris Marketing.',
        sections: [
          ['1. Responsavel pelo tratamento', 'A Polaris Marketing e responsavel pelo tratamento dos dados pessoais recolhidos atraves deste site e dos canais de contacto associados.'],
          ['2. Dados que recolhemos', 'Podemos tratar os dados que nos fornece voluntariamente atraves do formulario de contacto:', ['Nome', 'Endereco de email', 'Informacao incluida na mensagem']],
          ['3. Finalidade do tratamento', 'Usamos os seus dados para responder a pedidos de informacao, consultas, oportunidades de colaboracao e comunicacoes profissionais relacionadas com os nossos servicos.'],
          ['4. Base juridica', 'A principal base legal e o seu consentimento ao enviar voluntariamente os seus dados e, quando aplicavel, a execucao de medidas pre-contratuais solicitadas por si.'],
          ['5. Conservacao de dados', 'Conservaremos os dados durante o tempo necessario para responder ao seu pedido e, se aplicavel, durante os prazos exigidos por obrigacoes legais.'],
          ['6. Destinatarios e transferencias', 'Nao cedemos dados pessoais a terceiros salvo obrigacao legal ou quando seja imprescindivel para prestar o servico solicitado, com medidas de seguranca adequadas.'],
          ['7. Direitos das pessoas utilizadoras', 'Pode exercer os seus direitos de acesso, retificacao, apagamento, oposicao, limitacao e portabilidade, bem como retirar o consentimento a qualquer momento, escrevendo para cpernas@polarismarketing.es.'],
          ['8. Seguranca', 'Aplicamos medidas tecnicas e organizativas razoaveis para proteger os dados pessoais contra perda, alteracao, acesso nao autorizado ou tratamento indevido.'],
          ['9. Alteracoes a esta politica', 'Podemos atualizar esta politica para a adaptar a novidades legais ou melhorias do servico. Recomendamos a sua revisao periodica.']
        ]
      },
      fr: {
        title: 'Politique de Confidentialite',
        meta: 'Derniere mise a jour : 20 juillet 2026',
        description: 'Politique de confidentialite de Polaris Marketing.',
        sections: [
          ['1. Responsable du traitement', 'Polaris Marketing est responsable du traitement des donnees personnelles collectees via ce site web et ses canaux de contact associes.'],
          ['2. Donnees que nous collectons', 'Nous pouvons traiter les donnees que vous fournissez volontairement via le formulaire de contact :', ['Nom', 'Adresse e-mail', 'Informations incluses dans le message']],
          ['3. Finalite du traitement', 'Nous utilisons vos donnees pour repondre aux demandes d information, aux questions, evaluer des opportunites de collaboration et gerer les communications professionnelles liees a nos services.'],
          ['4. Base juridique', 'La base juridique principale est votre consentement lorsque vous nous envoyez volontairement vos donnees et, le cas echeant, l application de mesures precontractuelles demandees par vous.'],
          ['5. Conservation des donnees', 'Nous conserverons les donnees pendant le temps necessaire au traitement de votre demande et, le cas echeant, pendant les delais requis par les obligations legales.'],
          ['6. Destinataires et transferts', 'Nous ne transmettons pas de donnees personnelles a des tiers sauf obligation legale ou lorsque cela est indispensable pour fournir le service demande, avec des mesures de securite appropriees.'],
          ['7. Droits des utilisateurs', 'Vous pouvez exercer vos droits d acces, rectification, suppression, opposition, limitation et portabilite, ainsi que retirer votre consentement a tout moment en ecrivant a cpernas@polarismarketing.es.'],
          ['8. Securite', 'Nous appliquons des mesures techniques et organisationnelles raisonnables pour proteger les donnees personnelles contre la perte, l alteration, l acces non autorise ou le traitement abusif.'],
          ['9. Modifications de cette politique', 'Nous pouvons mettre a jour cette politique pour l adapter aux nouveautes legales ou aux ameliorations du service. Nous recommandons de la consulter periodiquement.']
        ]
      }
    },
    legal: {
      es: {
        title: 'Aviso Legal',
        meta: 'Ultima actualizacion: 20 de julio de 2026',
        description: 'Aviso legal de Polaris Marketing.',
        sections: [
          ['1. Objeto', 'Este sitio web tiene por objeto ofrecer informacion sobre los servicios profesionales de estrategia, marketing y digitalizacion de Polaris Marketing.'],
          ['2. Condiciones de uso', 'La persona usuaria se compromete a utilizar esta web de forma licita, diligente y respetuosa con la normativa aplicable, evitando acciones que puedan perjudicar su funcionamiento o reputacion.'],
          ['3. Propiedad intelectual e industrial', 'Los contenidos de este sitio web, incluyendo textos, imagenes, marcas y diseno, estan protegidos por derechos de propiedad intelectual e industrial. Queda prohibida su reproduccion o distribucion sin autorizacion expresa.'],
          ['4. Responsabilidad', 'Polaris Marketing no garantiza la ausencia total de errores en los contenidos ni la disponibilidad permanente del sitio, aunque adopta medidas razonables para mantenerlo actualizado y operativo.'],
          ['5. Enlaces externos', 'Este sitio puede incluir enlaces a paginas de terceros. Polaris Marketing no se hace responsable del contenido, politicas o practicas de dichos sitios externos.'],
          ['6. Legislacion aplicable y jurisdiccion', 'La relacion entre la persona usuaria y Polaris Marketing se regira por la normativa espanola vigente. Cualquier controversia se sometera a los juzgados y tribunales que correspondan conforme a derecho.']
        ]
      },
      en: {
        title: 'Legal Notice',
        meta: 'Last updated: July 20, 2026',
        description: 'Legal notice of Polaris Marketing.',
        sections: [
          ['1. Purpose', 'This website is intended to provide information about Polaris Marketing professional services in strategy, marketing and digitalization.'],
          ['2. Terms of use', 'Users agree to use this website lawfully, diligently and respectfully in accordance with applicable regulations, avoiding actions that may harm its operation or reputation.'],
          ['3. Intellectual and industrial property', 'The contents of this website, including texts, images, trademarks and design, are protected by intellectual and industrial property rights. Reproduction or distribution without express authorisation is prohibited.'],
          ['4. Liability', 'Polaris Marketing does not guarantee the complete absence of errors in the content or permanent availability of the site, although it takes reasonable measures to keep it updated and operational.'],
          ['5. External links', 'This site may include links to third-party pages. Polaris Marketing is not responsible for the content, policies or practices of such external sites.'],
          ['6. Applicable law and jurisdiction', 'The relationship between the user and Polaris Marketing will be governed by current Spanish regulations. Any dispute will be submitted to the courts and tribunals that correspond by law.']
        ]
      },
      pt: {
        title: 'Aviso Legal',
        meta: 'Ultima atualizacao: 20 de julho de 2026',
        description: 'Aviso legal da Polaris Marketing.',
        sections: [
          ['1. Objeto', 'Este site tem como objetivo oferecer informacao sobre os servicos profissionais de estrategia, marketing e digitalizacao da Polaris Marketing.'],
          ['2. Condicoes de uso', 'A pessoa utilizadora compromete-se a utilizar este site de forma licita, diligente e respeitosa com a normativa aplicavel, evitando acoes que possam prejudicar o seu funcionamento ou reputacao.'],
          ['3. Propriedade intelectual e industrial', 'Os conteudos deste site, incluindo textos, imagens, marcas e design, estao protegidos por direitos de propriedade intelectual e industrial. E proibida a sua reproducao ou distribuicao sem autorizacao expressa.'],
          ['4. Responsabilidade', 'A Polaris Marketing nao garante a ausencia total de erros nos conteudos nem a disponibilidade permanente do site, embora adote medidas razoaveis para o manter atualizado e operacional.'],
          ['5. Links externos', 'Este site pode incluir links para paginas de terceiros. A Polaris Marketing nao se responsabiliza pelo conteudo, politicas ou praticas desses sites externos.'],
          ['6. Legislacao aplicavel e jurisdicao', 'A relacao entre a pessoa utilizadora e a Polaris Marketing sera regida pela normativa espanhola vigente. Qualquer controversia sera submetida aos tribunais competentes conforme a lei.']
        ]
      },
      fr: {
        title: 'Mentions Legales',
        meta: 'Derniere mise a jour : 20 juillet 2026',
        description: 'Mentions legales de Polaris Marketing.',
        sections: [
          ['1. Objet', 'Ce site web a pour objet de fournir des informations sur les services professionnels de strategie, marketing et digitalisation de Polaris Marketing.'],
          ['2. Conditions d utilisation', 'L utilisateur s engage a utiliser ce site de maniere licite, diligente et respectueuse de la reglementation applicable, en evitant toute action pouvant nuire a son fonctionnement ou a sa reputation.'],
          ['3. Propriete intellectuelle et industrielle', 'Les contenus de ce site, y compris les textes, images, marques et design, sont proteges par des droits de propriete intellectuelle et industrielle. Toute reproduction ou distribution sans autorisation expresse est interdite.'],
          ['4. Responsabilite', 'Polaris Marketing ne garantit pas l absence totale d erreurs dans les contenus ni la disponibilite permanente du site, bien qu elle prenne des mesures raisonnables pour le maintenir a jour et operationnel.'],
          ['5. Liens externes', 'Ce site peut inclure des liens vers des pages de tiers. Polaris Marketing n est pas responsable du contenu, des politiques ou des pratiques de ces sites externes.'],
          ['6. Loi applicable et juridiction', 'La relation entre l utilisateur et Polaris Marketing sera regie par la reglementation espagnole en vigueur. Tout litige sera soumis aux tribunaux competents conformement a la loi.']
        ]
      }
    }
  };

  function getInitialLang() {
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) {
        return saved;
      }
    } catch (e) {
      /* ignore */
    }
    return DEFAULT_LANG;
  }

  function renderSection(sectionEl, data) {
    var heading = sectionEl.querySelector('h2');
    var paragraph = sectionEl.querySelector('p');
    var list = sectionEl.querySelector('ul');

    if (heading) {
      heading.textContent = data[0];
    }

    if (paragraph) {
      paragraph.textContent = data[1];
    }

    if (list) {
      list.innerHTML = '';
      (data[2] || []).forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      });
    }
  }

  function applyLanguage(lang) {
    if (SUPPORTED.indexOf(lang) === -1) {
      lang = DEFAULT_LANG;
    }

    var page = document.body.getAttribute('data-legal-page');
    var data = PAGES[page] && PAGES[page][lang];
    var common = COMMON[lang] || COMMON[DEFAULT_LANG];
    if (!data) {
      return;
    }

    document.documentElement.setAttribute('lang', lang);
    document.title = data.title + ' | Polaris Marketing';

    var description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', data.description);
    }

    var brandTagline = document.querySelector('[data-legal-brand]');
    var contactLink = document.querySelector('[data-legal-contact]');
    var backLink = document.querySelector('[data-legal-home]');
    var heading = document.querySelector('.legal-card h1');
    var meta = document.querySelector('.legal-meta');
    var currentLabel = document.querySelector('[data-lang-current-label]');
    var toggle = document.querySelector('[data-lang-toggle]');

    if (brandTagline) brandTagline.textContent = common.brand;
    if (contactLink) contactLink.textContent = common.contact;
    if (backLink) backLink.textContent = common.home;
    if (heading) heading.textContent = data.title;
    if (meta) meta.textContent = data.meta;
    if (currentLabel) currentLabel.textContent = lang.toUpperCase();
    if (toggle) toggle.setAttribute('aria-label', common.langLabel);

    document.querySelectorAll('.legal-section').forEach(function (section, index) {
      if (data.sections[index]) {
        renderSection(section, data.sections[index]);
      }
    });

    document.querySelectorAll('[data-lang-option]').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang-option') === lang);
    });

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }
  }

  function setupLangSwitch() {
    var switcher = document.querySelector('[data-lang-switch]');
    var toggle = document.querySelector('[data-lang-toggle]');
    if (!switcher || !toggle) {
      return;
    }

    function closeOptions() {
      switcher.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', function (event) {
      event.stopPropagation();
      var isOpen = switcher.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
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
  }

  document.addEventListener('DOMContentLoaded', function () {
    setupLangSwitch();
    applyLanguage(getInitialLang());
  });
})();
