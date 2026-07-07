import { MapPin, Star } from 'lucide-react';
import { pt } from '../../content/pt.js';
import { oficinas } from '../../data/oficinas.js';
import SectionTitle from '../ui/SectionTitle.jsx';
import styles from './RedeEscritorios.module.css';

export function RedeEscritorios() {
  return (
    <section id="atuacao" className="section section--tint">
      <div className="container">
        <SectionTitle
          eyebrow={pt.offices.eyebrow}
          title={pt.offices.title}
          subtitle={pt.offices.subtitle}
          align="center"
        />

        <div className={styles.grid}>
          {oficinas.map((o, i) => (
            <article
              key={o.id}
              className={`${styles.card} ${o.principal ? styles.principal : ''}`}
              data-reveal
              data-reveal-delay={i + 1}
            >
              {o.principal && (
                <span className={styles.badge}>
                  <Star size={13} strokeWidth={2.4} /> Matriz
                </span>
              )}
              <span className={styles.flag} aria-hidden="true">
                {o.flag}
              </span>
              <h3 className={styles.country}>{o.pais}</h3>
              <span className={styles.city}>{o.cidade}</span>
              <p className={styles.address}>
                <MapPin size={16} strokeWidth={2} />
                {o.endereco}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RedeEscritorios;
