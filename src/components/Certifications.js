import data from '../data';
import { SectionTitle, Card } from './UI';

export default function Certifications() {
  return (
    <div>
      <SectionTitle icon="📜" title="Certifications" />
      {data.certifications.map((c, i) => (
        <Card key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 8,
            background: 'rgba(42,157,111,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 22, flexShrink: 0,
          }}>{c.icon}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{c.title}</div>
            <div style={{ fontSize: 11, color: 'var(--text2)', marginTop: 3 }}>{c.org}</div>
          </div>
          {c.url && (
            <a href={c.url} target="_blank" rel="noreferrer"
              style={{ fontSize: 11, color: 'var(--green)', textDecoration: 'none', whiteSpace: 'nowrap', border: '1px solid var(--green)', padding: '4px 10px', borderRadius: 20 }}>
              View Certificate
            </a>
          )}
        </Card>
      ))}
    </div>
  );
}
