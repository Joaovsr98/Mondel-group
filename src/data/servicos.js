/* =====================================================================
   SERVIÇOS — dados dos cartões.
   "icon" corresponde ao nome do ícone da biblioteca lucide-react.
   "cargo" pré-seleciona o Tipo de carga na Cotação ao clicar no card
   (deve casar com quote.cargoOptions em content/pt.js). Vazio = sem
   pré-seleção (apenas leva à Cotação).
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
  },
  {
    id: 'ltl',
    icon: 'Boxes',
    title: 'LTL / Consolidado',
    subtitle: 'Carga fracionada',
    text: 'Consolidação inteligente de cargas que reduz o custo por operação sem abrir mão da segurança.',
    accent: 'blue',
    cargo: 'Carga fracionada (LTL)',
  },
  {
    id: 'refrigerada',
    icon: 'Snowflake',
    title: 'Carga Refrigerada',
    subtitle: 'Cadeia do frio',
    text: 'Transporte com controle de temperatura até -22°C para produtos refrigerados e congelados.',
    accent: 'red',
    cargo: 'Carga refrigerada / congelada',
  },
  {
    id: 'perigosa',
    icon: 'TriangleAlert',
    title: 'Carga Perigosa',
    subtitle: 'Normas IMO',
    text: 'Movimentação de cargas perigosas com equipe habilitada e conformidade total às normas de segurança.',
    accent: 'red',
    cargo: 'Carga perigosa (IMO)',
  },
  {
    id: 'satelite',
    icon: 'Satellite',
    title: 'Rastreamento por Satélite',
    subtitle: 'Monitoramento 24/7',
    text: 'Acompanhamento em tempo real de cada embarque, do carregamento até a entrega final.',
    accent: 'blue',
    cargo: '',
  },
  {
    id: 'aduana',
    icon: 'FileCheck2',
    title: 'Despacho de Aduana',
    subtitle: 'Comércio exterior',
    text: 'Despacho aduaneiro completo para importação e exportação, com toda a documentação sob controle.',
    accent: 'red',
    cargo: '',
  },
];

export default servicos;
