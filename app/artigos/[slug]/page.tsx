import Link from "next/link";
import { notFound } from "next/navigation";
import { artigos } from "@/data/artigos";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const artigo = artigos.find((item) => item.slug === slug);

  if (!artigo) {
    return {
      title: "Artigo não encontrado | Meu Blog",
      description: "O artigo solicitado não foi encontrado.",
    };
  }

  return {
    title: `${artigo.titulo} | Meu Blog`,
    description: artigo.descricao,
  };
}

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return artigos.map((artigo) => ({
    slug: artigo.slug,
  }));
}

export default async function PaginaArtigo({ params }: Props) {
  const { slug } = await params;

  const artigo = artigos.find((item) => item.slug === slug);

  if (!artigo) {
    notFound();
  }

  return (
    <main>
      <Link href="/">← Voltar para o início</Link>

      <article>
        <h1>{artigo.titulo}</h1>

        <p>{artigo.descricao}</p>

        <p>
          Por {artigo.autor} —{" "}
          {new Date(artigo.dataPublicacao).toLocaleDateString("pt-BR", {
            timeZone: "UTC",
          })}
        </p>

        <hr />

        <p>{artigo.conteudo}</p>
      </article>
    </main>
  );
}