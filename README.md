# Carefree Upstate Getaways - Website Review

Four connected pages with the supplied company logo:
- index.html: company homepage
- hosting/index.html: Carefree Hosting
- cleaning/index.html: Carefree Cleans
- getaways/index.html: Upstate Getaways

## Upload to your GitHub dev site
1. Make a backup of your current dev site or use a separate review branch/repository.
2. Unzip this download on your computer.
3. Upload the CONTENTS of this folder into the folder your existing deployment publishes. For GitHub Pages this is often the repository root or /docs. Keep hosting, cleaning, getaways and assets as folders.
4. Ensure index.html is directly inside that publishing folder, rather than inside an extra Carefree_Website_Review folder.
5. Commit the upload. If using GitHub Pages with branch deployment, check Settings > Pages and select the intended branch and publishing folder. If your repo already uses an Actions, Vercel or Cloudflare deployment, preserve its existing setup.
6. Wait for deployment to finish, open the dev URL and test the three navigation links and the logo's link back to home.
7. Share the deployed homepage URL with the owners. They can move between all four pages using the top navigation.

No installation or build step is required for these static files. Relative links support both domain-root hosting and GitHub Pages repository subfolders. The original logo file is included without image edits.

## What this review includes
The homepage, three brand landing pages, navigation, photography, FAQs, and accessibility controls. Booking buttons link to the existing Hostfully site; cleaning inquiries link to the supplied Facebook page; the owner guide remains an external link. Embedded Hostfully widgets, booking forms and custom inquiry forms are not connected in this concept.

## Updating copy
Edit the corresponding index.html file; shared appearance is in style.css and accessibility controls are in app.js. Keep folder names intact so links continue to work.

## Connected booking preview update
New page: getaways/property-preview.html. The Getaways landing page links to it; the shared Find a stay button now stays within this site. The property page includes a gallery, example home details and a Hostfully-style booking panel. Dates and the availability button are intentionally disabled until real widget code is supplied. No rates, calendar data or booking requests are fabricated. The live Hostfully rental site remains available via an external link.
All external HTTP/HTTPS links open in a new tab with noopener and noreferrer; internal navigation stays in the same tab. Browsers may open these as tabs or windows according to visitor settings.
To update your GitHub site, upload the full contents of this updated package into the same publishing folder, replacing matching files and retaining the folders. Keep existing GitHub deployment settings.
