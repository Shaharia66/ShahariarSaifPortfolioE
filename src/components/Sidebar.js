import data from '../data';

const NAV = [
  { id: 'about',          label: 'About',          icon: '👤' },
  { id: 'education',      label: 'Education',      icon: '🎓' },
  { id: 'research',       label: 'Research',       icon: '🔬' },
  { id: 'industrial',     label: 'Industrial',     icon: '🏭' },
  { id: 'projects',       label: 'Projects',       icon: '💻' },
  { id: 'skills',         label: 'Skills',         icon: '🛠' },
  { id: 'certifications', label: 'Certifications', icon: '📜' },
  { id: 'contact',        label: 'Contact',        icon: '✉️' },
];

export default function Sidebar({ active, onSelect, isOpen, onClose }) {
  return (
    <>
      <div onClick={onClose} className={`sb-overlay ${isOpen ? 'sb-overlay--visible' : ''}`} />
      <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>

        <div style={{ padding: '28px 20px 20px', borderBottom: '1px solid var(--navy3)', textAlign: 'center', position: 'relative' }}>
          <button className="sb-close-btn" onClick={onClose} aria-label="Close">✕</button>
          <div style={{
            width: 68, height: 68, borderRadius: '50%', background: 'var(--green)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 22, fontWeight: 600, color: '#fff', margin: '0 auto 12px',
          }}>GSH</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', lineHeight: 1.4 }}>{data.name}</div>
          <div style={{ fontSize: 11, color: 'var(--text2)', marginTop: 5, lineHeight: 1.5 }}>{data.tagline}</div>
          {/* LinkedIn + Portfolio quick links */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 10 }}>
            <a href={data.linkedin} target="_blank" rel="noreferrer" title="LinkedIn"
              style={{ fontSize: 18, textDecoration: 'none' }}>🔗</a>
            <a href={data.portfolio} target="_blank" rel="noreferrer" title="Portfolio Website"
              style={{ fontSize: 18, textDecoration: 'none' }}>🌐</a>
          </div>
        </div>

        <nav style={{ padding: '16px 0', flex: 1 }}>
          {NAV.map(n => (
            <div key={n.id} onClick={() => { onSelect(n.id); onClose(); }} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '11px 20px', cursor: 'pointer',
              color: active === n.id ? 'var(--green)' : 'var(--text2)',
              fontSize: 13,
              borderLeft: active === n.id ? '3px solid var(--green)' : '3px solid transparent',
              background: active === n.id ? 'var(--navy3)' : 'transparent',
              transition: 'all 0.15s',
            }}>
              <span>{n.icon}</span> {n.label}
            </div>
          ))}
        </nav>

        <div style={{ padding: '16px 20px', borderTop: '1px solid var(--navy3)' }}>
          <a href={data.emailHref} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text2)', fontSize: 11, textDecoration: 'none', marginBottom: 8 }}>✉️ {data.email}</a>
          <a href={data.phoneHref} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text2)', fontSize: 11, textDecoration: 'none', marginBottom: 8 }}>📞 {data.phone}</a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text2)', fontSize: 11 }}>📍 {data.location}</div>
        </div>
      </div>
    </>
  );
}
