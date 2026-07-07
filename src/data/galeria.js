/* =====================================================================
   GALERIA — fotos da operação (Cone Sul).

   Para inserir uma foto nova:
   1. Coloque o arquivo (PNG/JPG) em  public/images/
   2. Rode:  npm run optimize:images   (gera o .webp leve automaticamente)
   3. Aponte "image" abaixo para  "/images/<arquivo>.webp"

   image: null  → exibe um slot premium editável (placeholder marcado).
   span: 'wide' (2 colunas) | 'tall' (2 linhas, ideal p/ foto vertical) | ''
   ===================================================================== */

export const galeria = [
  { id: 'rota', label: 'Operação em rota', span: 'wide', image: null },
  { id: 'frota', label: 'Frota Mondel', span: '', image: null },
  { id: 'frio', label: 'Cadeia do frio', span: '', image: null },
  { id: 'aduana', label: 'Despacho aduaneiro', span: '', image: null },
  {
    id: 'carregamento',
    label: 'Carregamento na operação',
    span: 'tall',
    image: '/images/operacao-doca.webp',
  },
  { id: 'rastreamento', label: 'Rastreamento 24/7', span: '', image: null },
];

export default galeria;
