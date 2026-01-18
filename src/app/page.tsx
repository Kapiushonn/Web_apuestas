

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white px-6">
      <h1 className="text-5xl font-bold mb-4">
        Apuestas Web ⚽💰
      </h1>

      <p className="text-lg text-zinc-300 max-w-xl text-center mb-8">
        Bienvenido a tu plataforma de análisis de apuestas deportivas.
        Aquí encontrarás predicciones, estadísticas y picks inteligentes para mejorar tus resultados.
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400 transition">
          Ver Predicciones
        </button>

        <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
          Iniciar Sesión
        </button>
      </div>
    </main>
  );
}
