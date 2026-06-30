import { MailIcon, PhoneIcon, MapPinIcon } from "./icons.jsx";

export function AboutSection({ data }) {
  return (
    <section className="about section-shell section-divider" id="about">
      <div className="about__intro">
        <p className="section-count">{data.count}</p>
        <h2>{data.title}</h2>
        <p className="label-stack">
          <span>ABOUT</span>
          <span>PROFILE</span>
        </p>
        {data.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="about__content">
        <section className="capability-index" aria-labelledby="capability-title">
          <h3 id="capability-title">能力索引</h3>
          <span>CAPABILITY INDEX</span>
          {data.capabilities.map((capability) => (
            <div className="capability-row" key={capability.id}>
              <span>{capability.id}</span>
              <strong>{capability.title}</strong>
              <p>{capability.description}</p>
            </div>
          ))}
        </section>

        <section className="method-line" aria-labelledby="method-title">
          <h3 id="method-title">工作方法</h3>
          <span>WORKING METHOD</span>
          <div className="method-line__track">
            {data.methods.map((method) => (
              <article key={method.id}>
                <span>{method.id}</span>
                <strong>{method.title}</strong>
                <p>{method.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <div className="contact-line" aria-label="联系方式">
        <a href={`mailto:${data.contact.email}`}>
          <MailIcon />
          {data.contact.email}
        </a>
        <a href={`tel:${data.contact.phone.replace(/\s/g, "")}`}>
          <PhoneIcon />
          {data.contact.phone}
        </a>
        <a href={data.contact.socialUrl}>
          <span className="text-mark">{data.contact.socialMark}</span>
          {data.contact.social}
        </a>
        <span>
          <MapPinIcon />
          {data.contact.location}
        </span>
      </div>
    </section>
  );
}
