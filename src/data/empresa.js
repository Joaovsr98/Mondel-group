/* =====================================================================
   DADOS DA EMPRESA — fonte única de verdade
   Edite aqui os contatos e endereços; todo o site usa estes valores.
   ===================================================================== */

export const empresa = {
  nome: 'Mondel Group',
  razaoSocial: 'Mondel Logística S.A.',
  desde: 1989,

  // Contato (só dígitos no whatsappRaw/telRaw — DDI + DDD + número)
  whatsappRaw: '5511970561211',
  whatsappDisplay: '+55 (11) 97056-1211',
  telRaw: '5511970561211',
  telDisplay: '+55 (11) 97056-1211',
  email: 'contato@mondelgroup.com',

  // Redes sociais
  instagramUser: '@mondelgroup.br',
  instagramUrl: 'https://www.instagram.com/mondelgroup.br',
  linkedinUrl: 'https://www.linkedin.com/company/mondelgroup/',

  // Endereço principal (Brasil) — usado no Google Maps
  enderecoPrincipal:
    'R. Sebastião Pereira da Silva, 71 - Itaquaciara, Itapecerica da Serra - SP, 06882-110',
  // Consulta de mapa (embed). Trocar por coordenadas exatas se desejar.
  mapaQuery:
    'R.+Sebasti%C3%A3o+Pereira+da+Silva,+71+-+Itaquaciara,+Itapecerica+da+Serra+-+SP,+06882-110',
};

export default empresa;
