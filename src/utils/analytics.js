import ReactGA from 'react-ga4';

// Initialize Google Analytics
// Replace 'G-5R384JBFX6' with your actual Google Analytics Measurement ID
const MEASUREMENT_ID = 'G-5R384JBFX6'; // Get this from your Google Analytics property

export const initializeAnalytics = () => {
  if (!MEASUREMENT_ID) {
    console.warn('Google Analytics Measurement ID not configured. Please set your GA4 Measurement ID in src/utils/analytics.js');
    return;
  }
  
  ReactGA.initialize(MEASUREMENT_ID);
  console.log('✅ Google Analytics initialized with ID:', MEASUREMENT_ID);
};

// Track page views
export const trackPageView = (path, title) => {
  ReactGA.send({
    hitType: 'pageview',
    page: path,
    title: title
  });
};

// Track events (like button clicks, form submissions, etc.)
export const trackEvent = (eventName, eventParams = {}) => {
  ReactGA.event(eventName, eventParams);
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('form_submission', {
    form_name: formName
  });
};

// Track button clicks
export const trackButtonClick = (buttonName) => {
  trackEvent('button_click', {
    button_name: buttonName
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage) => {
  trackEvent('scroll_depth', {
    scroll_percentage: percentage
  });
};

// Track link clicks
export const trackLinkClick = (linkText, linkUrl) => {
  trackEvent('link_click', {
    link_text: linkText,
    link_url: linkUrl
  });
};

// Track video engagement
export const trackVideoEngagement = (videoTitle, action) => {
  trackEvent('video_engagement', {
    video_title: videoTitle,
    action: action // 'play', 'pause', 'complete'
  });
};
