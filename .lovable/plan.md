

# Build Coffee Shop Homepage

Create a single, warm and cozy homepage for the coffee shop with the following sections:

## What gets built

**Single file: `src/pages/Index.tsx`** - Complete homepage with:

1. **Navigation bar** - Logo/shop name, links (Home, Shop, About, Contact), cart icon
2. **Hero section** - Full-width warm background, welcoming headline ("Freshly Roasted, Lovingly Brewed"), subtitle, "Shop Now" CTA button
3. **Featured Products** - Grid of 3-4 sample coffee products (hardcoded data) with images (placeholder), names, prices, and "Add to Cart" buttons
4. **About snippet** - Short story section with cozy imagery about the shop's passion for coffee
5. **Footer** - Shop info, social links, copyright

## Design system updates

**`src/index.css`** - Update CSS variables for warm coffee palette:
- Background: warm cream/off-white
- Primary: rich espresso brown
- Accent: warm terracotta/burnt orange
- Foreground: dark roast brown
- Add a warm serif font (via Google Fonts in `index.html`)

## Technical details

- All product data hardcoded as a local array (no backend yet)
- Uses existing shadcn Button and Card components
- Responsive layout with Tailwind (mobile-first grid)
- Smooth scroll between sections
- No routing changes needed - everything on the index page

