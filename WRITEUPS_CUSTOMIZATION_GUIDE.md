# Writeups Section Customization Guide

## 🎯 Overview
A beautiful "Writeups & Articles" section has been added to your portfolio to showcase your Medium articles with a cyberpunk theme matching your portfolio's design.

## 📝 What Was Added

### 1. Navigation Update
- Added "Writeups" link in the main navigation menu
- Added "Writeups" link in the footer

### 2. New Section Features
- **Responsive Grid Layout**: Automatically adjusts from 3 columns to 1 on mobile
- **Article Cards**: Each card includes:
  - Featured image
  - Category tag
  - Publication date
  - Title
  - Description
  - Reading time estimate
  - "Read Article" button
  - Hover effects with animations
- **"View All" Button**: Links to your Medium profile

## 🎨 Customization Steps

### Step 1: Replace Placeholder Content
Open `index.html` and find the `<!-- Writeups Section -->` (around line 700).

### Step 2: Update Each Article Card

For each writeup card, replace these values:

```html
<!-- Replace this placeholder image URL -->
<img src="YOUR_ARTICLE_IMAGE_URL" alt="Article Title">

<!-- Update category -->
<span class="writeup-category"><i class="fas fa-tag"></i> Your Category</span>

<!-- Update date -->
<span class="writeup-date"><i class="far fa-calendar"></i> Month Year</span>

<!-- Update title -->
<h3>Your Actual Article Title</h3>

<!-- Update description -->
<p>Write a compelling 2-3 sentence description of your article...</p>

<!-- Update reading time -->
<span><i class="far fa-clock"></i> X min read</span>

<!-- Update the Medium article link -->
<a href="YOUR_MEDIUM_ARTICLE_URL" target="_blank" class="writeup-btn">
```

### Step 3: Get Your Medium Article Details

#### To get your article URL:
1. Go to your Medium profile
2. Click on any article
3. Copy the full URL (e.g., `https://medium.com/@yourname/article-title-12345`)

#### To get the article image:
1. Open your Medium article
2. Right-click on the featured image
3. Select "Copy Image Address"
4. Paste this URL in the `<img src="">` attribute

**Alternative:** You can use a default Medium image or create custom thumbnails

#### Common Categories for Cybersecurity:
- Cybersecurity
- Penetration Testing
- Web Security
- Network Security
- OSINT
- Bug Bounty
- CTF Writeup
- Vulnerability Analysis
- Malware Analysis
- Security Tools

### Step 4: Update "View All" Button

At the bottom of the writeups section, update your Medium profile link:

```html
<a href="YOUR_MEDIUM_PROFILE_URL" target="_blank" class="btn primary-btn view-all-btn">
```

Your Medium profile URL format: `https://medium.com/@yourname`

### Step 5: Add/Remove Article Cards

#### To add more articles:
Copy one of the existing `<div class="writeup-card">...</div>` blocks and paste it before the closing `</div>` of `writeups-grid`.

#### To remove articles:
Delete the entire `<div class="writeup-card">...</div>` block you don't need.

## 🎯 Example with Real Data

Here's a complete example of how to fill in one card:

```html
<div class="writeup-card">
    <div class="writeup-image">
        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*abc123xyz.png" alt="SQL Injection Guide">
        <div class="writeup-overlay">
            <div class="overlay-icons">
                <i class="fab fa-medium"></i>
            </div>
        </div>
    </div>
    <div class="writeup-content">
        <div class="writeup-meta">
            <span class="writeup-category"><i class="fas fa-tag"></i> Web Security</span>
            <span class="writeup-date"><i class="far fa-calendar"></i> Jan 2025</span>
        </div>
        <h3>Complete Guide to SQL Injection Attacks</h3>
        <p>Dive deep into SQL injection vulnerabilities, from basic concepts to advanced exploitation techniques. Learn how to identify, exploit, and prevent these critical security flaws.</p>
        <div class="writeup-stats">
            <span><i class="far fa-clock"></i> 8 min read</span>
            <span><i class="fas fa-eye"></i> Medium</span>
        </div>
        <a href="https://medium.com/@yourname/sql-injection-guide-abc123" target="_blank" class="writeup-btn">
            <span>Read Article</span>
            <i class="fas fa-arrow-right"></i>
        </a>
    </div>
</div>
```

## 🎨 Design Features

### Visual Effects
- **Hover Animation**: Cards lift and glow on hover
- **Image Zoom**: Article images zoom in on hover
- **Smooth Transitions**: All interactions have smooth animations
- **Gradient Overlays**: Cyberpunk-themed gradient effects
- **Responsive Design**: Perfect on all screen sizes

### Color Scheme (matches your portfolio)
- Primary: Cyan (`#00eeff`)
- Secondary: Green (`#00ff66`)
- Accent: Pink (`#ff00aa`)
- Background: Dark (`#0a0a0a`)

## 📱 Mobile Optimization
- Cards stack vertically on mobile devices
- Touch-friendly button sizes
- Optimized images for faster loading

## 🚀 Tips for Better Presentation

1. **Use High-Quality Images**: Use at least 1200x630px images for best results
2. **Keep Descriptions Concise**: 2-3 sentences that highlight key points
3. **Consistent Categories**: Use similar category names across articles
4. **Update Regularly**: Add new articles as you publish them
5. **Reading Time**: Be accurate with reading time estimates (Medium shows this)

## 🔗 Finding Your Medium Stats

To get accurate reading times from Medium:
1. Go to your Medium article
2. Look at the top of the article for "X min read"
3. Use this exact time in your card

## 🎯 Final Checklist

Before publishing, make sure you've:
- [ ] Updated all article URLs
- [ ] Added real article titles
- [ ] Written compelling descriptions
- [ ] Updated images with actual article thumbnails
- [ ] Set correct categories
- [ ] Updated publication dates
- [ ] Set accurate reading times
- [ ] Updated the "View All" button with your Medium profile URL
- [ ] Tested all links to ensure they open correctly
- [ ] Checked mobile responsiveness

## 💡 Additional Ideas

### Future Enhancements:
1. Add article view counts (if you track them)
2. Include engagement metrics (claps, comments)
3. Add tags for each article
4. Create a "Featured Article" section
5. Add a filter system by category
6. Include publication names if you write for other Medium publications

## 🆘 Need Help?

If you encounter any issues:
1. Check browser console for errors (F12 → Console)
2. Verify all URLs are correct and accessible
3. Ensure images are publicly accessible
4. Test on different browsers and devices

---

**Ready to showcase your expertise!** 🚀

Once you update all the placeholders with your actual Medium articles, you'll have a professional writeups section that perfectly complements your cybersecurity portfolio.
