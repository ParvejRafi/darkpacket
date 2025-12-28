# 🚀 Quick Start: Adding Your Medium Articles

## ⚡ 5-Minute Setup

### 1️⃣ Get Your Medium Info
```
Your Medium Profile: https://medium.com/@YOUR_HANDLE
Your Article URL: https://medium.com/@YOUR_HANDLE/article-title-abc123
```

### 2️⃣ Open This File
Navigate to: `index.html`
Search for: `<!-- Writeups Section -->`

### 3️⃣ Find and Replace (3 places per article)

**Article Title:**
```html
<h3>Your Medium Article Title</h3>
```
Replace with your actual article title

**Article Description:**
```html
<p>A brief description of your writeup...</p>
```
Write 2-3 sentences about your article

**Article URL:**
```html
<a href="YOUR_MEDIUM_ARTICLE_URL" target="_blank">
```
Replace `YOUR_MEDIUM_ARTICLE_URL` with your full Medium article link

### 4️⃣ Optional: Update Image
```html
<img src="https://miro.medium.com/..." alt="Article Title">
```
- Keep default, OR
- Right-click your Medium article image → Copy Image Address → Paste URL

### 5️⃣ Update Profile Link (Bottom of Section)
```html
<a href="YOUR_MEDIUM_PROFILE_URL" target="_blank">
```
Replace with: `https://medium.com/@YOUR_HANDLE`

### 6️⃣ Save & View
- Save `index.html`
- Open in browser
- Scroll to "Writeups & Articles" section

## 🎯 Example: Before and After

### BEFORE (Placeholder):
```html
<h3>Your Medium Article Title</h3>
<p>A brief description of your writeup...</p>
<a href="YOUR_MEDIUM_ARTICLE_URL">
```

### AFTER (Your Article):
```html
<h3>Understanding SQL Injection Attacks</h3>
<p>Learn how SQL injection works and how to prevent it in your applications.</p>
<a href="https://medium.com/@parvejrafi/sql-injection-guide-123abc">
```

## ✅ Minimum Required Changes

To make it work, you MUST update these 4 things:

1. ✏️ Article titles (3 places)
2. ✏️ Article descriptions (3 places)
3. 🔗 Article URLs (3 places)
4. 🔗 Your Medium profile URL (1 place at bottom)

**Total: 10 quick edits = Working writeups section!**

## 📍 Finding Text in index.html

### Method 1: Text Editor
- Open `index.html` in Notepad, VS Code, etc.
- Press `Ctrl + F`
- Search for: `writeups`
- Start editing!

### Method 2: Browser Find
- Open `index.html` in browser
- Right-click → View Page Source
- Press `Ctrl + F`
- Search for: `YOUR_MEDIUM_ARTICLE_URL`
- Copy line numbers, edit in text editor

## 🎨 Optional Improvements

### Change Category
```html
<span class="writeup-category"><i class="fas fa-tag"></i> Cybersecurity</span>
```
Options: Penetration Testing, Web Security, Bug Bounty, CTF Writeup

### Update Date
```html
<span class="writeup-date"><i class="far fa-calendar"></i> 2024</span>
```
Format: Jan 2025, Feb 2025, etc.

### Adjust Reading Time
```html
<span><i class="far fa-clock"></i> 5 min read</span>
```
Check your Medium article for actual reading time

## 🆘 Troubleshooting

### Links Don't Work?
- Make sure URLs start with `https://`
- Copy full URL from Medium browser address bar
- Include the entire URL with hyphens and numbers

### Images Not Showing?
- Use the default placeholder (already there)
- Or right-click Medium image → "Copy Image Address"
- Paste the full URL including `https://miro.medium.com/...`

### Section Looks Broken?
- Check you didn't delete any `<div>` or `</div>` tags
- Verify all quotes are closed properly
- Make sure you only changed text inside `>...<` tags

## 📦 Need More Articles?

### Add a 4th Article:
1. Copy entire `<div class="writeup-card">...</div>` block
2. Paste before `</div>` of `writeups-grid`
3. Update with new article info

### Remove Extra Cards:
1. Delete entire `<div class="writeup-card">...</div>` block
2. Keep at least 1 card

## 🎯 Priority Order

### Must Do (Critical):
1. ✅ Update article URLs (3 places)
2. ✅ Update profile URL (1 place)
3. ✅ Update titles (3 places)
4. ✅ Update descriptions (3 places)

### Should Do (Recommended):
5. ✅ Update categories
6. ✅ Update dates
7. ✅ Update reading times

### Nice to Have (Optional):
8. ✅ Update images
9. ✅ Add more articles
10. ✅ Customize colors

## 📝 Testing Checklist

After editing, verify:
- [ ] Clicked each "Read Article" button → Opens correct Medium article
- [ ] "View All" button → Opens your Medium profile
- [ ] All links open in new tab
- [ ] Titles and descriptions make sense
- [ ] Section looks good on mobile (resize browser)

## 🎉 You're Done!

Once you've made these changes:
1. Save the file
2. Refresh your browser
3. Scroll to the Writeups section
4. Click your articles to verify links work

**Your portfolio now showcases your Medium articles!** 🚀

---

## 📚 Need More Help?

Check these files in your folder:
- `WRITEUPS_TEMPLATES.md` - Ready-to-copy templates
- `WRITEUPS_CUSTOMIZATION_GUIDE.md` - Detailed guide
- `IMPLEMENTATION_SUMMARY.md` - Overview of what was added

**Still stuck?** Re-read this file or check the other guides!
