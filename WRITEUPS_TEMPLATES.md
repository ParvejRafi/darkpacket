# Quick Copy-Paste Templates for Medium Articles

## 📋 Single Article Card Template

Copy this template for each new article you want to add:

```html
<div class="writeup-card">
    <div class="writeup-image">
        <img src="YOUR_ARTICLE_IMAGE_URL" alt="YOUR_ARTICLE_TITLE">
        <div class="writeup-overlay">
            <div class="overlay-icons">
                <i class="fab fa-medium"></i>
            </div>
        </div>
    </div>
    <div class="writeup-content">
        <div class="writeup-meta">
            <span class="writeup-category"><i class="fas fa-tag"></i> CATEGORY_NAME</span>
            <span class="writeup-date"><i class="far fa-calendar"></i> MONTH YEAR</span>
        </div>
        <h3>YOUR ARTICLE TITLE</h3>
        <p>YOUR ARTICLE DESCRIPTION (2-3 sentences about what readers will learn)</p>
        <div class="writeup-stats">
            <span><i class="far fa-clock"></i> X min read</span>
            <span><i class="fas fa-eye"></i> Medium</span>
        </div>
        <a href="YOUR_MEDIUM_ARTICLE_URL" target="_blank" class="writeup-btn">
            <span>Read Article</span>
            <i class="fas fa-arrow-right"></i>
        </a>
    </div>
</div>
```

## 🎯 Category Icons (Choose One Per Article)

Replace the `<i class="fas fa-tag"></i>` with these category-specific icons:

```html
<!-- Penetration Testing -->
<i class="fas fa-user-secret"></i>

<!-- Web Security -->
<i class="fas fa-shield-alt"></i>

<!-- Bug Bounty -->
<i class="fas fa-bug"></i>

<!-- CTF Writeup -->
<i class="fas fa-flag"></i>

<!-- Network Security -->
<i class="fas fa-network-wired"></i>

<!-- OSINT -->
<i class="fas fa-search"></i>

<!-- Malware Analysis -->
<i class="fas fa-virus"></i>

<!-- Security Tools -->
<i class="fas fa-tools"></i>

<!-- Cryptography -->
<i class="fas fa-key"></i>

<!-- Cloud Security -->
<i class="fas fa-cloud"></i>
```

## 🎨 Pre-Made Category Tags

Copy these complete category spans (already styled):

```html
<!-- For Cybersecurity General -->
<span class="writeup-category"><i class="fas fa-shield-alt"></i> Cybersecurity</span>

<!-- For Penetration Testing -->
<span class="writeup-category"><i class="fas fa-user-secret"></i> Penetration Testing</span>

<!-- For Web Security -->
<span class="writeup-category"><i class="fas fa-globe"></i> Web Security</span>

<!-- For Bug Bounty -->
<span class="writeup-category"><i class="fas fa-bug"></i> Bug Bounty</span>

<!-- For CTF Writeups -->
<span class="writeup-category"><i class="fas fa-flag"></i> CTF Writeup</span>

<!-- For OSINT -->
<span class="writeup-category"><i class="fas fa-search"></i> OSINT</span>

<!-- For Network Security -->
<span class="writeup-category"><i class="fas fa-network-wired"></i> Network Security</span>

<!-- For Malware Analysis -->
<span class="writeup-category"><i class="fas fa-virus"></i> Malware Analysis</span>

<!-- For Security Tools -->
<span class="writeup-category"><i class="fas fa-tools"></i> Security Tools</span>

<!-- For Vulnerability Research -->
<span class="writeup-category"><i class="fas fa-exclamation-triangle"></i> Vulnerability Research</span>
```

## 📅 Date Format Examples

```html
<span class="writeup-date"><i class="far fa-calendar"></i> Jan 2025</span>
<span class="writeup-date"><i class="far fa-calendar"></i> Feb 2025</span>
<span class="writeup-date"><i class="far fa-calendar"></i> Dec 2024</span>
```

## ⏱️ Reading Time Examples

