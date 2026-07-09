import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import pt from '../content/pt.js';
import es from '../content/es.js';

/* =====================================================================
   i18n — provedor de idioma.
   Idiomas disponíveis: pt (padrão) e es. EN entra no futuro.
   Persiste a escolha em localStorage e ajusta <html lang>.
   ===================================================================== */

const BUNDLES = { pt, es };
const STORAGE_KEY = 'mondel_lang';
const HTML_LANG = { pt: 'pt-BR', es: 'es' };

const LanguageContext = createContext({ lang: 'pt', setLang: () => {}, c: pt });

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'pt';
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved && BUNDLES[saved] ? saved : 'pt';
  });

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang] || 'pt-BR';
  }, [lang]);

  const setLang = useCallback((l) => {
    if (!BUNDLES[l]) return;
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(() => ({ lang, setLang, c: BUNDLES[lang] || pt }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/** Retorna { lang, setLang }. */
export function useLang() {
  const { lang, setLang } = useContext(LanguageContext);
  return { lang, setLang };
}

/** Retorna o bundle de conteúdo do idioma ativo (mesma forma do pt.js). */
export function useContent() {
  return useContext(LanguageContext).c;
}

export default LanguageContext;
