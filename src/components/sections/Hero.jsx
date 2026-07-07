import { FileText, MessageCircle } from 'lucide-react';
import { pt } from '../../content/pt.js';
import { whatsappLink } from '../../utils/contactLinks.js';
import Button from '../ui/Button.jsx';
import styles from './Hero.module.css';

export function Hero() {
  const { hero } = pt;

  return (
    <section id="inicio" className={styles.hero}>
      {/* Fundo: navy + cartografia (curvas de nível) + linha-rota da marca */}
      <div className={styles.bg} aria-hidden="true">
        <svg className={styles.map} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <g className={styles.contours}>
            <path d="M-50 240 C 260 180, 520 300, 820 220 S 1300 120, 1500 210" />
            <path d="M-50 350 C 300 300, 560 420, 900 320 S 1320 240, 1500 320" />
            <path d="M-50 480 C 320 440, 620 560, 980 440 S 1340 380, 1500 450" />
            <path d="M-50 630 C 300 600, 640 700, 1020 600 S 1360 560, 1500 620" />
          </g>
          {/* Linha-rota — o fio da marca. Desenha uma vez ao carregar. */}
          <path
            className={styles.route}
            d="M 772 706 C 908 636, 1004 566, 1124 512 C 1244 458, 1330 372, 1424 292"
          />
          <g className={styles.nodes}>
            <circle className={styles.node} cx="772" cy="706" r="4.5" />
            <circle className={`${styles.node} ${styles.nodeMain}`} cx="1124" cy="512" r="6.5" />
            <circle className={styles.node} cx="1424" cy="292" r="4.5" />
          </g>
        </svg>
        <div className={styles.vignette} />
      </div>

      <div className={`container ${styles.inner}`}>
        <span className={styles.eyebrow}>{hero.eyebrow}</span>
        <h1 className={styles.title}>{hero.title}</h1>
        <p className={styles.subtitle}>{hero.subtitle}</p>

        <div className={styles.ctas}>
          <Button href="#cotacao" variant="primary" size="lg" icon={FileText}>
            {hero.ctaPrimary}
          </Button>
          <Button
            href={whatsappLink(pt.whatsappFloat.message)}
            variant="ghost"
            size="lg"
            icon={MessageCircle}
            external
          >
            {hero.ctaSecondary}
          </Button>
        </div>

        <dl className={styles.stats}>
          {hero.stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <dt className={styles.statValue}>{s.value}</dt>
              <dd className={styles.statLabel}>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a href="#travessia" className={styles.scroll} aria-label="Rolar para A Travessia">
        <span className={styles.mouse} aria-hidden="true">
          <span className={styles.wheel} />
        </span>
      </a>
    </section>
  );
}

export default Hero;
