"""One-off migration helper for the supplied home-page HTML source."""
from html.parser import HTMLParser
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
SOURCE = (ROOT / 'NTT_Website_Complete_3.html').read_text(encoding='utf-8')
home = SOURCE.split('<div id="page-home" class="page active">', 1)[1].split('<div id="page-about"', 1)[0]
nav = SOURCE.split('<!-- NAV -->', 1)[1].split('<div id="page-home" class="page active">', 1)[0]
nav = re.sub(r'<!--[^>]*-->\s*$', '', nav)
footer = re.search(r'<template id="footer-tpl">([\s\S]*?</footer>)', SOURCE).group(1)

ATTRIBUTE_NAMES = {
    'class': 'className', 'for': 'htmlFor', 'tabindex': 'tabIndex', 'readonly': 'readOnly',
    'colspan': 'colSpan', 'rowspan': 'rowSpan', 'maxlength': 'maxLength', 'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap', 'stroke-linejoin': 'strokeLinejoin', 'stop-color': 'stopColor',
    'fill-rule': 'fillRule', 'clip-rule': 'clipRule', 'viewbox': 'viewBox', 'font-family': 'fontFamily',
    'font-weight': 'fontWeight', 'font-size': 'fontSize', 'text-anchor': 'textAnchor',
}
VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr', 'circle', 'ellipse', 'line', 'path', 'polygon', 'polyline', 'rect', 'stop', 'use'}
TAG_NAMES = {'radialgradient': 'radialGradient', 'lineargradient': 'linearGradient', 'clippath': 'clipPath', 'foreignobject': 'foreignObject'}

def react_handler(value):
    match = re.fullmatch(r"goPage\('([^']+)'\)", value.strip())
    if match: return "{() => goPage('" + match.group(1) + "')}"
    match = re.fullmatch(r"window\.open\('([^']+)'\)", value.strip())
    if match: return "{() => window.open('" + match.group(1) + "')}"
    if value.strip() == 'toggleFaq(this)': return '{(event) => toggleFaq(event.currentTarget)}'
    match = re.fullmatch(r"switchCur\(this,\s*'([^']+)'\)", value.strip())
    if match: return "{(event) => switchCur(event.currentTarget, '" + match.group(1) + "')}"
    match = re.fullmatch(r"switchS\(this,\s*'([^']+)'\)", value.strip())
    if match: return "{(event) => switchS(event.currentTarget, '" + match.group(1) + "')}"
    return None

def style_object(value):
    pairs = []
    for declaration in value.split(';'):
        if ':' not in declaration: continue
        key, val = declaration.split(':', 1)
        key, val = key.strip(), val.strip()
        if not key or not val: continue
        camel = key if key.startswith('--') else re.sub(r'-([a-z])', lambda m: m.group(1).upper(), key)
        pairs.append(f"'{camel}': {val!r}")
    return '{{ ' + ', '.join(pairs) + ' }}'

class JSX(HTMLParser):
    def __init__(self): super().__init__(convert_charrefs=False); self.lines = []; self.depth = 0
    def handle_starttag(self, tag, attrs):
        tag = TAG_NAMES.get(tag, tag)
        rendered = []
        for key, val in attrs:
            if key == 'onclick':
                handler = react_handler(val or '')
                if handler: rendered.append('onClick=' + handler)
                continue
            name = ATTRIBUTE_NAMES.get(key, key)
            if key == 'style': rendered.append('style=' + style_object(val or ''))
            elif val is None: rendered.append(name)
            else: rendered.append(name + '=' + repr(val))
        suffix = ' />' if tag in VOID else '>'
        self.lines.append('  ' * self.depth + '<' + tag + ((' ' + ' '.join(rendered)) if rendered else '') + suffix)
        if tag not in VOID: self.depth += 1
    def handle_endtag(self, tag):
        tag = TAG_NAMES.get(tag, tag)
        if tag not in VOID:
            self.depth -= 1; self.lines.append('  ' * self.depth + f'</{tag}>')
    def handle_startendtag(self, tag, attrs): self.handle_starttag(tag, attrs)
    def handle_data(self, data):
        value = data.strip()
        if value: self.lines.append('  ' * self.depth + value.replace('{', "{'{'}").replace('}', "{'}'}"))
    def handle_entityref(self, name): self.handle_data('&' + name + ';')
    def handle_charref(self, name): self.handle_data('&#' + name + ';')
    def handle_comment(self, data): self.lines.append('  ' * self.depth + '{/*' + data + '*/}')

