import { CONTACT } from '../config'

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${CONTACT.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export function mailtoUrl(subject: string, body?: string) {
  const params = new URLSearchParams({ subject })
  if (body) params.set('body', body)
  // URLSearchParams encodes spaces as "+", which mail clients show literally
  return `mailto:${CONTACT.email}?${params.toString().replace(/\+/g, '%20')}`
}
