/* =====================================================================
   PAÍSES E CIDADES ATENDIDAS (Cone Sul)
   Base para o seletor dependente país → cidade da Cotação.
   Editável: acrescente/remova cidades conforme as praças da Mondel.
   ===================================================================== */

export const paisesCidades = [
  {
    code: 'BR',
    nome: 'Brasil',
    cidades: [
      'São Paulo',
      'Santos',
      'Campinas',
      'Curitiba',
      'Porto Alegre',
      'Rio de Janeiro',
      'Uberlândia',
      'Foz do Iguaçu',
    ],
  },
  {
    code: 'AR',
    nome: 'Argentina',
    cidades: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'Mar del Plata'],
  },
  {
    code: 'UY',
    nome: 'Uruguai',
    cidades: ['Montevidéu', 'Colonia del Sacramento', 'Paysandú', 'Rivera'],
  },
  {
    code: 'PY',
    nome: 'Paraguai',
    cidades: ['Assunção', 'Ciudad del Este', 'Encarnación'],
  },
  {
    code: 'CL',
    nome: 'Chile',
    cidades: ['Santiago', 'Valparaíso', 'San Antonio', 'Concepción', 'Antofagasta', 'Iquique'],
  },
];

/** Valor sentinela para "Outra cidade" (campo livre). */
export const OUTRA_CIDADE = '__outra__';

/** Retorna as cidades de um país pelo nome; [] se não encontrado. */
export function cidadesDoPais(nome) {
  const p = paisesCidades.find((x) => x.nome === nome);
  return p ? p.cidades : [];
}

export default paisesCidades;
