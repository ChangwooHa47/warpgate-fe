import { ProHero } from './_components/pro';
import { Container } from './_components/shared';
import { Section } from './_components/shared';

export default function ProPage() {
  return (
    <>
      <ProHero />

      {/* Features Section */}
      <Section id="features" className="bg-gray-900">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Features
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Coming soon...
            </p>
          </div>
        </Container>
      </Section>

      {/* Pricing Section */}
      <Section id="pricing" className="bg-bg-normal">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Coming soon...
            </p>
          </div>
        </Container>
      </Section>

      {/* Enterprise Section */}
      <Section id="enterprise" className="bg-gray-900">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Coming soon...
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-bg-normal">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contact
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Coming soon...
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
