/**
 * Demo Segment Layout
 *
 * This layout wraps ALL demo routes (/demo, /demo/cafe, /demo/restaurant, etc.)
 * Each individual demo has its OWN layout.tsx that imports demo-specific CSS.
 *
 * CSS Isolation Strategy:
 * - This layout provides NO demo-specific styles
 * - Each demo's layout.tsx imports its own CSS file
 * - Demo CSS uses data-demo="<slug>" attribute for specificity
 * - CSS Layers ensure demo styles don't leak to Lite/Pro
 */
export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
