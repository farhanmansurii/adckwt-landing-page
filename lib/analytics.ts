export const GA_TRACKING_ID = "AW-16484992696/DP9XCLq7g78ZELiN1LQ9";

export const reportConversion = () => {
  window &&
    window.gtag &&
    window.gtag("event", "conversion", {
      send_to: GA_TRACKING_ID,
      event_callback: () => {
        console.log(`(logs) > hi`);
      },
    });
};
