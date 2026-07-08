import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { getIcon } from '../../utils/icons.js';
import { pt } from '../../content/pt.js';
import { servicos } from '../../data/servicos.js';
import { prefillCargo } from '../../utils/quotePrefill.js';
import SectionTitle from '../ui/SectionTitle.jsx';
import ServiceModal from './ServiceModal.jsx';
import styles from './Servicos.module.css';

export function Servicos() {
  const [modal, setModal] = useState(null);

  const goToQuote = (cargo) => {
    prefillCargo(cargo);
    window.location.hash = '#cotacao';
  };

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
              <article
                key={s.id}
                className={`${styles.card} ${styles[s.accent]}`}
                data-reveal
                data-reveal-delay={(i % 3) + 1}
                onClick={() => goToQuote(s.cargo)}
              >
                <span className={styles.iconWrap}>
                  <Icon size={22} strokeWidth={2} />
                </span>
                <span className={styles.subtitle}>{s.subtitle}</span>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.text}>{s.text}</p>

                <div className={styles.actions}>
                  <a
                    href="#cotacao"
                    className={styles.cta}
                    onClick={(e) => {
                      e.stopPropagation();
                      prefillCargo(s.cargo);
                    }}
                  >
                    Solicitar cotação
                    <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    className={styles.detail}
                    onClick={(e) => {
                      e.stopPropagation();
                      setModal(s);
                    }}
                  >
                    Ver detalhes
                    <ArrowRight size={13} strokeWidth={2.2} aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ServiceModal
        service={modal}
        onClose={() => setModal(null)}
        onQuote={(cargo) => {
          setModal(null);
          goToQuote(cargo);
        }}
      />
    </section>
  );
}

export default Servicos;
