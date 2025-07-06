import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-4P4QFQWDW7"; // Ganti dengan ID kamu

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const trackPageView = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
    title: document.title // ini bantu biar judul halaman juga dikirim
  });
};
