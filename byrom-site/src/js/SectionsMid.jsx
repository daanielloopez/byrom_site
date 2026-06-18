/* Byrom Home — Services, Proprietary technology, Track record */

const SERVICES = [
  {
    icon: 'bed', name: 'Accommodation',
    copy: 'Tens of thousands of room nights across vast hotel portfolios, powered by our Check-In™ system.',
    full: [
      `Byrom understands the dynamics of the hotel industry and creates the necessary partnership approach to match the commercial expectations of both customer and supplier. Since Byrom Plc's establishment in 1991, we have provided accommodation services for global sporting events and are proud to name FIFA, Ryder Cup Europe LLP, and CONCACAF Gold Cup among our clients.`,
      `Our unique reservation system Check-In™ allows Byrom to operate huge numbers of rooms across a wide portfolio of hotels. Designed and developed in-house, Check-In™ was introduced at the 1994 FIFA World Cup USA™. As our event experience has grown, Check-In™ has evolved into industry-leading software to cater for the exacting standards required by the biggest Sporting Event Rights Holders in the world, covering contract management, sales and room allocation, fulfilment, and finally event reconciliation, all whilst providing essential financial integration.`,
      `Byrom has provided accommodation services to FIFA's event calendar as FIFA Accommodation Office since the 1998 FIFA World Cup™, most recently through its subsidiary company MATCH Accommodation AG.`,
    ],
  },
  {
    icon: 'wine', name: 'Hospitality',
    copy: 'Market-leading design and delivery of premium sports hospitality, through MATCH Hospitality.',
    full: [
      `Our experience and expertise in product development ensures that we are market leaders in the design and delivery of the best sports hospitality products on offer. MATCH Hospitality AG, affiliated to the Byrom group, has acted as worldwide exclusive rights holder for FIFA's Official Hospitality Programme, encompassing multiple FIFA World Cup™ tournaments.`,
      `The MATCH Hospitality team has extensive experience in end-to-end hospitality programme management, and is responsible for the event fulfilment, guest management, technical operations and catering for a portfolio of prestigious tournaments.`,
      `Through our well-established and comprehensive global sales network we reach corporate and individual customers with the desire to experience exceptional hospitality at the most sought-after sports programmes in the world.`,
      `Beyond the FIFA World Cups™, MATCH Hospitality AG has conducted successful hospitality sales operations for the UEFA EURO 2012™, the French Open Roland Garros and BNP Masters Paris, the FIFA Confederations Cups and the FIFA Women's World Cups™.`,
    ],
  },
  {
    icon: 'ticket', name: 'Ticketing',
    copy: 'Bespoke, innovative ticketing for the world’s biggest events, powered by ENTRADA.',
    full: [
      `MATCH Services AG, within the Byrom group, has been responsible for delivering ticketing solutions for some of the world's biggest sporting events, including the FIFA World Cups™ since Korea/Japan 2002. Our ticketing services and IT solutions are bespoke and innovative, having successfully delivered numerous major events.`,
      `We specialise in offering turn-key solutions and have pioneered systems specifically tailored to meet the evolving needs of our clients. At the centre of our ticketing solution is 'ENTRADA', our Ticketing Administration System, developed by our in-house software team. Since its launch for the 2002 FIFA World Cup Korea/Japan™, ENTRADA has been continually developed and upgraded to rise to the ever-growing complexity and demand for tickets in events such as the FIFA World Cup™.`,
      `Among many other innovations, Byrom created the 'Team Specific Ticket' concept for the 2002 FIFA World Cup™, a concept that has been used by every major international football competition since.`,
      `Beyond FIFA events, Byrom has also provided ticketing solutions to Ryder Cup Limited for the Ryder Cup Matches and to the A1 Grand Prix, with GTS Events operating the official ticket-inclusive travel programme through Ryder Cup Travel Services.`,
    ],
  },
  {
    icon: 'route', name: 'Transportation & Logistics',
    copy: 'Complex event transport planned to the finest detail, at scale.',
    full: [
      `We plan transport solutions that ensure a smooth operation on and in anticipation of event day. Our experience spans complex event transportation and logistic needs that require precise attention to detail and the ability to adapt to every potential scenario.`,
      `Our in-house travel department use bespoke operational systems that include contracting, supplier management, planning and account management. Our systems enable us to operate large numbers of group transportation needs during some of the world's largest sporting events, as well as the intricacy of individual needs of VIP travel for dignitaries and VVIPs.`,
      `Our previous events have seen us operate a fleet of 500 coaches and manage 53,000 seats on flights for Tour Operators, Hospitality Clients and Commercial Affiliates at the FIFA World Cup 2010 in South Africa, as well as the implementation and operation of a park-and-ride system used by 195,000 spectators at the 38th Ryder Cup in 2010.`,
    ],
  },
  {
    icon: 'crown', name: 'VIP Management',
    copy: 'Seamless experiences for rights holders, sponsors and dignitaries.',
    full: [
      `Byrom has unprecedented knowledge and experience of providing a VIP experience for event rights holders, organising committees, sponsors and government hosts in the unique environment of major sporting events.`,
      `We have served FIFA with the provision of services to its delegates and VIP guests for all FIFA Congresses, FIFA World Cups™ and FIFA Confederations Cups since 1998. Our bespoke management system generates the necessary data for FIFA transportation, accreditation, protocol and security departments to ensure that FIFA Congress and tournament delegates, VIP guests and dignitaries enjoy a seamless experience.`,
    ],
  },
  {
    icon: 'server', name: 'IT Solutions',
    copy: 'World-class in-house software and infrastructure across the full event IT life-cycle.',
    full: [
      `Our IT solutions and services enable the successful operational delivery of global sports events. We have cultivated a world-class internal IT team that has developed tailored, customised applications to meet the diverse and unique business requirements of our clients.`,
      `Byrom expertise covers the whole IT life-cycle, from specialised business consultancy and functional definition of systems, to software development, testing, implementation and post-roll-out support. We also have expertise in defining and managing the necessary IT infrastructure such as power and connectivity to be deployed at the different event locations.`,
      `Through its wholly owned subsidiary MATCH Services AG, Byrom has been FIFA's complete event IT solution provider for the FIFA World Cups™, FIFA Women's World Cups™ and FIFA Confederations Cups.`,
    ],
  },
];

