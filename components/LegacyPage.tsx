'use client';

import { useEffect, useRef, useState } from 'react';

type LegacyPageProps = {
  source: string;
  title: string;
};

/**
 * Hosts the supplied pixel-precise prototype in an isolated document. This
 * prevents its intentionally global legacy selectors from leaking into App
 * Router pages, while retaining every original breakpoint and interaction.
 */
export function LegacyPage({ source, title }: LegacyPageProps) {
  const [height, setHeight] = useState('100vh');
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const resize = () => {
      const documentHeight = frame.contentDocument?.documentElement.scrollHeight;
      if (documentHeight) setHeight(`${documentHeight}px`);
    };
    let observer: ResizeObserver | undefined;
    const onLoad = () => {
      resize();
      const content = frame.contentDocument?.documentElement;
      if (content) {
        observer = new ResizeObserver(resize);
        observer.observe(content);
      }
    };
    frame.addEventListener('load', onLoad);
    return () => {
      frame.removeEventListener('load', onLoad);
      observer?.disconnect();
    };
  }, [source]);

  return (
    <iframe
      data-legacy-frame
      ref={frameRef}
      aria-label={title}
      className="block w-full border-0"
      src={source}
      style={{ height }}
      title={title}
    />
  );
}