def render(fragment):
    parser = JSX()
    parser.feed(fragment)
    return '\n'.join(parser.lines)

helpers = """  const goPage = useCallback((page: string) => {
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
"""

chrome_imports = """'use client';

import { useCallback } from 'react';
import { legacyPagePath } from '@/lib/routes';

"""

header_component = chrome_imports + """export function SiteHeader() {
""" + helpers + """
  return (
""" + render(nav) + """
  );
}
"""
(ROOT / 'components' / 'SiteHeader.tsx').write_text(header_component, encoding='utf-8')

footer_component = chrome_imports + """export function SiteFooter() {
""" + helpers + """
  return (
""" + render(footer) + """
  );
}
"""
(ROOT / 'components' / 'SiteFooter.tsx').write_text(footer_component, encoding='utf-8')

markers = list(re.finditer(r'<div id="page-([a-z]+)" class="page(?: active)?">', SOURCE))
pages = []
for index, marker in enumerate(markers):
    end = markers[index + 1].start() if index + 1 < len(markers) else SOURCE.index('<template id="footer-tpl">', marker.end())
    name = marker.group(1)
    markup = SOURCE[marker.start():end]
    markup = re.sub(r'(<div id="page-' + re.escape(name) + r'" class="page)(?: active)?("\s*>)', r'\1 active\2', markup, count=1)
    markup = markup.replace('<div id="home-footer"></div>', '')
    pages.append((name, render(markup)))

def pascal(value):
    return ''.join(part.capitalize() for part in value.split('-'))

complete = """'use client';

import { useCallback } from 'react';
import { legacyPagePath } from '@/lib/routes';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

"""

for name, markup in pages:
    complete += f"export function {pascal(name)}PageContent() {{\n" + helpers + """
  return (
    <main className="overflow-x-clip">
      <SiteHeader />
""" + markup + """
      <SiteFooter />
    </main>
  );
}
"""
(ROOT / 'components' / 'CompletePages.tsx').write_text(complete, encoding='utf-8')

standalone_pages = []
for file_name, page_name in [
    ('NTT_Careers_Page.html', 'Careers'),
    ('NTT_Conclaves_Page.html', 'Conclaves'),
    ('NTT_Support_Page.html', 'Support'),
]:
    document = (ROOT / file_name).read_text(encoding='utf-8')
    body = re.search(r'<body[^>]*>([\s\S]*?)</body>', document, re.I).group(1)
    body = re.sub(r'<nav[\s\S]*?</nav>', '', body, count=1, flags=re.I)
    body = re.sub(r'<footer[\s\S]*?</footer>', '', body, count=1, flags=re.I)
    body = re.sub(r'<script[\s\S]*?</script>', '', body, flags=re.I)
    standalone_pages.append((page_name, render(body)))

standalone = """'use client';

import { useCallback } from 'react';
import { legacyPagePath } from '@/lib/routes';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

"""
for name, markup in standalone_pages:
    standalone += f"export function {name}PageContent() {{\n" + helpers + """
  return (
    <main className="overflow-x-clip">
      <SiteHeader />
""" + markup + """
      <SiteFooter />
    </main>
  );
}
"""
(ROOT / 'components' / 'StandalonePages.tsx').write_text(standalone, encoding='utf-8')

styles = '\n'.join(re.findall(r'<style[^>]*>([\s\S]*?)</style>', SOURCE, re.I))
globals_path = ROOT / 'app' / 'globals.css'
existing = globals_path.read_text(encoding='utf-8')
globals_path.write_text('@import "tailwindcss/utilities";\n\n/* Original prototype CSS, centralized for the App Router conversion. */\n' + styles + '\n\n' + existing.split('@theme', 1)[1].join(['@theme', '']) if '@theme' in existing else existing, encoding='utf-8')
