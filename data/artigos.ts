export type Artigo = {
  slug: string;
  titulo: string;
  descricao: string;
  autor: string;
  dataPublicacao: string;
  conteudo: string;
};

export const artigos: Artigo[] = [
  {
    slug: "nextjs-server-components",
    titulo: "Entendendo os Server Components",
    descricao:
      "Aprenda como funcionam os Server Components no Next.js.",
    autor: "Augusto Oliveira",
    dataPublicacao: "2026-10-10",
    conteudo:
      "Os Server Components permitem executar componentes React no servidor. Isso ajuda a buscar dados diretamente no servidor e reduzir a quantidade de JavaScript enviado ao navegador.",
  },
  {
    slug: "rotas-dinamicas-nextjs",
    titulo: "Dominando as Rotas Dinâmicas",
    descricao:
      "Descubra como criar páginas dinâmicas usando o App Router.",
    autor: "Augusto Oliveira",
    dataPublicacao: "2026-10-11",
    conteudo:
      "As rotas dinâmicas permitem criar páginas baseadas em parâmetros da URL. No Next.js, podemos utilizar pastas com colchetes, como [slug], para identificar esses parâmetros.",
  },
  {
    slug: "seo-no-nextjs",
    titulo: "SEO com Next.js",
    descricao:
      "Saiba como configurar metadados para melhorar o SEO.",
    autor: "Augusto Oliveira",
    dataPublicacao: "2026-10-12",
    conteudo:
      "O Next.js permite definir metadados de cada página por meio da função generateMetadata. Podemos personalizar o título e a descrição de cada artigo para ajudar os mecanismos de busca a compreender o conteúdo.",
  },
];
