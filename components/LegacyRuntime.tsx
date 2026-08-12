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
    let statsObserver: IntersectionObserver | undefined;
    const setupHeroStatsCounters = () => {
      const stats = Array.from(document.querySelectorAll<HTMLElement>('.hero + .stats-bar .stat-num'));
      if (!stats.length) return;

      const animateCounter = (element: HTMLElement) => {
        if (element.dataset.counterComplete === 'true') return;
        element.dataset.counterComplete = 'true';
        const finalValue = element.textContent?.trim() ?? '';
        const target = Number(finalValue.replace(/[^\d.-]/g, ''));
        if (!Number.isFinite(target)) return;
        const suffix = finalValue.match(/[^\d,.\s]+$/)?.[0] ?? '';
        const formatter = new Intl.NumberFormat('en-IN');
        const duration = 1200;
        const startedAt = performance.now();
        const update = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          element.textContent = `${formatter.format(Math.round(target * eased))}${suffix}`;
          if (progress < 1) requestAnimationFrame(update);
          else element.textContent = finalValue;
        };
        element.textContent = `0${suffix}`;
        requestAnimationFrame(update);
      };

      statsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animateCounter(entry.target as HTMLElement);
          statsObserver?.unobserve(entry.target);
        });
      }, { threshold: 0.3 });
      stats.forEach((stat) => statsObserver?.observe(stat));
    };
    const setupMobileNavigation = () => {
      const nav = document.querySelector<HTMLElement>('nav');
      const links = nav?.querySelector<HTMLElement>('.nav-links');
      const actions = nav?.querySelector<HTMLElement>('.nav-actions');
      if (!nav || !links || !actions || nav.querySelector('.nav-toggle')) return;

      const toggle = document.createElement('button');
      toggle.className = 'nav-toggle';
      toggle.type = 'button';
      toggle.setAttribute('aria-label', 'Open navigation menu');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '<span></span><span></span><span></span>';

      const menu = document.createElement('div');
      menu.className = 'nav-mobile-menu';
      const menuContent = document.createElement('div');
      menuContent.className = 'nav-mobile-menu-content';
      nav.insertBefore(toggle, links);
      nav.insertBefore(menu, actions);
      menu.appendChild(menuContent);
      menuContent.append(links, actions);

      const closeMenu = () => {
        nav.classList.remove('mobile-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation menu');
      };
      toggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('mobile-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
      });
      menu.addEventListener('click', (event) => {
        if ((event.target as Element).closest('a')) closeMenu();
      });
      links.querySelectorAll<HTMLElement>(':scope > li').forEach((item) => {
        const trigger = item.querySelector<HTMLElement>(':scope > span');
        const submenu = item.querySelector<HTMLElement>(':scope > .dropdown');
        if (!trigger || !submenu) return;
        trigger.classList.add('mobile-nav-trigger');
        trigger.setAttribute('role', 'button');
        trigger.setAttribute('tabindex', '0');
        trigger.setAttribute('aria-expanded', 'false');
        const toggleSubmenu = () => {
          const isOpen = item.classList.toggle('mobile-nav-expanded');
          trigger.setAttribute('aria-expanded', String(isOpen));
        };
        trigger.addEventListener('click', toggleSubmenu);
        trigger.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleSubmenu();
          }
        });
      });
    };
    const setupMobileFooter = () => {
      document.querySelectorAll<HTMLElement>('footer').forEach((footer) => {
        if (footer.querySelector('.mobile-footer-accordion')) return;
        const originalGrid = footer.querySelector<HTMLElement>(':scope > div:first-child');
        if (!originalGrid) return;
        originalGrid.classList.add('footer-original-grid');

        const columns = Array.from(originalGrid.children) as HTMLElement[];
        if (columns.length < 2) return;
        const mobileBrand = columns[0].cloneNode(true) as HTMLElement;
        mobileBrand.classList.add('mobile-footer-brand');
        const contactDetails = mobileBrand.lastElementChild?.cloneNode(true) as HTMLElement | undefined;
        mobileBrand.lastElementChild?.remove();
        const accordion = document.createElement('div');
        accordion.className = 'mobile-footer-accordion';
        const groups = [
          { title: 'PRODUCTS', columns: [columns[1]] },
          { title: 'COMPANY', columns: [columns[2]] },
          { title: 'EVENTS', columns: [columns[3]] },
          { title: 'SUPPORT', columns: [columns[4]] },
          { title: 'CONTACT US', columns: contactDetails ? [contactDetails] : [] },
        ];

        groups.forEach(({ title, columns: groupColumns }) => {
          const section = document.createElement('section');
          section.className = 'mobile-footer-section';
          const button = document.createElement('button');
          button.className = 'mobile-footer-trigger';
          button.type = 'button';
          button.setAttribute('aria-expanded', 'false');
          button.innerHTML = `<span>${title}</span><span class="mobile-footer-icon" aria-hidden="true">+</span>`;
          const panel = document.createElement('div');
          panel.className = 'mobile-footer-panel';
          const content = document.createElement('div');
          content.className = 'mobile-footer-panel-content';
          groupColumns.forEach((column) => content.appendChild(column.cloneNode(true)));
          panel.appendChild(content);
          section.append(button, panel);
          button.addEventListener('click', () => {
            const isOpen = section.classList.toggle('is-open');
            button.setAttribute('aria-expanded', String(isOpen));
          });
          accordion.appendChild(section);
        });
        footer.insertBefore(mobileBrand, footer.lastElementChild);
        footer.insertBefore(accordion, footer.lastElementChild);
      });
    };
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
    document.querySelectorAll<HTMLElement>('.page.active').forEach((page) => {
      if (!page.querySelector('footer')) page.insertAdjacentHTML('beforeend', footerTemplate());
    });
    setupMobileNavigation();
    setupMobileFooter();
    setupHeroStatsCounters();
    return () => {
      statsObserver?.disconnect();
      delete window.goPage;
      delete window.toggleFaq;
      delete window.switchCur;
      delete window.switchS;
    };
  }, []);

  return null;
}
