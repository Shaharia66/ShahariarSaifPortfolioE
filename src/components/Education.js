import data from '../data';
import { Tag, SectionTitle, Card, Badge } from './UI';

export default function Education() {
  return (
    <div>
      <SectionTitle icon="🎓" title="Education" />
      {data.education.map((e, i) => (
        <Card key={i} style={{ display: 'flex', gap: 16 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 10,
            background: 'rgba(42,157,111,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20, flexShrink: 0,
          }}>{e.icon}</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
              {e.degreeUrl ? (
                <a href={e.degreeUrl} target="_blank" rel="noreferrer" style={{ fontWeight: 600, fontSize: 14, color: 'var(--green)', textDecoration: 'none' }}>{e.degree}</a>
              ) : (
                <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)' }}>{e.degree}</div>
              )}
              <Badge label={e.period} />
            </div>
            {e.schoolUrl ? (
              <a href={e.schoolUrl} target="_blank" rel="noreferrer" style={{ fontSize: 12, color: 'var(--text2)', fontStyle: 'italic', marginBottom: 4, display: 'block', textDecoration: 'none' }}>{e.school}</a>
            ) : (
              <div style={{ fontSize: 12, color: 'var(--text2)', fontStyle: 'italic', marginBottom: 4 }}>{e.school}</div>
            )}
            <div style={{ fontSize: 11, color: 'var(--grey)', marginBottom: 8 }}>📍 {e.location}</div>
            <span style={{ fontSize: 12, background: 'rgba(42,157,111,0.12)', color: 'var(--green)', padding: '4px 12px', borderRadius: 20, display: 'inline-block' }}>
              ⭐ {e.grade}
            </span>
          </div>
        </Card>
      ))}
      <Card>
        <div style={{ fontSize: 11, color: 'var(--green)', fontWeight: 600, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Relevant Coursework
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {data.coursework.map(c => <Tag key={c} label={c} />)}
        </div>
      </Card>
    </div>
  );
}
