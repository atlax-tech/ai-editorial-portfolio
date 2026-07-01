import { MailIcon, PhoneIcon, MapPinIcon } from "./icons.jsx";

export function ContactLine({ contact }) {
  return (
    <section className="section-shell section-divider" aria-label="联系方式">
      <div className="contact-line">
        <a href={`mailto:${contact.email}`}>
          <MailIcon />
          {contact.email}
        </a>
        <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
          <PhoneIcon />
          {contact.phone}
        </a>
        <a href={contact.socialUrl}>
          <span className="text-mark">{contact.socialMark}</span>
          {contact.social}
        </a>
        <span>
          <MapPinIcon />
          {contact.location}
        </span>
      </div>
    </section>
  );
}
