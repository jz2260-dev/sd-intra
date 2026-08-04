# Stern IT Knowledge Hub - Build Notes

Date: June 26, 2026

## Overview

Today we built and expanded a static prototype for the **Stern IT Knowledge Hub**, modeled after the provided dashboard screenshot. The site is currently located at:

`C:\Users\jz2260\Documents\Codex\2026-06-26\can\outputs\stern-it-knowledge-hub`

Main entry point:

`index.html`

Current repository location:

`C:\Users\jz2260\Documents\GitHub\sd-intra`

Current GitHub repository:

`https://github.com/jz2260-dev/sd-intra`

Current live GitHub Pages URL:

`https://jz2260-dev.github.io/sd-intra/`

## Major Updates After Initial Build

### 1. Repository Move and GitHub Setup

- Moved the static site into the GitHub repository folder:
  - `C:\Users\jz2260\Documents\GitHub\sd-intra`
- Confirmed the repository remote:
  - `https://github.com/jz2260-dev/sd-intra.git`
- Confirmed the active branch:
  - `main`
- Pulled from `origin/main` and confirmed the local repository is up to date.

### 2. GitHub Pages Static Serving

- Added `.nojekyll` at the repository root so GitHub Pages serves the static files as-is.
- Committed and pushed the Pages serving marker:
  - Commit: `8e304d7`
  - Message: `Configure GitHub Pages static serving`
- The repository was changed from private to public so GitHub Pages could be enabled under the current GitHub plan.
- GitHub Pages was enabled with:
  - Source: `Deploy from a branch`
  - Branch: `main`
  - Folder: `/ (root)`

### 3. Live Site Verification

- Verified the live GitHub Pages site responds successfully:
  - `https://jz2260-dev.github.io/sd-intra/`
- Confirmed the live page title:
  - `Stern IT Knowledge Hub`
- Confirmed the main CSS, JavaScript, and hero image assets load successfully from the GitHub Pages path.
- Confirmed the site uses relative links and asset paths, which is correct for a project Pages URL under `/sd-intra/`.
- Switched the in-app browser from the local preview URL to the live GitHub Pages URL.

### 4. Local Preview Notes

- The site can still be previewed locally with a simple static server.
- During setup, it was served locally at:
  - `http://localhost:8000/index.html`
- The live GitHub Pages URL is now the preferred shareable preview link.

### 5. Mobile Topbar Layout Update

- Updated the responsive topbar behavior for mobile and small windows.
- The title lockup remains available for accessibility, but visually collapses on small screens.
- Notification and profile controls now sit in the top-right of the purple header above the active mobile nav item.
- This keeps the mobile homepage from showing a large header block between the nav and the main search panel.

### 6. Knowledge Hub Category Filtering

- Converted the Knowledge Hub category rail from representative article links into in-page category filters.
- Added category metadata to each article card so the Article Library can filter in place.
- Category filters now combine with article search terms.
- Existing category hash links such as `knowledge-hub.html#printing` now open the Knowledge Hub with that category selected.
- Added an empty-state message for categories or search combinations with no matching articles.

### 7. Subpage Hero Gradient

- Removed the campus image from the shared subpage `page-heading` background and all KB article `article-hero` headers.
- Replaced them with a top-left to bottom-right NYU-purple gradient, moving from dark to lighter purple.
- The homepage search hero image treatment was left unchanged.

### 8. Global Font Preference

- Updated the global CSS font stack to prefer `NYU Perstare`.
- Added `Perstare`, `Segoe UI`, `Inter`, `Arial`, and `sans-serif` as fallbacks.
- No NYU Perstare font file is currently bundled in the repository, so browsers will use it when available locally or after a licensed web font is added.

### 9. NYU Brand Palette Update

- Added CSS variables for the requested NYU palette:
  - Primary: `#57068c`
  - Secondary: `#330662`, `#7b5aa6`, `#ab82c5`
  - Neutral: `#404040`, `#b8b8b8`, `#6d6d6d`, `#d6d6d6`
- Updated core brand gradients, navigation states, icon accents, cards, category filters, scrollbars, and form borders to use the new palette.
- Kept semantic alert/status colors separate for warning, success, and error states.

### 10. Article Library Card Sizing

