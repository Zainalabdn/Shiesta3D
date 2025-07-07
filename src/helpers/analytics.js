// src/helpers/analytics.js
export const initGA = () => {
  if (!window.gtag) return;
  window.gtag('js', new Date());
  window.gtag('config', 'G-3XJCTSMFJD'); // ganti dengan ID milikmu
};

export const trackPageView = (url) => {
  if (!window.gtag) return;
  window.gtag('config', 'G-3XJCTSMFJD', {
    page_path: url,
  });
};