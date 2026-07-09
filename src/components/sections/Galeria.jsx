import { Image as ImageIcon } from 'lucide-react';
import { useContent } from '../../i18n/LanguageContext.jsx';
import { galeria } from '../../data/galeria.js';
import SectionTitle from '../ui/SectionTitle.jsx';
import styles from './Galeria.module.css';

export function Galeria() {
  const pt = useContent();

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow={pt.gallery.eyebrow}
          title={pt.gallery.title}
          subtitle={pt.gallery.subtitle}
        />

        <div className={styles.mosaic}>
          {galeria.map((t, i) => {
            const label = pt.gallery.tiles[t.id] || '';
            return (
              <figure
                key={t.id}
                className={`${styles.tile} ${t.span ? styles[t.span] : ''}`}
                data-reveal
                data-reveal-delay={(i % 4) + 1}
              >
                {t.image ? (
                  <>
                    <img src={t.image} alt={label} loading="lazy" className={styles.img} />
                    <span className={styles.grade} aria-hidden="true" />
                  </>
                ) : (
                  <span className={styles.placeholder} aria-hidden="true">
                    <ImageIcon size={26} strokeWidth={1.5} />
                    <span className={styles.tag}>{pt.ui.editable}</span>
                  </span>
                )}
                <figcaption className={styles.caption}>{label}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Galeria;