- Added a consistent minimum height for Knowledge Hub article cards.
- Article cards show one title line and two summary lines in the Article Library.
- Scoped the sizing to the Article Library list so other stacked lists are not forced into the same block height.
- Filtered category views now keep article cards visually consistent even when summaries are shorter.
- Removed forced list height so small filtered result sets do not create extra whitespace between cards.

### 11. Sidebar Icon Alignment

- Updated sidebar navigation rows to use a fixed centered icon column, keeping main navigation and footer utility icons visually aligned across active and inactive states.

### 12. Quick Triage Layout

- Reworked KB article Quick Triage sections from repeated label cards into a compact two-column triage matrix.
- Kept the headings visible once per section while preserving each user wording and likely support area row.
- Updated all current KB article pages that include a Quick Triage section.

### 13. Article Folder Consolidation

- Moved all KB article HTML pages into the `articles/` folder.
- Updated Knowledge Hub and homepage article links to point to `articles/article-...` paths.
- Updated article pages to load shared CSS and JavaScript from the repository root with `../` paths.
- Updated shared navigation and search routing so generated links work from both root pages and article subpages.

### 14. Homepage Dashboard Alignment

- Aligned the homepage right-side column so Announcements, Popular Articles, and AI Assistant share the same width and right edge.
- Reworked homepage row columns to prevent horizontal page overflow while preserving the three-column desktop layout.
- Verified Popular Articles content and Browse by Category tiles still fit inside their cards after the column adjustment.

## Major Work Completed

### 1. Initial Website Prototype

- Built a static HTML/CSS/JavaScript version of the Stern IT Knowledge Hub.
- Matched the main visual direction from the screenshot:
  - Purple NYU Stern sidebar
  - Header/topbar with page title and profile area
  - Search hero
  - Announcements
  - Quick actions
  - Categories
  - Popular articles
  - Current alerts
  - Team resources
  - AI assistant panel
- Created reusable shared layout behavior in `layout.js`.
- Created shared styling in `styles.css`.

### 2. Shared Sidebar and Navigation

- Kept the same NYU Stern sidebar across all pages.
- Added navigation links for:
  - Home
  - Knowledge Hub
  - SOPs & Guides
  - Service Catalog
  - Training
  - AI Assistant
  - Reports & Tools
  - Team Directory
  - Submit Feedback
  - Site Admin
- Added mobile behavior:
  - On mobile, the sidebar only shows the current active page by default.
  - Tapping the active page expands the full navigation list.
  - Tapping again collapses it.

### 3. Supporting Pages

Created placeholder/support pages so the sidebar and dashboard links have destinations:

- `knowledge-hub.html`
- `alerts.html`
- `announcements.html`
- `service-catalog.html`
- `sops-guides.html`
- `training.html`
- `ai-assistant.html`
- `reports-tools.html`
- `team-directory.html`
- `feedback.html`
- `site-admin.html`

These pages currently use the same shared shell and can be expanded later.

### 4. NYU Service Status Alerts

- Reviewed the NYU service status source:
  - `https://support.nyu.edu/esc?id=services_status`
- Added a local alert renderer for current-alert style cards.
- Current version uses a saved snapshot in `nyu-status-data.js`.
- Added structure in `nyu-status.js` so a future proxy/API endpoint can provide live data.
- Important note:
  - The static local HTML version does **not** live-fetch NYU status by itself.
  - A future hosted version would need an API/proxy to safely pull live ServiceNow data.

### 5. Knowledge Base Article Conversion

Source Markdown folder used:

`C:\Users\jz2260\Documents\IntraNet\articles`

Converted the Markdown KB articles into internal support article pages.

Total KB article pages now in the site: **15**

Article pages created:

- `articles/article-kb0010979-apps-stern-appstream-starting-ending-session.html`
- `articles/article-kb0010981-gmail-stern-requesting-vanity-email-address.html`
- `articles/article-kb0010983-papercut-faq.html`
- `articles/article-kb0010984-apps-stern-appstream-opening-saving-files.html`
- `articles/article-kb0010986-gmail-stern-send-mail-vanity-address.html`
- `articles/article-kb0010989-print-stern-papercut-web-print.html`
- `articles/article-kb0010990-print-stern-printer-release-stations.html`
- `articles/article-kb0010991-print-stern-email-to-print.html`
- `articles/article-kb0010992-ems-web-app-managing-av-services-events.html`
- `articles/article-kb0010993-ems-mediasite-brightspace-posting.html`
- `articles/article-kb0010994-mobile-devices-google-setup-ios.html`
- `articles/article-kb0010995-ems-web-app-adding-services-approved-booking.html`
- `articles/article-kb0010996-print-stern-requesting-refund.html`
- `articles/article-kb0010997-ems-web-app-managing-av-services-classes.html`
- `articles/article-kb0010999-mobile-devices-google-setup-android.html`

