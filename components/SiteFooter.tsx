'use client';

import { useCallback } from 'react';
import { legacyPagePath } from '@/lib/routes';

export function SiteFooter() {
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
<footer style={{ 'background': '#061e3e' }}>
  <div style={{ 'display': 'grid', 'gridTemplateColumns': '2fr 1fr 1fr 1fr 1fr', 'gap': '2.5rem', 'marginBottom': '2.5rem', 'padding': '12px 1.9rem 0' }}>
    {/* BRAND COL */}
    <div>
      <div className='footer-logo-wrap'>
        <svg width='180' height='44' viewBox='0 0 360 88' xmlns='http://www.w3.org/2000/svg'>
          <text x='0' y='32' fontFamily='Montserrat,sans-serif' fontWeight='800' fontSize='26' fill='white'>
            nav
          </text>
          <text x='58' y='32' fontFamily='Montserrat,sans-serif' fontWeight='800' fontSize='26' fill='white'>
            N
          </text>
          <text x='79' y='32' fontFamily='Montserrat,sans-serif' fontWeight='800' fontSize='21' fill='white'>
            EET
          </text>
          <text x='0' y='74' fontFamily='Montserrat,sans-serif' fontWeight='800' fontSize='40' fill='white'>
            T
          </text>
          <circle cx='40' cy='55' r='20' fill='#0F9BD7' />
          <text x='64' y='74' fontFamily='Montserrat,sans-serif' fontWeight='800' fontSize='40' fill='white'>
            P
          </text>
          <text x='107' y='74' fontFamily='Montserrat,sans-serif' fontWeight='800' fontSize='40' fill='#0F9BD7'>
            TECH
          </text>
        </svg>
      </div>
      <p style={{ 'color': 'rgba(255, 255, 255, 0.72)', 'fontSize': '13px', 'lineHeight': '1.72', 'marginTop': '12px', 'maxWidth': '280px' }}>
        India's School Transformation Partner — the EdTech arm of
        <span style={{ 'color': '#0f9bd7', 'fontWeight': '700' }}>
          Navneet Education Limited
        </span>
        . Combining 65+ years of educational expertise with technology
              built for Indian classrooms.
      </p>
      <div className='socials' style={{ 'marginTop': '16px' }}>
        <div className='sdot'>
          Fb
        </div>
        <div className='sdot'>
          Tw
        </div>
        <div className='sdot'>
          Yt
        </div>
        <div className='sdot'>
          Ig
        </div>
        <div className='sdot'>
          Li
        </div>
      </div>
      <div className='mobile-no-border' style={{ 'marginTop': '1.25rem', 'paddingTop': '1.25rem', 'borderTop': '1px solid rgba(255, 255, 255, 0.12)' }}>
        <div className='products-label' style={{ 'fontSize': '10px', 'fontWeight': '700', 'textTransform': 'uppercase', 'letterSpacing': '1.2px', 'color': '#0f9bd7', 'marginBottom': '10px', 'fontFamily': 'var(--fh)' }}>
          Contact
        </div>
        <div style={{ 'fontSize': '13px', 'color': 'rgba(255, 255, 255, 0.85)', 'marginBottom': '6px' }}>
          📞 1800 266 6676 (Toll Free)
        </div>
        <div style={{ 'fontSize': '13px', 'color': 'rgba(255, 255, 255, 0.85)' }}>
          ✉️ info@navneettoptech.com
        </div>
      </div>
    </div>
    {/* PRODUCTS */}
    <div>
      <div className='products-label' style={{ 'fontSize': '10px', 'fontWeight': '700', 'letterSpacing': '1.4px', 'textTransform': 'uppercase', 'color': '#0f9bd7', 'marginBottom': '16px', 'fontFamily': 'var(--fh)' }}>
        Products
      </div>
      <a onClick={() => goPage('topschool')} style={{ 'display': 'block', 'color': 'rgba(255, 255, 255, 0.88)', 'fontSize': '13px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'pointer', 'fontWeight': '500' }}>
        TopSchool LMS
      </a>
      <a onClick={() => goPage('topseries')} style={{ 'display': 'block', 'color': 'rgba(255, 255, 255, 0.65)', 'fontSize': '12px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'pointer', 'paddingLeft': '0.85rem' }}>
        ↳ TopSeries
      </a>
      <a onClick={() => goPage('topclass')} style={{ 'display': 'block', 'color': 'rgba(255, 255, 255, 0.88)', 'fontSize': '13px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'pointer', 'fontWeight': '500' }}>
        TopClass
      </a>
      <a onClick={() => goPage('topassess')} style={{ 'display': 'block', 'color': 'rgba(255, 255, 255, 0.88)', 'fontSize': '13px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'pointer', 'fontWeight': '500' }}>
        TopAssess
      </a>
      <a onClick={() => goPage('ifp')} style={{ 'display': 'block', 'color': 'rgba(255, 255, 255, 0.88)', 'fontSize': '13px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'pointer', 'fontWeight': '500' }}>
        Hardware
        &
        IFP
      </a>
      <a onClick={() => window.open('http://nityatraining.com')} rel='noopener noreferrer' style={{ 'display': 'block', 'color': 'rgba(255, 255, 255, 0.88)', 'fontSize': '13px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'pointer', 'fontWeight': '500' }}>
        Nitya Training ↗
      </a>
      <a onClick={() => window.open('http://navneetedu.ai')} rel='noopener noreferrer' style={{ 'display': 'block', 'color': 'rgba(255, 255, 255, 0.88)', 'fontSize': '13px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'pointer', 'fontWeight': '500' }}>
        Navneet AI ↗
      </a>
    </div>
    {/* COMPANY */}
    <div>
      <div className='products-label' style={{ 'fontSize': '10px', 'fontWeight': '700', 'letterSpacing': '1.4px', 'textTransform': 'uppercase', 'color': '#0f9bd7', 'marginBottom': '16px', 'fontFamily': 'var(--fh)' }}>
        Company
      </div>
      <a onClick={() => goPage('about')} style={{ 'display': 'block', 'color': 'rgba(255, 255, 255, 0.88)', 'fontSize': '13px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'pointer', 'fontWeight': '500' }}>
        About NTT
      </a>
      <a onClick={() => window.open('https://navneet.com')} rel='noopener noreferrer' style={{ 'display': 'block', 'color': '#0f9bd7', 'fontSize': '13px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'pointer', 'fontWeight': '600' }}>
        About NEL ↗
      </a>
      <a onClick={() => goPage('news')} style={{ 'display': 'block', 'color': 'rgba(255, 255, 255, 0.88)', 'fontSize': '13px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'pointer', 'fontWeight': '500' }}>
        Awards
        &
        News
      </a>
      <a onClick={() => goPage('conclaves')} style={{ 'display': 'block', 'color': 'rgba(255, 255, 255, 0.88)', 'fontSize': '13px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'pointer', 'fontWeight': '500' }}>
        Events
      </a>
      <a onClick={() => goPage('careers')} style={{ 'display': 'block', 'color': 'rgba(255, 255, 255, 0.88)', 'fontSize': '13px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'pointer', 'fontWeight': '500' }}>
        Careers
      </a>
      <a onClick={() => goPage('blogs')} style={{ 'display': 'block', 'color': 'rgba(255, 255, 255, 0.88)', 'fontSize': '13px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'pointer', 'fontWeight': '500' }}>
        Blogs
      </a>
    </div>
    {/* EVENTS */}
    <div>
      <div className='products-label' style={{ 'fontSize': '10px', 'fontWeight': '700', 'letterSpacing': '1.4px', 'textTransform': 'uppercase', 'color': '#0f9bd7', 'marginBottom': '16px', 'fontFamily': 'var(--fh)' }}>
        Events
      </div>
      <a onClick={() => goPage('conclaves')} style={{ 'display': 'block', 'color': 'rgba(255, 255, 255, 0.88)', 'fontSize': '13px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'pointer', 'fontWeight': '500' }}>
        Conclaves
      </a>
      <a onClick={() => goPage('conclaves')} style={{ 'display': 'block', 'color': 'rgba(255, 255, 255, 0.88)', 'fontSize': '13px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'pointer', 'fontWeight': '500' }}>
        Expos
      </a>
      <a onClick={() => goPage('conclaves')} style={{ 'display': 'block', 'color': 'rgba(255, 255, 255, 0.88)', 'fontSize': '13px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'pointer', 'fontWeight': '500' }}>
        Contests
      </a>
      <a onClick={() => goPage('news')} style={{ 'display': 'block', 'color': 'rgba(255, 255, 255, 0.88)', 'fontSize': '13px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'pointer', 'fontWeight': '500' }}>
        In the News
      </a>
    </div>
    {/* SUPPORT */}
    <div>
      <div className='products-label' style={{ 'fontSize': '10px', 'fontWeight': '700', 'letterSpacing': '1.4px', 'textTransform': 'uppercase', 'color': '#0f9bd7', 'marginBottom': '16px', 'fontFamily': 'var(--fh)' }}>
        Support
      </div>
      <a onClick={() => goPage('contact')} style={{ 'display': 'block', 'color': 'rgba(255, 255, 255, 0.88)', 'fontSize': '13px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'pointer', 'fontWeight': '500' }}>
        Contact Us
      </a>
      <a onClick={() => goPage('support')} style={{ 'display': 'block', 'color': 'rgba(255, 255, 255, 0.88)', 'fontSize': '13px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'pointer', 'fontWeight': '500' }}>
        Support
        &
        Services
      </a>
      <a onClick={() => window.open('https://navneetfoundation.in')} rel='noopener noreferrer' style={{ 'display': 'block', 'color': 'rgba(255, 255, 255, 0.88)', 'fontSize': '13px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'pointer', 'fontWeight': '500' }}>
        Support a Child ↗
      </a>
      <a onClick={() => goPage('careers')} style={{ 'display': 'block', 'color': 'rgba(255, 255, 255, 0.88)', 'fontSize': '13px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'pointer', 'fontWeight': '500' }}>
        Careers
      </a>
      <a style={{ 'display': 'block', 'color': 'rgba(255, 255, 255, 0.4)', 'fontSize': '13px', 'textDecoration': 'none', 'marginBottom': '10px', 'cursor': 'default' }}>
        Privacy Policy
      </a>
    </div>
  </div>
  {/* BOTTOM BAR */}
  <div style={{ 'paddingTop': '20px', 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center', 'flexWrap': 'wrap', 'gap': '1rem' }}>
    <p style={{ 'fontSize': '12px', 'color': 'rgba(255, 255, 255, 0.5)', 'margin': '0' }}>
      © 2026 NAVNEET TOPTECH. All Rights Reserved. · A 100% Subsidiary of
      <span style={{ 'color': '#0f9bd7', 'fontWeight': '600' }}>
        Navneet Education Limited
      </span>
    </p>
    <p style={{ 'fontSize': '12px', 'color': 'rgba(255, 255, 255, 0.5)', 'margin': '0' }}>
      Mumbai · Bengaluru · Delhi · Chennai · Hyderabad · Nashik
    </p>
  </div>
</footer>
  );
}
