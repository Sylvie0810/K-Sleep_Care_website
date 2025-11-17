# K-Sleep Care Website

A comprehensive website for K-Sleep Care, a medical tourism company specializing in sleep apnea treatment in Seoul, South Korea.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for routing
- **React Hook Form** for form handling
- **Lucide React** for icons
- **Pretendard** font (Korean web font)

## Features

- ✅ Responsive design (mobile-first)
- ✅ Modern UI with smooth animations
- ✅ Comprehensive page structure:
  - Home page with hero, problem/solution, how it works
  - About Sleep Health (educational content)
  - Our Program (5-day program details)
  - How It Works (step-by-step process)
  - For Businesses (B2B section)
  - About Us (mission, vision, team)
  - Expert Insights (articles from medical advisors)
  - FAQ (searchable, categorized)
  - Contact (consultation booking form)
- ✅ Brand colors (teal/turquoise primary, accent yellow)
- ✅ Pretendard font integration
- ✅ SEO-friendly structure
- ✅ Accessible components

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
k-sleep-care-website/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components (Button, Card)
│   │   └── layout/          # Layout components (Header, Footer, Layout)
│   ├── pages/               # Page components
│   ├── App.tsx              # Main app component with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
└── package.json             # Dependencies
```

## Brand Colors

- **Primary**: #006B77 (teal)
- **Primary Light**: #00A5B5
- **Secondary**: #1E3A5F (deep blue)
- **Accent**: #F7DC6F (warm yellow)
- **Success**: #28A745
- **Warning**: #FFC107
- **Error**: #DC3545

## Development Notes

- All pages are responsive and mobile-first
- Forms use React Hook Form for validation
- Animations use Framer Motion
- Icons from Lucide React
- Font: Pretendard (loaded via CDN)

## Next Steps

- [ ] Connect contact form to backend/email service
- [ ] Add patient dashboard (requires authentication)
- [ ] Integrate CPAP data APIs
- [ ] Add blog/content management
- [ ] Implement analytics tracking
- [ ] Add more expert articles
- [ ] Create video testimonials section

## License

Proprietary - K-Sleep Care

