/* Byrom Home — Group, Global presence, Closing + newsletter, Footer */

/* To use real group logos: drop image files (.svg / .png / .webp) at
   /public/assets/group/ — the component below tries each extension until
   one loads, then falls back to the company name. */
const GROUP = [
  { name: 'MATCH Hospitality AG',   slug: 'match-hospitality',   href: 'https://match-hospitality.com/' },
  { name: 'MATCH Services AG',      slug: 'match-services',      href: null },
  { name: 'MATCH Accommodation AG', slug: 'match-accommodation', href: null },
  { name: 'GTS Events Limited',     slug: 'gts-events',          href: 'https://www.rcts.co.uk/' },
];

function GroupLogo({ name, slug }) {
  const tries = ['svg', 'png', 'webp'];
  const [i, setI] = React.useState(0);
  if (i >= tries.length) return <span>{name}</span>;
  return (
    <img
      src={'/public/assets/group/' + slug + '.' + tries[i]}
      alt={name}
      className="group__logoimg"
      onError={() => setI(i + 1)}
    />
  );
}

function Group() {
  return (
    <section className="section" id="group">
      <Container>
        <div className="shead reveal" style={{ maxWidth: 940 }}>
          <Eyebrow>Our group</Eyebrow>
          <h2>Part of a family-owned group.</h2>
          <p>
            Byrom is headquartered in Manchester, United Kingdom and forms part of a family owned and
            run business that has more than 30 years experience in sports events management and with a
            group of affiliated companies which continues to provide unparalleled expertise in our
            industry. Our global presence includes offices in Manchester, London, Doha, Rio de Janeiro,
            Barcelona, Johannesburg, Moscow, Philadelphia, Hong Kong and Zurich, with an international
            team of over 300 people and more than 25 different nationalities.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Our companies include MATCH Hospitality AG, providing end-to-end hospitality programme
            management including commercial sales and event fulfilment; MATCH Services AG, the
            professional services company appointed by FIFA to provide ticketing services; MATCH
            Accommodation AG which provides event accommodation; and GTS Events Limited which operates
            both Ryder Cup Travel Services (RCTS) and ERC Rugby Travel providing accommodation and
            logistical support.
          </p>
        </div>
        <div className="group__row reveal">
          {GROUP.map((g) => {
            const inner = <GroupLogo {...g} />;
            return g.href
              ? <a key={g.name} className="group__logo" href={g.href} target="_blank" rel="noopener">{inner}</a>
              : <div key={g.name} className="group__logo">{inner}</div>;
          })}
        </div>
      </Container>
    </section>
  );
}

const OFFICES = [
  ['Manchester', true], ['London', false], ['Doha', false], ['Rio de Janeiro', false],
  ['Barcelona', false], ['Johannesburg', false], ['Moscow', false], ['Philadelphia', false],
  ['Hong Kong', false], ['Zurich', false],
];

