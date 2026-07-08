import { useState, useRef, Fragment } from 'react';
import styles from './LangSwitch.module.css';

const LANGS = ['PT', 'ES', 'EN'];
const ACTIVE = 'PT';

/**
 * Seletor de idiomas — PT ativo; ES/EN preparados (mostram "Versão em breve").
 * variant: 'light' (sobre fundo escuro) | 'dark' (header claro/rolado).
 * Sem bandeiras, apenas texto em mono. Vermelho escasso (sublinhado do ativo).
 */
export function LangSwitch({ variant = 'light', className = '' }) {
  const [notice, setNotice] = useState(false);
  const timer = useRef();

  const handleClick = (lang) => {
    if (lang === ACTIVE) return;
    setNotice(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setNotice(false), 2200);
  };

  return (
    <div
      className={`${styles.wrap} ${variant === 'light' ? styles.light : ''} ${className}`}
      role="group"
      aria-label="Seletor de idioma"
    >
      {LANGS.map((lang, i) => (
        <Fragment key={lang}>
          {i > 0 && (
            <span className={styles.sep} aria-hidden="true">
              /
            </span>
          )}
          <button
            type="button"
            className={`${styles.lang} ${lang === ACTIVE ? styles.active : ''}`}
            onClick={() => handleClick(lang)}
            aria-current={lang === ACTIVE ? 'true' : undefined}
            aria-label={`Idioma ${lang}${lang === ACTIVE ? ' (ativo)' : ' — em breve'}`}
          >
            {lang}
          </button>
        </Fragment>
      ))}

      <span
        className={`${styles.notice} ${notice ? styles.noticeShow : ''}`}
        role="status"
        aria-live="polite"
      >
        {notice ? 'Versão em breve' : ''}
      </span>
    </div>
  );
}

export default LangSwitch;
