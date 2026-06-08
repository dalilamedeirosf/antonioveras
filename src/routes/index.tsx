import { createFileRoute } from "@tanstack/react-router";
import doodleSun from "@/assets/doodle-sun.png";
import doodleStar from "@/assets/doodle-star.png";
import doodleCloud from "@/assets/doodle-cloud.png";
import drAntonio from "@/assets/dr-antonio.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pediatria do Desenvolvimento e Neurodesenvolvimento Infantil" },
      {
        name: "description",
        content:
          "Cuidando da saúde, do desenvolvimento e do futuro do seu filho. Pediatria, puericultura, TEA e neurodesenvolvimento com olhar humanizado.",
      },
      { property: "og:title", content: "Pediatria do Desenvolvimento Infantil" },
      {
        property: "og:description",
        content:
          "Avaliação cuidadosa e humanizada para acompanhar o desenvolvimento do seu filho.",
      },
    ],
  }),
  component: Index,
});

const areas = [
  { t: "Pediatria Geral", d: "Acompanhamento da saúde infantil desde os primeiros meses até a adolescência.", c: "teal" },
  { t: "Puericultura", d: "Monitoramento do crescimento para identificar precocemente possíveis alterações.", c: "purple" },
  { t: "Desenvolvimento Infantil", d: "Avaliação dos marcos motor, cognitivo, comportamental e social.", c: "sun" },
  { t: "Transtorno do Espectro Autista", d: "Investigação, orientação e acompanhamento de crianças com TEA.", c: "purple" },
  { t: "Neurodesenvolvimento", d: "Dificuldades de aprendizagem, atenção, comportamento e linguagem.", c: "teal" },
  { t: "Neurologia Pediátrica", d: "Acompanhamento de condições neurológicas que impactam o desenvolvimento.", c: "sun" },
  { t: "Saúde Mental Infantil", d: "Aspectos emocionais, comportamentais e sociais do bem-estar.", c: "purple" },
];

const signs = [
  "Atraso na fala",
  "Pouco contato visual",
  "Dificuldade de interação social",
  "Alterações de comportamento",
  "Atraso no desenvolvimento motor",
  "Dificuldades escolares",
  "Suspeita de autismo",
  "Problemas de atenção",
  "Alterações do sono",
  "Crises de irritabilidade",
  "Dúvidas sobre o desenvolvimento",
];

const doubts = [
  "Meu filho está desenvolvendo dentro do esperado?",
  "O atraso na fala é normal?",
  "Por que ele não interage como outras crianças?",
  "Essa dificuldade de aprendizado precisa de avaliação?",
  "Será que meu filho precisa de acompanhamento especializado?",
];

