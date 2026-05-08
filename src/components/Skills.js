import data from '../data';
import { Tag, SectionTitle, Card } from './UI';

export default function Skills() {
  return (
    <div>
      <SectionTitle icon="🛠" title="Technical Skills" />
      <div className="skill-grid">
        {data.skills.map((sk, i) => (
          <Card key={i} style={{ marginBottom: 0 }}>
            <div style={{ fontSize: 11, color: 'var(--green)', fontWeight: 600, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {sk.label}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {sk.items.map(item => <Tag key={item} label={item} />)}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