### 6. Article Page Design

Built the article pages around an internal-support layout:

- Compact hero section
- Owner and last-reviewed metadata
- Article navigation rail
- First Check
- Support Workflow
- Quick Triage
- Service Facts
- Escalation Criteria
- Related Services

The first polished prototype was:

`articles/article-kb0010983-papercut-faq.html`

Changes made to that prototype:

- Reduced hero block size.
- Removed Audience, Source, and tags from the hero.
- Reordered the article for internal support use:
  - First Check
  - Support Workflow
  - Quick Triage
  - Service Facts
  - Costs & Quotas
  - Escalation
  - Related

### 7. Article Generator

Created a local generation helper:

`work\generate_kb_pages.py`

Purpose:

- Reads the Markdown KB files.
- Generates article HTML pages.
- Updates the Knowledge Hub article library.
- Preserves the manually polished PaperCut FAQ page.

This is useful for future refreshes if the Markdown articles are updated.

### 8. Knowledge Hub Improvements

Updated `knowledge-hub.html` so it now has:

- A left-side category rail.
- A right-side article library.
- An internal scroll area inside the article list.
- In-page article search/filtering.

Recent category rail refinements:

- Categories are one column.
- Category tabs are full width.
- Category tabs are left-aligned and visually aligned.
- Category tabs filter the Article Library instead of linking directly to representative article pages.

### 9. Home Page Link Updates

Updated `index.html` so popular article links point to real KB pages instead of placeholders.

Examples:

- Print@Stern / PaperCut FAQ
- Apps@Stern streaming session
- Request a vanity email address
- PaperCut Web Print
- EMS AV services for classes
- iPhone Stern Google setup

### 10. Files Added or Updated

Core site files:

- `index.html`
- `knowledge-hub.html`
- `styles.css`
- `layout.js`
- `script.js`
- `nyu-status.js`
- `nyu-status-data.js`

Generated/support pages:

- Dashboard support pages listed above
- 15 KB article pages

Generation helper:

- `work\generate_kb_pages.py`

## Validation Completed

Checks performed during the build:

- Confirmed 15 KB article pages exist.
- Confirmed local article links from Knowledge Hub resolve.
- Checked for blank article titles.
- Checked for obvious encoding marker issues.
- Checked that the JavaScript file parses successfully.
- Confirmed category rail CSS now forces one-column aligned category tabs.

## Current GitHub Pages Setup

The site is now hosted through GitHub Pages.

Repository:

`https://github.com/jz2260-dev/sd-intra`

Live site:

`https://jz2260-dev.github.io/sd-intra/`

Current Pages configuration:

1. Repository visibility: public.
2. Source mode: deploy from a branch.
3. Branch: `main`.
4. Folder: `/ (root)`.
5. Static serving marker: `.nojekyll`.

Important publishing note:

- Because this repository is public, do not add credentials, private NYU data, internal-only documentation, or sensitive support details unless the repo access model changes.

## Important Notes

- This is a static website hosted on GitHub Pages.
- It can be opened locally from `index.html`, but the preferred shared URL is now the GitHub Pages URL.
- Live NYU status integration will require an API/proxy later.
- The KB pages are generated from cleaned Markdown, but the generated wording is still internal-support oriented and can be refined article by article.
- The sidebar is intended to remain the shared navigation pattern across future pages.
- Public hosting is now enabled, so future content should be reviewed for sensitivity before it is committed and pushed.
- Major project changes should be added to this Markdown file as a running project log.

## Suggested Next Steps

- Review a few generated KB pages manually and refine page-specific content where needed.
- Add more real content to Service Catalog, SOPs & Guides, Training, and Team Directory.
- Decide whether the public GitHub Pages site is acceptable long term, or whether a private/internal hosting option is needed later.
- Keep this notes file updated whenever a major site, repository, hosting, or content change is made.
