import OpenAIAssistant from "@/app/ui/openai-assistant";


export default function Home() {
  return (
    <main>
      <div className="mx-auto mb-12 max-w-lg text-center">
        <div className="m-4">
          <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl">MAAT AI</h1>
          <div className="mb-6 text-normal font-normal text-gray-500">
          MAAT AI es un sistema de recomendación personalizado que utiliza IA para analizar metas y objetivos del plan de desarrollo, sugiriendo acciones estratégicas para optimizar la toma de decisiones y alcanzar resultados.
          </div>
        </div>
        <OpenAIAssistant 
          assistantId="asst_xrRHKM4niizyLZlVhBAMTnfH"
          greeting="¿En qué puedo asistirte hoy?"
        />
      </div>
    </main>
  );
}
