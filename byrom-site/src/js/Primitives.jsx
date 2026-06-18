/* Byrom Home — shared primitives. Exports to window. */

function Container({ children, className = '', ...rest }) {
  return <div className={'container ' + className} {...rest}>{children}</div>;
}

function Eyebrow({ children }) {
  return <span className="eyebrow">{children}</span>;
}

function Btn({ children, primary, href = '#', icon }) {
  return (
    <a href={href} className={'btn ' + (primary ? 'btn--primary' : 'btn--secondary')}>
      {children}{icon && <i data-lucide={icon}></i>}
    </a>
  );
}

function TLink({ children, href = '#' }) {
  return <a href={href} className="tlink">{children}<i data-lucide="arrow-right"></i></a>;
}

/* Photography slot. Pass `src` for a real image; falls back to a styled
   placeholder if the image is missing or fails to load. */
function Photo({ tag, src, alt = '', className = '', style }) {
  const [failed, setFailed] = React.useState(false);
  if (src && !failed) {
    return <img className={'photo photo--img ' + className} src={src} alt={alt} style={style} onError={() => setFailed(true)} />;
  }
  return (
    <div className={'photo ' + className} style={style}>
      <span className="photo__ph" aria-hidden="true"><i data-lucide="image"></i></span>
      {tag && <span className="photo__tag">{tag}</span>}
    </div>
  );
}

function Stat({ num, label }) {
  return (
    <div className="stat">
      <div className="stat__num">{num}</div>
      <div className="stat__label">{label}</div>
    </div>
  );
}

/* Reusable centered popup. variant="panel" (text) or "lightbox" (image). */
function Modal({ open, onClose, variant = 'panel', children }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [open, onClose]);
  if (!open) return null;
  const closeBtn = (
    <button className={'modal__close modal__close--' + variant} aria-label="Close" onClick={onClose}>
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  );
  return (
    <div className={'modal modal--' + variant} role="dialog" aria-modal="true">
      <div className="modal__scrim" onClick={onClose}></div>
      {variant === 'lightbox'
        ? <div className="modal__frame">{closeBtn}{children}</div>
        : <div className="modal__panel">{closeBtn}<div className="modal__body">{children}</div></div>}
    </div>
  );
}

function SectionHead({ eyebrow, title, copy, center }) {
  return (
    <div className={'shead' + (center ? ' shead--center' : '')}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

Object.assign(window, { Container, Eyebrow, Btn, TLink, Photo, Stat, SectionHead, Modal });
