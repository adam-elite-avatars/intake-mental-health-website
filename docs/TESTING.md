# Testing and review

## Completed checks — October 6, 2026

- JavaScript syntax check passed.
- HTML structure has a single primary heading, a main content landmark, and unique IDs.
- All 42 navigation and action link targets were checked. In-page targets exist; phone, email, and Maps actions have valid destinations.
- All locally referenced HTML and CSS assets exist.
- All four self-hosted font files are valid and include their license texts.
- The 1536 × 1024 WebP image decoded successfully. The optimized image is approximately 532 KB.
- Both image elements include descriptive alternative text and explicit intrinsic dimensions.
- Seven native FAQ disclosure elements are present. Native disclosure controls support keyboard operation and work without JavaScript.
- Code review checked mobile menu state, section-link closing, Escape closing, outside-click closing, and reset when the viewport breakpoint changes.
- Content is visible by default. Entrance effects never set sections to hidden or transparent. Reduced-motion settings disable animation and smooth scrolling.
- No appointment-confirmation claim, unconnected form, tracking script, fabricated portrait, or empty policy link is included.
- Local HTTP serving and archive integrity were checked during packaging.

## Browser testing limitation

Visual browser testing could not be completed in this environment. The browser’s permission review denied access to the local preview. This package therefore does **not** claim verified mobile layout, image crop, horizontal overflow, rendered accessibility contrast, or browser interaction results. These need a final Live Server / Netlify review before the final domain connection.

## Live Server / Netlify review checklist

Use approximately 320, 375, 390, 768, 1024, and 1440 pixel viewport widths. Also check browser zoom/text enlargement at 200%.

- Hero headline fits without clipping or overlapping the image.
- Woodland crop retains the path and light on desktop and mobile.
- No horizontal scrolling at any width.
- Mobile menu opens with its button, closes with Escape, closes after choosing a section, and closes when clicking outside the header.
- Every section link scrolls to the correct content beneath the sticky header.
- Appointment buttons scroll to contact; phone and email actions open the appropriate application.
- Service cards use three columns on desktop, two on medium screens, and one on smaller phones.
- All seven FAQs open and close with mouse/touch and with the keyboard.
- Buttons are easy to tap and keyboard focus is visible.
- Contact email wraps on narrow screens without clipping.
- Footer contact links and crisis phone links work.
- All content remains visible after scrolling, with reduced motion, and with JavaScript disabled.
- Fonts and image files load without missing-file errors.

On the Netlify review URL, repeat the checks and confirm that the client approves current business information. Netlify account deployment and final GoDaddy domain connection are outside this ZIP delivery and have not been performed.
