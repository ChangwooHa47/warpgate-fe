import { Section, Badge, Button } from '../shared';

export function ProHero() {
  return (
    <Section
      padding="xl"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-purple-600/10 to-transparent" />
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/30 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <Badge variant="pro" className="mb-6">
          Professional Edition
        </Badge>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Enterprise-Grade</span>
          <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Power & Performance
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl">
          Unlock advanced features, priority support, and unlimited scalability.
          Built for teams and enterprises that demand the best.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="w-full bg-white text-black hover:bg-gray-100 sm:w-auto">
            Start Free Trial
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full border-gray-600 text-white hover:bg-white/10 sm:w-auto"
          >
            View Demo
          </Button>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          No credit card required &bull; 14-day free trial &bull; Cancel anytime
        </p>
      </div>
    </Section>
  );
}
