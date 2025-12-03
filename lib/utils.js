import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Shared WhatsApp config for all CTAs (client-safe env)
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '212609343953';
export const WHATSAPP_URL_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;