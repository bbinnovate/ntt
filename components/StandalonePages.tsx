'use client';

import { useCallback } from 'react';
import { legacyPagePath } from '@/lib/routes';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

export function CareersPageContent() {
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
    <main className="overflow-x-clip">
      <SiteHeader />
{/* NAV */}
<div id='page-careers' className='page active'>
  <div className='breadcrumb'>
    <a onClick={() => goPage('home')}>
      Home
    </a>
    <span>
      /
    </span>
    <span>
      Careers
    </span>
  </div>
  <div className='page-hero'>
    <div className='page-hero-tag'>
      Careers · Join the TopForce
    </div>
    <h1>
      Join the TopForce: Where Innovation Meets Education Excellence.
    </h1>
    <p>
      NAVNEET TOPTECH, a 100% subsidiary of Navneet Education Limited — a 65+ year legacy in education — is on a mission to redefine learning through technology. We're looking for dynamic people who want to build impactful learning experiences for students and educators across India.
    </p>
    <button className='btn-gold' onClick={() => goPage('contact')}>
      View Open Roles ↓
    </button>
  </div>
  <div className='stats-bar'>
    <div className='stat-item'>
      <div className='stat-num'>
        4,000+
      </div>
      <div className='stat-label'>
        Partner Schools
      </div>
    </div>
    <div className='stat-item'>
      <div className='stat-num'>
        65+
      </div>
      <div className='stat-label'>
        Years Legacy
      </div>
    </div>
    <div className='stat-item'>
      <div className='stat-num'>
        30+
      </div>
      <div className='stat-label'>
        Cities Presence
      </div>
    </div>
    <div className='stat-item'>
      <div className='stat-num'>
        6
      </div>
      <div className='stat-label'>
        Office Locations
      </div>
    </div>
  </div>
  {/* WHY JOIN US */}
  <section className='sec sec-white'>
    <p className='sec-tag'>
      Why Join Us
    </p>
    <h2 className='sec-title'>
      A Culture Built on Innovation
      &
      Impact.
    </h2>
    <p className='sec-sub' style={{ 'maxWidth': '720px' }}>
      At NAVNEET TOPTECH, we believe in the power of education to change lives. Joining our team means being part of a culture that values innovation, collaboration, and continuous learning — a dynamic environment where your ideas are heard and your contributions are recognised and rewarded.
    </p>
  </section>
  {/* CURRENT OPENINGS */}
  <section className='sec sec-light'>
    <p className='sec-tag'>
      Current Openings
    </p>
    <h2 className='sec-title' style={{ 'marginBottom': '2rem' }}>
      Open Positions.
    </h2>
    <div className='g2'>
      <div className='fcard'>
        <div className='fcard-name' style={{ 'fontSize': '16px' }}>
          Territory Sales Incharge
        </div>
        <div className='fcard-desc' style={{ 'marginBottom': '10px' }}>
          📍 Sangamner, Amravati, Nagpur, Yavatmal · Sales · 1–2 yrs experience
        </div>
        <div className='fcard-desc' style={{ 'marginBottom': '14px' }}>
          Drive sales growth within your territory by building relationships with schools and educators — generating leads, running product demos, and hitting monthly and quarterly targets.
        </div>
        <div style={{ 'display': 'flex', 'gap': '10px', 'flexWrap': 'wrap' }}>
          <button className='btn-outline-blue' style={{ 'padding': '8px 16px', 'fontSize': '12px' }} onClick={() => window.open('https://navneettoptech.com/wp-content/uploads/2026/02/Territory-sales-Incharge-10202040.pdf')}>
            Download JD
          </button>
          <button className='btn-blue' style={{ 'padding': '8px 16px', 'fontSize': '12px' }} onClick={() => goPage('contact')}>
            Apply Now →
          </button>
        </div>
      </div>
      <div className='fcard'>
        <div className='fcard-name' style={{ 'fontSize': '16px' }}>
          Strategy Manager
        </div>
        <div className='fcard-desc' style={{ 'marginBottom': '10px' }}>
          📍 Mumbai · Strategy · 3–6 yrs experience
        </div>
        <div className='fcard-desc' style={{ 'marginBottom': '14px' }}>
          Work closely with leadership to translate business vision into actionable plans — leading cross-functional projects, analysing performance, and driving key strategic initiatives.
        </div>
        <div style={{ 'display': 'flex', 'gap': '10px', 'flexWrap': 'wrap' }}>
          <button className='btn-outline-blue' style={{ 'padding': '8px 16px', 'fontSize': '12px' }} onClick={() => window.open('https://navneettoptech.com/wp-content/uploads/2026/02/Strategy-Manager.pdf')}>
            Download JD
          </button>
          <button className='btn-blue' style={{ 'padding': '8px 16px', 'fontSize': '12px' }} onClick={() => goPage('contact')}>
            Apply Now →
          </button>
        </div>
      </div>
      <div className='fcard'>
        <div className='fcard-name' style={{ 'fontSize': '16px' }}>
          Lead Backend Engineer
        </div>
        <div className='fcard-desc' style={{ 'marginBottom': '10px' }}>
          📍 Bangalore · Engineering · 5–8 yrs experience
        </div>
        <div className='fcard-desc' style={{ 'marginBottom': '14px' }}>
          Design, build, and scale backend systems powering our digital learning platforms — driving architecture decisions, mentoring engineers, and contributing to technical strategy.
        </div>
        <div style={{ 'display': 'flex', 'gap': '10px', 'flexWrap': 'wrap' }}>
          <button className='btn-outline-blue' style={{ 'padding': '8px 16px', 'fontSize': '12px' }} onClick={() => window.open('https://navneettoptech.com/wp-content/uploads/2026/02/Lead_Backend-Engineer-10106498.pdf')}>
            Download JD
          </button>
          <button className='btn-blue' style={{ 'padding': '8px 16px', 'fontSize': '12px' }} onClick={() => goPage('contact')}>
            Apply Now →
          </button>
        </div>
      </div>
      <div className='fcard'>
        <div className='fcard-name' style={{ 'fontSize': '16px' }}>
          Customer Care Executive
        </div>
        <div className='fcard-desc' style={{ 'marginBottom': '10px' }}>
          📍 Washim · Implementation · 1–3 yrs experience
        </div>
        <div className='fcard-desc' style={{ 'marginBottom': '14px' }}>
          Ensure successful implementation of our digital solutions in schools — installation, onboarding, user training, troubleshooting, and supporting renewals with a customer-first mindset.
        </div>
        <div style={{ 'display': 'flex', 'gap': '10px', 'flexWrap': 'wrap' }}>
          <button className='btn-outline-blue' style={{ 'padding': '8px 16px', 'fontSize': '12px' }} onClick={() => window.open('https://navneettoptech.com/wp-content/uploads/2026/02/Customer-Care-Executive-10202095.pdf')}>
            Download JD
          </button>
          <button className='btn-blue' style={{ 'padding': '8px 16px', 'fontSize': '12px' }} onClick={() => goPage('contact')}>
            Apply Now →
          </button>
        </div>
      </div>
    </div>
    {/* DEV NOTE: JD PDF links point to the live site's WordPress media URLs — re-host on the new build's own media library rather than linking cross-domain. Openings list is real and current as of the live site; confirm with HR before publish since roles close/rotate. */}
  </section>
  <section className='cta-strip'>
    <h2>
      Don't See Your Role?
    </h2>
    <p>
      We're always looking for people who care about education and technology. Send us your CV and we'll reach out when a fit opens up.
    </p>
    <div className='cta-btns'>
      <button className='btn-wh' onClick={() => goPage('contact')}>
        Send Your CV
      </button>
    </div>
  </section>
</div>
{/* ═══ SHARED FOOTER TEMPLATE ═══ */}
<template id='footer-tpl'>
</template>
      <SiteFooter />
    </main>
  );
}
export function ConclavesPageContent() {
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
    <main className="overflow-x-clip">
      <SiteHeader />
{/* NAV */}
<div id='page-conclaves' className='page active'>
  <div className='breadcrumb'>
    <a onClick={() => goPage('home')}>
      Home
    </a>
    <span>
      /
    </span>
    <span>
      Conclaves
    </span>
  </div>
  <div className='page-hero'>
    <div className='page-hero-tag'>
      India's Largest Educators' Event · NEP 2020 Workshops · Pan-India
    </div>
    <h1>
      Fostering a Community of Principals
      &
      Educators Leading India's Education Revolution.
    </h1>
    <p>
      NAVNEET TOPTECH Conclaves bring principals, trustees, school owners, and teachers together across 50+ cities — for panel discussions, hands-on workshops, and a community built to move school education forward through technology.
    </p>
    <button className='btn-gold' onClick={() => goPage('contact')}>
      Register Your City
    </button>
  </div>
  <div className='stats-bar'>
    <div className='stat-item'>
      <div className='stat-num'>
        4
      </div>
      <div className='stat-label'>
        Editions
      </div>
    </div>
    <div className='stat-item'>
      <div className='stat-num'>
        50+
      </div>
      <div className='stat-label'>
        Cities
      </div>
    </div>
    <div className='stat-item'>
      <div className='stat-num'>
        100+
      </div>
      <div className='stat-label'>
        Panelists
        &
        Workshop Facilitators
      </div>
    </div>
    <div className='stat-item'>
      <div className='stat-num'>
        1,00,000+
      </div>
      <div className='stat-label'>
        Teachers Engaged
      </div>
    </div>
  </div>
  {/* ABOUT CONCLAVES */}
  <section className='sec sec-white'>
    <div className='g2' style={{ 'gap': '3.5rem', 'alignItems': 'center' }}>
      <div>
        <p className='sec-tag'>
          About NAVNEET TOPTECH Conclaves
        </p>
        <h2 className='sec-title'>
          A Platform Built for Educators, by Educators.
        </h2>
        <p className='sec-sub' style={{ 'marginBottom': '1rem' }}>
          NAVNEET TOPTECH Conclaves connect school leaders and teachers from across India to share ideas, solve common classroom challenges, and shape what's next for school education. Every edition is built around practical, hands-on sessions — not just talks — covering EdTech adoption, modern pedagogy, and how schools can align with NEP 2020 in practice, not just on paper.
        </p>
        <p className='sec-sub'>
          Educators walk away with real takeaways: peer connections that outlast the event, and frameworks they can apply in their own schools the following Monday.
        </p>
      </div>
      <div className='hero-video' style={{ 'background': 'var(--light)', 'border': '1.5px dashed var(--border)' }}>
        <div className='vbadge' style={{ 'background': 'var(--blue)' }}>
          Conclave 2024
        </div>
        <div className='vplay' style={{ 'background': 'var(--green)' }}>
        </div>
        <span className='vlabel' style={{ 'color': 'var(--muted)' }}>
          NAVNEET TOPTECH Conclave 2024 — Shaping the Future of Education Through Technology
        </span>
      </div>
    </div>
  </section>
  {/* WHY ATTEND */}
  <section className='sec sec-light'>
    <p className='sec-tag'>
      Why Attend
    </p>
    <h2 className='sec-title' style={{ 'marginBottom': '2rem' }}>
      Five Reasons Educators Keep Coming Back.
    </h2>
    <div className='g3'>
      <div className='fcard'>
        <div className='fcard-icon'>
          🚀
        </div>
        <div className='pcard-name' style={{ 'fontSize': '15px' }}>
          Stay Ahead of the Curve
        </div>
        <div className='pcard-desc'>
          Hands-on exposure to EdTech tools that are already reshaping how classrooms teach and how students learn.
        </div>
      </div>
      <div className='fcard'>
        <div className='fcard-icon'>
          🎓
        </div>
        <div className='pcard-name' style={{ 'fontSize': '15px' }}>
          Empowerment Through Knowledge
        </div>
        <div className='pcard-desc'>
          Sessions on the teaching techniques and pedagogies built for a tech-driven classroom.
        </div>
      </div>
      <div className='fcard'>
        <div className='fcard-icon'>
          🤝
        </div>
        <div className='pcard-name' style={{ 'fontSize': '15px' }}>
          Community
          &
          Collaboration
        </div>
        <div className='pcard-desc'>
          A peer network of principals and teachers that stays connected long after the event ends.
        </div>
      </div>
      <div className='fcard'>
        <div className='fcard-icon'>
          🛠️
        </div>
        <div className='pcard-name' style={{ 'fontSize': '15px' }}>
          Special Workshops
        </div>
        <div className='pcard-desc'>
          Interactive, expert-led sessions built for hands-on learning, not passive listening.
        </div>
      </div>
      <div className='fcard'>
        <div className='fcard-icon'>
          📘
        </div>
        <div className='pcard-name' style={{ 'fontSize': '15px' }}>
          Understanding NEP 2020
        </div>
        <div className='pcard-desc'>
          Clear, practical guidance on what NEP 2020 actually means for day-to-day school implementation.
        </div>
      </div>
      <div className='fcard' style={{ 'background': 'var(--blue)', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'flex-start' }}>
        <div className='pcard-name' style={{ 'color': 'var(--white)', 'fontSize': '15px' }}>
          Claim Your City's Spot
        </div>
        <div className='pcard-desc' style={{ 'color': 'rgba(255,255,255,.75)', 'marginBottom': '12px' }}>
          Registration confirms your seat — our team calls to finalise participation details.
        </div>
        <button className='btn-gold' onClick={() => goPage('contact')} style={{ 'padding': '9px 20px', 'fontSize': '12px' }}>
          Register Interest →
        </button>
      </div>
    </div>
  </section>
  {/* EVENT AGENDA */}
  <section className='sec sec-white'>
    <p className='sec-tag'>
      Event Agenda
    </p>
    <h2 className='sec-title'>
      Panels, Workshops, Product Demos
      &
      Networking.
    </h2>
    <div className='s-tabs' style={{ 'flexWrap': 'wrap' }}>
      <div className='s-tab active' onClick={(event) => switchS(event.currentTarget, 'panel')}>
        Panel Discussions
      </div>
      <div className='s-tab' onClick={(event) => switchS(event.currentTarget, 'workshop')}>
        Workshops
      </div>
      <div className='s-tab' onClick={(event) => switchS(event.currentTarget, 'demo')}>
        Product Demos
      </div>
      <div className='s-tab' onClick={(event) => switchS(event.currentTarget, 'network')}>
        Networking
      </div>
    </div>
    <div id='s-panel' className='s-panel active'>
      <p className='sec-sub' style={{ 'marginBottom': '1.5rem' }}>
        A dynamic exchange of ideas as leading educators and thought leaders unpack the evolving landscape of school education, and surface opportunities shaping the future of learning.
      </p>
      <div className='g4'>
        <div style={{ 'background': 'var(--light)', 'border': '2px dashed var(--border)', 'borderRadius': '12px', 'aspectRatio': '4/3', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '11px', 'color': 'var(--muted)', 'textAlign': 'center', 'padding': '.5rem' }}>
          [ Panel photo ]
        </div>
        <div style={{ 'background': 'var(--light)', 'border': '2px dashed var(--border)', 'borderRadius': '12px', 'aspectRatio': '4/3', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '11px', 'color': 'var(--muted)', 'textAlign': 'center', 'padding': '.5rem' }}>
          [ Panel photo ]
        </div>
        <div style={{ 'background': 'var(--light)', 'border': '2px dashed var(--border)', 'borderRadius': '12px', 'aspectRatio': '4/3', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '11px', 'color': 'var(--muted)', 'textAlign': 'center', 'padding': '.5rem' }}>
          [ Panel photo ]
        </div>
        <div style={{ 'background': 'var(--light)', 'border': '2px dashed var(--border)', 'borderRadius': '12px', 'aspectRatio': '4/3', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '11px', 'color': 'var(--muted)', 'textAlign': 'center', 'padding': '.5rem' }}>
          [ Panel photo ]
        </div>
      </div>
    </div>
    <div id='s-workshop' className='s-panel'>
      <p className='sec-sub' style={{ 'marginBottom': '1.5rem' }}>
        Hands-on activities and techniques designed to build analytical thinking, creativity, and resilience — equipping educators to help students thrive academically and beyond.
      </p>
      <div className='g4'>
        <div style={{ 'background': 'var(--light)', 'border': '2px dashed var(--border)', 'borderRadius': '12px', 'aspectRatio': '4/3', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '11px', 'color': 'var(--muted)', 'textAlign': 'center', 'padding': '.5rem' }}>
          [ Workshop photo ]
        </div>
        <div style={{ 'background': 'var(--light)', 'border': '2px dashed var(--border)', 'borderRadius': '12px', 'aspectRatio': '4/3', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '11px', 'color': 'var(--muted)', 'textAlign': 'center', 'padding': '.5rem' }}>
          [ Workshop photo ]
        </div>
        <div style={{ 'background': 'var(--light)', 'border': '2px dashed var(--border)', 'borderRadius': '12px', 'aspectRatio': '4/3', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '11px', 'color': 'var(--muted)', 'textAlign': 'center', 'padding': '.5rem' }}>
          [ Workshop photo ]
        </div>
        <div style={{ 'background': 'var(--light)', 'border': '2px dashed var(--border)', 'borderRadius': '12px', 'aspectRatio': '4/3', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '11px', 'color': 'var(--muted)', 'textAlign': 'center', 'padding': '.5rem' }}>
          [ Workshop photo ]
        </div>
      </div>
    </div>
    <div id='s-demo' className='s-panel'>
      <p className='sec-sub' style={{ 'marginBottom': '1.5rem' }}>
        Live, hands-on walkthroughs of TopSchool LMS, TopClass, and TopAssess at a dedicated demo zone — so principals and trustees can see the product before committing to a pilot.
      </p>
      <div className='g4'>
        <div style={{ 'background': 'var(--light)', 'border': '2px dashed var(--border)', 'borderRadius': '12px', 'aspectRatio': '4/3', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '11px', 'color': 'var(--muted)', 'textAlign': 'center', 'padding': '.5rem' }}>
          [ Demo zone photo ]
        </div>
        <div style={{ 'background': 'var(--light)', 'border': '2px dashed var(--border)', 'borderRadius': '12px', 'aspectRatio': '4/3', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '11px', 'color': 'var(--muted)', 'textAlign': 'center', 'padding': '.5rem' }}>
          [ Demo zone photo ]
        </div>
        <div style={{ 'background': 'var(--light)', 'border': '2px dashed var(--border)', 'borderRadius': '12px', 'aspectRatio': '4/3', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '11px', 'color': 'var(--muted)', 'textAlign': 'center', 'padding': '.5rem' }}>
          [ Demo zone photo ]
        </div>
        <div style={{ 'background': 'var(--light)', 'border': '2px dashed var(--border)', 'borderRadius': '12px', 'aspectRatio': '4/3', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '11px', 'color': 'var(--muted)', 'textAlign': 'center', 'padding': '.5rem' }}>
          [ Demo zone photo ]
        </div>
      </div>
    </div>
    <div id='s-network' className='s-panel'>
      <p className='sec-sub' style={{ 'marginBottom': '1.5rem' }}>
        Structured networking between sessions — principals, trustees, and school owners connecting across cities, building the same peer community that keeps educators coming back edition after edition.
      </p>
      <div className='g4'>
        <div style={{ 'background': 'var(--light)', 'border': '2px dashed var(--border)', 'borderRadius': '12px', 'aspectRatio': '4/3', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '11px', 'color': 'var(--muted)', 'textAlign': 'center', 'padding': '.5rem' }}>
          [ Networking photo ]
        </div>
        <div style={{ 'background': 'var(--light)', 'border': '2px dashed var(--border)', 'borderRadius': '12px', 'aspectRatio': '4/3', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '11px', 'color': 'var(--muted)', 'textAlign': 'center', 'padding': '.5rem' }}>
          [ Networking photo ]
        </div>
        <div style={{ 'background': 'var(--light)', 'border': '2px dashed var(--border)', 'borderRadius': '12px', 'aspectRatio': '4/3', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '11px', 'color': 'var(--muted)', 'textAlign': 'center', 'padding': '.5rem' }}>
          [ Networking photo ]
        </div>
        <div style={{ 'background': 'var(--light)', 'border': '2px dashed var(--border)', 'borderRadius': '12px', 'aspectRatio': '4/3', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '11px', 'color': 'var(--muted)', 'textAlign': 'center', 'padding': '.5rem' }}>
          [ Networking photo ]
        </div>
      </div>
    </div>
  </section>
  {/* RECENT CONCLAVES */}
  <section className='sec sec-light'>
    <p className='sec-tag'>
      Recent Conclaves
    </p>
    <h2 className='sec-title' style={{ 'marginBottom': '.5rem' }}>
      Editions That Enlightened Minds, Connected Peers.
    </h2>
    <p className='sec-sub' style={{ 'marginBottom': '2rem' }}>
      A city footprint that's grown every year.
    </p>
    <div className='cur-tabs'>
      <div className='cur-tab active' onClick={(event) => switchCur(event.currentTarget, 'y25')}>
        2025 · 36 Cities
      </div>
      <div className='cur-tab' onClick={(event) => switchCur(event.currentTarget, 'y24')}>
        2024 · 26 Cities
      </div>
      <div className='cur-tab' onClick={(event) => switchCur(event.currentTarget, 'y23')}>
        2023 · 28 Cities
      </div>
      <div className='cur-tab' onClick={(event) => switchCur(event.currentTarget, 'y22')}>
        2022 · 10 Cities
      </div>
    </div>
    {/* 2025 */}
    <div id='cur-y25' className='cur-panel active'>
      <div style={{ 'display': 'flex', 'alignItems': 'baseline', 'gap': '14px', 'flexWrap': 'wrap', 'marginBottom': '1.25rem' }}>
        <div style={{ 'fontFamily': 'var(--fh)', 'fontSize': '28px', 'fontWeight': '800', 'color': 'var(--blue2)' }}>
          36 Cities
        </div>
        <span onClick={() => window.open('https://youtu.be/ZzQoEfv3_wE?si=Sq5is4mnmpZ6hCd4')} style={{ 'fontSize': '13px', 'fontWeight': '700', 'color': 'var(--green)', 'cursor': 'pointer', 'fontFamily': 'var(--fh)' }}>
          ▶ Watch the 2025 Aftermovie →
        </span>
      </div>
      <div className='photo-scroller'>
        {/* ADD 2025 EVENT PHOTOS HERE: <img src="..." alt="Conclave 2025 — [City]"> */}
        <div className='photo-slot-add'>
          <span>
            +
          </span>
          Add 2025 photo
        </div>
        <div className='photo-slot-add'>
          <span>
            +
          </span>
          Add 2025 photo
        </div>
        <div className='photo-slot-add'>
          <span>
            +
          </span>
          Add 2025 photo
        </div>
        <div className='photo-slot-add'>
          <span>
            +
          </span>
          Add 2025 photo
        </div>
        <div className='photo-slot-add'>
          <span>
            +
          </span>
          Add 2025 photo
        </div>
        <div className='photo-slot-add'>
          <span>
            +
          </span>
          Add 2025 photo
        </div>
      </div>
    </div>
    {/* 2024 */}
    <div id='cur-y24' className='cur-panel'>
      <div style={{ 'display': 'flex', 'alignItems': 'baseline', 'gap': '14px', 'flexWrap': 'wrap', 'marginBottom': '1.25rem' }}>
        <div style={{ 'fontFamily': 'var(--fh)', 'fontSize': '28px', 'fontWeight': '800', 'color': 'var(--blue2)' }}>
          26 Cities
        </div>
        <span onClick={() => window.open('https://youtu.be/EpXR7WBTk5U?si=N6yRMXSTOQn_m3EN')} style={{ 'fontSize': '13px', 'fontWeight': '700', 'color': 'var(--green)', 'cursor': 'pointer', 'fontFamily': 'var(--fh)' }}>
          ▶ Watch the 2024 Aftermovie →
        </span>
      </div>
      <div className='photo-scroller'>
        {/* ADD 2024 EVENT PHOTOS HERE: <img src="..." alt="Conclave 2024 — [City]"> */}
        <div className='photo-slot-add'>
          <span>
            +
          </span>
          Add 2024 photo
        </div>
        <div className='photo-slot-add'>
          <span>
            +
          </span>
          Add 2024 photo
        </div>
        <div className='photo-slot-add'>
          <span>
            +
          </span>
          Add 2024 photo
        </div>
        <div className='photo-slot-add'>
          <span>
            +
          </span>
          Add 2024 photo
        </div>
        <div className='photo-slot-add'>
          <span>
            +
          </span>
          Add 2024 photo
        </div>
        <div className='photo-slot-add'>
          <span>
            +
          </span>
          Add 2024 photo
        </div>
      </div>
    </div>
    {/* 2023 */}
    <div id='cur-y23' className='cur-panel'>
      <div style={{ 'display': 'flex', 'alignItems': 'baseline', 'gap': '14px', 'flexWrap': 'wrap', 'marginBottom': '1.25rem' }}>
        <div style={{ 'fontFamily': 'var(--fh)', 'fontSize': '28px', 'fontWeight': '800', 'color': 'var(--blue2)' }}>
          28 Cities
        </div>
        <span onClick={() => window.open('https://youtu.be/oeycYIE4xfo?si=yUVhYr5ubupf8YEo')} style={{ 'fontSize': '13px', 'fontWeight': '700', 'color': 'var(--green)', 'cursor': 'pointer', 'fontFamily': 'var(--fh)' }}>
          ▶ Watch the 2023 Aftermovie →
        </span>
      </div>
      <div className='photo-scroller'>
        <img src='https://navneettoptech.com/wp-content/uploads/2024/02/DSC_1141.jpg' alt='Conclave 2023' />
        <img src='https://navneettoptech.com/wp-content/uploads/2024/02/1R9A6653.jpg' alt='Conclave 2023' />
        <img src='https://navneettoptech.com/wp-content/uploads/2024/02/AEHA9751.jpg' alt='Conclave 2023' />
        <img src='https://navneettoptech.com/wp-content/uploads/2024/02/1R9A6823.jpg' alt='Conclave 2023' />
        <img src='https://navneettoptech.com/wp-content/uploads/2024/02/AEHA9515.jpg' alt='Conclave 2023' />
        <img src='https://navneettoptech.com/wp-content/uploads/2024/04/DSC_3427.jpg' alt='Conclave 2023' />
        <img src='https://navneettoptech.com/wp-content/uploads/2024/04/DSC_7063.jpg' alt='Conclave 2023' />
        {/* ADD MORE 2023 EVENT PHOTOS HERE: <img src="..." alt="Conclave 2023 — [City]"> */}
        <div className='photo-slot-add'>
          <span>
            +
          </span>
          Add 2023 photo
        </div>
        <div className='photo-slot-add'>
          <span>
            +
          </span>
          Add 2023 photo
        </div>
      </div>
    </div>
    {/* 2022 — real photos from live site */}
    <div id='cur-y22' className='cur-panel'>
      <div style={{ 'display': 'flex', 'alignItems': 'baseline', 'gap': '14px', 'flexWrap': 'wrap', 'marginBottom': '1.25rem' }}>
        <div style={{ 'fontFamily': 'var(--fh)', 'fontSize': '28px', 'fontWeight': '800', 'color': 'var(--blue2)' }}>
          10 Cities
        </div>
      </div>
      <div className='photo-scroller'>
        <img src='https://navneettoptech.com/wp-content/uploads/2024/04/IMG_9696.jpg' alt='Conclave 2022' />
        <img src='https://navneettoptech.com/wp-content/uploads/2024/04/IMG_9750.jpg' alt='Conclave 2022' />
        <img src='https://navneettoptech.com/wp-content/uploads/2024/04/IMG_9827.jpg' alt='Conclave 2022' />
        <img src='https://navneettoptech.com/wp-content/uploads/2024/04/IMG_9919.jpg' alt='Conclave 2022' />
        <img src='https://navneettoptech.com/wp-content/uploads/2024/04/IMG_9689.jpg' alt='Conclave 2022' />
        <img src='https://navneettoptech.com/wp-content/uploads/2024/04/TJ043114.jpg' alt='Conclave 2022' />
        <img src='https://navneettoptech.com/wp-content/uploads/2024/04/DSC_1995.jpg' alt='Conclave 2022' />
        {/* ADD MORE 2022 EVENT PHOTOS HERE: <img src="..." alt="Conclave 2022 — [City]"> */}
        <div className='photo-slot-add'>
          <span>
            +
          </span>
          Add 2022 photo
        </div>
        <div className='photo-slot-add'>
          <span>
            +
          </span>
          Add 2022 photo
        </div>
      </div>
    </div>
    {/* DEV NOTE: city counts (36/26/28/10) are confirmed by marketing; individual city names are not shown since only 2-6 per year are independently verified — full lists pending from events team. Aftermovie links are real YouTube URLs. photo-scroller rows are built to just take more <img> tags — drop new ones in above the "Add photo" placeholder divs (delete those once real photos fill the row). 2022/2023 photos are live URLs already hosted on navneettoptech.com. No 2024/2025 photo gallery exists on the live site (only aftermovie videos) — 2024/2025 slots stay open until real event photography is supplied. */}
  </section>
  {/* TESTIMONIALS */}
  <section className='sec sec-light'>
    <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'flex-end', 'flexWrap': 'wrap', 'gap': '1rem', 'marginBottom': '2rem' }}>
      <div>
        <p className='sec-tag'>
          What Educators Say
        </p>
        <h2 className='sec-title' style={{ 'marginBottom': '0' }}>
          Feedback From the Community.
        </h2>
      </div>
      <button className='btn-outline-blue' onClick={() => window.open('https://youtube.com/playlist?list=PLljLM3H6SnPlSMDt0AH-QFgqeJrgOkyRh&si=Tymd-UPAzVoyRe9E')}>
        ▶ Hear From Attendees
      </button>
    </div>
    <div className='g3'>
      <div className='fcard'>
        <div style={{ 'fontSize': '24px', 'color': 'var(--green)', 'marginBottom': '8px' }}>
          "
        </div>
        <div className='pcard-desc' style={{ 'marginBottom': '12px' }}>
          Called the workshops highly informative, valuing how the community-building sessions made it easy to network with other educators.
        </div>
        <div className='pcard-name' style={{ 'fontSize': '13px' }}>
          Kalpana Paigwar
        </div>
        <div className='pcard-tag'>
          St. Thomas English School, Chhattisgarh
        </div>
      </div>
      <div className='fcard'>
        <div style={{ 'fontSize': '24px', 'color': 'var(--green)', 'marginBottom': '8px' }}>
          "
        </div>
        <div className='pcard-desc' style={{ 'marginBottom': '12px' }}>
          Described the group discussion as the highlight of the conclave — a session that built real communication and collaboration skills.
        </div>
        <div className='pcard-name' style={{ 'fontSize': '13px' }}>
          Supreet Kaur
        </div>
        <div className='pcard-tag'>
          Rose Buds Public School
        </div>
      </div>
      <div className='fcard'>
        <div style={{ 'fontSize': '24px', 'color': 'var(--green)', 'marginBottom': '8px' }}>
          "
        </div>
        <div className='pcard-desc' style={{ 'marginBottom': '12px' }}>
          Found the session on high-performing teams genuinely useful, and credited the conclave with essential insights for principals nurturing effective teams.
        </div>
        <div className='pcard-name' style={{ 'fontSize': '13px' }}>
          Mr. Gangadhar Kallappa Jodagudri
        </div>
        <div className='pcard-tag'>
          H.B. English Medium School
        </div>
      </div>
      <div className='fcard'>
        <div style={{ 'fontSize': '24px', 'color': 'var(--green)', 'marginBottom': '8px' }}>
          "
        </div>
        <div className='pcard-desc' style={{ 'marginBottom': '12px' }}>
          Praised the multi-skill foundation workshop for students as insightful, and expressed excitement for future editions.
        </div>
        <div className='pcard-name' style={{ 'fontSize': '13px' }}>
          Neha Satyajit Desai
        </div>
        <div className='pcard-tag'>
          Principal
        </div>
      </div>
      <div className='fcard'>
        <div style={{ 'fontSize': '24px', 'color': 'var(--green)', 'marginBottom': '8px' }}>
          "
        </div>
        <div className='pcard-desc' style={{ 'marginBottom': '12px' }}>
          As a new teacher, found the conclave community supportive and credited fellow educators with helping them grow quickly.
        </div>
        <div className='pcard-name' style={{ 'fontSize': '13px' }}>
          Kalpana Paigwar
        </div>
        <div className='pcard-tag'>
          St. Thomas English School, Chhattisgarh
        </div>
      </div>
      <div className='fcard'>
        <div style={{ 'fontSize': '24px', 'color': 'var(--green)', 'marginBottom': '8px' }}>
          "
        </div>
        <div className='pcard-desc' style={{ 'marginBottom': '12px' }}>
          Called NAVNEET TOPTECH's continuous support excellent, describing the conclave sessions as fun, engaging, and productive for educators.
        </div>
        <div className='pcard-name' style={{ 'fontSize': '13px' }}>
          Mrs. Kavita Nitesh Nade
        </div>
        <div className='pcard-tag'>
          Educator
        </div>
      </div>
    </div>
  </section>
  {/* FAQ */}
  <section className='sec sec-white'>
    <p className='sec-tag'>
      FAQs
    </p>
    <h2 className='sec-title'>
      Common Questions
    </h2>
    <div style={{ 'maxWidth': '780px', 'marginTop': '1.5rem' }}>
      <div className='faq-item open' onClick={(event) => toggleFaq(event.currentTarget)}>
        <div className='faq-q'>
          Who can attend a NAVNEET TOPTECH Conclave?
          <span className='faq-chev'>
            +
          </span>
        </div>
        <div className='faq-a'>
          Conclaves are open to school owners, trustees, directors, principals, vice principals, academic coordinators, and teachers — anyone in a school leadership or teaching role.
        </div>
      </div>
      <div className='faq-item' onClick={(event) => toggleFaq(event.currentTarget)}>
        <div className='faq-q'>
          Which school boards are covered?
          <span className='faq-chev'>
            +
          </span>
        </div>
        <div className='faq-a'>
          Educators from CBSE, ICSE, Maharashtra State Board, IB, IGCSE, and State Board/CBSE Pattern schools are all welcome — the conclave isn't limited to any single board.
        </div>
      </div>
      <div className='faq-item' onClick={(event) => toggleFaq(event.currentTarget)}>
        <div className='faq-q'>
          Does registering guarantee my seat?
          <span className='faq-chev'>
            +
          </span>
        </div>
        <div className='faq-a'>
          Not automatically. Registering submits your interest — our events team will call to confirm your city, date, and participation details before your seat is finalised.
        </div>
      </div>
      <div className='faq-item' onClick={(event) => toggleFaq(event.currentTarget)}>
        <div className='faq-q'>
          How do I find out when the conclave is coming to my city?
          <span className='faq-chev'>
            +
          </span>
        </div>
        <div className='faq-a'>
          Register your interest and our events team will confirm your nearest city, date, and other participation details directly.
        </div>
      </div>
      <div className='faq-item' onClick={(event) => toggleFaq(event.currentTarget)}>
        <div className='faq-q'>
          Can I see highlights from past conclaves before registering?
          <span className='faq-chev'>
            +
          </span>
        </div>
        <div className='faq-a'>
          Yes — aftermovies from the 2023, 2024, and 2025 editions are on this page, along with a video playlist of attendees sharing their own experience.
        </div>
      </div>
    </div>
  </section>
  <section className='cta-strip'>
    <h2>
      Bring the Next Conclave to Your City.
    </h2>
    <p>
      Register your school's interest, and our events team will confirm your city, date, and participation details.
    </p>
    <div className='cta-btns'>
      <button className='btn-wh' onClick={() => goPage('contact')}>
        Register Interest
      </button>
    </div>
  </section>
  {/* ═══ SHARED FOOTER TEMPLATE ═══ */}
  <template id='footer-tpl'>
  </template>
