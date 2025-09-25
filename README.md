# Premium Presentation Site

A premium presentation website built with Next.js 14, TypeScript, and TailwindCSS, featuring an Apple-like design with modern UI/UX principles.

## 🚀 Features

- **Modern Design**: Apple-inspired design with clean, minimalist aesthetics
- **Responsive Layout**: Fully responsive design for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Built-in SEO optimization with next-seo
- **TypeScript**: Full TypeScript support for better development experience
- **TailwindCSS**: Utility-first CSS framework for rapid styling
- **Glassmorphism Effects**: Modern glassmorphism effects in navigation
- **Smooth Scrolling**: Enhanced scroll experience with locomotive-scroll

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── portfolio/         # Portfolio page
│   ├── testimonials/      # Testimonials page
│   ├── contact/           # Contact page
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── Navbar.tsx         # Navigation component
│   ├── Footer.tsx         # Footer component
│   └── sections/          # Page sections
│       ├── HeroSection.tsx
│       ├── AboutPreview.tsx
│       ├── ServicesPreview.tsx
│       ├── PortfolioPreview.tsx
│       ├── TestimonialsPreview.tsx
│       ├── CTA.tsx
│       └── ... (other sections)
└── lib/                   # Utility functions
    └── seo.ts             # SEO configuration
```

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Next SEO** - SEO optimization

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd premium-presentation-site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Pages

### Homepage
- Hero section with parallax effects
- About preview section
- Services preview grid
- Portfolio showcase
- Testimonials carousel
- Call-to-action section

### About
- Company story and values
- Team members showcase
- Mission and vision

### Services
- Comprehensive services grid
- Process workflow
- Pricing plans
- Service details

### Portfolio
- Project showcase with filtering
- Project details and technologies
- Interactive portfolio grid

### Testimonials
- Client testimonials carousel
- Client logos
- Success stories

### Contact
- Contact form with validation
- Contact information
- Business hours
- Interactive map

## 🎨 Design Features

- **Glassmorphism**: Modern glassmorphism effects in navigation
- **Gradient Backgrounds**: Beautiful gradient backgrounds
- **Smooth Animations**: Framer Motion animations throughout
- **Responsive Design**: Mobile-first responsive design
- **Typography**: Clean, readable typography with Inter font
- **Color Scheme**: Professional color palette with primary blues

## 🔧 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
  }
}
```

### Animations
Animations are configured in `tailwind.config.js` and can be customized:

```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  // ... more animations
}
```

## 📈 SEO Features

- Meta tags optimization
- Open Graph tags
- Twitter Card tags
- Sitemap generation
- Robots.txt
- Structured data ready

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support, email hello@premium.com or create an issue in the repository.

---

Built with ❤️ using Next.js, TypeScript, and TailwindCSS
