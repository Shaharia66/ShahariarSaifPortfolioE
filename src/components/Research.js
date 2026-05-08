import data from '../data';
import { SectionTitle, Card, Badge, BulletList } from './UI';

export default function Research() {
  return (
    <div>
      <SectionTitle icon="🔬" title="Research Experience" />
      {data.research.map((r, i) => (
        <Card key={i}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
            <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)' }}>{r.title}</div>
            <Badge label={r.period} />
          </div>

          {/* Clickable paper title */}
          <a
            href={r.subtitleUrl}
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: 12, color: 'var(--green)', fontStyle: 'italic', marginBottom: 12, display: 'block', textDecoration: 'none', lineHeight: 1.6 }}
          >
            🔗 {r.subtitle}
          </a>

          {/* Supervisors with links */}
          <div style={{ marginBottom: 12 }}>
            {r.supervisors.map((sv, j) => (
              <div key={j} style={{ fontSize: 11, color: 'var(--text2)', marginBottom: 5 }}>
                👤{' '}
                <a href={sv.url} target="_blank" rel="noreferrer" style={{ color: 'var(--green)', textDecoration: 'none', fontWeight: 600 }}>
                  {sv.name}
                </a>
                {' '}— {sv.role}
                <span style={{ color: 'var(--green)', marginLeft: 6 }}>· {sv.period}</span>
              </div>
            ))}
          </div>

          <BulletList items={r.bullets} />
        </Card>
      ))}
    </div>
  );
}
