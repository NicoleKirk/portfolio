# Nicole Kirk - Design Engineering Portfolio

A modern, CAD software-inspired portfolio website for Nicole Kirk, a design engineering student. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **CAD Software Aesthetic**: Dark theme with technical fonts, geometric elements, and professional styling
- **Responsive Design**: Optimized for all device sizes
- **Multiple Pages**: Home, Projects, Skills, About, and Contact
- **Interactive Elements**: Smooth animations and hover effects
- **Technical Showcase**: Highlights engineering projects and skills

## Pages

### Home
- Hero section with animated geometric elements
- Skills preview
- Call-to-action sections

### Projects
- Portfolio of engineering projects
- Technical project cards with detailed information
- Skills showcase

### Skills
- Comprehensive technical expertise breakdown
- Skill level indicators
- Professional certifications
- Technical capabilities grid

### About
- Personal story and background
- Education and achievements
- Core values
- Timeline of milestones

### Contact
- Contact form with project type selection
- Contact information
- Social links
- Availability schedule

## Design System

### Colors
- **Primary**: #00ff88 (Bright green - CAD accent)
- **Secondary**: #0088ff (Blue)
- **Accent**: #ff8800 (Orange)
- **Background**: #1a1a1a (Dark)
- **Surface**: #2a2a2a (Darker surface)
- **Border**: #333333 (Subtle borders)

### Typography
- **Sans**: Geist Sans (Modern, technical)
- **Mono**: Geist Mono (Code, technical elements)

### Components
- CAD-style buttons with technical styling
- Panel components with headers
- Grid backgrounds
- Technical input fields
- Animated geometric shapes

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── projects/page.tsx
│   ├── skills/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── Navigation.tsx
```

## Customization

The website is designed to be easily customizable:

- Update personal information in each page component
- Modify the color scheme in `globals.css`
- Add new projects in the projects page
- Update skills and certifications in the skills page
- Customize the about page with personal details

## Deployment

The website can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Railway**

## License

This project is created for Nicole Kirk's portfolio. All rights reserved.