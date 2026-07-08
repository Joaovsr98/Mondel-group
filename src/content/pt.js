/* =====================================================================
   CONTEÚDO DO SITE — PORTUGUÊS (pt-BR)
   Todos os textos ficam aqui. Para adicionar outro idioma no futuro,
   basta duplicar este arquivo (ex.: es.js) e trocar a importação.
   ===================================================================== */

export const pt = {
  brand: {
    name: 'Mondel Group',
    tagline: 'Uniendo el Cono Sur',
  },

  nav: [
    { label: 'Início', href: '#inicio' },
    { label: 'Empresa', href: '#empresa' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Frota', href: '#frota' },
    { label: 'Atuação', href: '#atuacao' },
    { label: 'Contato', href: '#contato' },
  ],

  hero: {
    eyebrow: 'Transporte internacional no Cone Sul · Desde 1989',
    title: 'O elo que conecta o Cone Sul.',
    subtitle:
      'Transporte internacional entre Brasil, Argentina, Uruguai, Paraguai e Chile — com a confiança de quem cruza fronteiras desde 1989.',
    ctaPrimary: 'Solicitar cotação',
    ctaSecondary: 'Falar no WhatsApp',
    stats: [
      { value: '35+', label: 'anos de operação' },
      { value: '5', label: 'países atendidos' },
      { value: '3', label: 'unidades no Cone Sul' },
      { value: '-22°C', label: 'cadeia do frio' },
    ],
  },

  travessia: {
    eyebrow: 'A Travessia',
    title: 'Onde a rota é difícil, a Mondel já passou.',
    body: 'Da nossa matriz em Santiago, no Chile, enfrentamos os Andes, as aduanas e as distâncias do Cone Sul todos os dias. O caminho complexo é a nossa especialidade — e a sua tranquilidade.',
    origin: 'Matriz · Santiago, Chile',
    coords: '33°26\'15"S · 70°39\'03"W',
    cta: 'Conheça a operação',
    imageAlt: 'Frota Mondel cruzando a cordilheira dos Andes',
  },

  about: {
    eyebrow: 'A empresa',
    title: 'Uma história que se projeta ao futuro',
    lead: 'Desde 1989, a Mondel conecta o Cone Sul com transporte rodoviário internacional de carga fracionada e completa.',
    paragraphs: [
      'Com mais de três décadas de operação, a Mondel Group consolidou-se como referência em logística internacional terrestre entre Brasil, Argentina, Uruguai, Paraguai e Chile. Com matriz no Chile e escritórios de apoio no Brasil e na Argentina, nossa estrutura própria garante agilidade no despacho e proximidade com cada cliente.',
      'Somos especialistas em cargas que exigem cuidado: transporte refrigerado e congelado, cargas perigosas (IMO) e operações de comércio exterior com despacho aduaneiro completo. Cada embarque é monitorado por rastreamento via satélite, do ponto de origem ao destino final.',
    ],
    values: [
      {
        icon: 'ShieldCheck',
        title: 'Segurança em cada entrega',
        text: 'Rastreamento por satélite e custódia especializada em toda a rota.',
      },
      {
        icon: 'Timer',
        title: 'Agilidade que faz a diferença',
        text: 'Rotas consolidadas e despacho aduaneiro próprio reduzem prazos.',
      },
      {
        icon: 'Globe2',
        title: 'Alcance internacional',
        text: 'Matriz no Chile e escritórios no Brasil e na Argentina, unindo o Cone Sul.',
      },
    ],
  },

  services: {
    eyebrow: 'Serviços',
    title: 'Soluções completas para sua operação logística',
    subtitle:
      'Do frete exclusivo à cadeia do frio e ao despacho aduaneiro — tudo com a segurança e a inteligência que sua carga merece.',
  },

  process: {
    eyebrow: 'Como funciona',
    title: 'Do orçamento à entrega em 4 passos',
    steps: [
      {
        title: 'Solicitação',
        text: 'Você envia origem, destino e detalhes da carga pelo formulário ou WhatsApp.',
      },
      {
        title: 'Cotação',
        text: 'Nosso time monta a melhor solução de rota, modalidade e prazo.',
      },
      {
        title: 'Coleta e despacho',
        text: 'Retiramos a carga e cuidamos de todo o despacho aduaneiro.',
      },
      {
        title: 'Transporte e entrega',
        text: 'Acompanhamento por satélite até a chegada ao destino final.',
      },
    ],
  },

  fleet: {
    eyebrow: 'Frota',
    title: 'Veículos preparados para cada tipo de carga',
    subtitle:
      'Equipamentos próprios e homologados para carga seca, refrigerada, congelada e perigosa, com rastreamento em tempo real.',
    note: 'Fotos ilustrativas da frota. As imagens oficiais serão inseridas em breve.',
  },

  gallery: {
    eyebrow: 'Galeria',
    title: 'A operação em movimento',
    subtitle: 'Um panorama da nossa estrutura, equipamentos e rotas pelo Cone Sul.',
  },

  offices: {
    eyebrow: 'Área de atuação',
    title: 'Presença que une o Cone Sul',
    subtitle:
      'Escritórios próprios nos principais eixos logísticos do Cone Sul, com rotas consolidadas entre os países atendidos.',
  },

  faq: {
    eyebrow: 'Dúvidas frequentes',
    title: 'Perguntas frequentes',
  },

  quote: {
    eyebrow: 'Cotação',
    title: 'Solicite sua cotação',
    subtitle:
      'Preencha os dados abaixo e receba um atendimento personalizado. Ao enviar, sua solicitação segue direto para o nosso WhatsApp comercial.',
    fields: {
      name: 'Nome',
      company: 'Empresa',
      phone: 'Telefone',
      email: 'E-mail',
      origin: 'Origem da carga',
      destination: 'Destino da carga',
      country: 'País',
      city: 'Cidade',
      selectCountry: 'Selecione o país…',
      selectCity: 'Selecione a cidade…',
      pickCountryFirst: 'Escolha o país primeiro',
      otherCity: 'Outra cidade',
      otherCityPlaceholder: 'Digite a cidade',
      cargoType: 'Tipo de carga',
      weight: 'Peso estimado',
      weightPlaceholder: 'Ex.: 0,5 ou 12',
      urgency: 'Urgência',
      message: 'Detalhes da carga (volume, observações)',
    },
    cargoOptions: [
      'Carga fechada (FTL)',
      'Carga fracionada (LTL)',
      'Carga refrigerada / congelada',
      'Carga perigosa (IMO)',
      'Outro',
    ],
    urgencyOptions: ['Flexível — melhor custo', 'Padrão', 'Urgente — o quanto antes'],
    submit: 'Enviar pelo WhatsApp',
    privacy: 'Seus dados são usados apenas para retorno comercial e não são compartilhados.',
  },

  contact: {
    eyebrow: 'Contato',
    title: 'Fale com especialistas em transporte no Mercosul',
    subtitle: 'Estamos prontos para atender sua operação. Escolha o canal de sua preferência.',
    labels: {
      whatsapp: 'WhatsApp',
      phone: 'Telefone',
      email: 'E-mail',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      address: 'Escritório Brasil',
    },
  },

  footer: {
    about:
      'Transporte internacional de carga fracionada e completa entre Brasil, Chile, Argentina e todo o Cone Sul desde 1989.',
    columns: {
      services: 'Serviços',
      quickLinks: 'Navegação',
      contact: 'Contato',
    },
    rights: 'Todos os direitos reservados.',
    developer: 'Desenvolvido com excelência',
  },

  whatsappFloat: {
    label: 'Fale com a gente',
    message: 'Olá! Vim pelo site e gostaria de solicitar uma cotação.',
  },
};

export default pt;
