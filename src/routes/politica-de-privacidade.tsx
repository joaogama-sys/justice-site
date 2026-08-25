import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Glaidemir Resende Advocacia Criminal" },
      {
        name: "description",
        content:
          "Saiba como o escritório Glaidemir Resende — Advocacia Criminal trata os dados pessoais dos visitantes do site, em conformidade com a LGPD.",
      },
      {
        property: "og:title",
        content: "Política de Privacidade | Glaidemir Resende Advocacia Criminal",
      },
      {
        property: "og:description",
        content:
          "Como tratamos os dados pessoais dos visitantes do site, em conformidade com a LGPD.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/politica-de-privacidade" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-svh bg-background">
      <header className="bg-navy-deep px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <Link to="/" className="text-sm font-semibold text-gold hover:text-gold-soft">
            ← Voltar ao início
          </Link>
          <h1 className="mt-6 font-display text-4xl font-semibold text-ivory sm:text-5xl">
            Política de Privacidade
          </h1>
        </div>
      </header>

      <main className="mx-auto max-w-3xl space-y-8 px-6 py-16 text-base leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-display text-2xl font-semibold text-navy">1. Informações gerais</h2>
          <p className="mt-3">
            Este site é mantido pelo escritório Glaidemir Resende — Advocacia Criminal,
            com finalidade exclusivamente informativa. Respeitamos a privacidade dos
            visitantes e tratamos eventuais dados pessoais conforme a Lei nº 13.709/2018
            (LGPD).
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-navy">2. Dados coletados</h2>
          <p className="mt-3">
            Este site não possui formulários de cadastro e não coleta dados pessoais de
            forma automática para fins comerciais. Ao clicar nos botões de contato, o
            visitante é direcionado ao WhatsApp, onde o tratamento das informações passa
            a ser regido também pela política do referido aplicativo.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-navy">
            3. Uso das informações
          </h2>
          <p className="mt-3">
            As informações compartilhadas voluntariamente pelo visitante são utilizadas
            apenas para responder ao contato e avaliar a possibilidade de atendimento
            jurídico. Não são vendidas, cedidas ou compartilhadas com terceiros, salvo
            por determinação legal ou judicial.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-navy">4. Sigilo profissional</h2>
          <p className="mt-3">
            Todas as informações transmitidas ao escritório estão protegidas pelo sigilo
            profissional do advogado, nos termos do Estatuto da Advocacia e do Código de
            Ética e Disciplina da OAB.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-navy">
            5. Cookies e serviços de terceiros
          </h2>
          <p className="mt-3">
            Este site incorpora o mapa do Google Maps, que pode utilizar cookies próprios
            do provedor. O visitante pode desativar cookies nas configurações do
            navegador.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-navy">6. Direitos do titular</h2>
          <p className="mt-3">
            O titular pode solicitar, a qualquer momento, informações sobre o tratamento,
            correção ou exclusão de seus dados, pelos canais de contato divulgados neste
            site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-navy">7. Atualizações</h2>
          <p className="mt-3">
            Esta política pode ser atualizada periodicamente. Recomenda-se a consulta
            regular a esta página.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