</div>
      <SiteFooter />
    </main>
  );
}
export function SupportPageContent() {
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
    <main className="overflow-x-clip">
      <SiteHeader />
{/* NAV */}
<div id='page-support' className='page active'>
  <div className='breadcrumb'>
    <a onClick={() => goPage('home')}>
      Home
    </a>
    <span>
      /
    </span>
    <span>
      Support
      &
      Services
    </span>
  </div>
  <div className='page-hero'>
    <div className='page-hero-tag'>
      Support
      &
      Services · Onboarding · Training
    </div>
    <h1>
      On-Site Support, Stationed Services.
    </h1>
    <p>
      With 65+ years of expertise in educational syllabi and smart curriculums, NAVNEET TOPTECH provides world-class service from the moment you onboard to every time you need support after.
    </p>
    <button className='btn-gold' onClick={() => goPage('contact')}>
      Talk to Our Support Team
    </button>
  </div>
  {/* WHY OUR SUPPORT */}
  <section className='sec sec-white'>
    <p className='sec-tag'>
      Why Our Support
    </p>
    <h2 className='sec-title' style={{ 'marginBottom': '1.5rem' }}>
      Built Around Your School's Day-to-Day.
    </h2>
    <p className='sec-sub' style={{ 'maxWidth': '720px', 'marginBottom': '2rem' }}>
      Our product onboarding team ensures complete implementation within 10 working days. Once onboarded, our independent support team resolves concerns promptly without disrupting your school's regular functioning — reachable anytime via toll-free number, support email, or WhatsApp.
    </p>
    <div className='g3'>
      <div className='fcard'>
        <div className='fcard-icon'>
          🚀
        </div>
        <div className='fcard-name'>
          Expert Onboarding Team
        </div>
        <div className='fcard-desc'>
          Complete implementation within 10 working days, handled by a dedicated onboarding team.
        </div>
      </div>
      <div className='fcard'>
        <div className='fcard-icon'>
          🛠️
        </div>
        <div className='fcard-name'>
          Independent Support Team
        </div>
        <div className='fcard-desc'>
          Prompt resolution of concerns without disrupting your school's day-to-day functioning.
        </div>
      </div>
      <div className='fcard'>
        <div className='fcard-icon'>
          📞
        </div>
        <div className='fcard-name'>
          Always Reachable
        </div>
        <div className='fcard-desc'>
          Toll-free number, dedicated support email, and a WhatsApp group — whichever works for you.
        </div>
      </div>
    </div>
  </section>
  {/* WHAT WE OFFER */}
  <section className='sec sec-light'>
    <p className='sec-tag'>
      What We Offer
    </p>
    <h2 className='sec-title' style={{ 'marginBottom': '2rem' }}>
      Support That Goes Beyond the Product.
    </h2>
    <div className='g4'>
      <div className='fcard'>
        <div className='fcard-icon'>
          💻
        </div>
        <div className='fcard-name'>
          1:1 Online Sessions
        </div>
        <div className='fcard-desc'>
          Customised online sessions for teachers who need help using the platform effectively.
        </div>
      </div>
      <div className='fcard'>
        <div className='fcard-icon'>
          ⚡
        </div>
        <div className='fcard-name'>
          Immediate Remote Support
        </div>
        <div className='fcard-desc'>
          Fast remote assistance so your team gets help exactly when they need it.
        </div>
      </div>
      <div className='fcard'>
        <div className='fcard-icon'>
          💡
        </div>
        <div className='fcard-name'>
          Technology Strategies
        </div>
        <div className='fcard-desc'>
          Guidance to help teachers use the technology in more innovative ways in the classroom.
        </div>
      </div>
      <div className='fcard'>
        <div className='fcard-icon'>
          🔄
        </div>
        <div className='fcard-name'>
          Swift Content Updates
        </div>
        <div className='fcard-desc'>
          Syllabus updates and new features shared quickly, so you're never working off stale content.
        </div>
      </div>
      <div className='fcard'>
        <div className='fcard-icon'>
          👨‍🏫
        </div>
        <div className='fcard-name'>
          Experienced Technical Team
        </div>
        <div className='fcard-desc'>
          65+ years of syllabus and curriculum expertise, plus 12+ years building digital content.
        </div>
      </div>
      <div className='fcard'>
        <div className='fcard-icon'>
          🎓
        </div>
        <div className='fcard-name'>
          Teacher Training
          &
          Workshops
        </div>
        <div className='fcard-desc'>
          ~25 hours of training every academic year, plus workshops on classroom management and teaching strategies with certificates of completion.
        </div>
      </div>
      <div className='fcard'>
        <div className='fcard-icon'>
          📊
        </div>
        <div className='fcard-name'>
          Academic Support
          &
          Progress Reports
        </div>
        <div className='fcard-desc'>
          Year-round academic and curriculum support, plus multiple report formats to track student progress on an ongoing basis.
        </div>
      </div>
      <div className='fcard'>
        <div className='fcard-icon'>
          🎉
        </div>
        <div className='fcard-name'>
          School Activity Support
        </div>
        <div className='fcard-desc'>
          Help planning and executing activities like Science Day, carnivals, and student conferences.
        </div>
      </div>
    </div>
  </section>
  <section className='cta-strip'>
    <h2>
      See the Difference for Your School.
    </h2>
    <p>
      From onboarding to ongoing support, we're with you at every step. Let's talk about what your school needs.
    </p>
    <div className='cta-btns'>
      <button className='btn-wh' onClick={() => goPage('contact')}>
        Contact Us
      </button>
    </div>
  </section>
</div>
{/* ═══ SHARED FOOTER TEMPLATE ═══ */}
<template id='footer-tpl'>
</template>
      <SiteFooter />
    </main>
  );
}
