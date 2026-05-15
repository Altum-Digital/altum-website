import { useState } from "react";
import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";

type Answer = "a" | "b" | "c";
type Question = {
  key: string;
  text: string;
  options: { key: Answer; label: string; score: number }[];
};

const questions: Question[] = [
  {
    key: "size",
    text: "¿Cuántos empleados tienes?",
    options: [
      { key: "a", label: "Solo yo / 1 persona", score: 0 },
      { key: "b", label: "2 a 5 personas", score: 1 },
      { key: "c", label: "6 o más personas", score: 2 },
    ],
  },
  {
    key: "online",
    text: "¿Recibes pedidos, cotizaciones o leads online?",
    options: [
      { key: "a", label: "No, todo por teléfono o local", score: 0 },
      { key: "b", label: "A veces por redes sociales", score: 1 },
      { key: "c", label: "Sí, es parte importante del negocio", score: 2 },
    ],
  },
  {
    key: "seo",
    text: "¿Necesitas que la gente te encuentre en Google?",
    options: [
      { key: "a", label: "No, mis clientes ya me conocen", score: 0 },
      { key: "b", label: "Algo de posicionamiento local", score: 1 },
      { key: "c", label: "Sí, quiero dominar mi zona/servicio", score: 2 },
    ],
  },
  {
    key: "site",
    text: "¿Tienes sitio web actualmente?",
    options: [
      { key: "a", label: "No tengo nada", score: 0 },
      { key: "b", label: "Tengo uno viejo / Facebook", score: 1 },
      { key: "c", label: "Tengo sitio pero no funciona", score: 2 },
    ],
  },
];

type Recommendation = {
  key: string;
  name: string;
  price: string;
  pitch: string;
  cta: string;
};

const recommendations: Recommendation[] = [
  {
    key: "presencia",
    name: "Presencia",
    price: "$9,000",
    pitch: "Perfecto para dar el primer paso — un sitio profesional y sencillo que te pone en el mapa.",
    cta: "Ver paquete Presencia",
  },
  {
    key: "total",
    name: "Total",
    price: "$12,000",
    pitch: "Para dominar Google — 5 páginas + 13 landings SEO por servicio y landing B2B.",
    cta: "Ver paquete Total",
  },
  {
    key: "personalizado",
    name: "Personalizado",
    price: "$20,000+",
    pitch: "Proyecto 100% a la medida — sin plantilla, diseño único y sin límites de páginas.",
    cta: "Agendar consulta Personalizado",
  },
];

export function PackageCalculator() {
  const { ref, inView } = useReveal<HTMLDivElement>();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [done, setDone] = useState(false);

  const handleAnswer = (qKey: string, score: number) => {
    const next = { ...answers, [qKey]: score };
    setAnswers(next);
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const total = Object.values(answers).reduce((a, b) => a + b, 0);
  const recIdx = total <= 2 ? 0 : total <= 5 ? 1 : 2;
  const rec = recommendations[recIdx];

  const reset = () => {
    setAnswers({});
    setStep(0);
    setDone(false);
  };

  const progress = done ? 100 : (step / questions.length) * 100;
  const q = questions[step];

  return (
    <section id="calculadora" className="relative py-32 overflow-hidden">
      <div ref={ref} className={`relative max-w-4xl mx-auto px-6 reveal ${inView ? "reveal-in" : ""}`}>
        <div className="text-center mb-10">
          <p className="text-orange-600 text-xs font-semibold uppercase tracking-wider mb-4">¿No sabes cuál paquete?</p>
          <h2 className="font-display font-extrabold text-navy text-4xl md:text-5xl tracking-tightest leading-tight">
            Responde 4 preguntas y te decimos <span className="text-gradient-primary">cuál te conviene</span>.
          </h2>
        </div>

        <div className="bg-white border-2 border-navy/10 rounded-3xl p-8 md:p-12 shadow-xl shadow-navy/5">
          {/* Progress bar */}
          <div className="h-1.5 bg-navy/5 rounded-full overflow-hidden mb-10">
            <div
              className="h-full bg-gradient-to-r from-teal to-lime transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {!done && q ? (
            <div>
              <div className="text-xs font-semibold text-navy/50 uppercase tracking-wider mb-3">
                Pregunta {step + 1} de {questions.length}
              </div>
              <h3 className="font-display font-bold text-navy text-2xl md:text-3xl mb-8 tracking-tight">
                {q.text}
              </h3>
              <div className="grid gap-3">
                {q.options.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => handleAnswer(q.key, opt.score)}
                    className="text-left p-5 rounded-2xl border-2 border-navy/10 hover:border-teal hover:bg-teal/5 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-navy font-medium">{opt.label}</span>
                      <svg className="w-5 h-5 text-navy/30 group-hover:text-teal group-hover:translate-x-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime/15 text-lime-700 text-xs font-bold uppercase tracking-wider mb-5">
                ★ Te recomendamos
              </div>
              <h3 className="font-display font-extrabold text-navy text-4xl md:text-5xl tracking-tightest mb-3">
                Paquete {rec.name}
              </h3>
              <div className="font-display font-extrabold text-navy text-3xl mb-5">
                {rec.price} <span className="text-base font-medium text-navy/55">MXN</span>
              </div>
              <p className="text-navy/70 text-lg max-w-xl mx-auto leading-relaxed mb-8">
                {rec.pitch}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to={`/productos#${rec.key}`} className="btn-primary">
                  {rec.cta}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </Link>
                <button onClick={reset} className="btn-ghost">
                  Responder otra vez
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
