import data from '../data';
import { SectionTitle, Card } from './UI';

export default function Contact() {
  return (
    <div>
      <SectionTitle icon="✉️" title="Contact & References" />

      <div style={{ marginBottom: 24 }}>
        {[
          ['✉️', 'Email',    data.email,    data.emailHref],
          ['📞', 'Phone',    data.phone,    data.phoneHref],
          ['🔗', 'LinkedIn', 'Gazi Shahariar Hasan', data.linkedin],
          ['🌐', 'Portfolio','portfoliowebsiteshahariarsaif.netlify.app', data.portfolio],
          ['📍', 'Location', data.location, null],
        ].map(([icon, label, val, href]) => (
          <Card key={label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 18, width: 28 }}>{icon}</span>
            <div>
              <div style={{ fontSize: 11, color: 'var(--text2)' }}>{label}</div>
              {href ? (
                <a href={href} target={href.startsWith('mailto') || href.startsWith('tel') ? '_self' : '_blank'} rel="noreferrer"
                  style={{ fontSize: 13, color: 'var(--green)', textDecoration: 'none' }}>{val}</a>
              ) : (
                <div style={{ fontSize: 13, color: 'var(--text)' }}>{val}</div>
              )}
            </div>
          </Card>
        ))}
      </div>

      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 12 }}>References</div>
      <div className="ref-grid">
        {data.references.map((r, i) => (
          <div key={i} style={{
            background: 'var(--navy2)', border: '1px solid var(--navy3)',
            borderRadius: 10, padding: 16,
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              background: 'rgba(42,157,111,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, fontWeight: 600, color: 'var(--green)', marginBottom: 10,
            }}>{r.initials}</div>
            {/* Name links to profile */}
            <a href={r.url} target="_blank" rel="noreferrer"
              style={{ fontSize: 13, fontWeight: 600, color: 'var(--green)', textDecoration: 'none', display: 'block', marginBottom: 2 }}>
              {r.name}
            </a>
            <div style={{ fontSize: 11, color: 'var(--text2)', lineHeight: 1.4, marginBottom: 8 }}>{r.role}</div>
            <a href={`mailto:${r.email}`} style={{ fontSize: 11, color: 'var(--text2)', textDecoration: 'none' }}>
              ✉️ {r.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
