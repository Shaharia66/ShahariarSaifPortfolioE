import data from '../data';
import { SectionTitle } from './UI';

export default function Projects() {
  return (
    <div>
      <SectionTitle icon="💻" title="Projects" />
      <div className="proj-grid">
        {data.projects.map((p, i) => (
          <div key={i} style={{
            background: 'var(--navy2)', border: '1px solid var(--navy3)',
            borderRadius: 10, padding: 16
          }}>
            <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--text)', marginBottom: 4 }}>{p.title}</div>
            <div style={{ fontSize: 11, color: 'var(--grey)', marginBottom: 8 }}>{p.date}</div>
            <div style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.6 }}>{p.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
