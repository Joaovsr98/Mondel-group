/* =====================================================================
   CONSTRUTORES DE LINKS DE CONTATO
   Centraliza a montagem de wa.me, tel:, mailto: e Google Maps.
   ===================================================================== */

import { empresa } from '../data/empresa.js';

/** Link do WhatsApp com mensagem opcional pré-preenchida. */
export function whatsappLink(message = '') {
  const base = `https://wa.me/${empresa.whatsappRaw}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Link de telefone clicável. */
export function telLink() {
  return `tel:+${empresa.telRaw}`;
}

/** Link de e-mail clicável com assunto opcional. */
export function mailLink(subject = 'Contato pelo site') {
  return `mailto:${empresa.email}?subject=${encodeURIComponent(subject)}`;
}

/** URL de embed do Google Maps (sem necessidade de API key). */
export function mapEmbedUrl() {
  return `https://www.google.com/maps?q=${empresa.mapaQuery}&z=15&output=embed`;
}

/** Link para abrir o endereço no Google Maps em nova aba. */
export function mapOpenUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${empresa.mapaQuery}`;
}

/**
 * Monta a mensagem de cotação a partir dos dados do formulário
 * e devolve o link de WhatsApp pronto.
 */
export function buildQuoteWhatsapp(form) {
  const origem = [form.originCountry, form.originCity].filter(Boolean).join(' / ') || '-';
  const destino = [form.destCountry, form.destCity].filter(Boolean).join(' / ') || '-';
  const linhas = [
    '*Nova solicitação de cotação — Mondel Group*',
    '',
    `*Nome:* ${form.name || '-'}`,
    `*Empresa:* ${form.company || '-'}`,
    `*Telefone:* ${form.phone || '-'}`,
    `*E-mail:* ${form.email || '-'}`,
    '',
    `*Origem:* ${origem}`,
    `*Destino:* ${destino}`,
    `*Tipo de carga:* ${form.cargoType || '-'}`,
    `*Peso estimado:* ${form.weight ? `${form.weight} t` : '-'}`,
    `*Urgência:* ${form.urgency || '-'}`,
    '',
    `*Detalhes:* ${form.message || '-'}`,
  ];
  return whatsappLink(linhas.join('\n'));
}