function Presence() {
  return (
    <section className="section section--alt" id="presence">
      <Container>
        <SectionHead
          eyebrow="Global presence"
          title="On the ground, everywhere it matters."
          copy="Headquartered in Manchester, with teams across ten offices worldwide and more than 25 nationalities."
        />
        <div className="offices reveal">
          {OFFICES.map(([city, hq]) => (
            <div className={'office' + (hq ? ' is-hq' : '')} key={city}>
              {city}{hq && ' (HQ)'}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const EVENT_OPTIONS = [
  'F1 — Spanish Grand Prix (MADRING) 2026',
  'AFC Asian Cup Saudi Arabia 2027',
  'The Open Championship',
  'Ryder Cup',
  'FIFA World Cup',
  'Rugby World Cup',
  'Other / general enquiry',
];

function Closing() {
  const [msg, setMsg] = React.useState('');
  const submit = (e) => {
    e.preventDefault();
    const f = e.target.elements;
    if (f.name.value && f.email.value && f.event.value && f.message.value) {
      setMsg('Thank you — your enquiry has been sent. We’ll be in touch shortly.');
      e.target.reset();
    }
  };
  return (
    <section className="section" id="contact">
      <Container>
        <div className="closing reveal">
          <Eyebrow>Get in touch</Eyebrow>
          <h2>It’s all about the experience.</h2>
          <p className="closing__sub">Tell us about your event or enquiry and the right team will be in touch.</p>
        </div>
        <form className="cform reveal" onSubmit={submit}>
          <div className="cform__field">
            <label htmlFor="cf-name">Name &amp; Surname <span>*</span></label>
            <input id="cf-name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="cform__field">
            <label htmlFor="cf-email">Email <span>*</span></label>
            <input id="cf-email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="cform__field">
            <label htmlFor="cf-phone">Phone number</label>
            <input id="cf-phone" name="phone" type="tel" autoComplete="tel" />
          </div>
          <div className="cform__field">
            <label htmlFor="cf-country">Country</label>
            <input id="cf-country" name="country" type="text" autoComplete="country-name" />
          </div>
          <div className="cform__field cform__field--full">
            <label htmlFor="cf-event">Choose event <span>*</span></label>
            <select id="cf-event" name="event" defaultValue="" required>
              <option value="" disabled>Choose the event you are interested in</option>
              {EVENT_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div className="cform__field cform__field--full">
            <label htmlFor="cf-message">Message <span>*</span></label>
            <textarea id="cf-message" name="message" placeholder="Write your enquiry" required></textarea>
          </div>
          <div className="cform__actions">
            <button type="submit" className="btn btn--primary">Send enquiry</button>
          </div>
          <div className="form__msg">{msg}</div>
        </form>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__grid">
          <div>
            <img className="footer__logo" src={window.BYROM_LOGO_WHITE} alt="BYROM" />
            <address>
              Byrom plc, SEAMOS House, Brooks Drive,<br />
              Cheadle Royal Business Park, Cheadle,<br />
              Cheshire SK8 3SA, United Kingdom<br /><br />
              +44 (0)161 492 1800<br />
              enquiries@byrom.plc.uk
            </address>
          </div>
          <div>
            <h4>Company</h4>
            <div className="footer__links">
              <a href="#services">Services</a>
              <a href="#track-record">Track record</a>
              <a href="#group">Our group</a>
              <a href="#presence">Global presence</a>
            </div>
          </div>
          <div>
            <h4>Legal</h4>
            <div className="footer__links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Information Security Policy</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Byrom plc. All rights reserved.</span>
          <span className="iso"><i data-lucide="shield-check"></i> ISO 27001 Certified</span>
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { Group, Presence, WorldMap, Closing, Footer });

/* ---------- Branded SVG world map of events ---------- */
function WorldMap() {
  const locs = window.BYROM_MAP_LOCATIONS || [];
  const [sel, setSel] = React.useState(null);
  const vb = window.BYROM_MAP_VIEWBOX || '0 0 1000 500';
  const [, , vbW, vbH] = vb.split(' ').map(Number);
  return (
    <section className="section" id="map">
      <Container>
        <SectionHead
          eyebrow="Map our experience"
          title="Where we’ve delivered."
          copy="Three decades of events delivered across the globe. Select a marker to see the detail."
        />
        <div className="wmap reveal">
          <svg className="wmap__svg" viewBox={vb} role="img" aria-label="World map of Byrom events and offices">
            <path className="wmap__land" d={window.BYROM_MAP_D} />
            {locs.map((l, i) => (
              <g
                key={i}
                className={'wmap__pin wmap__pin--' + l.type + (sel === i ? ' is-active' : '')}
                transform={'translate(' + l.x + ',' + l.y + ')'}
                onClick={() => setSel(sel === i ? null : i)}
                role="button" tabIndex={0} aria-label={l.name}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSel(sel === i ? null : i); } }}
              >
                <circle className="wmap__hit" r="11" />
                <circle className="wmap__dot" r={l.type === 'office' ? 3.2 : 5} />
              </g>
            ))}
          </svg>
          {sel !== null && (
            <div className="wmap__pop" style={{ left: (locs[sel].x / vbW * 100) + '%', top: (locs[sel].y / vbH * 100) + '%' }}>
              <button className="wmap__popclose" aria-label="Close" onClick={() => setSel(null)}>×</button>
              {locs[sel].image && <img className="wmap__popimg" src={locs[sel].image} alt={locs[sel].name} />}
              {locs[sel].meta && <span className="wmap__popmeta">{locs[sel].meta}</span>}
              <h4 className="wmap__popname">{locs[sel].name}</h4>
              {locs[sel].desc && <p className="wmap__popdesc">{locs[sel].desc}</p>}
              {locs[sel].link && <a className="tlink" href={locs[sel].link} target="_blank" rel="noopener">Learn more<i data-lucide="arrow-up-right"></i></a>}
            </div>
          )}
          <div className="wmap__legend">
            <span><i className="wmap__key wmap__key--event"></i>Events</span>
            <span><i className="wmap__key wmap__key--office"></i>Offices</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