function Index() {
  return (
    <main className="paper-bg min-h-screen overflow-hidden">
      {/* NAV */}
      <header className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#top" className="font-display text-3xl text-primary leading-none">
            Dr. Pediatra <span className="text-secondary">+</span>
          </a>
          <a
            href="#agendar"
            className="hidden rounded-full bg-primary px-5 py-2 font-hand text-lg text-primary-foreground shadow-[4px_4px_0_0_var(--teal)] transition hover:-translate-y-0.5 sm:inline-block"
          >
            Agendar consulta
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative">
        <img src={doodleCloud} alt="" aria-hidden className="absolute left-4 top-2 w-24 opacity-80 md:w-32" />
        <img src={doodleStar} alt="" aria-hidden className="absolute right-10 top-24 w-16 rotate-12 md:w-20" />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-8 md:grid-cols-2 md:pt-12">
          <div className="relative">
            <p className="font-hand text-xl text-primary">
              Pediatria · Desenvolvimento · Neurodesenvolvimento
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[0.95] text-foreground md:text-7xl">
              Cuidando da saúde, do{" "}
              <span className="crayon-underline text-primary">desenvolvimento</span>{" "}
              e do futuro do seu filho.
            </h1>
            <p className="mt-6 max-w-lg font-body text-lg text-muted-foreground">
              Cada criança tem seu próprio tempo. Mas identificar precocemente os sinais
              certos pode transformar uma vida inteira.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#agendar"
                className="rounded-full bg-primary px-7 py-3 font-hand text-xl text-primary-foreground shadow-[5px_5px_0_0_var(--teal)] transition hover:-translate-y-0.5"
              >
                Agendar consulta
              </a>
              <a
                href="#areas"
                className="rounded-full border-2 border-dashed border-primary bg-white px-7 py-3 font-hand text-xl text-primary transition hover:bg-accent"
              >
                Áreas de atendimento
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-[color:var(--teal-soft)] rotate-[-3deg]" />
            <div className="absolute -inset-2 -z-10 rounded-[3rem] bg-[color:var(--purple-soft)] rotate-[2deg]" />
            <img
              src={heroKids}
              alt="Ilustração de crianças felizes brincando juntas"
              width={1280}
              height={1024}
              className="relative rounded-[2.5rem] border-4 border-white shadow-xl"
            />
            <img src={doodleSun} alt="" aria-hidden className="absolute -bottom-8 -right-6 w-24 md:w-32" />
          </div>
        </div>
      </section>

      {/* DOUBTS */}
      <section className="relative bg-[color:var(--teal-soft)] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-hand text-xl text-primary">Pequenos sinais, grandes dúvidas</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">
            Muitas vezes, perguntas como essas surgem no caminho
          </h2>
          <div className="mt-10 grid gap-4 text-left md:grid-cols-2">
            {doubts.map((q, i) => (
              <div
                key={q}
                className="crayon-card crayon-card-hover px-6 py-5"
                style={{ transform: `rotate(${i % 2 ? -0.6 : 0.6}deg)` }}
              >
                <p className="font-hand text-xl text-foreground">“{q}”</p>
              </div>
            ))}
          </div>
          <p className="mt-10 font-display text-2xl text-primary md:text-3xl">
            Ter respostas seguras faz toda a diferença.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1.3fr]">
          <div className="relative">
            <div className="crayon-card p-2">
              <div className="aspect-square rounded-[1.25rem] bg-[color:var(--purple-soft)] flex items-center justify-center">
                <img src={doodleStar} alt="" className="w-40" />
              </div>
            </div>
            <img src={doodleCloud} alt="" className="absolute -bottom-8 -left-8 w-28" />
          </div>
          <div>
            <p className="font-hand text-xl text-primary">Atendimento humanizado</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">
              Um olhar atento para o <span className="crayon-underline">desenvolvimento</span> infantil
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Sou médico com atuação em Pediatria, Desenvolvimento Infantil e acompanhamento
              de crianças com necessidades especiais. Meu objetivo é oferecer uma avaliação
              completa e individualizada, respeitando a história, o ritmo e as necessidades
              únicas de cada criança.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Cuidar de uma criança vai muito além de tratar sintomas — é compreender seu
              desenvolvimento, orientar a família e construir estratégias que favoreçam seu
              crescimento saudável em todas as áreas da vida.
            </p>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section id="areas" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="font-hand text-xl text-primary">O que cuidamos juntos</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Áreas de atendimento</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((a, i) => {
              const accent =
                a.c === "teal" ? "var(--teal)" : a.c === "sun" ? "var(--sun)" : "var(--purple)";
              return (
                <article
                  key={a.t}
                  className="crayon-card crayon-card-hover p-6"
                  style={{ transform: `rotate(${(i % 3) - 1}deg)` }}
                >
                  <div
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full font-display text-2xl text-white"
                    style={{ background: accent }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="font-display text-2xl text-foreground">{a.t}</h3>
                  <p className="mt-2 text-muted-foreground">{a.d}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SIGNS */}
      <section className="relative bg-[color:var(--purple-soft)] py-20">
        <img src={doodleSun} alt="" aria-hidden className="absolute right-6 top-6 w-24 opacity-80" />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-hand text-xl text-primary">Fique atento</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">
            Quando procurar uma avaliação especializada?
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {signs.map((s, i) => (
              <span
                key={s}
                className="rounded-full border-2 border-dashed border-primary/40 bg-white px-5 py-2 font-hand text-lg text-foreground shadow-[3px_3px_0_0_var(--teal)]"
                style={{ transform: `rotate(${(i % 5) - 2}deg)` }}
              >
                {s}
              </span>
            ))}
          </div>
          <p className="mt-12 font-display text-2xl text-primary md:text-3xl">
            Quanto mais cedo, maiores as possibilidades de evolução positiva.
          </p>
        </div>
      </section>

      {/* FAMILY */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="font-hand text-xl text-primary">Cuidado que acolhe</p>
        <h2 className="mt-2 font-display text-4xl md:text-5xl">
          Um cuidado que acolhe toda a família
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Receber uma suspeita ou perceber que algo pode não estar evoluindo como esperado
          costuma gerar insegurança e dúvidas. Por isso, meu trabalho não é apenas avaliar a
          criança — é acolher a família, esclarecer dúvidas, orientar os próximos passos e
          construir um plano baseado em ciência, respeito e individualidade.
        </p>
        <p className="mt-8 font-display text-3xl text-primary">
          Cada criança possui um potencial único.
        </p>
      </section>

      {/* PHOTOS (placeholder) */}
      <section id="fotos" className="bg-[color:var(--teal-soft)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="font-hand text-xl text-primary">Nossos pequenos</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Momentos com nossos pacientes</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Em breve, fotos reais dos pequenos que acompanho. Envie as imagens para
              personalizarmos esta galeria.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="crayon-card aspect-square flex items-center justify-center"
                style={{ transform: `rotate(${(i % 4) - 1.5}deg)` }}
              >
                <span className="font-hand text-lg text-muted-foreground">foto {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="agendar" className="relative px-6 py-24">
        <div className="relative mx-auto max-w-3xl rounded-[2.5rem] bg-primary p-10 text-center text-primary-foreground shadow-[10px_10px_0_0_var(--teal)] md:p-14">
          <img src={doodleStar} alt="" aria-hidden className="absolute -left-10 -top-10 w-24 rotate-12" />
          <img src={doodleCloud} alt="" aria-hidden className="absolute -right-10 -bottom-10 w-28" />
          <p className="font-hand text-xl opacity-90">Vamos conversar</p>
          <h2 className="mt-2 font-display text-4xl md:text-6xl">Agende uma consulta</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg opacity-95">
            Se você busca uma avaliação cuidadosa, humanizada e especializada para
            acompanhar o desenvolvimento do seu filho, estou à disposição para ajudar.
          </p>
          <a
            href="https://wa.me/"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-hand text-2xl text-primary shadow-[5px_5px_0_0_color-mix(in_oklab,var(--teal)_70%,white)] transition hover:-translate-y-0.5"
          >
            Quero agendar
          </a>
          <p className="mt-6 font-display text-xl opacity-95">
            Cuidar do desenvolvimento hoje pode transformar o futuro de amanhã.
          </p>
        </div>
      </section>

      <footer className="border-t border-dashed border-primary/30 py-8 text-center">
        <p className="font-hand text-lg text-muted-foreground">
          © {new Date().getFullYear()} · Pediatria do Desenvolvimento Infantil
        </p>
      </footer>
    </main>
  );
}
