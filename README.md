# CX Manager Portfolio Setup Guide

## 🎯 Overview
This guide will help you set up and customize your Customer Experience Manager portfolio using the provided HTML template. The portfolio is designed to showcase your CX strategy skills, research capabilities, and business impact.

## 📋 Prerequisites
- Basic knowledge of HTML/CSS
- Text editor (VS Code, Sublime Text, etc.)
- Web browser
- Image files for your case studies
- Your CX project details and metrics

## 🚀 Quick Start Script

### Step 1: Initial Setup
```bash
# 1. Download or clone the portfolio files
# 2. Open the project folder in your text editor
# 3. Ensure you have these files:
#    - index.html (main portfolio)
#    - styles.css (styling)
#    - script.js (interactions)
#    - assets/ (folder for images)
```

### Step 2: Personal Information Update
**File: `index.html`**

1. **Update Meta Tags** (Lines 6-15):
```html
<meta property="og:title" content="Your Name - CX Strategy & UX Leadership">
<meta property="og:description" content="Your custom description here">
<meta name="twitter:title" content="Your Name - CX Strategy & UX Leadership">
<title>Your Name | Customer Experience Strategy & UX Leadership</title>
```

2. **Update Hero Section** (Lines 2615-2620):
```html
<p class="hero-welcome">Welcome to my Portfolio</p>
<h1>Your Name</h1>
<h2 class="hero-subtitle">Customer Experience Strategy & UX Leadership</h2>
<p class="hero-project-intro">Your custom tagline here</p>
```

3. **Update Footer** (Line 3800+):
```html
<p>&copy; 2024 Your Name – CX Strategy Lead</p>
<div class="social-links">
    <a href="your-linkedin-url"><i class="bi bi-linkedin"></i></a>
    <a href="your-github-url"><i class="bi bi-github"></i></a>
    <a href="mailto:your-email@domain.com"><i class="bi bi-envelope"></i></a>
</div>
```

### Step 3: CX Strategy Highlights
**File: `index.html`** (Lines 2650-2665)

Update the three bullet points with your actual metrics:
```html
<li>Your specific metric improvement (e.g., "Improved feature adoption by 15%")</li>
<li>Your VoC dashboard impact (e.g., "Delivered VoC dashboards with 20% higher engagement")</li>
<li>Your churn reduction (e.g., "Reduced user churn by 18% through CX improvements")</li>
```

### Step 4: Tools & Methods Section
**File: `index.html`** (Lines 2680-2720)

Customize the tools list with your actual skills:
```html
<!-- Analytics & Reporting -->
<li>• Your specific tools (Tableau, Excel, SQL, etc.)</li>

<!-- Design & Prototyping -->
<li>• Your design tools (Figma, Sketch, etc.)</li>

<!-- Project Management -->
<li>• Your PM tools (Jira, Asana, etc.)</li>
```

### Step 5: Case Study Customization

#### 5.1 Update Existing Case Study
**File: `index.html`** (Lines 2730-2750)

1. **Update Project Summary**:
```html
<p><strong>Goal:</strong> Your specific project goal</p>
<p><strong>My Role:</strong> Your actual role and responsibilities</p>
<p><strong>Outcome:</strong> Your specific metrics and results</p>
```

2. **Replace Images**:
- Upload your case study images to `assets/` folder
- Update image paths in the carousel section
- Ensure images are optimized (max 1MB each)

#### 5.2 Add Your Own Case Studies
**File: `index.html`** (After line 3800)

Use this template structure:
```html
<section class="section" id="your-case-study-id">
    <div class="container">
        <hr class="cool-divider">
        <h2 class="section-title">Your Case Study Title</h2>
        
        <div class="card" style="margin-bottom: 2rem; background: linear-gradient(135deg, rgba(123, 97, 255, 0.1), rgba(0, 245, 160, 0.1)); border: 1px solid rgba(123, 97, 255, 0.3);">
            <h3 style="color: var(--primary); margin-bottom: 1rem;">Project Summary</h3>
            <p style="margin-bottom: 1rem;"><strong>Goal:</strong> Your project goal</p>
            <p style="margin-bottom: 1rem;"><strong>My Role:</strong> Your role description</p>
            <p style="margin-bottom: 0;"><strong>Outcome:</strong> Your measurable results</p>
        </div>
        
        <!-- Add your case study content here -->
    </div>
</section>
```

