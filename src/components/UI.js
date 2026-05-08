export function Tag({ label }) {
  return (
    <span style={{
      background: 'var(--navy3)', color: 'var(--text2)', fontSize: 11,
      padding: '4px 11px', borderRadius: 20,
      border: '1px solid rgba(42,157,111,0.2)', display: 'inline-block'
    }}>
      {label}
    </span>
  );
}

export function SectionTitle({ icon, title }) {
  return (
    <>
      <div style={{ fontSize: 20, fontWeight: 600, color: 'var(--text)', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span>{icon}</span> {title}
      </div>
      <div style={{ height: 2, background: 'linear-gradient(to right, var(--green), transparent)', marginBottom: 24, marginTop: 6 }} />
    </>
  );
}

export function Card({ children, style }) {
  return (
    <div style={{
      background: 'var(--navy2)', border: '1px solid var(--navy3)',
      borderRadius: 10, padding: '18px 20px', marginBottom: 14, ...style
    }}>
      {children}
    </div>
  );
}

export function Badge({ label }) {
  return (
    <span style={{
      fontSize: 11, color: 'var(--green)', background: 'rgba(42,157,111,0.12)',
      padding: '3px 10px', borderRadius: 20, whiteSpace: 'nowrap',
      marginLeft: 10, flexShrink: 0
    }}>
      {label}
    </span>
  );
}

export function BulletList({ items }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {items.map((b, i) => (
        <li key={i} style={{ fontSize: 12, color: 'var(--text2)', padding: '3px 0 3px 16px', position: 'relative', lineHeight: 1.6 }}>
          <span style={{ position: 'absolute', left: 0, color: 'var(--green)' }}>▸</span>
          {b}
        </li>
      ))}
    </ul>
  );
}
