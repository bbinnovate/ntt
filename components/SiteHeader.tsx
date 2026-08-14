'use client';

import { useCallback } from 'react';
import { legacyPagePath } from '@/lib/routes';

export function SiteHeader() {
  const goPage = useCallback((page: string) => {
    window.location.assign(legacyPagePath(page));
  }, []);
  const toggleFaq = useCallback((element: Element) => element.classList.toggle('open'), []);
  const switchCur = useCallback((tab: Element, id: string) => {
    const root = tab.closest('section');
    if (!root) return;
    root.querySelectorAll('.cur-tab, .cur-panel').forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    root.querySelector(`#cur-${id}`)?.classList.add('active');
  }, []);
  const switchS = useCallback((tab: Element, id: string) => {
    const root = tab.closest('section');
    if (!root) return;
    root.querySelectorAll('.s-tab, .s-panel').forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    root.querySelector(`#s-${id}`)?.classList.add('active');
  }, []);

  return (
<nav>
  <div className='nav-logo' onClick={() => goPage('home')}>
    <svg width='180' height='44' viewBox='0 0 360 88' xmlns='http://www.w3.org/2000/svg'>
      <text x='0' y='32' fontFamily='Montserrat,sans-serif' fontWeight='800' fontSize='28' fill='#2e3191'>
        nav
      </text>
      <text x='62' y='32' fontFamily='Montserrat,sans-serif' fontWeight='800' fontSize='28' fill='#2e3191'>
        N
      </text>
      <text x='84' y='32' fontFamily='Montserrat,sans-serif' fontWeight='800' fontSize='22' fill='#2e3191'>
        EET
      </text>
      <text x='0' y='75' fontFamily='Montserrat,sans-serif' fontWeight='800' fontSize='42' fill='#2e3191'>
        T
      </text>
      <circle cx='42' cy='55' r='22' fill='none' stroke='#2e3191' strokeWidth='2' />
      <circle cx='42' cy='55' r='22' fill='url(#globeGrad)' opacity='0.9' />
      <defs>
        <radialGradient id='globeGrad' cx='40%' cy='40%'>
          <stop offset='0%' stopColor='#2e3191' />
          <stop offset='100%' stopColor='#1b8a73' />
        </radialGradient>
      </defs>
      <text x='68' y='75' fontFamily='Montserrat,sans-serif' fontWeight='800' fontSize='42' fill='#2e3191'>
        P
      </text>
      <text x='113' y='75' fontFamily='Montserrat,sans-serif' fontWeight='800' fontSize='42' fill='#1b8a73'>
        TECH
      </text>
    </svg>
  </div>
  <ul className='nav-links'>
    <li>
      <span>
        About Us ▾
      </span>
      <div className='dropdown'>
        <a onClick={() => goPage('about')}>
          About NTT
        </a>
        <a onClick={() => window.open('https://navneet.com')} rel='noopener noreferrer'>
          About NEL ↗
        </a>
        <a onClick={() => goPage('news')}>
          Awards
        </a>
      </div>
    </li>
    <li>
      <span>
        Our Products ▾
      </span>
      <div className='dropdown'>
        <a onClick={() => goPage('topschool')}>
          TopSchool LMS
        </a>
        <a onClick={() => goPage('topseries')} style={{ 'paddingLeft': '32px', 'fontSize': '12px', 'color': 'var(--muted)' }}>
          ↳ TopSeries
        </a>
        <a onClick={() => goPage('topclass')}>
          TopClass
        </a>
        <a onClick={() => goPage('topassess')}>
          TopAssess
        </a>
        <a onClick={() => goPage('ifp')}>
          Hardware
          &
          IFP
        </a>
      </div>
    </li>
    <li>
      <span>
        Events ▾
      </span>
      <div className='dropdown'>
        <a onClick={() => goPage('conclaves')}>
          Conclaves
        </a>
        <a onClick={() => goPage('conclaves')}>
          Expos
        </a>
        <a onClick={() => goPage('conclaves')}>
          Contests
        </a>
      </div>
    </li>
    <li>
      <span>
        Blogs ▾
      </span>
      <div className='dropdown'>
        <a onClick={() => goPage('news')}>
          In the News
        </a>
        <a onClick={() => goPage('blogs')}>
          Blogs
        </a>
      </div>
    </li>
    <li>
      <span>
        Contact ▾
      </span>
      <div className='dropdown'>
        <a onClick={() => goPage('contact')}>
          Contact Us
        </a>
        <a onClick={() => goPage('careers')}>
          Careers
        </a>
        <a onClick={() => goPage('support')}>
          Support
          &
          Services
        </a>
      </div>
    </li>
    <li>
      <a onClick={() => window.open('http://nityatraining.com')} rel='noopener noreferrer' style={{ 'color': 'var(--green)', 'fontWeight': '700' }}>
        Nitya Training ↗
      </a>
    </li>
  </ul>
  <div className='nav-actions'>
    <a className='nav-sup' href='https://navneetfoundation.in' target='_blank'>
      Support a Child ↗
    </a>
    <button className='nav-cta' onClick={() => goPage('contact')}>
      Book a Free Demo
    </button>
  </div>
</nav>
  );
}
