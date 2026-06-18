/* Byrom Home — Navbar (sticky, scroll-aware, mobile drawer) */

const NAV_ITEMS = [
  ['Services', '#services'],
  ['Track record', '#track-record'],
  ['Group', '#group'],
  ['Global presence', '#presence'],
];

function Navbar() {
  const [stuck, setStuck] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(NAV_ITEMS[0][1].slice(1));

  React.useEffect(() => {
    const ids = NAV_ITEMS.map(([, href]) => href.slice(1));
    const onScroll = () => {
      setStuck(window.scrollY > 24);
      // scroll-spy: la sección activa es la última cuyo inicio ya pasó el navbar
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - 140 <= 0) current = id;
      }
      // si estamos al fondo del todo, marca la última
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = ids[ids.length - 1];
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <React.Fragment>
      <header className={'nav' + (stuck ? ' is-stuck' : '')}>
        <Container className="nav__inner">
          <a href="#top" aria-label="Byrom home">
            <img className="nav__logo" src={window.BYROM_LOGO_BLUE} alt="BYROM" />
          </a>
          <nav className="nav__links">
            {NAV_ITEMS.map(([label, href]) => (
              <a key={label} href={href} className={'nav__link' + (href.slice(1) === active ? ' is-active' : '')}>{label}</a>
            ))}
            <a href="#contact" className="btn btn--primary nav__cta">Contact</a>
          </nav>
          <button className="nav__burger" aria-label="Open menu" onClick={() => setOpen(true)}>
            <i data-lucide="menu"></i>
          </button>
        </Container>
      </header>

      <div className={'nav__scrim' + (open ? ' is-open' : '')} onClick={() => setOpen(false)}></div>
      <aside className={'nav__mobile' + (open ? ' is-open' : '')}>
        <button className="nav__mclose" aria-label="Close menu" onClick={() => setOpen(false)}>
          <i data-lucide="x"></i>
        </button>
        {NAV_ITEMS.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </aside>
    </React.Fragment>
  );
}

Object.assign(window, { Navbar });