### Step 6: Navigation Updates
**File: `index.html`** (Lines 2645-2670)

Update navigation to match your case studies:
```html
<li class="dropdown">
    <a href="#your-case-study">Case Studies</a>
    <ul class="dropdown-content">
        <li><a href="#case-study-1">Your First Case Study</a></li>
        <li><a href="#case-study-2">Your Second Case Study</a></li>
    </ul>
</li>
```

### Step 7: Image Optimization
**Folder: `assets/`**

1. **Image Requirements**:
   - Format: JPG, PNG, or WebP
   - Size: Max 1MB per image
   - Resolution: 1200px width max
   - Optimize using tools like TinyPNG or ImageOptim

2. **Required Images**:
   - Hero background image
   - Case study screenshots
   - Process diagrams
   - Results charts/graphs

### Step 8: Content Writing Guidelines

#### 8.1 CX Language to Use
- "Customer journey mapping"
- "Voice of Customer (VoC) analysis"
- "Service improvement"
- "Experience optimization"
- "Customer touchpoints"
- "User engagement"
- "Business impact"

#### 8.2 Metrics to Include
- Percentage improvements (adoption, engagement, satisfaction)
- Time reductions (task completion, onboarding)
- Cost savings or revenue impact
- User retention/churn rates
- Feature usage statistics

#### 8.3 Case Study Structure
1. **Project Summary** (Goal, Role, Outcome)
2. **The Challenge** (Problem statement)
3. **Your Approach** (Methodology)
4. **CX Strategy** (Your recommendations)
5. **Impact & Business Value** (Results)
6. **Reflection** (Leadership insights)

### Step 9: Testing & Validation

#### 9.1 Cross-Browser Testing
```bash
# Test in these browsers:
# - Chrome (latest)
# - Firefox (latest)
# - Safari (latest)
# - Edge (latest)
```

#### 9.2 Mobile Responsiveness
```bash
# Test on these devices/sizes:
# - iPhone (375px width)
# - iPad (768px width)
# - Desktop (1200px+ width)
```

#### 9.3 Performance Check
```bash
# Use Google PageSpeed Insights:
# 1. Go to https://pagespeed.web.dev/
# 2. Enter your portfolio URL
# 3. Aim for 90+ score on mobile and desktop
```

### Step 10: Deployment

#### 10.1 GitHub Pages (Free)
```bash
# 1. Create GitHub repository
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main

# 2. Enable GitHub Pages
# - Go to repository Settings
# - Scroll to Pages section
# - Select main branch as source
# - Your site will be available at: https://yourusername.github.io/portfolio
```

#### 10.2 Netlify (Free)
```bash
# 1. Drag and drop your portfolio folder to netlify.com
# 2. Your site will be live instantly
# 3. Custom domain can be added later
```

#### 10.3 Vercel (Free)
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Follow prompts to deploy
```

## 🎨 Customization Options

### Color Scheme
**File: `index.html`** (Lines 30-40)
```css
:root {
    --primary: #7B61FF;      /* Main brand color */
    --secondary: #00F5A0;    /* Accent color */
    --dark: #0A0A0A;         /* Background */
    --light: #F5F5F5;        /* Text color */
    --accent: #FF61F5;       /* Highlight color */
}
```

### Font Changes
**File: `index.html`** (Lines 20-25)
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## 📊 Analytics Setup

### Google Analytics
```html
<!-- Add to <head> section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔧 Troubleshooting

### Common Issues
1. **Images not loading**: Check file paths and ensure images are in assets/ folder
2. **Navigation not working**: Verify section IDs match href attributes
3. **Mobile layout broken**: Check responsive CSS and test on actual devices
4. **Slow loading**: Optimize images and minify CSS/JS

### Performance Tips
- Compress all images
- Use WebP format when possible
- Minimize external dependencies
- Enable browser caching

## 📞 Support

If you encounter issues:
1. Check browser console for errors
2. Validate HTML at validator.w3.org
3. Test on different devices/browsers
4. Review this guide for missed steps

## 🎯 Next Steps

After setup:
1. **Add Google Analytics** for visitor tracking
2. **Set up custom domain** for professional appearance
3. **Create case study PDFs** for offline sharing
4. **Optimize for SEO** with proper meta tags
5. **Add contact form** for lead generation
6. **Create presentation version** for interviews

---

**Remember**: Your portfolio should tell a story about your CX journey and demonstrate measurable business impact. Focus on outcomes, not just outputs! 