import OpenAIAssistant from "@/app/ui/openai-assistant";

export default function ChatPage() {
    return (
        <main>
            <div className="mx-auto mb-12 max-w-lg text-center">
                <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900">
                    MAAT AI
                </h1>
                <OpenAIAssistant
                    assistantId="asst_xrRHKM4niizyLZlVhBAMTnfH"
                    greeting="¿En qué puedo asistirte hoy?"
                />
            </div>
        </main>
    );
}
