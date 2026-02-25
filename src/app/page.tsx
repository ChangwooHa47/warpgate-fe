export default function LitePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">WarpGate Lite</h1>
      <p className="text-lg text-neutral-600 mb-8">
        Placeholder for Lite version
      </p>
      <nav className="flex gap-4">
        <a
          href="/pro"
          className="px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
        >
          View Pro
        </a>
        <a
          href="/demo"
          className="px-6 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
        >
          Browse Demos
        </a>
      </nav>
    </main>
  );
}
