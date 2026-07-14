import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main id="conteudo-principal" className="py-24 sm:py-32">
      <Container>
        <p className="eyebrow">Erro 404</p>
        <h1 className="mt-5 font-display text-4xl font-semibold sm:text-6xl">Esta página não foi encontrada.</h1>
        <p className="mt-5 text-lg text-muted">O endereço pode ter mudado ou o conteúdo não está mais disponível.</p>
        <Link href="/" className="mt-8 inline-flex rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white">Voltar ao início</Link>
      </Container>
    </main>
  );
}
