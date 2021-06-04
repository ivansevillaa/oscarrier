import { GTagEvent } from "@ts/gtag";

export const GA_TRACKING_ID = "G-S608WQ2LW3";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action, category, label, value
}: GTagEvent) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value
  });
};
