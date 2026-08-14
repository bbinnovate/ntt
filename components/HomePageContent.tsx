'use client';

import { useCallback } from 'react';
import { legacyPagePath } from '@/lib/routes';

export function HomePageContent() {
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
{/* ═══ HOME ═══ */}
<div id='page-home' className='page active'>
  <section className='hero'>
    <div>
      <div className='hero-eyebrow'>
        EdTech Arm of Navneet Education Limited · Since 2008
      </div>
      <h1>
        India's
        <em style={{ 'color': '#f5b61f', 'fontStyle': 'normal' }}>
          School Transformation
        </em>
        Partner.
      </h1>
      <p className='hero-sub'>
        For generations, Navneet has been part of how India studies. NAVNEET
            TOPTECH carries that 65+ year legacy into the digital classroom,
            partnering with CBSE, CBSE Pattern, and Maharashtra State Board
            schools to transform how they teach, learn, and grow.
      </p>
      <div className='hero-btns'>
        <button className='btn-gold' onClick={() => goPage('contact')}>
          Book a Free Demo
        </button>
      </div>
    </div>
    <div className='hero-video'>
      <div className='vbadge'>
        Overview Video
      </div>
      <div className='vplay'>
      </div>
      <span className='vlabel'>
        NAVNEET TOPTECH — Transforming Schools Across India
      </span>
    </div>
  </section>
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
        1,00,000+
      </div>
      <div className='stat-label'>
        Teachers Trained
      </div>
    </div>
    <div className='stat-item'>
      <div className='stat-num'>
        20,00,000+
      </div>
      <div className='stat-label'>
        Students Enriched
      </div>
    </div>
    <div className='stat-item'>
      <div className='stat-num'>
        30+
      </div>
      <div className='stat-label'>
        Cities
      </div>
    </div>
  </div>
  {/* WHO WE ARE */}
  <section className='sec sec-white'>
    <div className='g2' style={{ 'alignItems': 'center', 'gap': '4rem' }}>
      <div>
        <p className='sec-tag'>
          Who We Are
        </p>
        <h2 className='sec-title'>
          Built on 65+ Years of Educational Trust.
        </h2>
        <p className='sec-sub' style={{ 'marginBottom': '1.25rem' }}>
          NAVNEET TOPTECH is the EdTech arm of Navneet Education Limited —
              one of India's most trusted names in education. For generations,
              Navneet has been part of how India studies, present in millions of
              homes, schools, and study desks across the country. NAVNEET
              TOPTECH extends that same trust into technology.
        </p>
        <p style={{ 'color': 'var(--muted)', 'fontSize': '14px', 'lineHeight': '1.75', 'marginBottom': '1.5rem' }}>
          We don't just hand schools a product. We walk alongside them as a
              school transformation partner supporting CBSE, CBSE Pattern, and
              Maharashtra State Board schools at every stage of their school
              cycle.
        </p>
        <button className='btn-blue' onClick={() => goPage('about')}>
          Our Story →
        </button>
      </div>
      <div style={{ 'background': 'var(--blue2)', 'borderRadius': '16px', 'padding': '1rem' }}>
        <div className='pillars-grid'>
          <div className='pillar-pill'>
            <div className='pillar-label' style={{ 'color': '#f5b61f' }}>
              Academic Expertise
            </div>
            <div className='pillar-body'>
              65+ years of curriculum knowledge built into every product
            </div>
          </div>
          <div className='pillar-pill'>
            <div className='pillar-label' style={{ 'color': '#f5b61f' }}>
              Technology for Indian Classrooms
            </div>
            <div className='pillar-body'>
              Offline-capable platforms for real Indian classroom conditions
            </div>
          </div>
          <div className='pillar-pill'>
            <div className='pillar-label' style={{ 'color': '#f5b61f' }}>
              School Relationships
            </div>
            <div className='pillar-body'>
              On-ground presence across 30+ cities, trusted by thousands
            </div>
          </div>
          <div className='pillar-pill'>
            <div className='pillar-label' style={{ 'color': '#f5b61f' }}>
              Navneet Trust
            </div>
            <div className='pillar-body'>
              Every principal already knows Navneet, that credibility is
                  ours
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* SOLUTIONS */}
  <section className='sec sec-light'>
    <p className='sec-tag'>
      Our Solutions
    </p>
    <h2 className='sec-title'>
      One Ecosystem. Complete School Transformation.
    </h2>
    <p className='sec-sub'>
      We bring academic expertise, technology, assessments, content, teacher
          enablement, and school ERP together. So schools can transform
          meaningfully and sustainably. Each solution is designed for Grades
          Nursery to Grade 10.
    </p>
    <div className='g3' style={{ 'marginTop': '2rem' }}>
      <div className='pcard' onClick={() => goPage('topschool')}>
        <div style={{ 'fontSize': '13px', 'fontWeight': '700', 'textTransform': 'uppercase', 'letterSpacing': '0.8px', 'color': 'var(--blue)', 'fontFamily': 'var(--fh)', 'marginBottom': '3px' }}>
          NAVNEET
        </div>
        <div className='pcard-name'>
          Navneet TopSchool
        </div>
        <div className='pcard-tag'>
          LMS · School ERP · Grades Nursery–10
        </div>
        <div className='pcard-outcome'>
          Operate your school on one integrated platform
        </div>
        <div className='pcard-desc'>
          A smart Learning Management System that unifies teaching,
              learning, assessments, and school management. Bundled with
              TopSeries coursebooks and AI-enabled assessments for a seamless
              print-to-digital experience.
        </div>
        <span className='pcard-link'>
          Explore TopSchool →
        </span>
      </div>
      <div className='pcard' onClick={() => goPage('topclass')}>
        <div className='pcard-top-stripe' style={{ 'background': 'var(--green),var(--teal))' }}>
        </div>
        <div style={{ 'fontSize': '13px', 'fontWeight': '700', 'textTransform': 'uppercase', 'letterSpacing': '0.8px', 'color': 'var(--blue)', 'fontFamily': 'var(--fh)', 'marginBottom': '3px' }}>
          NAVNEET
        </div>
        <div className='pcard-name'>
          Navneet TopClass
        </div>
        <div className='pcard-tag'>
          Digital Classroom · Offline Capable · CBSE
          &
          MSB
        </div>
        <div className='pcard-outcome'>
          Make classrooms engaging, even without the internet
        </div>
        <div className='pcard-desc'>
          An offline digital classroom solution with 2D/3D animated content,
              41,000+ questions in the question bank, 60+ customisable
              templates, and one click question paper generator.
        </div>
        <span className='pcard-link'>
          Explore TopClass →
        </span>
      </div>
      <div className='pcard' onClick={() => goPage('topassess')}>
        <div className='pcard-top-stripe' style={{ 'background': 'var(--green),var(--green2))' }}>
        </div>
        <div style={{ 'fontSize': '13px', 'fontWeight': '700', 'textTransform': 'uppercase', 'letterSpacing': '0.8px', 'color': 'var(--blue)', 'fontFamily': 'var(--fh)', 'marginBottom': '3px' }}>
          NAVNEET
        </div>
        <div className='pcard-name'>
          Navneet TopAssess
        </div>
        <div className='pcard-tag'>
          AI-Enabled Assessments · Online
          &
          Offline · Grades 1–10
        </div>
        <div className='pcard-outcome'>
          Identify learning gaps before the exam does
        </div>
        <div className='pcard-desc'>
          AI-enabled test creation with 2,00,000+ questions, NCERT-aligned
              content, customisable test blueprints, and real-time analytics.
              Helps teachers personalise support and improve student outcomes.
        </div>
        <span className='pcard-link'>
          Explore TopAssess →
        </span>
      </div>
      <div className='pcard'>
        <div className='pcard-top-stripe' style={{ 'background': 'var(--blue),var(--teal))' }}>
        </div>
        <div style={{ 'fontSize': '13px', 'fontWeight': '700', 'textTransform': 'uppercase', 'letterSpacing': '0.8px', 'color': 'var(--blue)', 'fontFamily': 'var(--fh)', 'marginBottom': '3px' }}>
          NAVNEET
        </div>
        <div className='pcard-name'>
          Navneet TopSeries
        </div>
        <div className='pcard-tag'>
          Phygital Coursebooks · NEP
          &
          NCF Aligned · Nursery–Grade 8
        </div>
        <div className='pcard-outcome'>
          Print-to-digital phygital learning
        </div>
        <div className='pcard-desc'>
          Curriculum-aligned coursebooks from Preschool kits to Grade 1–8
              Yearly and Semester Kits for grades 1 to 5, integrated with
              Navneet TopSchool for a seamless phygital learning experience.
        </div>
        <span className='pcard-link'>
          Explore TopSeries →
        </span>
      </div>
      <div className='pcard'>
        <div className='pcard-top-stripe' style={{ 'background': 'var(--green))' }}>
        </div>
        <div style={{ 'fontSize': '13px', 'fontWeight': '700', 'textTransform': 'uppercase', 'letterSpacing': '0.8px', 'color': 'var(--blue)', 'fontFamily': 'var(--fh)', 'marginBottom': '3px' }}>
          NITYA
        </div>
        <div className='pcard-name'>
          Teacher Training
        </div>
        <div className='pcard-tag'>
          CBSE CPD Compliant · 100+ Modules · 2–3 Hours
        </div>
        <div className='pcard-outcome'>
          Skilled teachers deliver better outcomes
        </div>
        <div className='pcard-desc'>
          Need-based teacher training with 100+ expert-curated modules in
              just 2–3 hours of flexible learning. Helps educators build
              practical skills aligned with today's educational needs.
        </div>
        <span className='pcard-link' onClick={() => window.open('http://nityatraining.com')} rel='noopener noreferrer'>
          Visit Nitya ↗
        </span>
      </div>
      <div className='pcard'>
        <div className='pcard-top-stripe' style={{ 'background': 'var(--blue),var(--teal))' }}>
        </div>
        <div style={{ 'fontSize': '13px', 'fontWeight': '700', 'textTransform': 'uppercase', 'letterSpacing': '0.8px', 'color': 'var(--blue)', 'fontFamily': 'var(--fh)', 'marginBottom': '3px' }}>
          NAVNEET
        </div>
        <div className='pcard-name'>
          Navneet AI
        </div>
        <div className='pcard-tag'>
          India's First Custom AI Education Model
        </div>
        <div className='pcard-outcome'>
          Personalised learning at scale
        </div>
        <div className='pcard-desc'>
          Built specifically for school education, not adapted from a
              general-purpose AI. Personalised learning pathways based on each
              student's performance, pace, and curriculum alignment.
        </div>
        <span className='pcard-link' onClick={() => window.open('http://navneetedu.ai')} rel='noopener noreferrer'>
          Explore Navneet AI ↗
        </span>
      </div>
    </div>
  </section>
  {/* BOARDS */}
  <section className='sec sec-white'>
    <p className='sec-tag'>
      Boards We Power
    </p>
    <h2 className='sec-title'>
      Built for Indian Boards. Not Adapted for Them.
    </h2>
    <p className='sec-sub' style={{ 'marginBottom': '2rem' }}>
      Content, assessments, and lesson plans mapped to CBSE, CBSE Pattern,
          and Maharashtra State Board — updated when syllabi change.
    </p>
    <div className='g3'>
      <div style={{ 'background': 'var(--light)', 'borderRadius': '14px', 'padding': '1rem', 'border': '1px solid var(--border)' }}>
        <div style={{ 'fontSize': '28px', 'marginBottom': '10px' }}>
          📘
        </div>
        <div style={{ 'fontFamily': 'var(--fh)', 'fontSize': '17px', 'fontWeight': '800', 'color': 'var(--blue)', 'marginBottom': '8px' }}>
          CBSE Board
        </div>
        <p style={{ 'fontSize': '13px', 'color': 'var(--muted)', 'lineHeight': '1.7', 'marginBottom': '1rem' }}>
          Nationwide curriculum coverage from Nursery to Grade 10.
              CBSE-aligned digital content, question bank, and lesson plans —
              including NCERT and RISE series for TopClass.
        </p>
        <div style={{ 'display': 'flex', 'gap': '1.5rem' }}>
          <div>
            <div style={{ 'fontFamily': 'var(--fh)', 'fontSize': '20px', 'fontWeight': '800', 'color': 'var(--blue)' }}>
              3,500+
            </div>
            <div style={{ 'fontSize': '12px', 'color': 'var(--muted)' }}>
              Schools
            </div>
          </div>
        </div>
      </div>
      <div style={{ 'background': 'var(--light)', 'borderRadius': '14px', 'padding': '1rem', 'border': '1px solid var(--border)' }}>
        <div style={{ 'fontSize': '28px', 'marginBottom': '10px' }}>
          📗
        </div>
        <div style={{ 'fontFamily': 'var(--fh)', 'fontSize': '17px', 'fontWeight': '800', 'color': 'var(--blue)', 'marginBottom': '8px' }}>
          CBSE Pattern Schools
        </div>
        <p style={{ 'fontSize': '13px', 'color': 'var(--muted)', 'lineHeight': '1.7', 'marginBottom': '1rem' }}>
          Full content and assessment coverage for CBSE Pattern schools —
              same curriculum rigour, adapted for pattern school structures.
              Covers RISE series Grades 1–8.
        </p>
        <div style={{ 'display': 'flex', 'gap': '1.5rem' }}>
          <div>
            <div style={{ 'fontFamily': 'var(--fh)', 'fontSize': '20px', 'fontWeight': '800', 'color': 'var(--blue)' }}>
              RISE
            </div>
            <div style={{ 'fontSize': '12px', 'color': 'var(--muted)' }}>
              Series Grades 1–8
            </div>
          </div>
        </div>
      </div>
      <div style={{ 'background': 'var(--light)', 'borderRadius': '14px', 'padding': '1rem', 'border': '1px solid var(--border)' }}>
        <div style={{ 'fontSize': '28px', 'marginBottom': '10px' }}>
          📙
        </div>
        <div style={{ 'fontFamily': 'var(--fh)', 'fontSize': '17px', 'fontWeight': '800', 'color': 'var(--blue)', 'marginBottom': '8px' }}>
          Maharashtra State Board
        </div>
        <p style={{ 'fontSize': '13px', 'color': 'var(--muted)', 'lineHeight': '1.7', 'marginBottom': '1rem' }}>
          Bilingual content in English and Marathi, Grades 1–10. Updated
              automatically with every MSB syllabus revision — including 2025
              curriculum changes.
        </p>
        <div style={{ 'display': 'flex', 'gap': '1.5rem' }}>
          <div>
            <div style={{ 'fontFamily': 'var(--fh)', 'fontSize': '20px', 'fontWeight': '800', 'color': 'var(--green)' }}>
              500+
            </div>
            <div style={{ 'fontSize': '12px', 'color': 'var(--muted)' }}>
              MSB Schools
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* IFP ON HOME */}
  <section className='ifp-section'>
    <p className='sec-tag sec-tag-gold'>
      Hardware
      &
      Interactive Flat Panels
    </p>
    <h2 className='sec-title sec-title-wh'>
      Classroom Technology. Pre-Loaded. Day-One Ready.
    </h2>
    <p className='sec-sub sec-sub-wh' style={{ 'marginBottom': '2.5rem' }}>
      TopClass and Navneet AI come pre-installed on industry-grade
          Interactive Flat Panels from our hardware partners — Brio, Cybernetix,
          and Hikvision. No laptop. No projector. No IT setup. Walk in, turn on,
          teach.
    </p>
    <div className='g3'>
      <div className='ifp-partner'>
        <div style={{ 'background': 'var(--light)', 'borderRadius': '14px', 'border': '2px dashed var(--border)', 'aspectRatio': '3/2', 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center', 'gap': '10px', 'position': 'relative', 'padding': '1.5rem', 'textAlign': 'center' }}>
          <div style={{ 'fontSize': '32px' }}>
            📺
          </div>
          <div style={{ 'fontFamily': 'var(--fh)', 'fontSize': '13px', 'fontWeight': '700', 'color': 'var(--muted)' }}>
            Brio IFP Panel
          </div>
          <div style={{ 'fontSize': '11px', 'color': 'var(--border)' }}>
            [ 600×400px — hardware product photo ]
          </div>
          <div style={{ 'position': 'absolute', 'top': '8px', 'right': '10px', 'background': 'var(--light)', 'border': '1px solid var(--border)', 'borderRadius': '6px', 'padding': '2px 8px', 'fontSize': '10px', 'fontWeight': '700', 'fontFamily': 'var(--fh)', 'color': 'var(--muted)', 'textTransform': 'uppercase', 'letterSpacing': '0.8px' }}>
            Placeholder
          </div>
        </div>
        <div className='ifp-type' style={{ 'marginTop': '1rem' }}>
          Interactive Flat Panel
        </div>
        <div className='ifp-name'>
          Brio
        </div>
        <div className='ifp-desc'>
          Industry-grade IFPs built for daily, high-use classroom
              environments. Options to pair it with our solutions and NavneetAI
              — zero setup on delivery.
        </div>
      </div>
      <div className='ifp-partner'>
        <div style={{ 'background': 'var(--light)', 'borderRadius': '14px', 'border': '2px dashed var(--border)', 'aspectRatio': '3/2', 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center', 'gap': '10px', 'position': 'relative', 'padding': '1.5rem', 'textAlign': 'center' }}>
          <div style={{ 'fontSize': '32px' }}>
            📺
          </div>
          <div style={{ 'fontFamily': 'var(--fh)', 'fontSize': '13px', 'fontWeight': '700', 'color': 'var(--muted)' }}>
            Cybernetix Smart Panel
          </div>
          <div style={{ 'fontSize': '11px', 'color': 'var(--border)' }}>
            [ 600×400px — hardware product photo ]
          </div>
          <div style={{ 'position': 'absolute', 'top': '8px', 'right': '10px', 'background': 'var(--light)', 'border': '1px solid var(--border)', 'borderRadius': '6px', 'padding': '2px 8px', 'fontSize': '10px', 'fontWeight': '700', 'fontFamily': 'var(--fh)', 'color': 'var(--muted)', 'textTransform': 'uppercase', 'letterSpacing': '0.8px' }}>
            Placeholder
          </div>
        </div>
        <div className='ifp-type' style={{ 'marginTop': '1rem' }}>
          Smart Panel
        </div>
        <div className='ifp-name'>
          Cybernetix
        </div>
        <div className='ifp-desc'>
          High-resolution smart panels with multi-touch precision, optimised
              for 2D/3D animated content delivery and classroom interaction.
        </div>
      </div>
      <div className='ifp-partner'>
        <div style={{ 'background': 'var(--light)', 'borderRadius': '14px', 'border': '2px dashed var(--border)', 'aspectRatio': '3/2', 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center', 'gap': '10px', 'position': 'relative', 'padding': '1.5rem', 'textAlign': 'center' }}>
          <div style={{ 'fontSize': '32px' }}>
            🤖
          </div>
          <div style={{ 'fontFamily': 'var(--fh)', 'fontSize': '13px', 'fontWeight': '700', 'color': 'var(--muted)' }}>
            Hikvision AI Smart Board
          </div>
          <div style={{ 'fontSize': '11px', 'color': 'var(--border)' }}>
            [ 600×400px — hardware product photo ]
          </div>
          <div style={{ 'position': 'absolute', 'top': '8px', 'right': '10px', 'background': 'var(--light)', 'border': '1px solid var(--border)', 'borderRadius': '6px', 'padding': '2px 8px', 'fontSize': '10px', 'fontWeight': '700', 'fontFamily': 'var(--fh)', 'color': 'var(--muted)', 'textTransform': 'uppercase', 'letterSpacing': '0.8px' }}>
            Placeholder
          </div>
        </div>
        <div className='ifp-type' style={{ 'marginTop': '1rem' }}>
          AI-Enabled Smart Board
        </div>
        <div className='ifp-name'>
          Hikvision
        </div>
        <div className='ifp-desc'>
          AI-enabled smart boards with AIoT capabilities — supporting
              Navneet AI's personalised learning and predictive analytics inside
              the classroom.
        </div>
      </div>
    </div>
    <div className='ifp-feat-grid'>
      <div className='ifp-feat'>
        <div className='ifp-feat-icon'>
          📶
        </div>
        <div className='ifp-feat-title'>
          Fully Offline
        </div>
        <div className='ifp-feat-desc'>
          All content accessible without internet
        </div>
      </div>
      <div className='ifp-feat'>
        <div className='ifp-feat-icon'>
          ✅
        </div>
        <div className='ifp-feat-title'>
          Pre-Loaded
        </div>
        <div className='ifp-feat-desc'>
          Navneet Products installed on delivery
        </div>
      </div>
      <div className='ifp-feat'>
        <div className='ifp-feat-icon'>
          👆
        </div>
        <div className='ifp-feat-title'>
          Multi-Touch
        </div>
        <div className='ifp-feat-desc'>
          Interactive lessons, not just presentations
        </div>
      </div>
      <div className='ifp-feat'>
        <div className='ifp-feat-icon'>
          🔄
        </div>
        <div className='ifp-feat-title'>
          Auto Updates
        </div>
        <div className='ifp-feat-desc'>
          Content and software updates pushed automatically
        </div>
      </div>
    </div>
    <div style={{ 'marginTop': '2rem', 'textAlign': 'center' }}>
      <button className='btn-gold' onClick={() => goPage('ifp')}>
        Explore Hardware
        &
        IFP →
      </button>
    </div>
  </section>
  {/* AI READINESS */}
  <section className='ai-section'>
    <p className='sec-tag sec-tag-gold'>
      AI Readiness
    </p>
    <h2 className='sec-title sec-title-wh'>
      Your School's AI Journey Starts Here.
    </h2>
    <p className='sec-sub sec-sub-wh'>
      AI in education is not a future concept. NAVNEET TOPTECH is built to
          help schools adopt AI confidently — with tools that are practical,
          curriculum-aligned, and ready for India's classrooms today.
    </p>
    <div className='g3' style={{ 'marginTop': '2.5rem' }}>
      <div className='ai-card'>
        <div className='ai-card-icon'>
          🤖
        </div>
        <div className='ai-pulse'>
          <span className='ai-dot'>
          </span>
          AI-Enabled
        </div>
        <div className='ai-card-title'>
          AI-Driven Assessment with TopAssess
        </div>
        <div className='ai-card-desc'>
          AI generates curriculum-aligned tests, evaluates responses
              instantly, and identifies exactly where each student is struggling
              ,giving teachers actionable insights in real time, not after the
              exam.
        </div>
      </div>
      <div className='ai-card'>
        <div className='ai-card-icon'>
          🧭
        </div>
        <div className='ai-pulse'>
          <span className='ai-dot'>
          </span>
          Personalised
        </div>
        <div className='ai-card-title'>
          Personalised Teaching with NavneetAI
        </div>
        <div className='ai-card-desc'>
          India's first custom AI education model adapts learning pathways
              for each student — and gives teachers AI-powered insights to
              personalise instruction in real time.
        </div>
      </div>
      <div className='ai-card'>
        <div className='ai-card-icon'>
          📊
        </div>
        <div className='ai-pulse'>
          <span className='ai-dot'>
          </span>
          Predictive
        </div>
        <div className='ai-card-title'>
          Predictive Performance Analytics
        </div>
        <div className='ai-card-desc'>
          TopSchool's analytics dashboard surfaces patterns in student data
              helping school leaders intervene before learning gaps become board
              exam problems.
        </div>
      </div>
      <div className='ai-card'>
        <div className='ai-card-icon'>
          🖥️
        </div>
        <div className='ai-pulse'>
          <span className='ai-dot'>
          </span>
          AI Hardware
        </div>
        <div className='ai-card-title'>
          AI-Enabled Classrooms via Hikvision IFPs
        </div>
        <div className='ai-card-desc'>
          Hikvision's AI-enabled smart boards bring Navneet AI's
              personalised learning pathways directly into the classroom — on
              the panel, in real time, without any additional device.
        </div>
      </div>
      <div className='ai-card'>
        <div className='ai-card-icon'>
          ✨
        </div>
        <div className='ai-pulse'>
          <span className='ai-dot'>
          </span>
          Custom Built
        </div>
        <div className='ai-card-title'>
          Navneet AI — India's First Custom Education Model
        </div>
        <div className='ai-card-desc'>
          Not adapted from a general AI. Built from the ground up for Indian
              school education — curriculum-aligned, board-specific, and
              designed to support every learner's individual pace.
        </div>
      </div>
      <div className='ai-card'>
        <div className='ai-card-icon'>
          👩‍🏫
        </div>
        <div className='ai-pulse'>
          <span className='ai-dot'>
          </span>
          AI for Teachers
        </div>
        <div className='ai-card-title'>
          AI-Ready Teachers Drive Better Outcomes
        </div>
        <div className='ai-card-desc'>
          A school's AI readiness depends on its teachers. NAVNEET TOPTECH
              ensures every teacher is confident with AI tools — trained to use
              Navneet AI, TopAssess insights, and digital platforms effectively
              in the classroom.
        </div>
      </div>
    </div>
    <div className='ai-cta-bar'>
      <div>
        <h3>
          Ready to make your school AI-ready?
        </h3>
        <p>
          Our team will show you what AI looks like inside your school.
        </p>
      </div>
      <button className='btn-gold' onClick={() => goPage('contact')}>
        Book an AI Readiness Demo
      </button>
    </div>
  </section>
  {/* VIDEO GALLERY */}
  <section className='sec sec-blue'>
    <div className='sec-hrow'>
      <div>
        <p className='sec-tag sec-tag-gold'>
          Video Library
        </p>
        <h2 className='sec-title sec-title-wh'>
          See School Transformation in Action
        </h2>
        <p className='sec-sub sec-sub-wh'>
          Product walkthroughs, school impact stories, teacher spotlights,
              and conclave highlights.
        </p>
      </div>
      <a className='link-more' style={{ 'color': 'var(--gold)' }}>
        View all →
      </a>
    </div>
    <div className='vgrid'>
      <div className='vcard'>
        <div className='vthumb' style={{ 'aspectRatio': '16/9' }}>
          <div className='vcat'>
            Product Demo
          </div>
          <div className='vplay' style={{ 'width': '50px', 'height': '50px' }}>
          </div>
          <span style={{ 'fontSize': '13px', 'color': 'rgba(255, 255, 255, 0.65)', 'textAlign': 'center', 'marginTop': '8px' }}>
            TopSchool LMS — Full Platform Walkthrough
          </span>
        </div>
      </div>
      <div className='vcard'>
        <div className='vthumb'>
          <div className='vcat'>
            School Story
          </div>
          <div className='vplay-sm'>
          </div>
        </div>
        <p className='vcard-label'>
          Don Bosco School, Mumbai
        </p>
      </div>
      <div className='vcard'>
        <div className='vthumb'>
          <div className='vcat'>
            Teacher Training
          </div>
          <div className='vplay-sm'>
          </div>
        </div>
        <p className='vcard-label'>
          Nitya — Teacher Spotlight
        </p>
      </div>
      <div className='vcard'>
        <div className='vthumb'>
          <div className='vcat'>
            TopClass
          </div>
          <div className='vplay-sm'>
          </div>
        </div>
        <p className='vcard-label'>
          Smart Classroom Setup Guide
        </p>
      </div>
      <div className='vcard'>
        <div className='vthumb'>
          <div className='vcat'>
            Navneet AI
          </div>
          <div className='vplay-sm'>
          </div>
        </div>
        <p className='vcard-label'>
          AI in the Indian Classroom
        </p>
      </div>
      <div className='vcard'>
        <div className='vthumb'>
          <div className='vcat'>
            Conclave
          </div>
          <div className='vplay-sm'>
          </div>
        </div>
        <p className='vcard-label'>
          Education Conclave 2024 Highlights
        </p>
      </div>
    </div>
  </section>
  {/* AWARDS */}
  <section className='sec sec-light'>
    <p className='sec-tag'>
      Recognition
    </p>
    <h2 className='sec-title'>
      The Work Speaks. The Awards Confirm It.
    </h2>
    <div className='g4' style={{ 'marginTop': '1.5rem' }}>
      <div className='award-card'>
        <div style={{ 'aspectRatio': '1', 'background': 'var(--light)', 'borderRadius': '10px', 'border': '1.5px dashed var(--border)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '11px', 'color': 'var(--muted)', 'fontFamily': 'var(--fh)', 'fontWeight': '700', 'textAlign': 'center', 'padding': '8px', 'marginBottom': '10px' }}>
          Award
          <br />
          Image
        </div>
        <div className='award-name'>
          Innovative Tech Solutions for Schools
        </div>
        <div className='award-org'>
          8th BW Top Education Awards
        </div>
      </div>
      <div className='award-card'>
        <div style={{ 'aspectRatio': '1', 'background': 'var(--light)', 'borderRadius': '10px', 'border': '1.5px dashed var(--border)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '11px', 'color': 'var(--muted)', 'fontFamily': 'var(--fh)', 'fontWeight': '700', 'textAlign': 'center', 'padding': '8px', 'marginBottom': '10px' }}>
          Award
          <br />
          Image
        </div>
        <div className='award-name'>
          Excellence in AI-Driven Educational Solution
        </div>
        <div className='award-org'>
          ET Education Excellence Awards
        </div>
      </div>
      <div className='award-card'>
        <div style={{ 'aspectRatio': '1', 'background': 'var(--light)', 'borderRadius': '10px', 'border': '1.5px dashed var(--border)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '11px', 'color': 'var(--muted)', 'fontFamily': 'var(--fh)', 'fontWeight': '700', 'textAlign': 'center', 'padding': '8px', 'marginBottom': '10px' }}>
          Award
          <br />
          Image
        </div>
        <div className='award-name'>
          Emerging Technology Solutions
        </div>
        <div className='award-org'>
          Indian Education Awards 2025
        </div>
      </div>
      <div className='award-card'>
        <div style={{ 'aspectRatio': '1', 'background': 'var(--light)', 'borderRadius': '10px', 'border': '1.5px dashed var(--border)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontSize': '11px', 'color': 'var(--muted)', 'fontFamily': 'var(--fh)', 'fontWeight': '700', 'textAlign': 'center', 'padding': '8px', 'marginBottom': '10px' }}>
          Award
          <br />
          Image
        </div>
        <div className='award-name'>
          Leading LMS Provider
        </div>
        <div className='award-org'>
          26th Elets World Education Summit
        </div>
      </div>
    </div>
  </section>
  {/* SCHOOL LOGOS STRIP */}
  <div className='schools-strip'>
    <div className='schools-strip-inner'>
      <p className='sec-tag'>
        Trusted By
      </p>
      <h2>
        4,000+ Schools Across India
      </h2>
      <p>
        From Maharashtra to Karnataka — schools that have made NAVNEET
            TOPTECH their transformation partner.
      </p>
    </div>
    <div className='scroll-track-wrap'>
      <div className='scroll-track'>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            GS
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Akola
            </span>
          </div>
          <div className='school-logo-name'>
            G S Convent
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            HA
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Pune
            </span>
          </div>
          <div className='school-logo-name'>
            Holy Angels
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            JH
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Pimpri
            </span>
          </div>
          <div className='school-logo-name'>
            Jai Hind HS
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            SJ
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Khadki
            </span>
          </div>
          <div className='school-logo-name'>
            St. Joseph HS
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            HC
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Amravati
            </span>
          </div>
          <div className='school-logo-name'>
            Holy Cross
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            VG
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Kolhapur
            </span>
          </div>
          <div className='school-logo-name'>
            Vimla Goenka
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            VH
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Nashik
            </span>
          </div>
          <div className='school-logo-name'>
            Vision HS
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            NE
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Nashik
            </span>
          </div>
          <div className='school-logo-name'>
            Nashik Edu.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            MI
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Mumbai
            </span>
          </div>
          <div className='school-logo-name'>
            MVM Intl.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            DB
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Mumbai
            </span>
          </div>
          <div className='school-logo-name'>
            Don Bosco
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            HE
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Heritage
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            HW
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Academy
            </span>
          </div>
          <div className='school-logo-name'>
            Holy Wood
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            JH
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              School
            </span>
          </div>
          <div className='school-logo-name'>
            Jai Hind
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            MS
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              School
            </span>
          </div>
          <div className='school-logo-name'>
            Mahila Samiti
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            MG
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Mahatma Gandhi
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            YA
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              School
            </span>
          </div>
          <div className='school-logo-name'>
            Yash Academy
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            MH
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              School
            </span>
          </div>
          <div className='school-logo-name'>
            Michael HS
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            NE
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Nashik
            </span>
          </div>
          <div className='school-logo-name'>
            Nasik Edu.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            PI
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Pooja Intl.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            RP
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Radiant Public
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            RH
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Rosary HS
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            SD
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              School
            </span>
          </div>
          <div className='school-logo-name'>
            Sant Dnyan.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            SI
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            SDM Intl.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            SD
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              College
            </span>
          </div>
          <div className='school-logo-name'>
            Sharada DP
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            SM
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              English
            </span>
          </div>
          <div className='school-logo-name'>
            St. Mary's
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            SD
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Swami Dev.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            SS
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Goan HS
            </span>
          </div>
          <div className='school-logo-name'>
            St. Sebastian
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            VI
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Vijetha
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            SE
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Society
            </span>
          </div>
          <div className='school-logo-name'>
            Sindhu Edu.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            YU
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Yugantar
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            SA
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Convent
            </span>
          </div>
          <div className='school-logo-name'>
            Satpuda
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            AP
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Aurangab
            </span>
          </div>
          <div className='school-logo-name'>
            AGP Public
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            BN
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Balaji Natl.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            BR
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Public
            </span>
          </div>
          <div className='school-logo-name'>
            Brindhavan
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            CE
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Camp Edu.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            EA
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              School
            </span>
          </div>
          <div className='school-logo-name'>
            Eaglewood
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            GE
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Geethanjali
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            BJ
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              College
            </span>
          </div>
          <div className='school-logo-name'>
            B.C.A. Jr.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            SM
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Mumbai
            </span>
          </div>
          <div className='school-logo-name'>
            Swami Mukt.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            YU
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Rajnandg
            </span>
          </div>
          <div className='school-logo-name'>
            Yugantar
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            HU
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              English
            </span>
          </div>
          <div className='school-logo-name'>
            Huzurpaga
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            BM
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Gamadia
            </span>
          </div>
          <div className='school-logo-name'>
            Bai M N
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            MO
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Vashi
            </span>
          </div>
          <div className='school-logo-name'>
            Modern
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            PE
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Pune
            </span>
          </div>
          <div className='school-logo-name'>
            Pragati EM
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            CH
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Satara
            </span>
          </div>
          <div className='school-logo-name'>
            Chhatrapati
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            GS
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Akola
            </span>
          </div>
          <div className='school-logo-name'>
            G S Convent
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            HA
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Pune
            </span>
          </div>
          <div className='school-logo-name'>
            Holy Angels
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            JH
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Pimpri
            </span>
          </div>
          <div className='school-logo-name'>
            Jai Hind HS
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            SJ
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Khadki
            </span>
          </div>
          <div className='school-logo-name'>
            St. Joseph HS
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            HC
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Amravati
            </span>
          </div>
          <div className='school-logo-name'>
            Holy Cross
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            VG
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Kolhapur
            </span>
          </div>
          <div className='school-logo-name'>
            Vimla Goenka
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            VH
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Nashik
            </span>
          </div>
          <div className='school-logo-name'>
            Vision HS
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            NE
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Nashik
            </span>
          </div>
          <div className='school-logo-name'>
            Nashik Edu.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            MI
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Mumbai
            </span>
          </div>
          <div className='school-logo-name'>
            MVM Intl.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            DB
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Mumbai
            </span>
          </div>
          <div className='school-logo-name'>
            Don Bosco
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            HE
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Heritage
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            HW
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Academy
            </span>
          </div>
          <div className='school-logo-name'>
            Holy Wood
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            JH
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              School
            </span>
          </div>
          <div className='school-logo-name'>
            Jai Hind
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            MS
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              School
            </span>
          </div>
          <div className='school-logo-name'>
            Mahila Samiti
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            MG
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Mahatma Gandhi
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            YA
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              School
            </span>
          </div>
          <div className='school-logo-name'>
            Yash Academy
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            MH
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              School
            </span>
          </div>
          <div className='school-logo-name'>
            Michael HS
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            NE
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Nashik
            </span>
          </div>
          <div className='school-logo-name'>
            Nasik Edu.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            PI
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Pooja Intl.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            RP
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Radiant Public
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            RH
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Rosary HS
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            SD
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              School
            </span>
          </div>
          <div className='school-logo-name'>
            Sant Dnyan.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            SI
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            SDM Intl.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            SD
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              College
            </span>
          </div>
          <div className='school-logo-name'>
            Sharada DP
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            SM
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              English
            </span>
          </div>
          <div className='school-logo-name'>
            St. Mary's
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            SD
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Swami Dev.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            SS
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Goan HS
            </span>
          </div>
          <div className='school-logo-name'>
            St. Sebastian
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            VI
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Vijetha
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            SE
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Society
            </span>
          </div>
          <div className='school-logo-name'>
            Sindhu Edu.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            YU
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Yugantar
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            SA
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Convent
            </span>
          </div>
          <div className='school-logo-name'>
            Satpuda
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            AP
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Aurangab
            </span>
          </div>
          <div className='school-logo-name'>
            AGP Public
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            BN
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Balaji Natl.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            BR
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Public
            </span>
          </div>
          <div className='school-logo-name'>
            Brindhavan
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            CE
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Camp Edu.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            EA
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              School
            </span>
          </div>
          <div className='school-logo-name'>
            Eaglewood
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            GE
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              CBSE
            </span>
          </div>
          <div className='school-logo-name'>
            Geethanjali
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            BJ
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              College
            </span>
          </div>
          <div className='school-logo-name'>
            B.C.A. Jr.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            SM
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Mumbai
            </span>
          </div>
          <div className='school-logo-name'>
            Swami Mukt.
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            YU
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Rajnandg
            </span>
          </div>
          <div className='school-logo-name'>
            Yugantar
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            HU
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              English
            </span>
          </div>
          <div className='school-logo-name'>
            Huzurpaga
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            BM
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Gamadia
            </span>
          </div>
          <div className='school-logo-name'>
            Bai M N
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            MO
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Vashi
            </span>
          </div>
          <div className='school-logo-name'>
            Modern
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            PE
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Pune
            </span>
          </div>
          <div className='school-logo-name'>
            Pragati EM
          </div>
        </div>
        <div className='school-logo-item'>
          <div className='school-logo-badge'>
            CH
            <br />
            <span style={{ 'fontSize': '9px', 'fontWeight': '600', 'color': 'var(--muted)' }}>
              Satara
            </span>
          </div>
          <div className='school-logo-name'>
            Chhatrapati
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className='cta-strip'>
    <h2>
      Partner with NAVNEET TOPTECH.
    </h2>
    <p>
      See how we can work for your school and become your partner in lasting
          change.
    </p>
    <div className='cta-btns'>
      <button className='btn-wh' onClick={() => goPage('contact')}>
        Book a Free Demo
      </button>
      <a className='btn-ghost' href='tel:18002666676'>
        Call 1800 266 6676
      </a>
    </div>
  </section>
  {/* FAQ */}
  <section className='sec sec-light'>
    <p className='sec-tag'>
      FAQs
    </p>
    <h2 className='sec-title'>
      Common Questions
    </h2>
    <div style={{ 'maxWidth': '780px', 'marginTop': '1.5rem' }}>
      <div className='faq-item open' onClick={(event) => toggleFaq(event.currentTarget)}>
        <div className='faq-q'>
          What is NAVNEET TOPTECH?
          <span className='faq-chev'>
            +
          </span>
        </div>
        <div className='faq-a'>
          NAVNEET TOPTECH is the EdTech arm of Navneet Education Limited —
              one of India's most trusted educational brands for over 65+ years.
              Founded in 2008, we partner with 4,000+ schools across CBSE, CBSE
              Pattern, and Maharashtra State Board to improve teaching,
              learning, and school performance through an integrated ecosystem
              of digital solutions.
        </div>
      </div>
      <div className='faq-item' onClick={(event) => toggleFaq(event.currentTarget)}>
        <div className='faq-q'>
          Which boards do your products support?
          <span className='faq-chev'>
            +
          </span>
        </div>
        <div className='faq-a'>
          Our products are built for CBSE (NCERT and RISE series), CBSE
              Pattern schools, and Maharashtra State Board — with bilingual
              content in English and Marathi for MSB schools, and full coverage
              from Grades Nursery to 10.
        </div>
      </div>
      <div className='faq-item' onClick={(event) => toggleFaq(event.currentTarget)}>
        <div className='faq-q'>
          What Interactive Flat Panel partners does NAVNEET TOPTECH work
              with?
          <span className='faq-chev'>
            +
          </span>
        </div>
        <div className='faq-a'>
          NAVNEET TOPTECH partners with Brio, Cybernetix, and Hikvision for
              industry-grade IFPs. All panels come pre-loaded with TopClass and
              Navneet AI — ready to use on delivery, no IT setup required.
        </div>
      </div>
      <div className='faq-item' onClick={(event) => toggleFaq(event.currentTarget)}>
        <div className='faq-q'>
          Do your products work without internet?
          <span className='faq-chev'>
            +
          </span>
        </div>
        <div className='faq-a'>
          Yes. TopClass and TopAssess are fully offline-capable — all
              content, assessments, and tools are accessible without internet
              connectivity. Designed for India's real classroom infrastructure.
        </div>
      </div>
      <div className='faq-item' onClick={(event) => toggleFaq(event.currentTarget)}>
        <div className='faq-q'>
          Is NAVNEET TOPTECH aligned with NEP 2020?
          <span className='faq-chev'>
            +
          </span>
        </div>
        <div className='faq-a'>
          Yes. All NAVNEET TOPTECH solutions are aligned with NEP 2020 and
              NCF 2023 — including outcome-based learning, competency-based
              assessments, formative and summative evaluation, and CBSE CPD
              requirements for teacher professional development.
        </div>
      </div>
    </div>
  </section>
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
</div>
{/* ═══ ABOUT ═══ */}
    </main>
  );
}