```html
<span><i class="far fa-clock"></i> 3 min read</span>
<span><i class="far fa-clock"></i> 5 min read</span>
<span><i class="far fa-clock"></i> 10 min read</span>
<span><i class="far fa-clock"></i> 15 min read</span>
```

## 🖼️ Image Options

### Option 1: Use Medium's Image
Right-click on your article's image on Medium → Copy Image Address

### Option 2: Use Default Placeholder
```html
<img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*5nZPk8_B0Z5DpNPwLWBJ1g.png" alt="Article Title">
```

### Option 3: Use Custom Images
Upload to your repository in `/assets/writeups/` folder and reference like:
```html
<img src="assets/writeups/article-1.jpg" alt="Article Title">
```

## 🔗 Medium URL Formats

### Your Article URL:
```
https://medium.com/@yourhandle/article-title-hash123
```

### Your Profile URL:
```
https://medium.com/@yourhandle
```

### Publication Article URL:
```
https://medium.com/publication-name/article-title-hash123
```

## 📝 Sample Descriptions

### Penetration Testing Article:
```
Learn advanced penetration testing techniques used to identify and exploit critical vulnerabilities. This comprehensive guide covers reconnaissance, exploitation, and post-exploitation strategies with real-world examples.
```

### Web Security Article:
```
Explore common web application vulnerabilities including XSS, CSRF, and SQL injection. Discover how attackers exploit these flaws and learn effective mitigation strategies to secure your applications.
```

### Bug Bounty Article:
```
My journey finding a critical security flaw that earned a $5,000 bounty. From initial discovery to exploitation proof-of-concept, learn the methodology and tools that led to this significant find.
```

### CTF Writeup:
```
Step-by-step walkthrough of solving complex CTF challenges. Learn the thought process, tools, and techniques used to capture flags in categories including web, crypto, and binary exploitation.
```

### OSINT Article:
```
Master open-source intelligence gathering techniques for security research. Discover powerful OSINT tools and methodologies to collect actionable intelligence while maintaining ethical boundaries.
```

## 🎯 Complete Example (Ready to Use)

Here's a fully filled example you can adapt:

```html
<div class="writeup-card">
    <div class="writeup-image">
        <img src="https://miro.medium.com/v2/resize:fit:1200/format:webp/1*abc123.png" alt="Understanding XSS Attacks">
        <div class="writeup-overlay">
            <div class="overlay-icons">
                <i class="fab fa-medium"></i>
            </div>
        </div>
    </div>
    <div class="writeup-content">
        <div class="writeup-meta">
            <span class="writeup-category"><i class="fas fa-globe"></i> Web Security</span>
            <span class="writeup-date"><i class="far fa-calendar"></i> Jan 2025</span>
        </div>
        <h3>Understanding Cross-Site Scripting (XSS) Attacks</h3>
        <p>A deep dive into XSS vulnerabilities, covering reflected, stored, and DOM-based XSS. Learn how to identify these flaws in web applications and implement effective defenses to protect users.</p>
        <div class="writeup-stats">
            <span><i class="far fa-clock"></i> 7 min read</span>
            <span><i class="fas fa-eye"></i> Medium</span>
        </div>
        <a href="https://medium.com/@yourname/understanding-xss-attacks-abc123" target="_blank" class="writeup-btn">
            <span>Read Article</span>
            <i class="fas fa-arrow-right"></i>
        </a>
    </div>
</div>
```

## 🚀 How to Add This to Your Portfolio

1. Open `index.html`
2. Find the `<!-- Writeups Section -->` (search for it using Ctrl+F)
3. Locate the `<div class="writeups-grid">` 
4. Copy your filled template
5. Paste it before the closing `</div>` tag of `writeups-grid`
6. Save the file
7. Refresh your browser to see the changes!

## ✅ Quick Checklist

Before adding an article card, make sure you have:
- [ ] Article title
- [ ] Article URL from Medium
- [ ] Image URL or file
- [ ] Category name
- [ ] Publication date
- [ ] Brief description (2-3 sentences)
- [ ] Reading time (check on Medium)

---

**Pro Tip:** Keep this file handy! Whenever you publish a new article on Medium, come back here, copy the template, fill it in, and add it to your portfolio in minutes! 🎉
