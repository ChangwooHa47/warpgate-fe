# Sodam — Traditional Korean Fine Dining

A restaurant website built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout (fonts, metadata, header/footer)
│   ├── page.tsx              # Home page
│   ├── globals.css           # Tailwind v4 theme + base styles
│   ├── menu/
│   │   └── page.tsx          # Menu page
│   └── reservation/
│       ├── page.tsx          # Reservation page
│       └── ReservationForm.tsx  # Client-side form with validation
├── components/
│   ├── Header.tsx            # Sticky nav with mobile menu
│   ├── Footer.tsx            # Site footer
│   ├── Section.tsx           # Container wrapper
│   ├── Button.tsx            # Primary / secondary / ghost variants
│   ├── Card.tsx              # Feature card
│   ├── HeroBackground.tsx    # Swappable hero background
│   └── form/
│       ├── Input.tsx
│       ├── Select.tsx
│       ├── Textarea.tsx
│       └── ErrorText.tsx
├── data/
│   └── menu.ts              # Menu mock data with TypeScript types
└── lib/
    └── fonts.ts              # Google Fonts config (Cormorant Garamond + Inter)
```

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start dev server         |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |
