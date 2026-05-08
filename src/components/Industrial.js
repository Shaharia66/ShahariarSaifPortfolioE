import data from '../data';
import { SectionTitle, Card, Badge } from './UI';

export default function Industrial() {
  return (
    <div>
      <SectionTitle icon="🏭" title="Industrial Experience" />
      {data.industrial.map((item, i) => (
        <Card key={i}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
            <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)' }}>{item.title}</div>
            <Badge label={item.period} />
          </div>

          {/* Org with link */}
          {item.orgUrl ? (
            <a href={item.orgUrl} target="_blank" rel="noreferrer"
              style={{ fontSize: 12, color: 'var(--green)', fontStyle: 'italic', marginBottom: 4, display: 'block', textDecoration: 'none' }}>
              🔗 {item.org}
            </a>
          ) : (
            <div style={{ fontSize: 12, color: 'var(--text2)', fontStyle: 'italic', marginBottom: 4 }}>{item.org}</div>
          )}

          {item.location && (
            <div style={{ fontSize: 11, color: 'var(--grey)', marginBottom: 10 }}>📍 {item.location}</div>
          )}

          <ul style={{ listStyle: 'none', padding: 0 }}>
            {item.bullets.map((b, j) => {
              const isObj = typeof b === 'object';
              return (
                <li key={j} style={{ fontSize: 12, color: 'var(--text2)', padding: '3px 0 3px 16px', position: 'relative', lineHeight: 1.6 }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--green)' }}>▸</span>
                  {isObj ? (
                    <a href={b.url} target="_blank" rel="noreferrer" style={{ color: 'var(--green)', textDecoration: 'none' }}>
                      🔗 {b.text}
                    </a>
                  ) : b}
                </li>
              );
            })}
          </ul>
        </Card>
      ))}
    </div>
  );
}
