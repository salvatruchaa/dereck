export default function HomePage() {
  return (
    <main
      className="flex min-h-[calc(100vh-80px)] flex-1 items-center justify-center bg-cover bg-center bg-no-repeat p-6"
      style={{ backgroundImage: "url('/y2kaos.png')" }}
    >
      <section className="max-w-xl text-center">
        <h1 className="mb-3 text-4xl font-bold text-red-600 drop-shadow-lg">COMISIONES ABIERTAS</h1>
        <p className="text-lg text-gray-600">
          Los quiero mucho chocoboyos, son muy bonitos.
        </p>
      </section>
    </main>
  );
}
