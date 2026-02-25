export default function ProPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-neutral-900 to-neutral-800">
      <h1 className="text-4xl font-bold mb-4 text-white">WarpGate Pro</h1>
      <p className="text-lg text-neutral-400 mb-8">
        Placeholder for Pro version
      </p>
      <nav className="flex gap-4">
        <a
          href="/"
          className="px-6 py-3 bg-white text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors"
        >
          View Lite
        </a>
        <a
          href="/demo"
          className="px-6 py-3 border border-neutral-600 text-white rounded-lg hover:bg-neutral-700 transition-colors"
        >
          Browse Demos
        </a>
      </nav>
    </main>
  );
}
