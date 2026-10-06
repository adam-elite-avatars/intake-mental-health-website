# Intake Mental Health Counseling PLLC — One-page Smart Site

A complete, portable website for VS Code, Live Server, GitHub, and Netlify. All site assets are included. There is no build step, package installation, backend, or third-party script.

## Start here

1. Extract the ZIP.
2. Open the **intake-smart-site** folder in VS Code.
3. Install the VS Code **Live Server** extension if you do not already have it.
4. Right-click **index.html** and choose **Open with Live Server**.
5. Review the page on desktop and mobile. All navigation stays on the homepage.

You can also open `index.html` directly in a browser. Live Server is recommended for review. No terminal commands are necessary.

## Project organization

| Path | Purpose |
| --- | --- |
| `index.html` | Complete homepage, content, metadata, accessible navigation, and FAQs |
| `assets/css/styles.css` | Design system, responsive layouts, and reduced-motion support |
| `assets/js/main.js` | Mobile navigation and gentle progressive enhancements |
| `assets/images/` | Optimized woodland image and site favicon |
| `assets/fonts/` | Self-hosted fonts and their licenses |
| `netlify.toml` | Netlify publish settings and security headers |
| `robots.txt` | Search-engine crawling settings |
| `docs/CONTENT-SOURCES.md` | Content sources and review notes |
| `docs/TESTING.md` | Completed checks and final launch review |

## Appointments and contact

**Book an Appointment** scrolls to the contact section. Visitors call or email Sandy to request an appointment. The site does not imply an appointment has been booked or confirmed. Phone links open the visitor’s phone application; email links open their email application. Location links open Google Maps in a new tab.

There is no contact form and no collection of medical information. No database, patient portal, analytics, cookies, or custom booking software is included. This keeps the project within the approved scope and avoids routing sensitive information through an ordinary website form.

## GitHub

Create a repository and upload the contents of the **intake-smart-site** folder. `index.html` and `netlify.toml` should be at the repository root. Upload the entire `assets` folder with its subfolders. Do not upload the outer ZIP as the website source.

## Netlify review deployment

Two options are supported:

**Connect GitHub:** Create a new Netlify project from your repository. Use no framework preset, leave the build command empty, and set the publish directory to `.`. Leave the base directory empty if `index.html` is at the repository root. The included `netlify.toml` defines the same publish directory.

**Manual deployment:** Drag the extracted **intake-smart-site** folder into Netlify’s manual deploy area. Use the folder containing `index.html`, not its parent folder. Netlify will supply a review URL.

This package is prepared for deployment; it has not been deployed to a Netlify account. Nothing has been changed at GoDaddy. Use the Netlify review URL first. Wesley can connect the existing domain after approval.

## Editing the site later

- Business copy and contact details: `index.html`.
- Colors, typography, spacing, and responsive layouts: `assets/css/styles.css`.
- Mobile menu behavior: `assets/js/main.js`.
- Replace nature imagery in `assets/images/`; preserve the filename or update both references in `index.html`.

The typographic “intake.” wordmark is a new text treatment, not a recovered existing logo. No approved portrait or mockup file was available in this conversation. Sandy’s introduction uses her verified name, role, and education rather than a substitute portrait.

Privacy Policy and HIPAA Notice documents were not provided or verified. No fabricated legal documents or empty policy links are included. Approved documents can be added later as downloadable files without creating another website page.

## Before final domain connection

Confirm current insurance participation, telehealth fees, sliding scale availability, and location eligibility with Sandy. These entries reflect the existing published site and are not a guarantee of individual coverage. Review contact actions on the Netlify review URL and supply approved policy documents if available.