function Services() {
  const [open, setOpen] = React.useState(null);
  return (
    <section className="section" id="services">
      <Container>
        <SectionHead
          eyebrow="What we do"
          title="Six disciplines, one seamless event."
          copy="From the first ticket to the final transfer, Byrom plans and delivers every operational layer of the world’s largest sporting events."
        />
        <div className="services">
          {SERVICES.map((s, i) => (
            <article className="scard reveal" style={{ transitionDelay: (i % 3 * 80) + 'ms' }} key={s.name}>
              <div className="scard__rule"></div>
              <div className="scard__icon"><i data-lucide={s.icon}></i></div>
              <h3>{s.name}</h3>
              <p>{s.copy}</p>
              <button type="button" className="tlink scard__more" onClick={() => setOpen(i)}>
                Learn more<i data-lucide="arrow-right"></i>
              </button>
            </article>
          ))}
        </div>
      </Container>
      <Modal open={open !== null} onClose={() => setOpen(null)} variant="panel">
        {open !== null && (
          <React.Fragment>
            <span className="eyebrow">What we do</span>
            <h3 className="modal__title">{SERVICES[open].name}</h3>
            {SERVICES[open].full.map((para, k) => <p key={k}>{para}</p>)}
          </React.Fragment>
        )}
      </Modal>
    </section>
  );
}

/* Horizontal-scroll gallery with lightbox.
   To add real images: drop files at /public/assets/gallery/ and edit the
   `src` paths below. While `src` is null, an intentional placeholder shows. */
