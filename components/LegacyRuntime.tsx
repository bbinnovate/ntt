'use client';

import { useEffect } from 'react';
import { isLegacyPage, legacyPagePath } from '@/lib/routes';

declare global {
  interface Window {
    goPage?: (id: string) => void;
    toggleFaq?: (element: Element) => void;
    switchCur?: (tab: Element, id: string) => void;
    switchS?: (tab: Element, id: string) => void;
  }
}

export function LegacyRuntime() {
  useEffect(() => {
    const footerTemplate = () => document.querySelector<HTMLTemplateElement>('#footer-tpl')?.innerHTML ?? '';
    window.goPage = (id) => {
      if (isLegacyPage(id)) {
        window.location.assign(legacyPagePath(id));
        return;
      }
      const target = document.querySelector<HTMLElement>(`#page-${id}`);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    window.toggleFaq = (element) => element.classList.toggle('open');
    window.switchCur = (tab, id) => {
      const root = tab.closest('section');
      if (!root) return;
      root.querySelectorAll('.cur-tab').forEach((item) => item.classList.remove('active'));
      root.querySelectorAll('.cur-panel').forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');
      root.querySelector(`#cur-${id}`)?.classList.add('active');
    };
    window.switchS = (tab, id) => {
      const root = tab.closest('section');
      if (!root) return;
      root.querySelectorAll('.s-tab').forEach((item) => item.classList.remove('active'));
      root.querySelectorAll('.s-panel').forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');
      root.querySelector(`#s-${id}`)?.classList.add('active');
    };
    const homeFooter = document.querySelector<HTMLElement>('#home-footer');
    if (homeFooter) homeFooter.outerHTML = footerTemplate();
    return () => {
      delete window.goPage;
      delete window.toggleFaq;
      delete window.switchCur;
      delete window.switchS;
    };
  }, []);

  return null;
}
