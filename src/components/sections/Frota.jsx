import { Info } from 'lucide-react';
import { getIcon } from '../../utils/icons.js';
import { useContent } from '../../i18n/LanguageContext.jsx';
import { frota } from '../../data/frota.js';
import SectionTitle from '../ui/SectionTitle.jsx';
import styles from './Frota.module.css';

export function Frota() {
  const pt = useContent();

  return (
    <section id="frota" className="section section--tint">
      <div className="container">
        <SectionTitle
          eyebrow={pt.fleet.eyebrow}
          title={pt.fleet.title}
          subtitle={pt.fleet.subtitle}
        />

        <div className={styles.grid}>
          {frota.map((v, i) => {
            const Icon = getIcon(v.icon);
            const item = pt.fleet.items[v.id] || {};
            return (
              <article
                key={v.id}
                className={styles.card}
                data-reveal
                data-reveal-delay={(i % 4) + 1}
              >
                <div className={styles.media}>
                  {v.image ? (
                    <img src={v.image} alt={item.nome} loading="lazy" className={styles.img} />
                  ) : (
                    <span className={styles.placeholder} aria-hidden="true">
                      <Icon size={54} strokeWidth={1.4} />
                    </span>
                  )}
                </div>
                <div className={styles.body}>
                  <h3 className={styles.name}>{item.nome}</h3>
                  <p className={styles.specs}>{item.specs}</p>
                </div>
              </article>
            );
          })}
        </div>

        <p className={styles.note}>
          <Info size={16} strokeWidth={2} /> {pt.fleet.note}
        </p>
      </div>
    </section>
  );
}

export default Frota;
