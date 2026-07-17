'use client';
import { useEffect } from 'react';

export default function ScrollToForm() {
  useEffect(() => {
    if (window.location.hash === '#contact-form') {
      setTimeout(() => {
        const el = document.getElementById('contact-form');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  return null;
}