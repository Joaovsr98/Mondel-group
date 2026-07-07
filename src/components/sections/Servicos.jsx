import { ArrowRight } from 'lucide-react';
import { getIcon } from '../../utils/icons.js';
import { pt } from '../../content/pt.js';
import { servicos } from '../../data/servicos.js';
import { prefillCargo } from '../../utils/quotePrefill.js';
import SectionTitle from '../ui/SectionTitle.jsx';
import styles from './Servicos.module.css';

export function Servicos() {
  return (
    <section id="servicos" className="section section--tint">
      <div className="container">
        <SectionTitle
          eyebrow={pt.services.eyebrow}
          title={pt.services.title}
          subtitle={pt.services.subtitle}
          align="center"
        />

        <div className={styles.grid}>
          {servicos.map((s, i) => {
            const Icon = getIcon(s.icon);
            return (
              <a
                key={s.id}
                href="#cotacao"
                onClick={() => prefillCargo(s.cargo)}
                className={`${styles.card} ${styles[s.accent]}`}
                data-reveal
                data-reveal-delay={(i % 3) + 1}
                aria-label={`${s.title} — solicitar cotação`}
              >
                <span className={styles.iconWrap}>
                  <Icon size={28} strokeWidth={2} />
                </span>
                <span className={styles.subtitle}>{s.subtitle}</span>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.text}>{s.text}</p>
                <span className={styles.cta}>
                  Solicitar cotação
                  <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Servicos;
