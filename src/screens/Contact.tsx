import { Clock3, Mail, MessageSquareText } from 'lucide-react'
import { usePrefs } from '../lib/prefs'
import { mailtoUrl, whatsappUrl } from '../lib/contact'
import { CONTACT } from '../config'
import { ScreenHeader } from '../components/Chrome'
import { WhatsAppIcon } from '../components/Brand'

export function Contact() {
  const { t } = usePrefs()

  return (
    <div className="contact">
      <ScreenHeader title={t.contact.title} icon={<MessageSquareText size={22} aria-hidden="true" />} />

      <div className="page page-narrow">
        <section className="contact-hero">
          <span className="wa-badge" aria-hidden="true">
            <WhatsAppIcon size={34} />
          </span>
          <h2 className="contact-title">{t.contact.headline}</h2>
          <p className="contact-body">{t.contact.body}</p>

          <a href={whatsappUrl(t.contact.waMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">
            <WhatsAppIcon size={22} />
            {t.common.whatsapp}
          </a>
          <p className="contact-handle">{CONTACT.whatsappDisplay}</p>

          <div className="or" role="separator">
            <span>{t.contact.or}</span>
          </div>

          <a href={mailtoUrl(t.meta.title)} className="btn btn-outline btn-block">
            <Mail size={20} />
            {t.common.email}
          </a>
          <p className="contact-handle">{CONTACT.email}</p>
        </section>

        <div className="info-card">
          <Clock3 size={22} aria-hidden="true" />
          <p>
            {t.contact.promise} <strong>{t.contact.promiseStrong}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
