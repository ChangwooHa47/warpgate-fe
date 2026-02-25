const demos = [
  { slug: "cafe", name: "Cafe Demo", description: "Artisan coffee shop showcase" },
  { slug: "restaurant", name: "Restaurant Demo", description: "Fine dining experience" },
  { slug: "nailshop", name: "Nail Shop Demo", description: "Beauty salon booking" },
  { slug: "hagwon", name: "Hagwon Demo", description: "Education academy portal" },
  { slug: "gym", name: "Gym Demo", description: "Fitness center membership" },
  { slug: "accounting", name: "Accounting Demo", description: "Financial services" },
  { slug: "hospital", name: "Hospital Demo", description: "Medical clinic booking" },
  { slug: "lawfirm", name: "Law Firm Demo", description: "Legal services portal" },
  { slug: "mall", name: "Mall Demo", description: "Shopping center directory" },
  { slug: "ecommerce", name: "E-commerce Demo", description: "Online store" },
  { slug: "estate", name: "Estate Demo", description: "Real estate listings" },
];

export default function DemoHubPage() {
  return (
    <main className="min-h-screen p-8 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Demo Showcase</h1>
          <p className="text-lg text-neutral-600">
            Browse our collection of industry-specific demo templates
          </p>
          <nav className="mt-6 flex justify-center gap-4">
            <a
              href="/"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              ← Back to Lite
            </a>
            <a
              href="/pro"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              View Pro →
            </a>
          </nav>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo) => (
            <a
              key={demo.slug}
              href={`/demo/${demo.slug}`}
              className="block p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-400 hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-semibold mb-2">{demo.name}</h2>
              <p className="text-neutral-600">{demo.description}</p>
              <span className="inline-block mt-4 text-sm text-neutral-500">
                /demo/{demo.slug}
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
