/* =====================================================================
   ESCRITÓRIOS / REDE DE ATUAÇÃO
   ===================================================================== */

export const oficinas = [
  {
    id: 'chile',
    pais: 'Chile',
    cidade: 'Santiago',
    flag: '🇨🇱',
    endereco: 'Av. Kennedy N°5770, piso 13, Of. 1307 - Vitacura - Santiago',
    principal: true,
  },
  {
    id: 'brasil',
    pais: 'Brasil',
    cidade: 'São Paulo',
    flag: '🇧🇷',
    endereco:
      'R. Sebastião Pereira da Silva, 71 - Itaquaciara, Itapecerica da Serra - SP, 06882-110',
    principal: false,
  },
  {
    id: 'argentina',
    pais: 'Argentina',
    cidade: 'Buenos Aires',
    flag: '🇦🇷',
    endereco: 'Alicia Moreau de Justo 1150, Of. 203C - Puerto Madero - Buenos Aires',
    principal: false,
  },
];

// Países atendidos (para a faixa "Uniendo el Cono Sur")
export const paisesAtendidos = [
  { flag: '🇧🇷', nome: 'Brasil' },
  { flag: '🇦🇷', nome: 'Argentina' },
  { flag: '🇺🇾', nome: 'Uruguai' },
  { flag: '🇵🇾', nome: 'Paraguai' },
  { flag: '🇨🇱', nome: 'Chile' },
];

export default oficinas;
