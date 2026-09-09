# Mondel Group — Plataforma Institucional de Logística

Site institucional desenvolvido para a **Mondel Group**, com foco em apresentar sua atuação logística no Cone Sul por meio de uma experiência digital moderna, responsiva e orientada à conversão.

O projeto combina identidade corporativa, experiência do usuário e funcionalidades comerciais em uma SPA construída com React.

## 🌐 Projeto online

Acesse a versão publicada:

**https://mondel-group.vercel.app**

> Recomendo visualizar tanto no desktop quanto no celular. Toda a interface foi desenvolvida de forma responsiva.

---

## Sobre o projeto

A proposta foi transformar a presença digital da Mondel em uma experiência institucional mais moderna e profissional, comunicando sua operação logística de maneira clara e facilitando o contato de potenciais clientes.

Mais do que uma página institucional estática, o projeto foi pensado como uma experiência comercial completa:

**apresentação da empresa → serviços → área de atuação → estrutura operacional → cotação → contato.**

---

## Principais funcionalidades

### Cotação inteligente

Formulário comercial com fluxo estruturado de:

**País → Cidade → Tipo de carga → Dados da operação**

A cotação gera automaticamente uma mensagem organizada para contato comercial via WhatsApp.

Ao acessar a cotação através de determinados serviços, o tipo de carga correspondente pode ser pré-selecionado.

### Serviços interativos

Cards compactos apresentam os principais serviços da empresa.

Cada serviço possui:

- acesso direto à cotação;
- pré-seleção do tipo de carga quando aplicável;
- modal **“Ver detalhes”** com informações adicionais;
- interação adaptada para desktop e mobile.

### Mapa operacional interativo

Representação visual da presença da Mondel no Cone Sul, com:

- unidades e países atendidos;
- rotas logísticas;
- pontos interativos;
- tooltips;
- sincronização entre mapa e informações das unidades;
- animações de transporte;
- suporte a `prefers-reduced-motion`.

### Experiência multilíngue

Estrutura preparada para conteúdo em diferentes idiomas, adequada ao contexto internacional da operação.

### Interface responsiva

O projeto foi desenvolvido para funcionar em diferentes tamanhos de tela:

- desktop;
- notebook;
- tablet;
- smartphone.

Layout, navegação, formulários, cards e componentes interativos se reorganizam conforme o viewport.

### Animações e microinterações

A experiência utiliza animações sutis para reforçar a percepção de movimento e logística sem comprometer a usabilidade.

Inclui:

- animações on-scroll;
- estados de hover/focus;
- transições;
- elementos de rota animados;
- tratamento para usuários que preferem movimento reduzido.

### SEO técnico

Estrutura preparada com:

- meta tags;
- Open Graph;
- Schema.org / JSON-LD;
- `robots.txt`;
- `sitemap.xml`;
- URLs e conteúdo institucional estruturados para mecanismos de busca.

---

## Tecnologias

- React
- Vite
- JavaScript
- CSS Modules
- Lucide Icons
- HTML5
- CSS3
- Git
- GitHub
- Vercel

O projeto utiliza uma arquitetura baseada em componentes e mantém conteúdo, dados institucionais e identidade visual separados da camada de interface.

---

## Arquitetura

```text
src/
├── assets/              Imagens e identidade visual
├── components/
│   ├── layout/          Header, Footer e elementos globais
│   ├── ui/              Componentes reutilizáveis
│   └── sections/        Seções institucionais
├── content/             Conteúdo textual / idiomas
├── data/                Serviços, empresa, frota e outros dados
├── hooks/               Hooks reutilizáveis
├── styles/              Design tokens e estilos globais
├── utils/               Utilitários
├── App.jsx
└── main.jsx
