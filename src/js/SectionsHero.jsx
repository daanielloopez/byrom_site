/* Byrom Home — Hero (Direction A), Intro statement, Stats band */

function Hero() {
  return (
    <section className="hero" id="top">
      <Container>
        <div className="hero__grid">
          <div className="hero__copy">
            <div className="hero__in" style={{ '--i': 0 }}>
              <Eyebrow>Global sports event management &amp; consultancy</Eyebrow>
            </div>
            <h1 className="hero__title hero__in" style={{ '--i': 1 }}>Where every experience counts.</h1>
            <p className="hero__sub hero__in" style={{ '--i': 2 }}>
              For over 30 years, Byrom has delivered ticketing, accommodation, hospitality,
              transport and technology for the world's greatest sporting events.
            </p>
            <div className="hero__cta hero__in" style={{ '--i': 3 }}>
              <Btn primary href="#services" icon="arrow-right">Explore our services</Btn>
              <Btn href="#contact">Get in touch</Btn>
            </div>
          </div>
          <div className="hero__media hero__in" style={{ '--i': 4 }}>
            <Photo className="hero__photo" />
            <div className="hero__statcard">
              <Stat num="88" label="Major events" />
              <Stat num="7" label="FIFA World Cups" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Intro() {
  return (
    <section className="section">
      <Container>
        <p className="intro__text reveal">
          Established in 1991, <b>Byrom and its affiliated companies</b> have acquired
          unparalleled expertise in managing the world's greatest sporting events.
        </p>
      </Container>
    </section>
  );
}

const STATS = [
  ['1991', 'Established'],
  ['10', 'Global offices'],
  ['88', 'Major events'],
  ['7', 'FIFA World Cups'],
  ['19', 'Countries ticketed'],
  ['600', 'Hotels / single World Cup'],
];

function StatsBand() {
  return (
    <section className="section section--alt">
      <Container>
        <div className="stats">
          {STATS.map(([num, label], i) => (
            <div className="reveal" style={{ transitionDelay: (i * 70) + 'ms' }} key={label}>
              <Stat num={num} label={label} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { Hero, Intro, StatsBand });
