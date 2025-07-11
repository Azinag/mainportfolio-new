"use client";

import { useEffect } from 'react';
import { event } from '@/lib/analytics';

export default function AnalyticsTracker() {
  useEffect(() => {
    // Track page load
    event({
      action: 'page_view',
      category: 'Engagement',
      label: window.location.pathname
    });

    // Track scroll depth
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent;
        event({
          action: 'scroll',
          category: 'Engagement',
          label: `${scrollPercent}% scrolled`,
          value: scrollPercent
        });
      }
    };

    // Track time on page
    const startTime = Date.now();
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      event({
        action: 'time_on_page',
        category: 'Engagement',
        label: window.location.pathname,
        value: timeSpent
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
}