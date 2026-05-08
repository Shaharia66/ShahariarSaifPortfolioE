import data from '../data';
import { Tag, SectionTitle, Card } from './UI';

export default function About() {
  return (
    <div>
      <SectionTitle icon="👤" title="About Me" />

      <Card style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
        <div style={{
          width: 72, height: 72, borderRadius: '50%', background: 'var(--green)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 26, fontWeight: 600, color: '#fff', flexShrink: 0,
        }}>GSH</div>
        <div>
          <div style={{ fontSize: 20, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>{data.name}</div>
          <div style={{ fontSize: 12, color: 'var(--green)' }}>EEE Graduate · SUST, Sylhet</div>
          <div style={{ display: 'flex', gap: 12, marginTop: 8, flexWrap: 'wrap' }}>
            <a href={data.linkedin} target="_blank" rel="noreferrer" style={{ fontSize: 11, color: 'var(--text2)', textDecoration: 'none' }}>🔗 LinkedIn</a>
            <a href={data.portfolio} target="_blank" rel="noreferrer" style={{ fontSize: 11, color: 'var(--text2)', textDecoration: 'none' }}>🌐 Portfolio</a>
            <a href={data.emailHref} style={{ fontSize: 11, color: 'var(--text2)', textDecoration: 'none' }}>✉️ Email</a>
          </div>
        </div>
      </Card>

      <div style={{
        background: 'var(--navy2)', borderLeft: '3px solid var(--green)',
        borderRadius: '0 10px 10px 0', padding: '18px 20px',
        fontSize: 13, color: 'var(--text2)', lineHeight: 1.9, marginBottom: 20,
      }}>
        {data.objective}
      </div>

      <div className="stats-grid">
        {[['3.34','CGPA / 4.00'],['4+','Projects completed'],['2','Certifications']].map(([n,l]) => (
          <Card key={l} style={{ textAlign: 'center', marginBottom: 0 }}>
            <div style={{ fontSize: 26, fontWeight: 600, color: 'var(--green)', marginBottom: 4 }}>{n}</div>
            <div style={{ fontSize: 11, color: 'var(--text2)' }}>{l}</div>
          </Card>
        ))}
      </div>

      <Card style={{ marginTop: 20 }}>
        <div style={{ fontSize: 11, color: 'var(--green)', fontWeight: 600, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Areas of Interest
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {data.interests.map(i => <Tag key={i} label={i} />)}
        </div>
      </Card>
    </div>
  );
}
