import Link from "next/link";
import { artigos } from "@/data/artigos";

export default function Home() {
  return (
    <main>
      <header>
        <h1>Meu Blog</h1>
        <p>Artigos sobre tecnologia, programação e desenvolvimento web.</p>
      </header>

      <section>
        <h2>Últimos artigos</h2>

        {artigos.map((artigo) => (
          <article key={artigo.slug}>
            <h3>{artigo.titulo}</h3>

            <p>{artigo.descricao}</p>

            <p>
              Por {artigo.autor} —{" "}
              {new Date(artigo.dataPublicacao).toLocaleDateString("pt-BR", {
                timeZone: "UTC",
              })}
            </p>

            <Link href={`/artigos/${artigo.slug}`}>
              Ler artigo
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}