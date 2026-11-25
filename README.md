# Carefree Upstate Getaways - Hostfully Widget Update

## Upload
Unzip this download and upload its contents to the same GitHub publishing folder used for your dev site. Replace matching files and preserve all folders. index.html stays at the top level. No build or installation step is needed. Existing GitHub Pages settings remain unchanged.

## Included
Homepage, Hosting, Cleaning, Getaways, and getaways/plan-your-stay.html. The previous getaways/property-preview.html URL remains supported. Getaways now leads to the embedded Hostfully widget rather than disabled sample inputs.

## Hostfully configuration
The supplied widget uses type: agency with identifier 3f3fcbe1-67b1-4d1e-9f9c-515140c7ce6e. It has been integrated as a general Plan your stay page, not represented as a booking widget for a particular sample home. The provided hostfully configuration is in hostfully-booking.js; branding colors were adjusted to navy and gold. Property-specific pages require matching property widget codes and verified property details.

The supplied customDomainName is https://owner.upstategetaways.rentals/ and is preserved unchanged. Confirm this is the intended booking domain in Hostfully. Credit card capture is false in the supplied configuration. Full checkout behavior must be tested; do not assume this widget alone takes payment.

## External links
External HTTP/HTTPS anchors open separately with target=_blank and rel=noopener noreferrer. Internal navigation stays in this site. Dynamic external anchors inserted into this document receive the same handling. Browser settings decide whether a new tab or window opens. Links or checkout navigation inside a third-party iframe are controlled by Hostfully and need separate verification.

## Verification before sharing
Open the deployed site, choose Getaways > Plan your stay, and confirm that the real widget loads. Select dates and guest count. Verify rates, any property selection, minimum stays, discounts and inquiry/checkout behavior for your account. Do not submit a paid or real test reservation unintentionally. Confirm any required domain allowlisting with Hostfully support if the widget fails to load. A fallback link to current live rentals remains available.

Automated checks validate local assets, navigation, external link targets and JavaScript syntax. Live Hostfully behavior is not yet verified: the script download in the build environment was denied with HTTP 403. Test on your deployed GitHub dev site.

## Editing
Each page has its own HTML file. style.css is shared styling, app.js contains accessibility/external-link behavior, and hostfully-booking.js initializes the supplied widget. Keep the folder structure intact.
