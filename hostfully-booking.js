/* Hostfully agency widget supplied by the site owner. */
(function () {
  'use strict';
  var container = document.getElementById('leadWidget');
  var status = document.getElementById('widget-status');
  if (!container || !status) return;
  function unavailable() {
    status.hidden = false;
    status.textContent = 'The booking tool could not load. Please use Browse homes & availability below to check dates on our booking site.';
  }
  function hasContent() { return !!container.querySelector('iframe, input, select, form, button'); }
  var observer = new MutationObserver(function () {
    if (hasContent()) { status.hidden = true; observer.disconnect(); }
  });
  observer.observe(container, { childList: true, subtree: true });
  if (typeof window.Widget !== 'function') { observer.disconnect(); unavailable(); return; }
  try {
    window.carefreeBookingWidget = new window.Widget('leadWidget', '3f3fcbe1-67b1-4d1e-9f9c-515140c7ce6e', {"maximun_availability": "2029-11-24T01:44:05.817Z", "type": "agency", "fields": [], "showAvailability": true, "lang": "US", "minStay": true, "price": true, "hidePriceWithoutDates": false, "cc": false, "emailClient": true, "saveCookie": true, "showDynamicMinStay": true, "backgroundColor": "#FFFFFF", "buttonSubmit": {"backgroundColor": "#F2C443"}, "showPriceDetailsLink": false, "showGetQuoteLink": false, "labelColor": "#35496D", "showTotalWithoutSD": true, "redirectURL": false, "showDiscount": true, "includeReferrerToRequest": true, "customDomainName": "https://owner.upstategetaways.rentals/", "source": null, "aid": "ORB-49587220416635719", "clickID": null, "valuesByDefaults": {"checkIn": {"value": ""}, "checkOut": {"value": ""}, "guests": {"value": ""}, "discountCode": {"value": ""}}, "pathRoot": "https://platform.hostfully.com/"});
    if (hasContent()) status.hidden = true;
    window.setTimeout(function () { if (!hasContent()) unavailable(); }, 15000);
  } catch (error) { observer.disconnect(); unavailable(); }
})();
