import { useState } from 'react';
import { Plus } from 'lucide-react';
import { pt } from '../../content/pt.js';
import { faq } from '../../data/faq.js';
import SectionTitle from '../ui/SectionTitle.jsx';
import styles from './FAQ.module.css';

export function FAQ() {
  const [open, setOpen] = useState(faq[0]?.id ?? null);

  return (
    <section className="section section--tint">
      <div className="container">
        <div className={styles.wrap}>
          <SectionTitle eyebrow={pt.faq.eyebrow} title={pt.faq.title} align="center" />

          <div className={styles.list} data-reveal>
            {faq.map((item) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id} className={`${styles.item} ${isOpen ? styles.active : ''}`}>
                  <button
                    className={styles.question}
                    onClick={() => setOpen(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.pergunta}</span>
                    <Plus className={styles.icon} size={22} strokeWidth={2.2} aria-hidden="true" />
                  </button>
                  <div className={styles.answer} style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                    <div className={styles.answerInner}>
                      <p>{item.resposta}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
