import { Image as ImageIcon } from 'lucide-react';
import { pt } from '../../content/pt.js';
import { galeria } from '../../data/galeria.js';
import SectionTitle from '../ui/SectionTitle.jsx';
import styles from './Galeria.module.css';

export function Galeria() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow={pt.gallery.eyebrow}
          title={pt.gallery.title}
          subtitle={pt.gallery.subtitle}
        />

        <div className={styles.mosaic}>
          {galeria.map((t, i) => (
            <figure
              key={t.id}
              className={`${styles.tile} ${t.span ? styles[t.span] : ''}`}
              data-reveal
              data-reveal-delay={(i % 4) + 1}
            >
              {t.image ? (
                <>
                  <img src={t.image} alt={t.label} loading="lazy" className={styles.img} />
                  <span className={styles.grade} aria-hidden="true" />
                </>
              ) : (
                <span className={styles.placeholder} aria-hidden="true">
                  <ImageIcon size={26} strokeWidth={1.5} />
                  <span className={styles.tag}>Editável — foto real</span>
                </span>
              )}
              <figcaption className={styles.caption}>{t.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Galeria;
