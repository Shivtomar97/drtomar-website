# Dr. Tomar Website Redesign

This repository contains the redesigned version of Dr. Tomar's homeopathy website (www.drtomar.com). The new design focuses on modern aesthetics, improved usability, and responsive layout to enhance the user experience across all devices.

## Files Structure

- `index.html` - The redesigned homepage
- `cancer.html` - Example of a redesigned content page (Cancer Treatment)
- `css/style.css` - Main stylesheet for the new design
- `js/main.js` - JavaScript functionality for the redesigned website
- `js/image-placeholder.js` - Utility script for placeholders until proper images are available

## Implementation Guide

### Step 1: Set Up Directory Structure

Ensure the following directory structure is in place:
```
/
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── image-placeholder.js
├── images/
│   └── [all existing images]
├── index.html
├── cancer.html
└── [other content pages]
```

### Step 2: Replace Old Files with New

1. Back up your current website files
2. Rename the following files:
   - `index.html` → `index.html`
   - `cancer.html` → `cancer.html`

### Step 3: Create Additional Content Pages

Use the `cancer.html` as a template to redesign other content pages:
1. Copy `cancer.html` to create new versions (e.g., `mnd.html`, `psoriasis.html`, etc.)
2. Modify the content sections to match the original content from the old pages
3. Update page titles, meta descriptions, and active navigation links

### Step 4: Update Image References

1. Ensure all image paths in new HTML files correctly reference files in the `images/` directory
2. For missing images, use the placeholder system by adding the `data-placeholder` attribute, e.g.:
   ```html
   <div class="hero-image-container" data-placeholder="Dr. Tomar with Patient|100%|400px"></div>
   ```

### Step 5: Test Before Deployment

1. Test all pages locally in different browsers and device sizes
2. Check all links to ensure they point to the correct destinations
3. Verify forms functionality (contact form)
4. Test loading speed and optimize if needed

### Step 6: Deploy

1. Upload all new/updated files to your web server
2. Keep a backup of the old website files for reference

## Design Features

### New Elements

- **Responsive Design**: Works on all device sizes from mobile to desktop
- **Modern Navigation**: Clean dropdown menus and mobile-friendly navigation
- **Card-based Layout**: Content organized in easy-to-scan cards
- **Testimonial Section**: Showcasing patient success stories
- **Call-to-Action Buttons**: Clear pathways for patient engagement

### Color Scheme

- Primary Color: `#0080ff` (Blue)
- Secondary Color: `#28A47B` (Teal)
- Text Color: `#333` (Dark Gray)
- Light Background: `#f8f9fa`
- Dark Background: `#212529` (Footer)

### Typography

- Headings: 'Playfair Display', serif
- Body Text: 'Poppins', sans-serif

## Additional Notes

- The website uses Bootstrap 5 for layout and components
- Font Awesome provides the icons
- Google Fonts delivers the typography
- All external resources are loaded via CDN for better performance

## Contact

For any questions about the implementation, please contact the developer.

---

© 2023 Dr. Tomar's Homeopathy Center. All rights reserved. 