const GALLERY = [
  { tag: 'FIFA World Cup',     src: '/assets/gallery/01-fifa-world-cup.jpg',     alt: 'FIFA World Cup' },
  { tag: 'F1 hospitality',     src: '/assets/gallery/02-f1-hospitality.jpg',     alt: 'F1 hospitality' },
  { tag: 'The Open',           src: '/assets/gallery/03-the-open.jpg',           alt: 'The Open Championship' },
  { tag: 'Ryder Cup',          src: '/assets/gallery/04-ryder-cup.jpg',          alt: 'Ryder Cup' },
  { tag: 'Stadium operations', src: '/assets/gallery/05-stadium-operations.jpg', alt: 'Stadium operations' },
  { tag: 'VIP experience',     src: '/assets/gallery/06-vip-experience.jpg',     alt: 'VIP experience' },
  { tag: 'Accommodation',      src: '/assets/gallery/07-accommodation.jpg',      alt: 'Accommodation' },
];

function Gallery() {
  const [open, setOpen] = React.useState(null);
  const rail = React.useRef(null);
  const drag = React.useRef({ down: false, moved: false, startX: 0, startScroll: 0 });

  const onDown = (e) => {
    const el = rail.current; if (!el) return;
    drag.current = { down: true, moved: false, startX: e.pageX, startScroll: el.scrollLeft };
    el.classList.add('is-drag');
  };
  const onMove = (e) => {
    const el = rail.current; if (!el || !drag.current.down) return;
    const dx = e.pageX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  };
  const endDrag = () => {
    const el = rail.current; if (el) el.classList.remove('is-drag');
    drag.current.down = false;
  };
  const onItem = (i) => { if (!drag.current.moved) setOpen(i); };

  return (
    <section className="section section--alt" id="gallery">
      <Container>
        <SectionHead
          eyebrow="In pictures"
          title="Moments from the world’s biggest events."
          copy="A glimpse of the experiences Byrom delivers across sport and hospitality. Drag to explore — tap any image to enlarge."
        />
      </Container>
      <div
        className="gallery" ref={rail}
        onMouseDown={onDown} onMouseMove={onMove} onMouseUp={endDrag} onMouseLeave={endDrag}
      >
        <div className="gallery__track">
          {GALLERY.map((g, i) => (
            <button type="button" className="gallery__item" key={i} onClick={() => onItem(i)} aria-label={'Enlarge: ' + g.tag}>
              <Photo className="gallery__photo" src={g.src} tag={g.tag} alt={g.alt || g.tag} />
            </button>
          ))}
        </div>
      </div>
      <Modal open={open !== null} onClose={() => setOpen(null)} variant="lightbox">
        {open !== null && (
          GALLERY[open].src
            ? <img className="lightbox__img" src={GALLERY[open].src} alt={GALLERY[open].alt || GALLERY[open].tag} />
            : <div className="lightbox__ph">
                <span className="photo__ph"><i data-lucide="image"></i></span>
                <span className="lightbox__tag">{GALLERY[open].tag}</span>
              </div>
        )}
      </Modal>
    </section>
  );
}

