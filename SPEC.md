# JalSakhi Website Specification

## 1. Project Overview

**Project Name:** JalSakhi Website  
**Project Type:** Marketing/landing website for mobile application  
**Core Functionality:** Showcase the JalSakhi smart water management platform, provide information about the app, and display Android app availability  
**Target Users:** Farmers, village administrators, agricultural stakeholders, and potential investors

---

## 2. UI/UX Specification

### Layout Structure

**Page Sections (in order):**
1. **Navigation Header** - Fixed, transparent on hero, solid on scroll
2. **Hero Section** - Full viewport height with animated water-themed background
3. **Features Section** - Grid layout showcasing app capabilities
4. **About Section** - Platform mission and technology overview
5. **App Showcase** - Android app availability with download CTA
6. **Statistics/Impact Section** - Key metrics and social proof
7. **Testimonials** - User testimonials (placeholder)
8. **Contact/Footer** - Contact info and links

**Responsive Breakpoints:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette:**
- Primary: `#0EA5E9` (Sky Blue - water theme)
- Primary Dark: `#0284C7` (Deep Sky Blue)
- Primary Light: `#38BDF8` (Light Sky Blue)
- Secondary: `#10B981` (Emerald Green - agriculture/growth)
- Accent: `#F59E0B` (Amber - warmth/harvest)
- Background Primary: `#0F172A` (Slate 900 - deep navy)
- Background Secondary: `#1E293B` (Slate 800)
- Background Card: `#334155` (Slate 700)
- Text Primary: `#F8FAFC` (Slate 50)
- Text Secondary: `#94A3B8` (Slate 400)
- Text Muted: `#64748B` (Slate 500)

**Typography:**
- Headings: "Outfit" (Google Font) - Modern, geometric sans-serif
- Body: "DM Sans" (Google Font) - Clean, readable
- Font Sizes:
  - Hero Title: 4rem (64px) desktop, 2.5rem mobile
  - Section Title: 3rem (48px) desktop, 2rem mobile
  - Subtitle: 1.5rem (24px)
  - Body: 1.125rem (18px)
  - Small: 0.875rem (14px)

**Spacing System:**
- Section padding: 6rem (96px) vertical desktop, 4rem mobile
- Container max-width: 1280px
- Component gaps: 1.5rem (24px), 2rem (32px), 3rem (48px)

**Visual Effects:**
- Glassmorphism cards with backdrop-blur
- Gradient overlays on backgrounds
- Animated water wave effects (CSS + SVG)
- Particle effects (water droplets)
- Subtle glow effects on interactive elements

### Components

**Navigation:**
- Logo (left)
- Menu items: Home, Features, About, Download
- CTA button: "Get App" (right)
- Mobile: Hamburger menu with slide-out drawer
- State: Transparent → Solid background on scroll

**Hero Section:**
- Animated headline with typing effect
- Sub describing the platform
- Two CTAs: "Download Apptitle" (primary), "Learn More" (secondary)
- 3D-style phone mockup with app screenshot placeholder
- Floating water droplet animations

**Features Cards:**
- Icon (water-themed)
- Title
- Description
- Hover: Lift effect with glow
- Features to display:
  1. Crop Water Recommendations
  2. Soil Moisture Forecasting
  3. Village Water Allocation
  4. Smart Chatbot Assistant

**About Section:**
- Split layout: Text left, visual right
- Mission statement
- Technology highlights (ML models, gateway)
- Animated counter stats

**App Showcase:**
- Large phone mockup showing app interface
- Download options (Google Play badge)
- QR code for direct download
- "Also available on iOS" note

**Statistics Section:**
- Animated counters
- Metrics: Farmers served, Villages covered, Water saved, Crops optimized

**Footer:**
- Logo and tagline
- Quick links
- Contact information
- Social media icons
- Copyright

### Animations

**Page Load:**
- Staggered fade-in for sections
- Hero elements slide up with delay
- Logo pulse animation

**Scroll Animations:**
- Elements fade in and slide up on scroll (framer-motion)
- Parallax effect on background elements

**Micro-interactions:**
- Button hover: Scale up, glow effect
- Card hover: Lift and shadow increase
- Link hover: Underline slide animation

**Continuous Animations:**
- Floating water droplets (CSS keyframes)
- Subtle wave animation in hero background
- Pulsing CTA buttons

---

## 3. Functionality Specification

### Core Features

1. **Responsive Navigation**
   - Smooth scroll to sections
   - Mobile menu toggle
   - Active section highlighting

2. **Animated Statistics**
   - Count up animation on scroll into view
   - Number formatting (K, M suffixes)

3. **Download Integration**
   - Google Play store link
   - QR code generation
   - Direct APK download link (placeholder)

4. **Contact Form**
   - Name, email, message fields
   - Form validation
   - Submit animation (visual only - no backend)

### User Interactions

- Click navigation → Smooth scroll to section
- Hover cards → Lift animation
- Click CTA → Scroll to download section
- Mobile menu → Slide animation
- Scroll → Trigger entrance animations

### Edge Cases

- Reduced motion: Disable animations for accessibility
- No JavaScript: Basic content still visible
- Slow connection: Lazy load images

---

## 4. Technical Stack

- **Framework:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Outfit, DM Sans)

---

## 5. Acceptance Criteria

### Visual Checkpoints
- [ ] Hero section fills viewport with animated water background
- [ ] Navigation changes style on scroll
- [ ] All sections have smooth scroll behavior
- [ ] Cards have hover lift effects
- [ ] Statistics animate when scrolled into view
- [ ] Mobile menu works correctly
- [ ] All text is readable and properly contrasted
- [ ] Website is fully responsive

### Functional Checkpoints
- [ ] All navigation links work
- [ ] CTAs scroll to correct sections
- [ ] Form validates input
- [ ] No console errors
- [ ] Build completes successfully
- [ ] Page loads under 3 seconds

### Design Quality
- [ ] Consistent color scheme throughout
- [ ] Proper spacing and alignment
- [ ] Professional, modern appearance
- [ ] Animations are smooth (60fps)
- [ ] Water theme is cohesive and evident
