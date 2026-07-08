/* =====================================================================
   SERVIÇOS — dados dos cartões.
   "icon" corresponde ao nome do ícone da biblioteca lucide-react.
   "cargo" pré-seleciona o Tipo de carga na Cotação ao clicar no card.
   "details" alimenta o modal "Ver detalhes" (texto longo + destaques).
   ===================================================================== */

export const servicos = [
  {
    id: 'ftl',
    icon: 'Truck',
    title: 'FTL / Exclusivo',
    subtitle: 'Carga fechada',
    text: 'Veículo dedicado exclusivamente à sua carga, com rota direta e prazo otimizado da origem ao destino.',
    accent: 'blue',
    cargo: 'Carga fechada (FTL)',
    details: {
      long: 'Um veículo dedicado exclusivamente à sua carga, do ponto de origem ao destino final — sem transbordos nem paradas para consolidação. A solução ideal para volumes maiores, cargas sensíveis ou prazos apertados.',
      highlights: [
        'Veículo 100% dedicado',
        'Rota direta, sem transbordo',
        'Prazo otimizado',
        'Ideal para cargas volumosas ou urgentes',
      ],
    },
  },
  {
    id: 'ltl',
    icon: 'Boxes',
    title: 'LTL / Consolidado',
    subtitle: 'Carga fracionada',
    text: 'Consolidação inteligente de cargas que reduz o custo por operação sem abrir mão da segurança.',
    accent: 'blue',
    cargo: 'Carga fracionada (LTL)',
    details: {
      long: 'Sua carga viaja consolidada com outras, dividindo o custo do transporte sem abrir mão da segurança. A opção mais eficiente para volumes menores e envios recorrentes pelo Cone Sul.',
      highlights: [
        'Custo compartilhado',
        'Ideal para volumes menores',
        'Rotas consolidadas',
        'Segurança mantida de ponta a ponta',
      ],
    },
  },
  {
    id: 'refrigerada',
    icon: 'Snowflake',
    title: 'Carga Refrigerada',
    subtitle: 'Cadeia do frio',
    text: 'Transporte com controle de temperatura até -22°C para produtos refrigerados e congelados.',
    accent: 'red',
    cargo: 'Carga refrigerada / congelada',
    details: {
      long: 'Transporte com temperatura controlada do carregamento à entrega, mantendo a cadeia do frio ininterrupta para produtos refrigerados e congelados até -22°C.',
      highlights: [
        'Controle de temperatura até -22°C',
        'Cadeia do frio ininterrupta',
        'Refrigerados e congelados',
        'Equipamentos homologados',
      ],
    },
  },
  {
    id: 'perigosa',
    icon: 'TriangleAlert',
    title: 'Carga Perigosa',
    subtitle: 'Normas IMO',
    text: 'Movimentação de cargas perigosas com equipe habilitada e conformidade total às normas de segurança.',
    accent: 'red',
    cargo: 'Carga perigosa (IMO)',
    details: {
      long: 'Movimentação de cargas perigosas com total conformidade às normas IMO: equipe habilitada, documentação e sinalização adequadas e protocolos rígidos de segurança em cada etapa do transporte.',
      highlights: [
        'Conformidade com normas IMO',
        'Equipe habilitada',
        'Documentação e sinalização',
        'Protocolos rígidos de segurança',
      ],
    },
  },
  {
    id: 'satelite',
    icon: 'Satellite',
    title: 'Rastreamento por Satélite',
    subtitle: 'Monitoramento 24/7',
    text: 'Acompanhamento em tempo real de cada embarque, do carregamento até a entrega final.',
    accent: 'blue',
    cargo: '',
    details: {
      long: 'Cada embarque é acompanhado por rastreamento via satélite, com monitoramento em tempo real do carregamento até a entrega final — dando total previsibilidade à sua operação.',
      highlights: [
        'Rastreamento 24/7 por satélite',
        'Acompanhamento em tempo real',
        'Previsibilidade total',
        'Do carregamento à entrega',
      ],
    },
  },
  {
    id: 'aduana',
    icon: 'FileCheck2',
    title: 'Despacho de Aduana',
    subtitle: 'Comércio exterior',
    text: 'Despacho aduaneiro completo para importação e exportação, com toda a documentação sob controle.',
    accent: 'red',
    cargo: '',
    details: {
      long: 'Cuidamos de todo o despacho aduaneiro para importação e exportação, com a documentação de comércio exterior sob controle e agilidade na liberação nas fronteiras do Cone Sul.',
      highlights: [
        'Despacho para importação e exportação',
        'Documentação completa',
        'Agilidade nas fronteiras',
        'Comércio exterior sob controle',
      ],
    },
  },
];

export default servicos;
