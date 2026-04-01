# Prakash Bodhane — Web Designer | UI/UX Developer | Front-end Developer Portfolio

A modern, responsive, and visually stunning portfolio website showcasing creative web design projects and professional expertise. Built with cutting-edge technologies and featuring glassmorphism design, dark mode support, and smooth animations.

## 🌟 Features

- **Responsive Design** - Fully optimized for mobile, tablet, and desktop devices
- **Dark & Light Mode** - Seamless theme switching with system preference detection
- **Smooth Animations** - Scroll reveal effects, floating elements, and interactive transitions
- **Glassmorphism UI** - Modern glass effect components with backdrop blur
- **Custom Cursor** - Enhanced user experience with custom cursor styling
- **Particle Background** - Animated particle system in the hero section
- **Project Filtering** - Filter projects by category (Web Design, Custom Libraries, UI/UX, etc.)
- **Smooth Scrolling** - Elegant scroll behavior with navigation anchors
- **Performance Optimized** - Fast loading with CDN-delivered assets
- **Zero Icon Dependency** - All icons are inline SVG sprites, no external icon library needed
- **SEO Friendly** - Proper meta tags and semantic HTML structure

## 📂 Portfolio Sections

### 1. **Hero Section**
- Engaging introduction with animated typing effect
- Call-to-action buttons (View Projects, Download Resume)
- Social media links (GitHub)
- Decorative profile image with floating badges
- Animated scroll indicator

### 2. **About Me**
- Professional biography and background
- Experience badge (5+ years)
- Personal information (Location, Email, Availability, Languages)
- Quick action buttons
- Download CV option

### 3. **Skills & Tools**
- Development skills with progress bars
- Design tools proficiency
- Organized by categories
- Real-time skill visualization

### 4. **Featured Projects**
- Web design projects showcase
- Project filtering by category
- Live demo links
- GitHub repository links
- Technology stack display
- Responsive project cards



## 🛠️ Tech Stack

- **Frontend**
  - HTML5
  - CSS3 (with Tailwind CSS)
  - JavaScript (ES6+)
  - jQuery
  
- **Design & Styling**
  - Tailwind CSS CDN
  - Inline SVG Icons (no external icon library)
  - Google Fonts (Poppins, Inter)
  - Custom CSS animations

- **Libraries & Tools**
  - Tailwind CSS v3
  - jQuery v3.7.1
  - Canvas API (Particle background)

> **Note:** No external icon library is used. All icons are self-contained SVG sprites defined directly in `index.html`, keeping the project fully dependency-free for icons.

## 📦 Project Structure

```
My_Portfolio/
├── index.html                 # Main portfolio file (includes inline SVG sprite)
├── README.md                  # This file
├── assets/
│   ├── images/               # Portfolio images
│   │   ├── profile/          # Profile photos
│   │   ├── web_1.png         # MediCare project
│   │   ├── web_2.png         # ImgPDF Toolkit
│   │   ├── web_3.png         # Frost Factory
│   │   ├── cl_1.png          # CustomCharts.js
│   │   ├── cl_2.png          # Custom Date Picker
│   │   └── cl_3.png          # Rich Text Editor
│   └── resume/
│       └── Prakash_Bodhane_Resume.pdf
├── css/
│   └── style.css             # Custom styles
├── js/
│   └── script.js             # JavaScript functionality
```

## 🎨 Color Palette

- **Primary**: `#7c3aed` (Purple)
- **Primary Light**: `#a855f7` (Light Purple)
- **Secondary**: `#06b6d4` (Cyan)
- **Dark 900**: `#0a0a0f` (Almost Black)
- **Dark 800**: `#12121a` (Dark Gray)

## 🖥️ Featured Projects

### 1. **MediCare**
Healthcare platform with appointment booking and secure patient portal
- **Tech**: React, Bootstrap, JavaScript
- **Live**: https://medicare-app-1.onrender.com/login

### 2. **ImgPDF Toolkit**
All-in-one image & PDF tool for converting, compressing, merging, and extracting files
- **Tech**: React, Node.js, CSS, JavaScript
- **Live**: https://imgpdf-toolkit.onrender.com/

### 3. **Frost Factory**
Bakery brand website with menu showcase, testimonials, and online ordering
- **Tech**: HTML, CSS, Bootstrap
- **Live**: https://prakashbodhane.github.io/cakeshop-website/
- **GitHub**: https://github.com/prakashbodhane/cakeshop-website

### 4. **CustomCharts.js**
Lightweight SVG chart library with 12 chart types and zero external dependencies
- **Tech**: Vanilla JS, SVG
- **Live**: https://prakashbodhane.github.io/customcharts/
- **GitHub**: https://github.com/prakashbodhane/customcharts

### 5. **Custom Date Picker**
Accessible date picker with 13 formats, date ranges, and smart auto-positioning
- **Tech**: Vanilla JS, CSS
- **Live**: https://prakashbodhane.github.io/customdatepicker/
- **GitHub**: https://github.com/prakashbodhane/customdatepicker

### 6. **Rich Text Editor**
Production-ready editor with 50+ features, modular architecture, and XSS protection
- **Tech**: Vanilla JS, ES6+, CSS
- **Live**: https://prakashbodhane.github.io/rich-text-editor/
- **GitHub**: https://github.com/prakashbodhane/rich-text-editor

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build process required - just open `index.html`

## ⚙️ Customization

### Colors
Edit the Tailwind config in `index.html`:
```javascript
colors: {
  primary: '#7c3aed',
  'primary-light': '#a855f7',
  secondary: '#06b6d4',
}
```

### Adding Custom SVG Icons
Icons are defined as SVG symbols in the sprite block at the top of `<body>` in `index.html`:
```html
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <symbol id="icon-my-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <!-- SVG path here -->
  </symbol>
</svg>
```
Use it anywhere with:
```html
<svg class="icon w-5 h-5"><use href="#icon-my-icon"/></svg>
```


### Fonts & Typography
Change fonts from Google Fonts in the `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

## 📱 Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile Browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

- Images are optimized for web
- CSS is minified with Tailwind
- Lazy loading for images (recommended)
- CDN-delivered external libraries (Tailwind, Google Fonts, jQuery)
- **No external icon library** — icons are inline SVGs, zero extra HTTP requests
- Minimal JS footprint

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags included
- Open Graph tags for social sharing
- Responsive viewport settings
- Fast loading performance

## 📞 Contact Information

- **Email**: prakashbodhane1998@gmail.com
- **Location**: Mumbai, India
- **GitHub**: https://github.com/prakashbodhane



## 📚 Resources Used

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Google Fonts](https://fonts.google.com/)
- [jQuery Documentation](https://jquery.com/)
- [SVG Reference — MDN](https://developer.mozilla.org/en-US/docs/Web/SVG)

## ✨ Credits

**Designer & Developer**: Prakash Bodhane
---

**Last Updated**: April 2026