function Tech() {
  return (
    <section className="section section--blue" id="technology">
      <Container>
        <div className="shead reveal" style={{ maxWidth: 760 }}>
          <Eyebrow>Proprietary technology</Eyebrow>
          <h2 style={{ color: '#fff' }}>Software built for events at world-cup scale.</h2>
        </div>
        <div className="tech__grid">
          <div className="tech__card reveal">
            <div className="tech__kicker">Accommodation platform</div>
            <div className="tech__name">Check-In™</div>
            <p>
              Our proprietary accommodation system manages tens of thousands of room nights
              across vast hotel portfolios — allocation, contracting and guest delivery,
              all in one place.
            </p>
          </div>
          <div className="tech__card reveal" style={{ transitionDelay: '90ms' }}>
            <div className="tech__kicker">Ticketing platform</div>
            <div className="tech__name">ENTRADA</div>
            <p>
              A bespoke ticketing engine engineered for the world’s biggest events —
              flexible, secure and proven across multiple FIFA World Cup tournaments.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

const EVENTS = [
  ['FIFA World Cup™', 'Global · Recurring', 'Ticketing, accommodation and IT delivery across multiple tournaments.'],
  ['AFC Asian Cup', 'Qatar · 2024', 'End-to-end event services for one of Asia’s flagship competitions.'],
  ['F1 — British Grand Prix', 'Silverstone · Annual', 'Premium hospitality and logistics at one of the F1 calendar’s crown jewels.'],
  ['The Open', 'United Kingdom · Annual', 'Hospitality and accommodation programmes for golf’s oldest major.'],
  ['Ryder Cup', 'Europe · Biennial', 'Complex VIP and transport operations for a global golfing spectacle.'],
  ['Rugby World Cup', 'Global · Recurring', 'Coordinated accommodation and ticketing at tournament scale.'],
];

function TrackRecord() {
  return (
    <section className="section section--alt" id="track-record">
      <Container>
        <SectionHead
          eyebrow="Track record"
          title="Recent & upcoming."
          copy="A track record built across the biggest names in world sport."
        />
        <div className="events">
          {EVENTS.map(([name, meta, copy], i) => (
            <article className="ecard reveal" style={{ transitionDelay: (i % 3 * 80) + 'ms' }} key={name}>
              <Photo className="ecard__photo" tag="Event imagery" />
              <span className="ecard__meta">{meta}</span>
              <h3>{name}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { Services, Gallery, Tech, TrackRecord, Timeline });

/* ---------- Historical timeline (Byrom-skinned) ---------- */
const TIMELINE = [
  { year: '2027', name: 'AFC Asian Cup Saudi Arabia 2027™', pos: 'bottom' },
  { year: '2026', name: 'F1 Gran Premio de España 2026', location: 'Madrid, Spain', pos: 'top' },
  { year: '2026', name: 'PFL Madrid\n(Professional Fighters League)', location: 'Madrid, Spain', pos: 'bottom' },
  { year: '2026', name: 'AFC Women’s Asian Cup Australia 2026™', pos: 'top' },
  { year: '2025', name: 'TotalEnergies CAF Africa Cup of Nations 2025', location: 'Morocco', pos: 'top' },
  { year: '2025', name: 'AFC Champions League Elite™', location: 'Saudi Arabia', pos: 'bottom' },
  { year: '2025', name: 'F1 British Grand Prix', location: 'Silverstone, UK', role: 'White-label services', pos: 'top', muted: true },
  { year: '2024', name: 'FIFA Intercontinental Cup 2024™', location: 'Qatar', role: 'Official Hospitality — White-label', pos: 'bottom', muted: true },
  { year: '2023', name: 'AFC Asian Cup™', location: 'Qatar', pos: 'top' },
  { year: '2023', name: 'FIFA Women’s World Cup™', location: 'Australia & New Zealand', pos: 'bottom' },
  { year: '2022', name: 'FIFA World Cup™', location: 'Qatar', pos: 'top' },
  { year: '2020 – current', name: 'F1 British Grand Prix', location: 'Silverstone, UK', pos: 'bottom' },
  { year: '2020', name: 'UEFA EUROS', location: 'Multi-country', role: 'Official Hospitality Sales Agent', pos: 'top', muted: true },
  { year: '2019', name: 'FIFA Women’s World Cup™', location: 'France', pos: 'bottom' },
  { year: '2018', name: 'FIFA World Cup™', location: 'Russia', pos: 'top' },
  { year: '2017', name: 'FIFA Confederations Cup', location: 'Russia', pos: 'bottom' },
  { year: '2015 – 2017', name: 'F1 Paddock Club', role: 'Official Distributor', pos: 'top', muted: true },
  { year: '2015', name: 'FIFA Women’s World Cup™', location: 'Canada', pos: 'bottom' },
  { year: '2014 – 2019', name: 'ATP Finals', location: 'London, UK', pos: 'top' },
  { year: '2014', name: 'FIFA World Cup™', location: 'Brazil', pos: 'bottom' },
  { year: '2013', name: 'FIFA Confederations Cup', location: 'Brazil', pos: 'top' },
  { year: '2012 – 2016', name: 'Roland Garros', location: 'France', role: 'Official Hospitality Sales Agent', pos: 'bottom', muted: true },
  { year: '2012', name: 'UEFA EUROS', location: 'Poland & Ukraine', role: 'Official Hospitality Sales Agent', pos: 'top', muted: true },
  { year: '2011', name: 'FIFA Women’s World Cup™', location: 'Germany', pos: 'bottom' },
  { year: '2010', name: 'FIFA World Cup™', location: 'South Africa', pos: 'top' },
  { year: '2009', name: 'FIFA Confederations Cup', location: 'South Africa', pos: 'bottom' },
  { year: '2007', name: 'MATCH Hospitality\nIncorporation', location: 'Switzerland', pos: 'top' },
];

function Timeline() {
  const rail = React.useRef(null);
  const drag = React.useRef({ down: false, startX: 0, startScroll: 0 });
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);

  React.useEffect(() => {
    const el = rail.current; if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth - 1;
      setAtStart(el.scrollLeft <= 0);
      setAtEnd(el.scrollLeft >= max);
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { el.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);

  const step = () => Math.max((rail.current ? rail.current.clientWidth : 600) - 280, 320);
  const go = (dir) => rail.current && rail.current.scrollBy({ left: dir * step(), behavior: 'smooth' });
  const onDown = (e) => { const el = rail.current; if (!el) return; drag.current = { down: true, startX: e.pageX, startScroll: el.scrollLeft }; el.classList.add('is-dragging'); };
  const onMove = (e) => { const el = rail.current; if (!el || !drag.current.down) return; e.preventDefault(); el.scrollLeft = drag.current.startScroll - (e.pageX - drag.current.startX) * 1.2; };
  const endDrag = () => { const el = rail.current; if (el) el.classList.remove('is-dragging'); drag.current.down = false; };

  return (
    <section className="section" id="history">
      <Container>
        <SectionHead
          eyebrow="Through the years"
          title="A track record built over decades."
          copy="From the group’s beginnings to the events on the horizon — drag along the line to explore."
        />
      </Container>
      <div className="tl reveal">
        <div className="tl__viewport">
          <div className="tl__rail" ref={rail} tabIndex={0}
            onMouseDown={onDown} onMouseMove={onMove} onMouseUp={endDrag} onMouseLeave={endDrag}>
            <div className="tl__track">
              {TIMELINE.map((e, i) => (
                <div className={'tl-event tl-event--' + e.pos + (e.muted ? ' tl-event--muted' : '')} key={i}>
                  <span className="tl-event__dot"></span>
                  <div className="tl-event__label">
                    <p className="tl-event__year">{e.year}</p>
                    <p className="tl-event__name">
                      {e.name.split('\n').map((s, k) => <React.Fragment key={k}>{k > 0 && <br />}{s}</React.Fragment>)}
                    </p>
                    {e.location && <p className="tl-event__location">{e.location}</p>}
                    {e.role && <p className="tl-event__role">{e.role}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className={'tl__arrow tl__arrow--prev' + (atStart ? ' is-disabled' : '')} aria-label="Previous" onClick={() => go(-1)}>
            <svg viewBox="0 0 56 24"><polyline points="12,5 3,12 12,19" /><line x1="3" y1="12" x2="53" y2="12" /></svg>
          </button>
          <button className={'tl__arrow tl__arrow--next' + (atEnd ? ' is-disabled' : '')} aria-label="Next" onClick={() => go(1)}>
            <svg viewBox="0 0 56 24"><polyline points="44,5 53,12 44,19" /><line x1="3" y1="12" x2="53" y2="12" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
